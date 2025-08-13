// Write a program to calculate factorial of a number using reduce and using for loops

// 6! = 6*5*4*3*2*1

let num=[]
let number= prompt("Enter a number for factorial")
for (let index = 1; index <=number; index++) {
    num.push(index)
}
console.log(num)
const red=(a,b)=>{
    return a*b
}
console.log("The Factorial of the given number is: " ,num.reduce(red))