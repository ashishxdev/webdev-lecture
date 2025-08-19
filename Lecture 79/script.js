// let a = prompt("Enter your first number")
// let b = prompt("Enter your second number")

// if(isNaN(a) || isNaN(b)){
//     throw SyntaxError("Sorry write valid numbers")
// }

// let sum = parseInt(a) + parseInt(b)
// console.log("The sum is", sum)


let a = prompt("Enter your first number")
let b = prompt("Enter your second number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry write valid numbers")
}

let sum = parseInt(a) + parseInt(b)

function main(){
let x = 2;
try {
    console.log("The sum is", sum*x)
    return true
} catch (error) {
    // alert(error.name)
    console.log("Error ne band bja di")
    return false
}
finally{
    console.log("Sab kam hogya ab band krne ka time hai")
}
}
let c = main()
// why to use finally can't we use directly console.log the biggest advantage of finally is using it in a function an try and catch have a return value then u know that it will break after try or catch statement so if we dont use finally there then it will not print anything. if we use finally then it will be printed after return value too