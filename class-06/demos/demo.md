Adam's Demo:

```javascript
var person = {
	name: "Adam Wallraff",
	age: 30,
	isWalking: false,
	walk: function(){
		console.log(this.name + ' is now walkin down the streetz');
		this.isWalking = true;
  };
};
```


Dan's Demo:

# JavaScript Objects

## What Is an Object?
JavaScript objects are convenient & powerful ways to group data and functions. They store data as **properties**, which are represented as `key: value` pairs, and can have **methods**, which are functions associated with the object.

Similar to arrays, but with semantic element names:

```javascript
var myArray = ['a', 'b', 'c'];

var myObject = {
	0: 'a',
	1: 'b',
	2: 'c'
};
```

Arrays are great for storing similar pieces of data, but get confusing if they contain mixed data.

```javascript
var samArray = ['Sam', null, 'Hamm', 0, true, ['Nadia', 'Spencer', 'Dan']];
```

## Notation
We can declare objects using object literal notation:

1. curly braces `{}`
2. key: value pairs - colon between k/v, comma after each pair (except the last one)
3. properties - any data type, including other objects
4. methods - function(s) associated with the object

```javascript
var emptyObject = {};
var oneLineObject = { a: 1, b: 2 };

var genericObject = {
  key1: value1,
  key2: value2,
  'multi-word key': value3,
  method: function() {
    //do stuff
  }
};
```

```javascript
var sam = {
  //properties
  firstName: 'Sam',
  middleName: null,
  lastName: 'Hamm',
  rating: 0,
  isABoss: true,
  underlings: ['Nadia', 'Spencer', 'Dan'],

  //methods
  getRating: function() {
  	return this.rating;
  },
  setRating: function(num) {
  	return this.rating = num;
  }
 };
```

## Accessing Properties & Calling Methods
1. accessing properties
	1. dot notation
	2. bracket notation - w/string, outside variable. multi-word keys
2. calling methods
	1. `objectName.method();`
	2. methods declared in context of an object must be called in that context, so calling `method();` gives an error

## Modifying Objects
1. adding new properties, methods
	1. use `=` instead of `:` because we're assigning a value

```javascript
sam.employer = {
  name: 'Code Fellows',
  location: 'Seattle'
};

sam.logName = function() {
	console.log(this.firstName + ' ' + this.lastName);
};
```

2. clearing & removing
	1. set value to '', 0, or null
	2. `delete`	operator

## Built-in Objects
1. String, Array, Document, Math

## Prototypes
1. Every object has a prototype. It can be assigned explicitly, or is set to the global Object by default
2. All objects have the props & methods of their prototype
3. If a prop or method can't be found on the object itself, the JS engine will look up the prototype chain for it

## this
1. complicated!
2. changes based on context.
3. when calling a method in the context of an object, `this = the object`

```javascript
sam.whatIsThis = function() {
  console.log(this);
}

sam.whatIsThis(); //logs the sam object
```


#Adding Something to the DOM

**We can only add ONE THING AT A TIME.**

As an example, let's add a `<p>` to an existing `<div>`

This is our existing HTML:

```HTML
<div id="parentElement">
</div>
```

###Steps

1. Make a JavaScript reference (a variable) to the parent element
2. Create the child element we want to add and save it as a variable
3. Give the child content - in this case, the content is text
4. Append the child to the parent

**JavaScript:**

```javascript
var parent = document.getElementById('parentElement');  
var child = document.createElement('p');  
child.textContent = 'Some words we want in our p element';  
parent.appendChild(child);
```

**Finished HTML:**

```HTML
<div id="parent">
  <p>Some words we want in our p element</p>
</div>
```
