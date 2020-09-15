
// sometimes 'this' is mapped onto other objects
// specifically, when using event-listeners

// 'this' gets mapped as the event object (not global)
setTimeout(function(){
	console.log(this);
}, 100);

// arrow functions do NOT change the context of 'this':
seTimeout(()=>{console.log(this)}, 100);


class Server{
	constructor(){

		this.port = 1234;

		const sock = require('net').createServer({},()=>{
		console.log(this.port);
		});

	}
}