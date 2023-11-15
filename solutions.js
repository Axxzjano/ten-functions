"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

// Question 1


function isTrue(input){
    return input === true;
}

// Question 2
function isFalse(value){
    return  value === false;
}

// Question 3

function not(input){
    return !input;
}

// Question 4

function addOne(number) {
   return ++number;
}
// Question 5
function isEven(number){
    return number % 2 === 0;
}

// Question 6
function isIdentical(number1, number2){
    return number1 === number2;
}

// Question 7
function isEqual(number1, number2){
    return number1 == number2;
}


// Question 8
function or(number1, number2){
    return number1 || number2;
}


// Question 9
function and(number1, number2){
    return number1 && number2;
}


// Question 10
function concat(number1, number2){
    return String(number1) + String(number2);
}
