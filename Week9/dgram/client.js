


// require module:
const dgram = require("dgram");

// create UDP socket:
const socket = dgram.createSocket('udp4');

// create a packet:
const packet = Buffer.from("Hello world!");

// send packet:
socket.send(packet, 0, packet.length, 320, "127.0.0.1", ()=>{
	console.log("packet sent :)");
	socket.close();
});
