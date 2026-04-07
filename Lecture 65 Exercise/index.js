// Write a program to calculate factorial of a number using reduce and using for loops

// 6! = 6*5*4*3*2*1

// using for loop
// function factorial(number) {
//     let fac = 1;
//     for (let i = 1; i <= number; i++) {
//         fac = fac * i
//     }
//     return fac
// }
// console.log(factorial(6))

// using reduce
function factorial(number) {
    let num = Array.from(Array(number + 1).keys())
    let fac = num.slice(1).reduce((a, b) => a * b)
    return fac;
}
console.log(factorial(4))

