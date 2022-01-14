
const prompt = require("prompt-sync")();
var CHECK = prompt("Do you wish to know about different assignment operator");
if(CHECK == (true || "Yes" || "Y" || 1) )
{



//Addition assignment operator

var x ;
x = 90;

x += 90;

console.log(x);  


//Subtraction assignment operator

var x ;
x = 900;

x -= 90;

console.log(x);  



//Multiplication assignment operator

var x ;
x = 90;

x *= 90;

console.log(x);  


//Divison assignment operator

var x ;
x = 900;

x /= 90;

console.log(x);  



// Remainder Assigment operator



var x ;
x = 900;

x %= 90;

console.log(x);  


//Exponentional assignment operator

var x ;
x = 9;

x **= 2;

console.log(x);  


//left shit assignment operator

var x ;
x = 900;

x <<= 90;

console.log(x);  



// Right Shit Assigment operator



var x ;
x = 900;

x >>= 9;

console.log(x);  


//Bitwise AND operator

var x ;
x = 9;

x &= 8;

console.log(x);  


//Bitwise XOR operator

var x ;
x = 9;

x ^= 9;

console.log(x);  



// Bitwise OR operator



var x ;
x = 900;

x |= 9;

console.log(x);  


// Not equal to and other remaining things


const variable = 23;

if(variable != 45)
{
    console.log("Value is not equal. The new value is ",variable);
}

else{
    console.log("Value is equal it's ",variable);
}


}

else{
    console.log("Okay it's your choice bear with it for the moment . It's your loss you wanna uneducated /FINE/ :)") ;
}