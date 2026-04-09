// Currying
// let multiply = function (x, y) {
//     console.log(x * y)
// }

// let multiplyby2 = multiply.bind(this, 2)
// or
// let multiplyby2 = function (y) {
//     let x = 2;
//     console.log(x * y)
// }
// multiplyby2(2)

// let multiplyby3 = multiply.bind(this, 3)
// multiplyby3(2)

// let multiplybothval = multiply.bind(this, 3, 4)
// multiplybothval(6,3)


// Using Closure
// let multiply = function (x) {
//     return function (y) {
//         console.log(x * y)
//     }
// }

// let multiplyby2 = multiply(2)
// multiplyby2(3)

// let multiplyby3 = multiply(3)
// multiplyby3(4)

// Memoization
// const calc = (n) => {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.time()
// console.log(calc(5))
// console.timeEnd()

// const calc = (n) => {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }
// const memoize = (fun) => {
//     let cache = {};
//     return function (...args) {
//         let n = args[0];
//         if (n in cache) {
//             console.log("cache")
//             return cache[n]
//         } else {
//             console.log("calculating first time")
//             let result = fun(n);
//             cache[n] = result;
//             return result;
//         }
//     }
// }

// console.time()
// const efficient = memoize(calc)
// console.log(efficient(8))
// console.timeEnd()

// console.time()
// console.log(efficient(8))
// console.timeEnd()

// function x() {
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000)
//     }
//     console.log("Aashish Rana")
// }
// x()

// function x() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000)
//     }
//     console.log("Aashish Rana")
// }
// x()

// function x() {
//     for (var i = 1; i <= 5; i++) {
//         function close(x) {
//             setTimeout(() => {
//                 console.log(x)
//             }, x * 1000)
//         }
//         close(i)
//     }
//     console.log("Aashish Rana")
// }
// x()

function x(y) {
    console.log("x");
    y()
}

x(function y() {
    console.log("y")
})