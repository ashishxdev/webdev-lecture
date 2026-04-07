/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/
function businessname(x, y, z) {
    let num = Math.floor(Math.random() * 3)
    if (num == 0) {
        return x;
    } else if (num == 1) {
        return y;
    }
    else {
        return z;
    }
}
console.log(`Generated name is ${businessname("crazy", "amazing", "fire")} ${businessname("engine", "foods", "garments")} ${businessname("bros", "limited", "hub")} `)