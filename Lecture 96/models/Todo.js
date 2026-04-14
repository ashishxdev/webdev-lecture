import mongoose, { mongo } from "mongoose";

// const TodoSchema = new mongoose.Schema({
//     title: String,
//     description: String,
//     isDone: Boolean,
//     days: Number
// });

const TodoSchema = new mongoose.Schema({
    title: { type: String, requirede: true, default: "Hey u haven't filled info" },
    description: String,
    isDone: Boolean,
    days: Number
})

export const Todo = mongoose.model('Todo', TodoSchema)