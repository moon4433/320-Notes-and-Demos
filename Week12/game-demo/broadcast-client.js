

const sock = require("dgram").createSocket("udp4");

const packet = Buffer.from("hello worl!");

sock.send(packet, 0, packet.length, 320, "10.0.0.255", ()=>{
	sock.close();
});
