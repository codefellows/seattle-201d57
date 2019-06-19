'use strict';

// Build Object Constructor
var TestItem = function(name, imageSrc) {
  this.name = name;
  this.url = imageSrc;
  this.clickedCount = 0;
  this.shownCount = 0;
  TestItem.allItems.push(this);
};

TestItem.allItems = [];

new TestItem('R2D2 Travel Case', './img/bag.jpg');
new TestItem('Banana Slicer', './img/banana.jpg');
new TestItem('Bathroom Attendant', './img/bathroom.jpg');
new TestItem('Freestyling Galoshes', './img/boots.jpg');
new TestItem('50\'s Luxury Bachelor', './img/breakfast.jpg');
new TestItem('Italy Treats', './img/bubblegum.jpg');
new TestItem('M.C. Escher Chair', './img/chair.jpg');
new TestItem('Dark Lord Cthulhu', './img/cthulhu.jpg');
new TestItem('GMA Creative Pets', './img/dog-duck.jpg');
new TestItem('Fresh Slayed', './img/dragon.jpg');
new TestItem('Executive Canteen Kit', './img/pen.jpg');
new TestItem('Pet Sweep', './img/pet-sweep.jpg');
new TestItem('Pieca\'a Pie Scissors', './img/scissors.jpg');
new TestItem('Shark Attack Sleeper', './img/shark.jpg');
new TestItem('Junior Sweep', './img/sweep.png');
new TestItem('Luke\'s Dreams Sleeper', './img/tauntaun.jpg');
new TestItem('Unicorn Meat', './img/unicorn.jpg');
new TestItem('Dark Lords Messenger App', './img/usb.gif');
new TestItem('Self Watering Can', './img/water-can.jpg');
new TestItem('Wine Sniffer', './img/wine-glass.jpg');

// Get document entry points
var itemsImageSectionTag = document.getElementById('allItems');
var leftItemImageTag = document.getElementById('leftItemImg');
var rightItemImageTag = document.getElementById('rightItemImg');
var centerItemImageTag = document.getElementById('centerItemImg');

// holds total number of clicked items
var totalClicks = 0;

// holds current items
var rightItemBucket = null;
var leftItemBucket = null;
var centerItemBucket = null;

// render items sets the src attribute
var renderNewItems = function(leftIndex, rightIndex, centerIndex) {
  leftItemImageTag.src = TestItem.allItems[leftIndex].url;

  rightItemImageTag.src = TestItem.allItems[rightIndex].url;

  centerItemImageTag.src = TestItem.allItems[centerIndex].url;
};

// generate a random number
var randNum = function() {
  return Math.floor(Math.random() * TestItem.allItems.length);
};

var pickNewItems = function() {
  var indexArray = [];

  while (indexArray.length < 3) {
    var newNum = randNum();
    if (indexArray.indexOf(newNum) === -1) {
      indexArray.push(newNum);
    }

    console.log('indexArray: ', indexArray);
  }

  leftItemBucket = TestItem.allItems[indexArray[0]];
  console.log('leftItemBucket = TestItem.allItems[indexArray[0]];: ', (leftItemBucket = TestItem.allItems[indexArray[0]]));
  rightItemBucket = TestItem.allItems[indexArray[1]];
  console.log('rightItemBucket = TestItem.allItems[indexArray[1]];: ', (rightItemBucket = TestItem.allItems[indexArray[1]]));
  centerItemBucket = TestItem.allItems[indexArray[2]];
  console.log('centerItemBucket = TestItem.allItems[indexArray[2]];: ', (centerItemBucket = TestItem.allItems[indexArray[2]]));

  renderNewItems(indexArray[0], indexArray[1], indexArray[2]);
};

var handleClickOnItem = function(event) {
  // if they can still click, do clicky things
  if (totalClicks < 25) {
    var target = event.target;
    var id = target.id;

    if (id === 'leftItemImg' || id === 'centerItemImg' || id === 'rightItemImg') {
      if (id === 'leftItemImg') {
        leftItemBucket.clickedCount++;
      }

      if (id === 'centerItemImg') {
        rightItemBucket.clickedCount++;
      }

      if (id === 'rightItemImg') {
        centerItemBucket.clickedCount++;
      }

      leftItemBucket.shownCount++;
      rightItemBucket.shownCount++;
      centerItemBucket.shownCount++;

      //after we update the old, pick new pictures
      pickNewItems();
    }
    console.log(event.target.id);
  }

  // increment amount of clicks
  totalClicks++;
  //when they reach total max clicks, remove the clicky function
  if (totalClicks === 25) {
    itemsImageSectionTag.removeEventListener('click', handleClickOnItem);
  }
};

itemsImageSectionTag.addEventListener('click', handleClickOnItem);
pickNewItems();
