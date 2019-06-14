'use static';

var container = document.getElementById('container');

var heading = document.createElement('h1');
heading.textContent = 'Document Object Model';
container.appendChild(heading);

var q1 = document.createElement('a');
q1.setAttribute('href', '#');
q1.textContent = 'Click me to learn more!';
container.appendChild(q1);

var q2 = document.createElement('a');
var q3 = document.createElement('a');
var q4 = document.createElement('a');

// ******************************************************
// Queston 1
// ******************************************************
var handleQuestion1 = function(event) {
  event.preventDefault();

  var question1 = document.createElement('section');
  container.appendChild(question1);

  var h2El = document.createElement('h2');
  h2El.textContent = 'What is the DOM?';
  question1.appendChild(h2El);

  var ulEl = document.createElement('ul');
  question1.appendChild(ulEl);

  var statements = [
    'When a web page is loaded, the browser creates a Document Object Model of the page',
    'Think of this as one big javascript object containing many different properties and methods that we can access',
    'The HTML DOM is a standard for how to get, change, add, or delete HTML elements.',
    'HTML DOM methods are actions you can perform (on HTML Elements).',
    'HTML DOM properties are values (of HTML Elements) that you can set or change.'
  ];

  for (var i = 0; i < statements.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = statements[i];
    ulEl.appendChild(liEl);
  }

  q1.removeEventListener('click', handleQuestion1);

  q2.setAttribute('href', '#');
  q2.textContent = 'Click me to learn more!';
  container.appendChild(q2);
};

q1.addEventListener('click', handleQuestion1);


// ******************************************************
// Queston 2
// ******************************************************
var handleQuestion2 = function(event) {
  event.preventDefault();

  var question2 = document.createElement('section');
  container.appendChild(question2);

  var h2El = document.createElement('h2');
  h2El.textContent = 'What can JavaScript do with the DOM?';
  question2.appendChild(h2El);

  var ulEl = document.createElement('ul');
  question2.appendChild(ulEl);

  var statements = [
    'Change all the HTML elements in the page',
    'Change all the HTML attributes in the page',
    'Change all the CSS styles in the page',
    'Remove existing HTML elements and attributes',
    'Add new HTML elements and attributes',
    'React to all existing HTML events in the page',
    'Create new HTML events in the page'
  ];

  for (var i = 0; i < statements.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = statements[i];
    ulEl.appendChild(liEl);
  }

  q2.removeEventListener('click', handleQuestion2);

  q3.setAttribute('href', '#');
  q3.textContent = 'Click me to learn more!';
  container.appendChild(q3);
};

q2.addEventListener('click', handleQuestion2);


// ******************************************************
// Queston 3
// ******************************************************
var handleQuestion3 = function(event) {
  event.preventDefault();

  var question3 = document.createElement('section');
  container.appendChild(question3);

  var h2El = document.createElement('h2');
  h2El.textContent = 'Let\'s talk about DOM Manipulation';
  question3.appendChild(h2El);

  var ulEl = document.createElement('ul');
  question3.appendChild(ulEl);

  var statements = [
    'Finding HTML Elements',
    'Changing HTML Elements',
    'Creating HTML Elements',
    'Adding Event Listeners'
  ];

  for (var i = 0; i < statements.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = statements[i];
    ulEl.appendChild(liEl);
  }

  q3.removeEventListener('click', handleQuestion3);

  q4.setAttribute('href', '#');
  q4.textContent = 'Click me to learn more!';
  container.appendChild(q4);
};

q3.addEventListener('click', handleQuestion3);


// ******************************************************
// Queston 4
// ******************************************************
var handleQuestion4 = function(event) {
  event.preventDefault();

  var question4 = document.createElement('section');
  container.appendChild(question4);

  var h2El = document.createElement('h2');
  h2El.textContent = 'DOM Property & Method Review!';
  question4.appendChild(h2El);

  var ulEl = document.createElement('ul');
  question4.appendChild(ulEl);

  var statements = [
    'document.getElementById(id)',
    'element.textContent(some new content)',
    'document.createElement(h3)',
    'element.addEventListener(event, function)'
  ];

  for (var i = 0; i < statements.length; i++) {
    var liEl = document.createElement('li');
    liEl.id = 'element' + [i];
    liEl.textContent = statements[i];
    ulEl.appendChild(liEl);
  }

  getElById();
  txtContent();
  createEl();
  eventListener();

  q4.removeEventListener('click', handleQuestion4);
};

q4.addEventListener('click', handleQuestion4);

// ******************************************************
// getElementById()
// ******************************************************
function getElById() {
  var element0 = document.getElementById('element0');

  element0.addEventListener('click', handleElement0);
}

var handleElement0 = function(event) {
  event.preventDefault();

  var question5 = document.createElement('section');
  container.appendChild(question5);

  var h3El = document.createElement('h3');
  h3El.textContent = 'document.getElementById()';
  question5.appendChild(h3El);

  var ulEl = document.createElement('ul');
  question5.appendChild(ulEl);

  var statements = [
    'Finds an HTML element by id',
    'Takes a string as the parameter',
    'Method returns the element that has the ID attribute with the specified value.',
    'Returns null if it does not'
  ];

  for (var i = 0; i < statements.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = statements[i];
    ulEl.appendChild(liEl);
  }
};


// ******************************************************
// textContent()
// ******************************************************
function txtContent() {
  var element1 = document.getElementById('element1');

  element1.addEventListener('click', handleElement1);
}

var handleElement1 = function(event) {
  event.preventDefault();

  var question6 = document.createElement('section');
  container.appendChild(question6);

  var h3El = document.createElement('h3');
  h3El.textContent = 'element.textContent()';
  question6.appendChild(h3El);

  var ulEl = document.createElement('ul');
  question6.appendChild(ulEl);

  var statements = [
    'Property used to set or return the text content of specified node and all its descendants.',
    'Takes a string as the parameter'
  ];

  for (var i = 0; i < statements.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = statements[i];
    ulEl.appendChild(liEl);
  }
};


// ******************************************************
// createElement()
// ******************************************************
function createEl() {
  var element2 = document.getElementById('element2');

  element2.addEventListener('click', handleElement2);
}

var handleElement2 = function(event) {
  event.preventDefault();

  var question7 = document.createElement('section');
  container.appendChild(question7);

  var h3El = document.createElement('h3');
  h3El.textContent = 'document.createElement()';
  question7.appendChild(h3El);

  var ulEl = document.createElement('ul');
  question7.appendChild(ulEl);

  var statements = [
    'Method creates the HTML element specified by tagName'
  ];

  for (var i = 0; i < statements.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = statements[i];
    ulEl.appendChild(liEl);
  }
};


// ******************************************************
// addEventListener()
// ******************************************************
function eventListener() {
  var element3 = document.getElementById('element3');

  element3.addEventListener('click', handleElement3);
}

var handleElement3 = function(event) {
  event.preventDefault();

  var question8 = document.createElement('section');
  container.appendChild(question8);

  var h3El = document.createElement('h3');
  h3El.textContent = 'element.addEventListener(event, function)';
  question8.appendChild(h3El);

  var ulEl = document.createElement('ul');
  question8.appendChild(ulEl);

  var statements = [
    'Method attaches an event handler to the specified element.',
    'Allows a web page to respond according to an event that occurred.'
  ];

  for (var i = 0; i < statements.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = statements[i];
    ulEl.appendChild(liEl);
  }
};
