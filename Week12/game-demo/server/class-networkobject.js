

// this is any object that can be sent over the network...

exports.NetworkObject = class NetworkObject {

	static _idCount = 0; // pls dont use

	constructor(){

		this.classID = "NWOB";
		this.networkID = ++NetworkObject._idCount;

		this.position = {x:0,y:0,z:0};
		this.rotation = {x:0,y:0,z:0};
		this.scale 	  = {x:1,y:1,z:1};

	}
	update(game){

	}

	serialize(){
		const buffer = Buffer.alloc(37);
		buffer.writeUInt8(this.networkID, 0)

		buffer.writeFloatBE(this.position.x, 1);
		buffer.writeFloatBE(this.position.x, 5);
		buffer.writeFloatBE(this.position.x, 9);

		buffer.writeFloatBE(this.rotation.x, 13);
		buffer.writeFloatBE(this.rotation.x, 17);
		buffer.writeFloatBE(this.rotation.x, 21);

		buffer.writeFloatBE(this.scale.x, 25);
		buffer.writeFloatBE(this.scale.x, 29);
		buffer.writeFloatBE(this.scale.x, 33);

		return buffer;

	}
	deserialize(buffer){
		// this.position.x = buffer.readFloatBE(0);
		// this.position.y = buffer.readFloatBE(0);
		// this.position.z = buffer.readFloatBE(0);

		// pointless??
	}


}

