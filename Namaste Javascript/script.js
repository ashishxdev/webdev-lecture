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

// function x(y) {
//     console.log("x");
//     y()
// }

// x(function y() {
//     console.log("y")
// })

// Interview
// console.log("1" - 1)
// console.log("1" + 1)
// console.log(1 + 1)
// setTimeout(function () { console.log(10) }, 10000)
// console.log(2)
// setTimeout(function () { console.log(12) }, 10000)
// setTimeout(function () { console.log(11) }, 9000)

// Functional Programming

// const radius = [1, 4, 5, 6]

// const calculateArea = function (radius) {
//     const output = []
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i])
//     }
//     return output;
// }

// const calculateCircumference = function (radius) {
//     const output = []
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * Math.PI * radius[i])
//     }
//     return output;
// }

// const calculateDiameter = function (radius) {
//     const output = []
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * radius[i])
//     }
//     return output;
// }

// console.log(calculateArea(radius))
// console.log(calculateCircumference(radius))
// console.log(calculateDiameter(radius))


// const radius = [1, 4, 5, 6]

// const area = function (radius) {
//     return Math.PI * radius * radius
// }

// const circumference = function (radius) {
//     return 2 * Math.PI * radius;
// }

// const diameter = function (radius) {
//     return 2 * radius;
// }

// const calculate = function (radius, logic) {
//     const output = []
//     for (let i = 0; i < radius.length; i++) {
//         output.push(logic(radius[i]))
//     }
//     return output;
// }

// console.log(calculate(radius, area))
// console.log(calculate(radius, circumference))
// console.log(calculate(radius, diameter))

// map
// const radius = [1, 4, 5, 6]

// const area = function (radius) {
//     return Math.PI * radius * radius
// }

// const circumference = function (radius) {
//     return 2 * Math.PI * radius;
// }

// const diameter = function (radius) {
//     return 2 * radius;
// }

// Array.prototype.calculate = function (logic) {
//     const output = []
//     for (let i = 0; i < radius.length; i++) {
//         output.push(logic(radius[i]))
//     }
//     return output;
// }

// console.log(radius.calculate(area))
// console.log(radius.map(area))

// map
// const arr = [5, 4, 3, 2, 1]

// Double = [10, 8, 6, 4, 2]
// Triple = [15, 12, 9, 6, 3]
// Binary = ["101", "100", "11", "10", "1"]

// function double(x) {
//     return x * 2;
// }

// function triple(x) {
//     return x * 3;
// }

// function binary(x) {
//     return x.toString(2);
// }

// const output = arr.map(double)
// const output2 = arr.map(triple)
// const output3 = arr.map(binary)

// console.log(output)
// console.log(output2)
// console.log(output3)

// const output = arr.map(function double(x) {
//     return x * 2;
// })

// const output = arr.map((x) => {
//     return x * 2;
// })

// const output = arr.map((x) => x * 2)

// const output2 = arr.map(function triple(x) {
//     return x * 3;
// })

// const output3 = arr.map(function binary(x) {
//     return x.toString(2);
// })

// console.log(output)
// console.log(output2)
// console.log(output3)

// filter
// const arr = [5, 4, 3, 2, 1]

// const output = arr.filter((x) => x < 3)
// console.log(output)

// function isOdd(x) {
//     return x % 2;
// }

// const output2 = arr.filter(isOdd)

// console.log(output2)

// function isEven(x) {
//     return x % 2 === 0;
// }

// const output2 = arr.filter(isEven)

// console.log(output2)

// const output2 = arr.filter(function isgreater(x) {
//     return x > 4;
// })
// const output2 = arr.filter((x) => {
//     return x > 4;
// })
// const output2 = arr.filter((x) => x > 4)

// console.log(output2)

// const arr = [6, 5, 4, 3, 2, 1]

// const sum = arr.reduce((acc, curr) => {
//     return acc += curr
// }, 0)

// console.log(sum)

// => Max
// const max = arr.reduce((acc, curr) => {
//     if(acc < curr) {
//         acc = curr;
//     } else acc === acc;
//     return acc
// }, 0)

// const max = arr.reduce((acc, curr) => {
//     if (acc < curr) {
//         acc = curr;
//     }
//     return acc
// }, 0)
// console.log(max)

// => tricky.map()
// const users = [
//     { firstName: "ashish", lastName: "rana", age: 21 },
//     { firstName: "donald", lastName: "trump", age: 75 },
//     { firstName: "narendra", lastName: "modi", age: 84 },
//     { firstName: "mohan", lastName: "sharma", age: 21 },
// ]

// list of full names
// ["ashish rana", "donald trump", "narendra modi", "mohan sharma"]
// const output = users.map((x) => x.firstName + " " + x.lastName)
// console.log(output)

// => tricky.reduce()
// acc = { 21: 2, 75: 1, 84: 1}
// const output = users.reduce((acc, curr) => {
//     if (acc[curr.age]) {
// acc[curr.age] = acc[curr.age] + 1;
//         acc[curr.age] = ++acc[curr.age];
//     } else {
//         acc[curr.age] = 1
//     }
//     return acc;
// }, {})

// console.log(output)

// All -> First name of all whose age is less than 30
// const output = users.filter((x) => x.age < 30).map((x) => x.firstName)
// console.log(output)
// const output = users.reduce((acc, curr) => {
//     if (curr.age > 60) {
//         acc.push(curr.firstName)
//     }
//     return acc
// }, [])
// console.log(output)

// Promise
// const cart = ['shoes', 'pants', 'kurta']

// function createOrder(cart) {
//     const pr = new Promise(function (resolve, reject) {
//         if (!validateCart(cart)) {
//             const err = new Error("Cart is not valid")
//             reject(err)
//         }
//         const orderId = "12345"
//         if (orderId) {
//             resolve(orderId)
//         }
//     })
//     return pr;
// }

// function validateCart(cart) {
//     return true;
// }

// const promise = createOrder(cart);

// promise.then(function (orderId) {
//     console.log(orderId)
// })


// const cart = ['shoes', 'pants', 'kurta']

// function createOrder(cart) {
//     const pr = new Promise(function (resolve, reject) {
//         if (!validateCart(cart)) {
//             const err = new Error("Cart is not valid")
//             reject(err)
//         }
//         const orderId = "12345"
//         if (orderId) {
//             setTimeout(function () {
//                 resolve(orderId)
//             }, 5000)

//         }
//     })
//     return pr;
// }

// function validateCart(cart) {
//     return false;
// }

// const promise = createOrder(cart);

// promise.then(function (orderId) {
//     console.log(orderId)
// }).catch(function (err) {
//     console.log(err.message)
// })

const cart = ['shoes', 'pants', 'kurta']

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid")
            reject(err)
        }
        const orderId = "12345"
        if (orderId) {
            setTimeout(function () {
                resolve(orderId)
            }, 5000)

        }
    })
    return pr;
}

function validateCart(cart) {
    return true;
}


createOrder(cart)
    .then(function (orderId) {
        console.log(orderId)
        return orderId;
    })
    .then(function (orderId) {
        return proceedToPayment(orderId)
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo)
    })
    .catch(function (err) {
        console.log(err.message)
    })
    .then(function (orderId) {
        console.log("Definitely to be called")
    })

function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        resolve("Payment Successfull")
    })
}