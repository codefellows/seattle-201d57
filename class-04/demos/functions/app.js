'use strict';

anotherFunction();

/*

Functions
Have a name;
functions run code in a code block inside of the "{}"
have Parameters
local variables that are used in the function statement to pass arguments into the function call
they make functions flexible;

parameter is the name of the variables we create when we declare a function
argument is the values we pass to the parameters when we call a function

function named(parameter1, parameter2){
  //do the things
  // the things we do are called statements;
  // return statement
}

named(argument1, argument2);

// when this code block fires

parameter1 = argument1
parameter2 = argument2
//do the things


=====================
returns expose a value out of the function
they make the call of the function === the return value
a return ends a function's code block


*/

//example
//TODO: why a var
var myFirstFunction = function(){
  console.log('Running in a function');
};

function anotherFunction(){
  console.log('I am a function that can be called anywhere');
}

// Calling myFirstFunction involves putting the () after the name of the function
myFirstFunction();

var sum = function(number1, number2){
  return number1 + number2;
  console.log('doesnt happen');
};

sum(7, 99);
//becomes 106
// sum(7,99) === 106

// These lines of code are what a function does when it is called
var number1 = 9;
var number2 = 111;

// console.log(number1 + number2);

// using a global variable

console.log('this is the sum of 99 and 101 ' + sum(99, 101));

var sumOfNums = sum(77, 1);





