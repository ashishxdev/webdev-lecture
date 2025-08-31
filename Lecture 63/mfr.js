// let a = [1,3,4,5,6]
// let newa = []
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     newa.push(element**2)
// }
// console.log(newa)

// // map
// let newa = a.map((e)=>{
//     return e**2 
// })
// console.log(newa)

// filter
// let greaterthantwenty = (e)=>{
//     if (e > 20){
//         return true
//     }
//     return false
// }
// console.log(newa.filter(greaterthantwenty))
// console.log(newa.filter((e)=>{
//     if (e > 20){
//         return true
//     }
//     return false}))
// console.log(newa.filter(e => e > 20));

// reduce
let a = [1,3,4,5,6]
let red = (a,b)=>{
    return a*b
}
console.log(a.reduce(red))

// // array from
arr = Array.from("Aashish")
console.log(arr)