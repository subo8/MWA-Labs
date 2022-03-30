"use strict";

const fibo = function (number) {
    number = Math.abs(number);
    if (number <= 2) return 1;
    return fibo(number - 1) + fibo(number - 2);
}

console.log("Fibonacci 30 is: " + fibo(30));
console.log("Fibonacci 15 is: " + fibo(15));
console.log("Fibonacci -15 is: " + fibo(-15));
console.log("-10 and 10 is equal:", fibo(-10) === fibo(10));

module.exports = { fibo };