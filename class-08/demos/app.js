'use strict';

var h1El = document.getElementById('title');
var padma = document.getElementById('padma');
var renee = document.getElementById('renee');
var hasThingsUlEl = document.getElementById('has-things-in-it');
var mouseOverCount = 0;

var handleClickOnH1 = function(anyDefinedParameter){
  console.log(anyDefinedParameter);
  anyDefinedParameter.target.textContent = 'Nicholas';

  if(h1El.className !== 'red'){
    h1El.className = 'red';
  } else {
    h1El.className= '';
  }
};

h1El.addEventListener('click', handleClickOnH1);

var handleClickOnPadma = function(){
  alert('stop it, I\'ll fly away fast');
};

padma.addEventListener('dblclick', handleClickOnPadma);

renee.addEventListener('mouseover', function handleMouseOverRenee(){
  console.log('get over here and stand your ground, I\'ll cage fight you');
  mouseOverCount++;

  if(mouseOverCount === 7){
    alert('renee caught you, you must join the cage fight');
    renee.removeEventListener('mouseover', handleMouseOverRenee);
    renee.addEventListener('mousemove', function(){
      if(renee.className !== 'red'){
        renee.className = 'red';
      } else {
        renee.className = '';
      }
    });
  }
});

// The second argument is an anonymous function declared inline
padma.addEventListener('dblclick', function(){
  console.log('you shutter me down');
})
;

document.addEventListener('click', function(event){
  console.log(event.target);
  event.target.textContent = event.target.tagName;
});
