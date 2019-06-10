'use strict';


/* <li>

  <section>



    <h2>Kyle Rpthflaposhy</h2>
    <img src="./kyle.jpg" alt="ButtersStotch">
      <p>Age : 9</p>
      <p>Alias : the human kite</p>
      <p> Friends: Stan</p>
          </section>
        </li>

        name String
    image url / link String
    age Number
    alias String
    friends [...Strings]
*/

// Objects
// The name of a property is called a key
// The thing inside the property is called a value
// We can access objects with bracket and 'dot' notation
// var x = 'hasKids'
// object.hasKids === object['hasKids'] ===  object[x] === true

var cartman = {
  name : 'Cartman', // property
  imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/77/EricCartman.png/220px-EricCartman.png',
  age: 9,
  'alias': 'Fatso',
  friends: ['Kyle', 'Kenny', 'Butters'],
  min: 4,
  max : 9,
  averageDonuts: 32,
  sayHello: function(){
    console.log('hey there');
  },
  makeRandom : function(){
    return Math.random();
  },
  sayMyName : function(){
    console.log(cartman.name);
  },
  getNumbersOfDonuts : function(){
    return cartman.min * cartman.max * cartman.averageDonuts;
  }

};

var kenny = {
  name: 'Kenny',
  imageUrl: 'https://i.pinimg.com/originals/8b/15/b7/8b15b75784c4f7cf6bdedb0d2ca06f72.jpg'
};

var cook = {
  name: 'Cook',
  imageUrl: 'https://i.pinimg.com/originals/8b/15/b7/8b15b75784c4f7cf6bdedb0d2ca06f72.jpg'
};

var timmy = {
  name : 'Timmy',
  imageUrl : 'https://i.pinimg.com/originals/8b/15/b7/8b15b75784c4f7cf6bdedb0d2ca06f72.jpg'
};

var studentArray = [cartman, kenny, cook, timmy];

var cartArray = ['Cartman', 'img.jpg', 9, 'Fatso', ['Kyle', 'Kenny', 'Butters']];

// console.log(cartman);
// console.log(cartArray);

// console.log('name : ' + cartman['name']);
// console.log('alias : ' + cartman.alias);

// var key = 'friends';
// console.log('dot notation : ' + cartman.key);
// console.log('bracket notation : ' + cartman[key]);


// Modify a value in an object.
// console.log(cartman.alias);
cartman.alias = 'The angelic one';
var x = 1;
x = 2;

var arr = [1,2,3];
arr[2] = 99;

// console.log(cartman.alias);

// Add a property to an object
cartman.isAnAdult = false;

//create a new variable
var newVariable;

//add item to array
var array = [];
array.push('new item');
array[3] = 'last thing';
// console.log(array);

// console.log(cartman);

// DOM Manipulation

// Find a thing on the page to change
// document.getElementById
// getter

var butterNameH2El = document.getElementById('butters-name');
console.log(butterNameH2El);

// Modify that element by assigning a new value to one of its properties
console.log(butterNameH2El.textContent);
butterNameH2El.textContent = 'Nicholas stole this character';

// delete the content in a section;
var notButtersSectionEl = document.getElementById('not-butters-section');
console.log(notButtersSectionEl.innerHTML);
notButtersSectionEl.innerHTML = '';


// I want to add cartman to the page

// Referenct the container I will put cartman in

var studentContainerUlEl = document.getElementById('student-container');

// build a new element to put on the page

var cartmanH2El = document.createElement('h2');

// give the h2 some text

// cartmanH2El.textContent = 'Cartman';
cartmanH2El.textContent = cartman.name;

// Adding that H2 to the page
// append child is like the push of dom manipulation
studentContainerUlEl.appendChild(cartmanH2El);

// Make an image

var imgEl = document.createElement('img');

// give the image content (src)
imgEl.src = cartman.imageUrl;

studentContainerUlEl.appendChild(imgEl);




for(var i = 0; i < 90; i++){


  // 4 step process Find a parent element, create a new element, give the new element content, append the new element to the parent element

  //1. parent
  var studentsContainerUlEl = document.getElementById('student-container');

  //2. new content
  var liEl = document.createElement('li');

  //3. Give it content
  // the content would be  an h2, and an img

  //Creating h2 and img
  // 1. reference the parent
  // I already have the variable liEl

  //2. Create the h2
  var h2El = document.createElement('h2');
  //3. Give it content
  h2El.textContent = 'Mr Masterface';
  //4. Append it to the parent
  liEl.appendChild(h2El);

  //2. Create the img
  var imgEl = document.createElement('img');
  //3. Give it content
  imgEl.src = 'https://i.pinimg.com/originals/8b/15/b7/8b15b75784c4f7cf6bdedb0d2ca06f72.jpg';
  //4. Append it to the parent
  liEl.appendChild(imgEl);

  //4. for the liEl, append it back to its parent
  studentsContainerUlEl.appendChild(liEl);


}
