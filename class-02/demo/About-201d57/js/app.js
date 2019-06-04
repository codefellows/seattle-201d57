'use strict';

// Array demonstration
// Array is a collection of values

/*
Arrays store their values at an index
an index is a number that starts at 0 and increases by one for every new item in the array
The first item ALWAYS starts at 0
elements are always separated by commas
elements can be any valid javascript value
we can mix types but it is considered bad practice

We access items in an array with bracket notation
ex: array[2]
I would say this as "access the array at <position || index> 2"

example array
['a', 'b', 'c'];
has indexes
0 , 1, 2

properties on arrays
length
[1,2,3].length


*/

var emptyArray = [];
var quizAnswers = ['a', 'b', 'c', 'd', 'e'];
var arrayOfThings = ['string', {}, ['thing'], console.log, undefined, null, 0, 2, true, 'last item of the array'];

// console.log('10th thing in the array : ' + arrayOfThings[9]);
// console.log('9th index of the array : ' + arrayOfThings[9]);

// console.log(quizAnswers);
// console.log(quizAnswers[2] === 'c');
// console.log(quizAnswers);

// quizAnswers[2] = 'z';

// console.log(quizAnswers);

// console.log('I have this many quiz answers : ' + quizAnswers.length);

// console.log('emptyArray :' + emptyArray);


// // console.log(arrayOfThings);

var favoriteColor = prompt('is your favorite color #201d57?');

console.log(favoriteColor);
console.log(favoriteColor[0]);

// if they say "yes" or "y"
if(favoriteColor === 'yes' || favoriteColor === 'y' || favoriteColor === 'Yes'){
  alert('thats my favorite color too.');
} else if(favoriteColor === 'no'){
  alert('i hate you we aren\'t friends anymore.');
} else {
  alert('you didnt even try');
}

// if(favoriteColor === 'no'){

// }

// Anything else
