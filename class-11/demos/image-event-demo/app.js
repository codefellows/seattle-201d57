'use strict';

/*
  Order of operations
  Welcome and instructions
  Randomly pick 2 goats
  click on a goat == DONE
    event listener fires the event handler == DONE
    check if total clicks is 25 == DONE
      stop letting the user click == DONE
      display the clicks
    track which one was clicked on == DONE
      update the object == DONE
    update all images displayed times shown == DONE
  Randomly Pick 2 goats



  style of page - size images correctly

  HTML
    have a left and right image container in the html
    two images living in a container so we don't register random clicks

  let the user know what they are supposed to do
    - instructions

  Track 25 clicks

  //get the image object data from somewhere
  // call the constructor for all the object and put them in the array

  Object with all the image properties
  var Image = function ()
  {
    name
    clicks
    times shown
    url -
  }
  Array of all image Objects

  function to randomly pick an image{
    Prevent last picked goats from being picked
      - STRETCH pick all goats evenly as possible
    Math.floor  Math.random() * array.length()
    make sure left and right image are unique
  }

  click on an image
  id event listener('click', function(){
    keep track of the image that is clicked
    prevent all currently displayed images frmo being re clicked {

    }
  })

  function to display all the clicks at the end () {
    generate a table or list
    populate the data - adds to the inner html of an existing element (table or list)
    divide object's times clicked by total shown
  }



*/

// Globals
var goatImageSectionTag = document.getElementById('all_goats');
var leftGoatImageTag = document.getElementById('left_goat_img');
var rightGoatImageTag = document.getElementById('right_goat_img');



var totalClicks = 0;

// Variables to store the goats already on the page
var leftGoatOnThePage = null;
var rightGoatOnThePage = null;

var GoatPicture = function (name, imageSrc) {
  this.name = name;
  this.clicks = 0;
  this.timesShown = 0;
  this.url = imageSrc;

  //TODO: review
  GoatPicture.allImages.push(this);
};

GoatPicture.allImages = [];

/*
Prevent last picked goats from being picked
      - STRETCH pick all goats evenly as possible
    Math.floor  Math.random() * array.length()
    make sure left and right image are unique
    */

var renderNewGoats = function (leftIndex, rightIndex){
  leftGoatImageTag.src = GoatPicture.allImages[leftIndex].url;
  rightGoatImageTag.src = GoatPicture.allImages[rightIndex].url;
};

var pickNewGoats = function(){
  var leftIndex = Math.round(Math.random() * GoatPicture.allImages.length);

  do {
    var rightIndex = Math.round(Math.random() * GoatPicture.allImages.length);
  } while (rightIndex === leftIndex);
  console.log(GoatPicture.allImages[leftIndex].name, GoatPicture.allImages[rightIndex].name);

  leftGoatOnThePage = GoatPicture.allImages[leftIndex];
  rightGoatOnThePage = GoatPicture.allImages[rightIndex];

  renderNewGoats(leftIndex, rightIndex);
};

var handleClickOnGoat = function(event){
  console.log('im still alive');
  // if they can still click, do clicky things
  if(totalClicks < 10){

    var thingWeClickedOn = event.target;
    var id = thingWeClickedOn.id;

    if(id === 'left_goat_img' || id === 'right_goat_img'){
      //track the goats
      // increment the goat image in the left_goat_image slot's clicks
      // if goat is the left goat, increment the left goat)
      if(id === 'left_goat_img'){
        leftGoatOnThePage.clicks++;
      }

      if(id === 'right_goat_img'){
        rightGoatOnThePage.clicks++;
      }

      leftGoatOnThePage.timesShown++;
      rightGoatOnThePage.timesShown++;

      //after we update the old, pick new pictures
      pickNewGoats();
    }
    console.log(event.target.id);
  }
  // increment amount of clicks
  totalClicks++;
  //when they reach total max clicks, remove the clicky function
  if(totalClicks === 4){
    goatImageSectionTag.removeEventListener('click', handleClickOnGoat);
  }
};



// leftGoatImageTag.addEventListener('click', handleClickOnGoat);
// rightGoatImageTag.addEventListener('click', handleClickOnGoat);

goatImageSectionTag.addEventListener('click', handleClickOnGoat);
// goatImageSectionTag.removeEventListener('click', handleClickOnGoat);


// Instantiate my image objects

new GoatPicture('Cruising Goat', './images/cruisin-goat.jpg');

new GoatPicture('Float Your Goat', './images/float-your-goat.jpg');
new GoatPicture('Kissing Goat', './images/kissing-goat.jpg');
new GoatPicture('Sweater Goat', './images/sweater-goat.jpg');

//Track the default goats;

leftGoatOnThePage = GoatPicture.allImages[3];
rightGoatOnThePage = GoatPicture.allImages[0];

pickNewGoats();
