const fs = require("fs")
// const fs = require("fs/promises")

// console.log(fs) => To see all fs types

console.log("Starting")

// fs.writeFileSync
// fs.writeFileSync("Aashish.txt", "Aashish is a good boy") => In this Ending will run once Aashish.txt file is created

// fs.writeFileSync("Aashish3.txt", "Aashish Rana is a good boy",()=>{
//     console.log("Done") // Done will not be shown in console
// })

// fs.writeFile & fs.readFile
// fs.writeFile("Aashish2.txt", "Aashish Rana is a good boy",()=>{
//     console.log("Done")
//     fs.readFile("Aashish2.txt", (error, data)=>{
//         console.log(error, data) // data comes in form of a buffer
//         console.log(error, data.toString()) // data comes in form of a string
//     })
// })

// fs.appendFile
fs.appendFile("Aashish.txt", "Okay so i'm getting updated", (e, d)=>{
    console.log(d);
})


// Always use writeFile. writeFilesync will create a problem
console.log("Ending")


/* Callback Hell:-
If we want to write and read alot of files then if we create fs function for each read and write it will create a callback hell. For example: 

fs.writeFile("Aashish2.txt", "Aashish Rana is a good boy",()=>{
    console.log("Done")
    fs.readFile("Aashish2.txt", (error, data)=>{
        console.log(error, data) // data comes in form of a buffer
        console.log(error, data.toString()) // data comes in form of a string
        // again
        fs.writeFile("Aashish2.txt", "Aashish Rana is a good boy",()=>{
        console.log("Done")
        fs.readFile("Aashish2.txt", (error, data)=>{
        console.log(error, data) // data comes in form of a buffer
        console.log(error, data.toString())
        })
    })
}) */