// First
// const arr = [1, 3, 2, 23]
// const output = arr.map((x) => x = 8)
// console.log(output)

// Second
// const obj = {
//     a: 1,
//     b: 2
// }
// console.log(Object.entries(obj))

// Third
// const arr = [100, "q", "Uttkarsh", 10, 8, "C"]
// const number = []
// const str = []
// const char = []

// arr.forEach((ele) => {
//     if (typeof ele === "number") number.push(ele);
//     else if (typeof ele === "string") {
//         if (ele.length < 2) char.push(ele);
//         else str.push(ele)
//     }
// })

// console.log(number)
// console.log(str)
// console.log(char)

// Fourth
// const arr = [1, 3, 2, 4, 6, 7]

// console.log(arr.slice(2, 4))
// console.log(arr.splice(2, 4))

// Fifth
// const obj1 = {
//     a: 1
// }
// const obj2 = {
//     b: 1
// }
// const obj3 = { ...obj1, ...obj2 }
// console.log(obj3)

// Sixth
// const obj1 = {}
// const obj2 = {
//     name: "ashish"
// }
// const obj3 = {
//     name: "ayush"
// }
// console.log(obj1[obj2])
// obj1[obj2] = {
//     name: "ashish boolte"
// }
// console.log(obj1[obj2])
// obj1[obj3] = {
//     name: "acha babu"
// }
// console.log(obj1[obj2])

// Seventh
// function sum(a, b) {
//     if (a && b) return a + b;
//     return function (b) {
//         return a + b;
//     }
// }
// console.log(sum(8, 9))
// console.log(sum(8)(9))

// Eigth
// console.log(typeof (NaN))

// Ninth - For non primitive data types it will check the value of arrays memory location
console.log([]===[])
console.log([]==[])
