'use strict';

/*
  write a function to see if a value
  exists in an array

  Called: includes
  Params: Array we're checking
          Value we're looking for
  Return: Boolean
          true if the value is in the array. false otherwise

*/

var includes = function (arr, target) {

  var includesTarget = false;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      if (arr[i].toLowerCase() === target.toLowerCase()) {
        includesTarget = true;
        break;
      }
    }
    if (typeof arr[i] === "number") {
      if (arr[i] === parseInt(target)) {
        includesTarget = true;
        break;
      }
    }
  }

  return includesTarget;

}

var wordsToTest = ['John', 'Cathy', 'Zach', 'Allie', 'Rosie'];

var arrayToTest = [1, 2, 3, 4];
var includes1 = includes(arrayToTest, 1);
console.log(arrayToTest, 'includes: ' + 1 + ': ' + includes1);

var includesOne = includes(arrayToTest, '1');
console.log(arrayToTest, 'includes: "1" : ' + includesOne);


var includes5 = includes(arrayToTest, 5);
console.log(arrayToTest, 'includes: ' + 5 + ': ' + includes5);

var includesJohn = includes(wordsToTest, 'john');
console.log(wordsToTest, 'includes: john' + ': ' + includesJohn);
