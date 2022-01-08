console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'

function hello() {
  return 'Hello World!';
}

// Call the function to test

console.log('Q1 Test - should say "Hello World!"', hello());

// 2. Function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

function helloName( name ) {
  return 'Hello, ' + name;
}

// Remember to call the function to test

console.log('Q2 Test -', helloName('Andrew'));

// 3. Function to add two numbers together & return the result

function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}

console.log('Q3 Test A -', addNumbers(1, 2));

function addNumbers2() {
  let answer = 1 + 2;
  return answer;
}

console.log('Q3 Test B -', addNumbers2());

// 4. Function to multiply three numbers & return the result

function multiplyThree(firstNumber, secondNumber, thirdNumber){
  return firstNumber * secondNumber * thirdNumber;
}

console.log('Q4 Test A -', multiplyThree(1, 2, 3));

function multiplyThree2(){
  let answer = 1 * 2 * 3
  return answer;
}

console.log('Q4 Test B -', multiplyThree2());

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ) {
    return true;
  }
  else {
    return false;
  }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.

numberArray = [1, 2, 3];
emptyArray = [];

function getLast( array ) {
  if (array.length > 0) {
    return array[array.length - 1];
  }
  else {
    return 'undefined';
  }
}

console.log('Q6 Test - A ', getLast(numberArray));
console.log('Q6 Test - B ', getLast(emptyArray));


let numberArray2 = [1, 2, 3];
let emptyArray2 = [];

function getLast2( array, value ) {
  array.push(value)
  if (array.length > 0) {
    return array[array.length - 1];
  }
  else {
    return 'undefined';
  }
}

console.log('Q6 .push Test A -', getLast2(numberArray2, 4));
console.log('Q6 .push Test B -', getLast2(emptyArray2, 5));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

let nameArray = ['Dan', 'Joe', 'Jim', 'Bob'];

function find( value, array ){
  for( let i=0; i<array.length; i++ )
    if (array[i] === value) {
      return true;
    }
    else {
      return false;
    }
}

console.log('Q7 Test A -', find('Dan', nameArray));
console.log('Q7 Test B -', find('Drew', nameArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string[0]) {
    return true;
  }
  else {
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array

function sumAll( array ) {
  let sum = 0
  for (var i = 0; i < array.length; i++) {
    sum += array [i];
  }
  // TODO: loop to add items
  return sum;
}

console.log('The sum of this array is', sumAll(numberArray));


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

numberArray3 = [1, -1, 2, -2, 3, -3]

function getPositives( array ){
    let postiveArray = array.filter(num => num > -1);
    return postiveArray;
}

console.log('The postive numbers in this array are', getPositives(numberArray3));


// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

// I picked the problem that asks you to create a function that converts mins into secs.
// I took the minute vaule and multiplied it by 60 because there are 60 seconds in a minute.

let five_mins = 5;

function convert(mins) {
  return mins * 60;
}

console.log(five_mins,'minutes is equal to', convert(five_mins), 'seconds');
// Result should me 300 seconds.
