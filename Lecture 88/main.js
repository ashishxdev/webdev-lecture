// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//     res.send("Hello World")
// })
// app.get('/about', (req, res) => {
//     res.send("About me")
// })
// app.get('/contact', (req, res) => {
//     res.send("contact me")
// })
// app.get('/blog', (req, res) => {
//     res.send("blog")
// })
// To add blog in /blog => but it will be hectic we can't add lot of text or blogs like this that's why we use express 
// app.get('/blog/intro-to-js', (req, res) => {
// logic to fetch intro to js from the db
//     res.send('Hello intro-to-js!')
// })
// app.get('/blog/intro-to-python', (req, res) => {
// logic to fetch intro to python from the db
//     res.send('Hello intro-to-python!')
// })
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })


const express = require('express')
const app = express()
const port = 3000

// app.use(express.static('public'))
// here public is the name of the folder 
// We can access only those files that are in public folder also to access them we have to use app.use(express.static('public))
// app.use(express.static('files'))
// I moved package.json to files folder now we can visit it in this url:http://127.0.0.1:3000/package.json

// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About us')
})

app.get('/contact', (req, res) => {
    res.send('Hello contact me!')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog!')
})

// In slug we can pass parameters & queries here :slug is a parameter
app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from the db
    res.send(`Hello ${req.params.slug}`)
})

app.get('/blog/:slug/:second', (req, res) => {
    // logic to fetch {slug} from the db
    res.send(`Hello ${req.params.slug} and ${req.params.second}`)
})

app.get('/blog/:slug', (req, res) => {
    // logic to fetch { slug } from the db
    // For URL: http://127.0.0.1:3000/blog/intro-to-mongo?mode=dark&region=in
    // console.log(req)
    console.log(req.params)// will output { slug: 'intro-to-mongo' }
    console.log(req.query) // will output { mode: 'dark', region: 'in' }
    res.send(`Hello ${req.params.slug}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})