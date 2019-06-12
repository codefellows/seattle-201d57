'use strict';

var allDesertDesserts = [];

var DesertDessert = function(desert, dessert){
  this.desert = desert;
  this.dessert = dessert;
  this.isYummy = true;
  this.isSandy= 'also true';
};

var form = document.getElementById('dessert-form');

var handleFormSubmit = function(formSubmitEvent){
  // Holy grail of form submit events
  formSubmitEvent.preventDefault();

  // I can pull anything out of a form using
  // event.target.<input-name>.value
  // where input-name comes from the attribute on the input in the html

  // finds the input with name "favorite-dessert"
  // console.log(formSubmitEvent.target['favorite-dessert']);
  var dessertFromForm = formSubmitEvent.target['favorite-dessert'].value;

  // finds the string inside the input
  // console.log(formSubmitEvent.target['favorite-dessert'].value);
  var desertFromForm = formSubmitEvent.target['favoriteDesert'].value;

  // console.log(formSubmitEvent.target.favoriteDesert.value);


  // console.log(formSubmitEvent);
  var newDesertDessert = new DesertDessert(desertFromForm, dessertFromForm);
  console.log(newDesertDessert);
  allDesertDesserts.push(newDesertDessert);
};

form.addEventListener('submit', handleFormSubmit);


// Student

var Student = function(name, power){
  // this === {}
  this.name = name;
  this.power = power;
  // this === {name: 'me', power : 'enlightenment'}

  Student.allStudents.push(this);
};

Student.allStudents = [];

var studentForm = document.getElementById('studentHero');

studentForm.addEventListener('submit', function(event){
  event.preventDefault();
  console.log(event);
  console.log(event.target);
  console.log(event.target.studentName);
  console.log(event.target.studentName.value);
  new Student(event.target.studentName.value, event.target.power.value);
});

