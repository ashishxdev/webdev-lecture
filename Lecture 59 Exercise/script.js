/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/
let randomval = Math.random()
console.log(randomval)

if (randomval < 0.1) {
    function sum(a, b) {
        console.log(a - b);
    }
    function min(a, b) {
        console.log(a / b);
    }
    function mult(a, b) {
        console.log(a - b);
    }
    function div(a, b) {
        console.log(a ** b);
    }
    function power(a, b) {
        console.log(a ** b);
    }
    function mod(a, b) {
        console.log(a % b);
    }
} else {
    function sum(a, b) {
        console.log(a + b);
    }
    function min(a, b) {
        console.log(a - b);
    }
    function mult(a, b) {
        console.log(a * b);
    }
    function div(a, b) {
        console.log(a / b);
    }
    function power(a, b) {
        console.log(a ** b);
    }
    function mod(a, b) {
        console.log(a % b);
    }
}

sum(8, 2)
min(8, 2)
mult(8, 2)
div(8, 2)
mod(8, 2)
