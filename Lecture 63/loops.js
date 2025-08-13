// let a = [3,5,7,8,9,21]

// for loop
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element);
// }

// for each arrow 
// a.forEach((value, index, a) => {
//     console.log(value,index,a);
// })

// for in loop
// let object = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//         console.log(key, element)
        
//     }
// }

// for of loop
let a = [8, 9, 18, 20]
for (const element of a) {
    console.log(element)
}