const net = require('net');

// attempts to connect to server:
const socket = net.connect({port:12345, host:"127.0.0.1"}, ()=>{
	console.log("you connected to the server!");
});

socket.on("error", errMsg=>{
	console.log("there was an error: " + errMsg);
});

socket.on("data", txt=>{
	console.log("message From server: "+txt);
	socket.write("thanks!");
});