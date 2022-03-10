// JavaScript Declarations: var, let, and const

// The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.

// var
var x = 1;

if (x === 1) {
  // Strict equality operator ===
  var x = 2;

  console.log(x);
  // expected output: 2
}
console.log(x);
// expected output: 2



// let
let y = 1;

if (y === 1) {
  let y = 2;

  console.log(y);
  // expected output: 2
}

console.log(y);
// expected output: 1



// const
const number = 42;

try {
  number = 99;
} catch(err) {
  console.log(err);
  // expected output: TypeError: invalid assignment to const `number'
  // Note - error messages will vary depending on browser
}

console.log(number);
// expected output: 42

// Declaring var
var name = 'John Doe';
console.log(name);
// With var, you can re-assign the variable (not possible with const)
name = 'Steve Smith'
console.log(name);

// You can also create variables, but not assign them to a value. This is called initializing a variable.
// Init var
var greeting;
// this is actually setting it to 'undefined', so if you:
console.log(greeting);
// expect undefined
greeting = 'Hello';
// Initializing a var is typically done if you have a Conditional Statement such as if, if else, etc.


// let
let name1; 
// optionally initializing it to a value
name1 = 'Jane Doe';
console.log(name1);
name1 = 'Steve Jobs';
console.log(name1);


// const
const nameConst = 'John';
// CANNOT reassign
// nameConst = 'Sara';
// will console an error

const person = {
  name3: 'Jim',
  age: 30,
}

person.name3 = 'Sue';
console.log(person);