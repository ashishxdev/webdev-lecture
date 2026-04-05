// var
// var a; // undefined
// var a = 5;
// var act as a global scope so always use let as it's a block scope
// console.log(a)

// var a = 7;
// console.log(a)

// var 55a = "Rohan"; // Not Allowed as variable name can't start with a number

// let
// let a = 5;
a = a + 1;
let b = 4;
// console.log(a)
// console.log(a + b + 2)

// let a = 4; // Cannot redeclare block-scoped variable a because it's let variable not var

let _a = "Shubham";
// console.log(typeof a, typeof b, typeof _a)
var a = 3;
{
    let a = 4;
    // console.log(a)
}
// console.log(a + 10)

// constant
const a1 = 4;
// a1 = a1 + 1; // Error: Assignment to constant variable becz a1 is a constant value and it can't be changed again
// console.log(a1)

// Variable types
let x = "Aashish";
let y = 22;
let z = 3.55;
let o = 123456789012345678901234567890n;
const p = true;
let q = undefined;
let r = null;

// console.log(x, y, z, p, q, r, o)
// console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r, typeof o)

// Object
let i = {
    name: "Aashish",
    "job code": 5900,
    is_handsome: true,
    "is_op": false
}

// console.log(i);
i.salary = "100crores";
// console.log(i);
i.salary = '500crores';
// console.log(i);
i.month = "July"
// console.log(i);
i.happy_singh = "yes";
// console.log(i);

// Exercise question
// const student = {
//     name: "Aashish",
//     phone_number: "84xxxxxxxx",
//     marks: {
//         maths: "89",
//         physics: "67",
//         chemistry: "87"
//     }
// }

// console.log(student.name)
// console.log(student.phone_number)
// console.log(student.marks.maths)
// console.log(student.marks.physics)
// console.log(student.marks.chemistry)
// console.log(student)

// Additional
const objn = {
    name: "mohan",
    "is perfect": "yes"
}
console.log(objn)

objn.salary = "500"
console.log(objn)

objn.salary = "300"
console.log(objn)

const obj = { a: 1 }
Object.freeze(obj)
obj.a = 10
console.log(obj.a) // 1

// Input value example
let j = prompt("Enter your value")

if (j === "apple") {
    console.log("apple means a fruit")
}
else console.log("idk")