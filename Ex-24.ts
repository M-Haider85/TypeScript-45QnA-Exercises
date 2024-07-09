// String equality and inequality tests
let fruit = 'apple';

// Test 11: Is fruit equal to 'apple'? I predict True.
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');

// Test 12: Is fruit not equal to 'banana'? I predict True.
console.log("Is fruit != 'banana'? I predict True.");
console.log(fruit != 'banana');

// Test 13: Is fruit equal to 'Apple' (case-sensitive)? I predict False.
console.log("Is fruit == 'Apple'? I predict False.");
console.log(fruit == 'Apple');

// Test 14: Is fruit not equal to 'Apple' (case-sensitive)? I predict True.
console.log("Is fruit != 'Apple'? I predict True.");
console.log(fruit != 'Apple');

// Tests using the lower case function
let uppercaseFruit = 'APPLE';

// Test 15: Is lowercase of uppercaseFruit equal to 'apple'? I predict True.
console.log("Is lowercase(uppercaseFruit) == 'apple'? I predict True.");
console.log(uppercaseFruit.toLowerCase() == 'apple');

// Numerical tests
let number = 10;

// Test 16: Is number equal to 10? I predict True.
console.log("Is number == 10? I predict True.");
console.log(number == 10);

// Test 17: Is number greater than 5? I predict True.
console.log("Is number > 5? I predict True.");
console.log(number > 5);

// Test 18: Is number less than or equal to 15? I predict True.
console.log("Is number <= 15? I predict True.");
console.log(number <= 15);

// Tests using "and" and "or" operators
let isRed = true;
let isRound = false;

// Test 19: Is isRed true AND isRound true? I predict False.
console.log("Is isRed && isRound? I predict False.");
console.log(isRed && isRound);

// Test 20: Is isRed true OR isRound true? I predict True.
console.log("Is isRed || isRound? I predict True.");
console.log(isRed || isRound);

// Test whether an item is in an array
let fruits = ['apple', 'banana', 'orange'];

// Test 21: Is 'banana' in fruits array? I predict True.
console.log("Is 'banana' in fruits? I predict True.");
console.log(fruits.includes('banana'));

// Test whether an item is not in an array
// Test 22: Is 'grape' not in fruits array? I predict True.
console.log("Is 'grape' not in fruits? I predict True.");
console.log(!fruits.includes('grape'));
