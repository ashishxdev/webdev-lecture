console.log("Hey this is tutorial 55");

// var a = 5;
let a = 5;
// var act as a global scope so always use let as it's a block scope
// a = a + 1
let b = 6;
let c = "Harry";
let _a = "Shubham";
// var 55a = "Rohan"; // Not Allowed as variable name can't start with a number

// console.log(a +  b + 8);
// console.log(typeof a, typeof b, typeof c);
{
    let a = 66;
    console.log(a)
}
console.log(a)
// const a1 = 6;
// a1 = a1 + 1; // Not Allowed because a1 is constant


let x = "Aashish";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)


let o = {
    name: "Aashish",
    // "name": "Aashish",
    "job code": 5900,
    is_handsome: true,
    "is_op": false
}

console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = '500crores';
console.log(o);
o.month = "July"
console.log(o);
o.happy_singh = "yes";
console.log(o);