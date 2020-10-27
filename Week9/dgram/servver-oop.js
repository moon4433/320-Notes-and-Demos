

class Server {
	constructor(){

		// create socket:
		this.sock = require("dgram").createSocket("udp4");

		// setup event-listeners:
		this.sock.on("error", (e)=>this.onError(e));
		this.sock.on("listening", ()=>this.onStartListen());
		this.sock.on("message", (msg, rinfo)=>this.onPacket(msg, rinfo));

		// start listening:
		this.port = 320;
		this.sock.bind(this.port);

	}
	onError(e){
		console.log("Error: " + e);
	}
	onStartListen(){
		console.log("Server is listening on port " + this.port);
	}
	onPacket(msg, rinfo){
		console.log("message recieved from "+rinfo.address+" : "+rinfo.port);
	}
}

new Server();