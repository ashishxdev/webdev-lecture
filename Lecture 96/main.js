// https://www.npmjs.com/package/mongodb
import mongoose from 'mongoose'
import express from 'express'
import { Todo } from "./models/todo.js"

let conn = await mongoose.connect("mongodb://localhost:27017/todo")
const app = express()
const port = 3000

// app.get('/', (req, res) => {
    // const todo = new Todo({ title: "Hey i am first to do", description: "Description", isDone: false })
    // const todo = new Todo({ title: 1, description: "Description", isDone: false, days: 3 })
    // const todo = new Todo({ title: 1, desc: "Description", isDone: false, days: Math.floor(Math.random() * 45 + 5 * Math.random()) })
    // const todo = new Todo({ title: 1, desc: "Description", isDone: false, days: "Aashish" }) // => Validation Error because days type is set as number but we are passing a string
    // todo.save()
    // res.send('Hello World!')
// })
// app.get('/', (req, res) => {
//     const todo = new Todo({ desc: "Description", isDone: false, days: Math.floor(Math.random() * 45 + 5 * Math.random())})
//     todo.save()
//     res.send('Hello World!')
// })

app.get('/a', async (req, res) => {
    let todo = await Todo.findOne({})
    res.json({title: todo.title, desc: todo.description, isDone: todo.isDone, days: todo.days})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
