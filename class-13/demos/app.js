'use strict';

// generates clicks on things on the page and results in colorClicks
var colorClicks = [12, 19, 3, 5, 2, 3];

// localStorage.setItem('savedClicks', JSON.stringify(colorClicks));


var name = 'nicholas';

var nicholas = {
  name : 'nicholas',
  age : 30000,
  professions: ['cool dude', 'rockin person', 'teacher']
};

var friends = ['ginger', 'garfield', 'odie', 'demi'];

var coolFactor = 99;

localStorage.setItem('myName', name);

// =======================================
// Stringify my objects
// =======================================
// function saveThingToLocalStorage(keyName, thing){
//   var thingyString = JSON.stringify(thing);
//   return localStorage.setItem(keyName, thingyString);
// }

var nicholasObjectStringified = JSON.stringify(nicholas);
console.log('stringy nich before ls', nicholasObjectStringified);

localStorage.setItem('nicholas', nicholas);
localStorage.setItem('notObjectObjectNicholas', nicholasObjectStringified);



localStorage.setItem('somePeeps', JSON.stringify(friends));


localStorage.setItem('coolFactor', coolFactor);

localStorage.setItem('somebool', true);

localStorage.setItem('a', 1);
localStorage.setItem('a', 2);
localStorage.setItem('a', 3);
localStorage.setItem('a', 4);


//Everything in js is Keys and values

// Object : key value
// Array : index value
// Variable : name value
// String: index value
// Css : property value
// localStorage : key value












var nicholasFromLocalStorage = localStorage.getItem('notObjectObjectNicholas');

console.log('nich after ls', nicholasFromLocalStorage);

var unStringyNicholas = JSON.parse(nicholasFromLocalStorage);
console.log('nich after parse after ls', unStringyNicholas);

/*
When I set something in local storage I should stringify it with JSON.stringify(thing)
Then i call localStorage.setItem('key', value);

When I retrieve something I call localStorage.getItem('key');
to use it again I must parse it with JSON.parse(thing)
*/

function Car (name){
  this.name = name;
  this.run = function(){ console.log('im running away');};
}

Car.prototype.drive = function(){
  console.log('aaaaa, i can drive');
};


var x = new Car('Joachen');
x.run();
x.drive();

localStorage.setItem('j', JSON.stringify(x));

var y = JSON.parse(localStorage.getItem('j'));
y.drive();
y.run();
