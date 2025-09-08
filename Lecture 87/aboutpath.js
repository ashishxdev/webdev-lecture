import path from "path"
// console.log(path)

let myPath = "aashishrana Lecture 87% Aashish.jpeg "
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
