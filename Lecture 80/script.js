// let obj = {
//     a: 1,
//     b: "Aashish"
// }
// console.log(obj)

// let animal = {
//     eats: true
// }
// let rabbit = {
//     jumps: true
// }
// rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
// console.log(rabbit.eats) // True

// Instead of using __proto__ everytime we use class
class Animal{
    constructor(name){
        this.name = name
        console.log("Object bna diya")
    }
    eats(){
        console.log("Kha rha hoo")
    }
    jumps(){
        console.log("Khood rha hoo")
    }
}
class lion extends Animal{
    constructor(name){
        super(name)
        console.log("Sher born hogya hai")
    }
    eats(){
        super.eats()
        console.log("m dbake khata hu")
    }
    jumps(){
        console.log("m shikari ko marunga")
    }
}
let a = new Animal("Bunny")
console.log(a)
// console.log(a.name)
// console.log(a.eats())
// console.log(a.jumps())

let l = new lion("Sheru")
console.log(l)
// console.log(l.eats())
// console.log(l.jumps())

console.log(l instanceof Animal) //true
console.log(l instanceof lion) //true
console.log(a instanceof lion) //false
console.log(a instanceof Animal) //true