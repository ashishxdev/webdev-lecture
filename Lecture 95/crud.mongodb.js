// CRUD OPERATIONS
use('CrudDB95');
console.log(db)

// CREATE
db.createCollection("courses")

// INSERT
// db.courses.insertOne({
//     name: "Aashish",
//     surname: "Rana"
// })

// db.courses.insertMany([
//     {
//         name: "Motu",
//         surname: "Rana"
//     },
//     {
//         name: "Chotu",
//         surname: "Rana"
//     }
// ])

// read

// READ
// db.courses.find({ name: "Chotu" })
// let a = db.courses.find({ surname: "Rana" })
// db.courses.find({ surname: "Rana" })
// console.log(a)
// console.log(a.count())
// console.log(a.toArray())

// let b = db.courses.findOne({surname: "Rana"})
// console.log(b)

// Update
// db.courses.updateOne({ surname: "Rana" }, { $set: { surname: "Singh" } })
// db.courses.updateMany({ surname: "Rana" }, { $set: { surname: "Singh Rana" } })
// db.courses.updateOne({ surname: "Singh" }, { $set: { surname: "Singh Rana" } })

// DELETE
// db.courses.deleteOne({ name: "Chotu" })
// db.courses.insertMany([{ name: "Chotu", surname: "Rana" }, { name: "Chotu", surname: "Rana" }, { name: "Chotu", surname: "Rana" }])
// db.courses.deleteMany({ name: "Chotu" })
// db.courses.deleteOne({name: "Motu"})
// db.courses.deleteMany({name: "Motu"})

// Operators =>
// db.courses.insertMany([{
//     name: "Javascript",
//     Price: 500,
// },
// {
//     name: "Python",
//     Price: 100,
// },
// {
//     name: "AI",
//     Price: 1000,
// }])
// db.courses.find({ Price: { $lte: 1000 } })
// db.courses.find({price: {$eq: 100}})
// let c = db.courses.find({price: {$ne: 1}})
// console.log(c)
// https://www.mongodb.com/docs/manual/reference/operator/query/