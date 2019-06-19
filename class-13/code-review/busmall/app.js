'use strict';

var imagesArr = [];
var totalClicks = 15;
var current = [];
var previous = [];

var Img = function(name, url){
  this.name = name;
  this.url = url;
  this.shown = 0;
  this.clicked = 0;

  imagesArr.push(this);
};

//appends a single image to the DOM
function appendImg(image, position,index){
  var img = document.getElementById(`${position}-image`);
  img.src = image.url;
  img.setAttribute('name', `${index}`);
  image.shown++;
}

//Chooses the three images and renders them with the appendImg function
function renderImages(){
  if(current.length > 0){
    previous = current;
    current = [];
  }

  let leftIndex = Math.floor(Math.random() * imagesArr.length);
  let middleIndex = Math.floor(Math.random() * imagesArr.length);
  let rightIndex = Math.floor(Math.random() * imagesArr.length);

  while(previous.includes(imagesArr[leftIndex]) || current.includes(imagesArr[leftIndex])){
    leftIndex = Math.floor(Math.random() * imagesArr.length);
  }
  current.push(imagesArr[leftIndex]);

  while(previous.includes(imagesArr[middleIndex]) || current.includes(imagesArr[middleIndex])){
    middleIndex = Math.floor(Math.random() * imagesArr.length);
  }
  current.push(imagesArr[middleIndex]);

  while(previous.includes(imagesArr[rightIndex]) || current.includes(imagesArr[rightIndex])){
    rightIndex = Math.floor(Math.random() * imagesArr.length);
  }
  current.push(imagesArr[rightIndex]);

  appendImg(imagesArr[leftIndex],'left',leftIndex);
  appendImg(imagesArr[middleIndex],'middle',middleIndex);
  appendImg(imagesArr[rightIndex],'right',rightIndex);
}

//adds to click totals and either renders new images or renders the totals
function handleClick(e){
  let index = e.target.name;
  totalClicks++;
  imagesArr[index].clicked++;
  if(totalClicks >= 25){
    left.removeEventListener('click',handleClick);
    right.removeEventListener('click',handleClick);
    middle.removeEventListener('click',handleClick);
    renderTotals(imagesArr);
  }else{
    renderImages();
  }
}

//renders the totals bar chart
function renderTotals(arr){
  buildChart(arr);
}

//Creates all the image objects and then renders three images
function createImages(){
  new Img('Bag','./assets/bag.jpg');
  new Img('Banana','./assets/banana.jpg');
  new Img('Bathroom','./assets/bathroom.jpg');
  new Img('Boots','./assets/boots.jpg');
  new Img('Breakfast','./assets/breakfast.jpg');
  new Img('Bubblegum','./assets/bubblegum.jpg');
  new Img('Chair','./assets/chair.jpg');
  new Img('Cthulhu','./assets/cthulhu.jpg');
  new Img('Dog Duck','./assets/dog-duck.jpg');
  new Img('Dragon','./assets/dragon.jpg');
  new Img('Pen','./assets/pen.jpg');
  new Img('Pet Sweep','./assets/pet-sweep.jpg');
  new Img('Scissors','./assets/scissors.jpg');
  new Img('Shark','./assets/shark.jpg');
  new Img('Sweep','./assets/sweep.png');
  new Img('Tauntaun','./assets/tauntaun.jpg');
  new Img('Unicorn','./assets/unicorn.jpg');
  new Img('USB','./assets/usb.gif');
  new Img('Water Can','./assets/water-can.jpg');
  new Img('Wine Glass','./assets/wine-glass.jpg');

  renderImages();
}

//adds event listners
var left = document.getElementById('left-image');
var right = document.getElementById('right-image');
var middle = document.getElementById('middle-image');
left.addEventListener('click', handleClick);
right.addEventListener('click', handleClick);
middle.addEventListener('click', handleClick);

//kicks everything off
createImages();



