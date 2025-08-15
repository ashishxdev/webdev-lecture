console.log("Aashish")
// let boxes = document.getElementsByClassName("box")
// console.log(boxes)
// boxes[2].style.backgroundColor = "red";

// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "red" // will change color for first element only

// change color for all element only
console.log(document.querySelectorAll(".box")) 

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "Cyan"
})

console.log(document.getElementsByTagName("div"))

e = document.getElementsByTagName("div")
// console.log(e[4].matches("#redbox")) // false
// console.log(e[3].matches("#redbox")) // true
// console.log(e[4].closest("#redbox")) // null
// console.log(e[4].closest(".container")) 
// console.log(e[4].closest("html")) 
console.log(document.querySelector(".container").contains(e[4])) // true
console.log(document.querySelector(".container").contains(e[0])) //true
console.log(document.querySelector(".container").contains(document.querySelector("body"))) //false
console.log(document.querySelector("body").contains(document.querySelector(".container"))) //true