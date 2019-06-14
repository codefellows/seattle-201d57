'use strict';

//Creating Constructor Store
function Store(location, minCustomers, maxCustomers, avgCookiePerCustomer) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
  this.totalsPerHour = [];
}
var allStores = [];

//methods102 can be added to a constructor function's prototype
Store.prototype.calculateCustomersPerOneHour = function () {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
};

//Calculate Cookie Sold in One Day
Store.prototype.calculateTotalsPerDay = function () {
  var locationTotal = 0;
  for (var i = 0; i < 15; i++) {
    var totalInOneHour = Math.round(this.calculateCustomersPerOneHour() * this.avgCookiePerCustomer);
    this.totalsPerHour.push(totalInOneHour);
    console.log(totalInOneHour);
    locationTotal += totalInOneHour;
  }
  this.totalsPerHour.push(locationTotal);
  this.renderthis();
};

//Rendering for each object
//TODO: Need to create only one total per hour
Store.prototype.renderthis = function () {
  var tlEl = document.getElementById('my-table');

  var trEl = document.createElement('tr');
  var tdEl = [];
  tdEl[0] = document.createElement('td');

  // This location is for titles
  tdEl[0].textContent = this.location;



  trEl.appendChild(tdEl[0]);
  tlEl.appendChild(trEl);

  // any time we build a total row we give it an id of "total-row"

  for (var i = 0; i < this.totalsPerHour.length; i++) {
    tdEl[i] = document.createElement('td');
    tdEl[i].textContent = this.totalsPerHour[i];

    trEl.appendChild(tdEl[i]);
    tlEl.appendChild(trEl);
  }
  if (document.getElementById('total-row')){
    document.getElementById('total-row').remove();
    // newVariable.innerHTML = '';

  }


  trEl = document.createElement('tr');
  trEl.setAttribute('id', 'total-row');
  tdEl[0] = document.createElement('td');
  tdEl[0].textContent = 'Total';


  trEl.appendChild(tdEl[0]);
  tlEl.appendChild(trEl);

  // var total = 0;
  // tdEl[i] = document.createElement('td');
  for (var k = 0; k < 15; k++) {
    // tdEl[k] = document.createElement('td');
    var total = 0;
    for (var j = 0; j < allStores.length; j++) {
      // var total = 0;
      tdEl[k] = document.createElement('td');
      total += allStores[j].totalsPerHour[k];
      tdEl[k].textContent = total;
      // trEl.appendChild(tdEl[k]);
      // tlEl.appendChild(trEl);
    }
    // tdEl[k] = document.createElement('td');
    // total += allStores[j].totalsPerHour[i];
    // tdEl[k].textContent = total;
    // var tdEl = document.createElement('td');
    // tdEl[k].textContent = total;
    // trEl.appendChild(tdEl[k]);
    // tlEl.appendChild(trEl);
    trEl.appendChild(tdEl[k]);
    tlEl.appendChild(trEl);
  }
};

//Creating function to pass new store
var nextRow = -1;
function createStore(location, minCustomers, maxCustomers, avgCookiePerCustomer) {
  nextRow++;

  allStores.push(new Store(location, minCustomers, maxCustomers, avgCookiePerCustomer));
  allStores[nextRow].calculateTotalsPerDay();
}
// A refrence to the form element
var storeForm = document.getElementById('store-form');

//Defining function called submitForm
function submitForm(someEvent) {
  someEvent.preventDefault();

  var locationName = someEvent.target.storeName.value;
  var minC = someEvent.target.minCustomer.value;
  var maxC = someEvent.target.maxCustomer.value;
  var avgC = someEvent.target.avgCookie.value;
  createStore(locationName, parseInt(minC), parseInt(maxC), parseFloat(avgC));
}
//Evenlisterner
storeForm.addEventListener('submit', submitForm);

// function footer(){
//   var tlEl = document.getElementById('my-table');
//   var trEl = document.createElement('tr');
//   for(var i = 0; i < 15; i++){
//     var total = 0;
//     for (var j = 0; j < allStores.length; j++){
//       total += allStores[j].totalsPerHour[i];
//     }
//     var tdEl = document.createElement('td');
//     tdEl.textContent = total;
//     trEl.appendChild(tdEl);
//     tlEl.appendChild(trEl);
//     // this.renderthis();
//   }
// }
// footer();
// footer.renderthis();
