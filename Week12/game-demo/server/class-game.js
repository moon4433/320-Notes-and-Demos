
const Pawn = require("./class-pawn.js").Pawn;

exports.Game = class Game {
	constructor(server){

		this.frame = 0;
		this.time = 0;
		this.dt = 16/1000;

		this.timeUntilNextStatePacket = 0;

		this.objs = []; // store NetworkObjects in here

		this.server = server;
		this.update();

		this.spawnObject( new Pawn() );

	}
	update(){

		this.time += this.dt;
		this.frame++;
		const player = this.server.getPlayer(0); // return nth client



		for(var i in this.objects){
			this.objs[i].update(this);
		}

		if(player){
			
		}

		if(this.timeUntilNextStatePacket > 0){
			// count down
			this.timeUntilNextStatePacket -= this.dt;
		} else {
			this.timeUntilNextStatePacket = .1; // send 10% packets (~ 1/6 frames)
			this.sendWorldState();
		}

		setTimeout(()=>this.update(), 16);
	}
	sendWorldState(){
		
		const packet = this.makeREPL(true);
		this.server.sendPacketToAll(packet);
	}
	makeREPL(isUpdate){

		isUpdate = !!isUpdate;

		let packet = Buffer.alloc(5);
		packet.write("REPL", 0);
		packet.writeUInt8( isUpdate ? 2 : 1, 4);

		this.objs.forEach(o=>{

			const classID = Buffer.from(o.classID);
			const data = o.serialize();

			packet = Buffer.concat([packet, classID, data]);
		});

		return packet;
	}
	spawnObject(obj){
		this.objs.push(obj);

		let packet = Buffer.alloc(5);
		packet.write("REPL", 0);
		packet.writeUInt8(1, 4);

		const classID = Buffer.from(obj.classID);
		const data = obj.serialize();

		packet = Buffer.concat([packet, classID, data]);

		this.server.sendPacketToAll(packet);
	}
}


