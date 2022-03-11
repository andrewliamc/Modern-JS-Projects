let val;

// Number to string
val = String(5);
val = String(4+4);

// Boolean to string
val = String(true);

// Date to string
val = String(new Date());

// Array to string
val = String([1,2,3,4]);

// in addition to the String function, there is also the to string method

val = (5).toString();
val = (true).toString();

// Strings to numbers

val = Number('5');
val = Number(true);
// returns 1
val = Number(false);
// returns 0
val = Number(null);
// returns 0
val = Number('hello');
// returns NaN or not a number duh!
val = Number([1,2,3]);
// also returns NaN

// there is a method called parseInt
val = parseInt('100');
// this will only return integers or whole numbers if you want decimal places then use parseFloat
val = parseFloat('100.30');


// Output
console.log(val);
console.log(typeof val);
// console.log(val.length); (only works on strings)
console.log(val.toFixed());
// .toFixed you can pass in a number for the number of decimal places to go to

const val1 = 5;
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);