'use strict';

//1. reference the parent
// table is like a section
var tableEl = document.getElementById('my-table');

// the container for a table is a table row or tr
// a tr is like a ul or div - container for specific things
// a container for table cells
//2. create an element
var trEl = document.createElement('tr');

// 3. create content
//2. create table cells or td

var tdEl = document.createElement('td');
//3. give it content
tdEl.textContent = 'Code Fellows';
//4. append back to parent
trEl.appendChild(tdEl);

tdEl = document.createElement('td');
tdEl.textContent = '30 min cust';
trEl.appendChild(tdEl);

tdEl = document.createElement('td');
tdEl.textContent = '100 max cust';
trEl.appendChild(tdEl);

tdEl = document.createElement('td');
tdEl.textContent = 'the last td';
trEl.appendChild(tdEl);

//4. append back to the table
tableEl.appendChild(trEl);

