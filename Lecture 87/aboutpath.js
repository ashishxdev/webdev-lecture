import path from "path"
// console.log(path)

let myPath = "/Users/aashishrana/Documents/Web Dev (Code with Harry)/Lecture 87/aboutpath.js.jpeg"
console.log(path.extname(myPath))
console.log(path.dirname(myPath))
console.log(path.basename(myPath))
console.log(path.join("c:/", "programs\\ashish.txt"))
/* 
=> In ios it will shows this 
c:/programs\ashish.txt 
but in window it will show this 
c:\programs\ashish.txt 
*/
