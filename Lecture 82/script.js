// iife
// (function (name) {
//     console.log("Hello " + name);
// })("Aashish");

// let x = 10;
// (function(){
//     let x = 20;
//     console.log(x);
// })();
// console.log(x);

// async function sleep(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(45)
//         }, 1000);
//     })
// }
// let a = await sleep()
// let b = await sleep()
// it will show an error

// so we use iife that's creating a function
// (async function main(){
//     let a = await sleep()
//     console.log(a)
//     let b = await sleep()
//     console.log(b)
// })()

// Destructuring
// (async function main() {
//     let [x, y, ...rest] = [1, 5, 7, 8, 9] // x = 1, y = 5, rest = rest
//     console.log(x, y, rest)

//     let obj = {
//         a: 3,
//         b: 4,
//         c: 5
//     }

//     let { a, b, c } = obj
//     console.log(obj);
//     console.log(a, b, c) // a = 3; b = 4; c = 5;
// })()

// const a = "the", b = "no"
// const c = { a, b }
// console.log(c)

// Spread syntax
// function sum(a, b, c) {
//     return a + b + c
// }
// let arr = [1, 4, 6]
// console.log(sum(...arr)) // ... spread operator
// console.log(arr[0] + arr[1] + arr[2])
// console.log(sum(arr[0], arr[1], arr[2]))

// Hoisting
// hello("Aashish")
// function hello(name){
//     console.log("Hello " + name)
// }

// console.log(a1);
// var a1 = 6; // undefined
// let a1 = 6; // shows error

