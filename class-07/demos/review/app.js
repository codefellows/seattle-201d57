'use strict';

/*
Data

Store Objects with properties of
  - location
  - minCustomers
  - maxCustomers
  - avgCookiesPerCustomer
  - totalsPerHour

Dom Manipulation

Put a list on the page
 * Make sure we have data
    - Reference the parent (ul) - document.getElementById()
    - Create List item - document.createElement('tagname')
    - Give it content -
      - Name of the store
      - List of the store sales
          - create an ul
          - give it content
              - list items made of hours
              - create a li
              - give it text content
              - append it back to the ul
          - append it to the li

    - append outer li to the parent ul
*/

var storeUlEl = document.getElementById('store-container');

var codeFellows = {
  location : 'In our Hearts',
  minCustomers : 1,
  maxCustomers : 28,
  avgCookiesPerCustomer : 6.1,
  totalsPerHour : [],
};

codeFellows.calculateCustomersPerOneHour = function(){
  var customers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;

  return customers;
};

codeFellows.calculateCookiesSoldInOneHour = function(){
  // multiply an amount of customers by the average amount of cookies
  var customersInAnHour = this.calculateCustomersPerOneHour();
  var cookies = this.avgCookiesPerCustomer * customersInAnHour;
  return Math.ceil(cookies);

  // return this.calculateCustomersPerOneHour() * this.avgCookiesPerCustomer;
};

codeFellows.calculateTotalsPerHour = function(){
  var total = 0;
  for(var i = 0; i < 15; i++){
    var totalInOneHour = this.calculateCookiesSoldInOneHour();
    this.totalsPerHour.push(totalInOneHour);
    total += totalInOneHour;
  }
  this.total = total;
  console.log(this.totalsPerHour);
};

codeFellows.makeList = function(){
  /*Put a list on the page
 * Make sure we have data
    - Reference the parent (ul) - document.getElementById()
    - Create List item - document.createElement('tagname')
    - Give it content -
      - Name of the store
      - List of the store sales
          - create an ul
          - give it content
              - for loop of
              - list items made of hours
              - create a li
              - give it text content
              - append it back to the ul
          - append it to the li

    - append outer li to the parent ul*/
  if(this.totalsPerHour.length === 0){
    this.calculateTotalsPerHour();
  }

  // 2.
  var locationLiEl = document.createElement('li');

  // 3.
  // 2.
  var h2El = document.createElement('h2');
  h2El.textContent = this.location;
  locationLiEl.appendChild(h2El);

  var ulEl = document.createElement('ul');

  for(var j = 0; j < this.totalsPerHour.length; j++){
    var hourLiEl = document.createElement('li');
    var hour = j + 6 + '00 ';
    hour = hour.padStart(5, '0');
    hourLiEl.textContent = hour + this.totalsPerHour[j] + ' cookies';
    ulEl.appendChild(hourLiEl);
  }

  var totalLiEl = document.createElement('li');
  totalLiEl.textContent = 'total : ' + this.total;
  ulEl.appendChild(totalLiEl);

  locationLiEl.appendChild(ulEl);

  //4.
  storeUlEl.appendChild(locationLiEl);


};


var disneyLand = {
  location: 'Disneyland',
  minCustomers: 8,
  maxCustomers: 10000,
  avgCookiesPerCustomer: 4504,
  totalsPerHour: [],
};

disneyLand.calculateCustomersPerOneHour = function () {
  var customers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;

  return customers;
};

disneyLand.calculateCookiesSoldInOneHour = function () {
  // multiply an amount of customers by the average amount of cookies
  var customersInAnHour = this.calculateCustomersPerOneHour();
  var cookies = this.avgCookiesPerCustomer * customersInAnHour;
  return Math.ceil(cookies);

  // return this.calculateCustomersPerOneHour() * this.avgCookiesPerCustomer;
};

disneyLand.calculateTotalsPerHour = function () {
  var total = 0;
  for (var i = 0; i < 15; i++) {
    var totalInOneHour = this.calculateCookiesSoldInOneHour();
    this.totalsPerHour.push(totalInOneHour);
    total += totalInOneHour;
  }
  this.total = total;
  console.log(this.totalsPerHour);
};

disneyLand.makeList = function () {
  /*Put a list on the page
 * Make sure we have data
    - Reference the parent (ul) - document.getElementById()
    - Create List item - document.createElement('tagname')
    - Give it content -
      - Name of the store
      - List of the store sales
          - create an ul
          - give it content
              - for loop of
              - list items made of hours
              - create a li
              - give it text content
              - append it back to the ul
          - append it to the li

    - append outer li to the parent ul*/
  if (this.totalsPerHour.length === 0) {
    this.calculateTotalsPerHour();
  }

  // 2.
  var locationLiEl = document.createElement('li');

  // 3.
  // 2.
  var h2El = document.createElement('h2');
  h2El.textContent = this.location;
  locationLiEl.appendChild(h2El);

  var ulEl = document.createElement('ul');

  for (var j = 0; j < this.totalsPerHour.length; j++) {
    var hourLiEl = document.createElement('li');
    var hour = j + 6 + '00 ';
    hour = hour.padStart(5, '0');
    hourLiEl.textContent = hour + this.totalsPerHour[j] + ' cookies';
    ulEl.appendChild(hourLiEl);
  }

  var totalLiEl = document.createElement('li');
  totalLiEl.textContent = 'total : ' + this.total;
  ulEl.appendChild(totalLiEl);

  locationLiEl.appendChild(ulEl);

  //4.
  storeUlEl.appendChild(locationLiEl);


};


// Functions to start the page
function makePage(){

  codeFellows.makeList();
  disneyLand.makeList();
}

makePage();
