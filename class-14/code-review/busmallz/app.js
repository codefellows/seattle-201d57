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
// new TestItem('M.C. Escher Chair', './img/chair.jpg');
// new TestItem('Dark Lord Cthulhu', './img/cthulhu.jpg');
// new TestItem('GMA Creative Pets', './img/dog-duck.jpg');
// new TestItem('Fresh Slayed', './img/dragon.jpg');
// new TestItem('Executive Canteen Kit', './img/pen.jpg');
// new TestItem('Pet Sweep', './img/pet-sweep.jpg');
// new TestItem('Pieca\'a Pie Scissors', './img/scissors.jpg');
// new TestItem('Shark Attack Sleeper', './img/shark.jpg');
// new TestItem('Junior Sweep', './img/sweep.png');
// new TestItem('Luke\'s Dreams Sleeper', './img/tauntaun.jpg');
// new TestItem('Unicorn Meat', './img/unicorn.jpg');
// new TestItem('Dark Lords Messenger App', './img/usb.gif');
// new TestItem('Self Watering Can', './img/water-can.jpg');
// new TestItem('Wine Sniffer', './img/wine-glass.jpg');

// Get local storage data if populated
for (var j = 0; j < TestItem.allItems.length; j++) {
  // get name to pull from local storage
  var newName = `${TestItem.allItems[j].name}`;

  var useTestItem = {};
  // pull named item from local storage if exists
  if (JSON.parse(localStorage.getItem(newName))) {
    useTestItem = JSON.parse(localStorage.getItem(newName));
  }

  if (useTestItem.shownCount > 0) {
    // replace new object with object from local storage
    TestItem.allItems.splice(j, 1, useTestItem);
  }
}

// Get document entry points
var itemsImageSectionTag = document.getElementById('allItems');
var leftItemImageTag = document.getElementById('leftItemImg');
var rightItemImageTag = document.getElementById('rightItemImg');
var centerItemImageTag = document.getElementById('centerItemImg');

// holds total number of clicked items
// uses local storage clicks if > 0
var storedClicks = JSON.parse(localStorage.getItem('totalClicks'));
var totalClicks = storedClicks >= 25 ? 0 : storedClicks;

// holds current items
var rightItemBucket = null;
var leftItemBucket = null;
var centerItemBucket = null;

// render items sets the src attribute
var renderNewItems = function(leftIndex, rightIndex, centerIndex) {
  leftItemImageTag.src = TestItem.allItems[leftIndex].url;
  document.getElementById('leftLabel').textContent = `${TestItem.allItems[leftIndex].name}`;

  rightItemImageTag.src = TestItem.allItems[rightIndex].url;
  document.getElementById('rightLabel').textContent = `${TestItem.allItems[rightIndex].name}`;

  centerItemImageTag.src = TestItem.allItems[centerIndex].url;
  document.getElementById('centerLabel').textContent = `${TestItem.allItems[centerIndex].name}`;
};

// generate a random number
var randNum = function() {
  return Math.floor(Math.random() * TestItem.allItems.length);
};

var pickNewItems = function() {
  var indexArray = [];

  //build an array of 3 things that don't match each other
  while (indexArray.length < 3) {
    var newNum = randNum();
    if (indexArray.indexOf(newNum) === -1) {
      indexArray.push(newNum);
    }
  }
  // if the current left pick doesnt match the old left pick, pick new items
  // TODO: check all of them
  // TODO: prevent overwrite

  for(var nick = 0; nick < 3; nick++){
    if (
      leftItemBucket === TestItem.allItems[indexArray[nick]]
      || centerItemBucket === TestItem.allItems[indexArray[nick]]
      || rightItemBucket === TestItem.allItems[indexArray[nick]]
    ) {
      pickNewItems();
      return;
    }


  }


  leftItemBucket = TestItem.allItems[indexArray[0]];
  rightItemBucket = TestItem.allItems[indexArray[1]];
  centerItemBucket = TestItem.allItems[indexArray[2]];

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
        localStorage.setItem(leftItemBucket.name, JSON.stringify(leftItemBucket));
      }

      if (id === 'centerItemImg') {
        rightItemBucket.clickedCount++;
        localStorage.setItem(rightItemBucket.name, JSON.stringify(rightItemBucket));
      }

      if (id === 'rightItemImg') {
        centerItemBucket.clickedCount++;
        localStorage.setItem(centerItemBucket.name, JSON.stringify(centerItemBucket));
      }

      leftItemBucket.shownCount++;
      rightItemBucket.shownCount++;
      centerItemBucket.shownCount++;

      // after click update local storage

      //after we update the old, pick new pictures
      pickNewItems();
    }
  }

  // increment amount of clicks

  totalClicks++;

  // modify totalClicks in local storage
  localStorage.setItem('totalClicks', JSON.stringify(totalClicks));

  //when they reach total max clicks, remove the clicky function
  if (totalClicks === 25) {
    itemsImageSectionTag.removeEventListener('click', handleClickOnItem);

    makeBusChart();
  }
};

itemsImageSectionTag.addEventListener('click', handleClickOnItem);

pickNewItems();

// Chart

function makeBusChart() {
  var busChartCanvas = document.getElementById('busResults');

  var percents = [];
  var names = [];

  for (var i = 0; i < TestItem.allItems.length; i++) {
    if (TestItem.allItems[i].shownCount > 0) {
      // performs calculations for table.
      var p = Math.floor((TestItem.allItems[i].clickedCount / TestItem.allItems[i].shownCount) * 100);
      names.push(TestItem.allItems[i].name);
      percents.push(p);
    }
  }

  var chartData = {
    labels: names,
    datasets: [
      {
        label: '% of Votes',
        data: percents,
        backgroundColor: [
          'rgba(255, 99, 132, .4)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, .4)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, .4)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, .4)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],

        borderWidth: 1
      }
    ]
  };

  var busChartObject = {
    type: 'bar',
    data: chartData,
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  };
  var busChart = new Chart(busChartCanvas, busChartObject);
}
