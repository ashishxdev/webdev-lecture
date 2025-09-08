const express = require('express')
const app = express()
const port = 3000
const fs = require ('fs')
const blog = require('./routes/blog')

app.use('/blog', blog)
// app.use(express.static('public'))

// Middleware 1 => here next is next middleware
// app.use((req, res, next) => {
//     console.log("m1")
//     next()
//     // if commented next() then site will keep on loading it's an error
// })

// Middleware 2 => here next is next middleware
// app.use((req, res, next) => {
//     console.log("m2")
//     res.send("Hacked by middleware 2")
//     // it will show error if next() is added here becz it will say u already have send the response so why are u writing next() so don't add next once added res.send()
// })

// Middleware 3 => here next is next middleware
// app.use((req, res, next) => {
//     console.log("m3")
//     next()
// })

// Why we have to use middle ware 
// Middleware 1 = Logger for our application
app.use((req, res, next) => {
    console.log(req.headers)
    req.aashish = "I am Aashish";
    fs.appendFileSync("date.txt",`\n ${Date.now()} is a ${req.method}` )
    console.log(`${Date.now()} is a ${req.method}`)
    next()
})
// Middleware 2 
app.use((req, res, next) => {
    req.aashish = "I am Aashish Rana"; // This will run becz it came later
    // req.harry = "I am Aashish Rana";
    console.log("m2")
    next()
})

// req => request
// res => response
app.get('/', (req, res) => {
  res.send('Hello World!')
}).get('/about', (req, res) => {
  res.send('About Me!' + req.aashish)
//res.send('About Me!' + req.aashish + req.harry)
}).get('/contact', (req, res) => {
  res.send('Contact Me!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
