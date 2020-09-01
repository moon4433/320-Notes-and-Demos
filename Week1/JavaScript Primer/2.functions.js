
// in JS, funstions are "first-class citizens", functions are objects

// we have anonymous functions:

const sayHello = function(){
 console.log("hello"); 
};

// we can pass functions into other functions:

function doFunction(f){
	f();
}

doFunction( function(){
 console.log("wow!"); 
} );

// ES6 added arrow function:

const square = n => n*n;

const mult = (a, b) => { return a*b; };

// a real scenarion for anonymous functions:

var people = ["nick", "sarah", "billy", "sam"];

people.forEach( item=>{
	console.log(item);
} );