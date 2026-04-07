// for loops
// let a = 3; 
// for (let o = 4; o < 10; o++){
//     console.log(o); 
// }
// for (let o = 4; o < 10; o++){
//     console.log(a + o); 
// }

// for in loop
// let details = {
//     name:"Aashish",
//     programmer:"yes",
//     "company name":"AI"
// }
// for (const key in details) { 
//     console.log(key)
// }

// for of loop
// for (const c of "Aashish") { 
//     console.log(c)
// }

// while loop
// let a = 2;
// while (a < 10){
//     console.log(a);
//     a++;
// }

// do-while loop
// let a = 5;
// do{
//     console.log(a);
//     a++;
// } while (a < 8)

// Exercise Question
let obj = {
    harry: 98,
    rohan: 70,
    aakash: 75
};

for (let key in obj) {
    console.log(key + ":" + obj[key])
}