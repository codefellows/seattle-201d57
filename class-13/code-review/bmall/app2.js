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

// function that randomly selects a number of Items from TestItem.allItems.
var randSelectItems = function(numItems) {
  var currentDisplayIndexs = [];
  for (var i = 0; i < numItems; i++) {
    var itemIndex = randNum(numItems);
    while (currentDisplayIndexs.indexOf(itemIndex)) {
      itemIndex = randNum(numItems);
    }
    currentDisplayIndexs.push(itemIndex);
  }
  return currentDisplayIndexs;

var allItemsId = document.getElementById('allItems');
var rightItemId = document.getElementById('rightItemImg');
var leftItemId = document.getElementById('leftItemImg');
var centerItemId = document.getElementById('centerItemImg');

// generates a random number between 0 and a max number of items in TestItem.allItems array
var randNum = function() {
  return Math.floor(Math.random() * Math.floor(TestItem.allItems.length));
};

// On load randomly populate images
var handleOnLoad = function() {
  var imgIndex = new Set();
  console.log('imgIndex: ', imgIndex);

  while (imgIndex.size < 3) {
    imgIndex.add(randNum());
  }
  var iterator1 = imgIndex.values();

  rightItemId.setAttribute('src', TestItem.allItems[iterator1.next().value].url);
  leftItemId.setAttribute('src', TestItem.allItems[iterator1.next().value].url);
  centerItemId.setAttribute('src', TestItem.allItems[iterator1.next().value].url);
  return imgIndex;
};

var loadedImages = handleOnLoad();
loadedImages();
// build a function that changes all three images with randomly selected images

var handleItemChange = function() {
  var imgIndex = new Set();
  console.log('imgIndex: ', imgIndex);

  while (imgIndex.size < 6) {
    imgIndex.add(randNum());
  }
  var iterator1 = imgIndex.values();

  rightItemBucket = TestItem.allItems[iterator1.next().value].url;
  leftItemBucket = TestItem.allItems[iterator1.next().value].url;
  centerItemBucket = TestItem.allItems[iterator1.next().value].url;

  rightItemId.setAttribute('src', rightItemBucket);
  leftItemId.setAttribute('src', leftItemBucket);
  centerItemId.setAttribute('src', centerItemBucket);

};

handleItemChange()

var loadImages = function() {
  for (var i = 0; i < 3; i++) {}
};
