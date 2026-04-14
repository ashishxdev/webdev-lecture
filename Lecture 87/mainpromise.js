// To solve callback hell problem we use promises which is used using Ecmascript
import fs from "fs/promises"

let a = await fs.readFile("Aashish.txt")
console.log(a.toString())

let b = await fs.writeFile("Aashish.txt", "I am been written by async promises");
console.log(b) // existing data removed and updated with new data

let c = await fs.appendFile("Aashish.txt", "I am been appended by async promises");
console.log(c)