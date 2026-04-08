// document.getElementsByClassName
// let boxes = document.getElementsByClassName("box")
// console.log(boxes)
// boxes[2].style.backgroundColor = "red"

// document.getElementById
// document.getElementById("redbox").style.backgroundColor = "cyan"

// document.querySelector
// document.querySelector(".box").style.backgroundColor = "red" // will change color for first element only

// document.querySelectorAll
// console.log(document.querySelectorAll(".box")) 
// document.querySelectorAll(".box").forEach(e => {
//     e.style.backgroundColor = "pink"
// })

// document.getElementsByTagName
// console.log(document.getElementsByTagName("div"))

// document.getElementsByName
// console.log(document.getElementsByName("address"))

// matches
// e = document.getElementsByTagName("div")
// console.log(e)
// console.log(e[4].matches("#redbox")) // false
// console.log(e[3].matches("#redbox")) // true

// closest
// console.log(e[4].closest("#redbox")) // null
// console.log(e[4].closest(".container")) 
// console.log(e[4].closest("html")) 

// contains
// console.log(document.querySelector(".container").contains(e[4])) // true
// console.log(document.querySelector(".container").contains(e[0])) //true
// console.log(document.querySelector(".container").contains(document.querySelector("body"))) //false
// console.log(document.querySelector("body").contains(document.querySelector(".container"))) //true