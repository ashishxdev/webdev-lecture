const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express()
const port = 3000

app.use(express.static('public'))
app.use('/blog',blog)
app.use('/shop',shop)

// We can chain them too it doesn't affect anything
app.get('/', (req, res) => {
    console.log("It's a get request")
    res.send('Hello me a get request!')
}).post('/', (req, res) => {
    console.log("It's a post request")
    res.send('Hello me a post request!')
}).put('/', (req, res) => {
    console.log("It's a put request")
    res.send('Hello me a put request!')
}).delete('/', (req, res) => {
    console.log("It's a delete request")
    res.send('Hello me a delete request!')
})

// app.get('/index', (req, res) => {
//     console.log("It's a index file")
//     res.send('Hello me a index file!')
// })

app.get('/index', (req, res) => {
    console.log("It's a index file")
    res.sendFile('templates/index.html', {root: __dirname})
})

app.get('/api', (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
