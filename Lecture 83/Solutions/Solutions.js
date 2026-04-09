// 1. The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

// let students = ["shubh", "anajali", "Shivani", "Shivangi", "Annapurna", "Shubham", "Krishnanendu", "Ravindranathan", "Shivesh", "kaif", "Emanuel"]

// let houses = []

// for (const student of students) {
//     if(student.length < 6){
//         houses.push("Gryffindor")
//     }
//     else if(student.length < 8){
//         houses.push("Hufflepuff")
//     }
//     else if(student.length < 12){
//         houses.push("Ravenclaw")
//     }
//     else{
//         houses.push("Slytherin")
//     }
// }

// console.log(houses)

// 2. You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

// function doubleTrouble(arr) {
//     return arr.map((num, i) =>
//         (i > 0 && num === arr[i - 1]) ? num : num * 2)
// }

// console.log(doubleTrouble([2, 2, 4, 5, 6, 7, 7]))

// 3. Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

// function mirrorString(str) {
//     return str + str.split("").reverse().join("")
// }
// console.log(mirrorString("Aashish"))

// 4. You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

// function Validatefeature(pwd) {
//     if (pwd.length < 8) return false;

//     let hasUpper = false;
//     let hasLower = false;
//     let hasDigit = false;

//     for (let ch of pwd) {
//         if (ch >= 'A' && ch <= 'Z') {
//             hasUpper = true;
//         }
//         else if (ch >= 'a' && ch <= 'z') {
//             hasLower = true;
//         }
//         else if (ch >= '0' && ch <= '9') {
//             hasDigit = true;
//         }
//     }
//     return hasUpper && hasLower && hasDigit;
// }

// console.log(Validatefeature("1242ddsd2A"))

// 5. You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

// function sumUntilNegative(arr) {
//     let sum = 0;
//     for (let num of arr) {
//         if (num < 0) break;
//         sum += num;
//     }
//     return sum;
// }

// console.log(sumUntilNegative([2, 4, 5, 6, 12, -1, 1232, 32323]))

// 6. You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

// function countVowels(str) {
//     let count = 0;
//     let vowels = "aeiouAEIOU"
//     for (let ch of str) {
//         if (vowels.includes(ch)) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels("Aashish"))

// 7. You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

// Solution -> 07-Solution.html

// 8. Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

// async function asyncMap(arr) {
//     return Promise.all(arr.map(num =>
//         new Promise(res =>
//             setTimeout(() =>
//                 res(num * 2)
//                 , 1000))
//     ))
// }
// asyncMap([1, 2, 3]).then(console.log)

// 9. Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

// function placeOrder(order) {
//     return new Promise(res => {
//         let delay = Math.random() * 2000
//         setTimeout(() =>
//             res(`Order for ${order} is been placed`)
//             , delay)
//     })
// }

// placeOrder("shoes").then(console.log)

// 10. In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

// function brewCoffee(type) {
//     return new Promise((res) => {
//         let delay = Math.random() * 2000;
//         setTimeout(() =>
//             res(`${type} is ready! ☕`)
//             , delay)
//     })
// }
// brewCoffee("Latte").then(console.log)

// 11. You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

// function filterProducts(products, criterion) {
//     return products.filter(p =>
//         Object.keys(criterion).every(key => p[key] === criterion[key])
//     )
// }
// console.log(filterProducts(
//     [{ name: "Laptop", brand: "Dell" }, { name: "Phone", brand: "Apple" }],
//     { brand: "Apple" }
// ));

// 12. You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

// function setAuthToken(token, expiryMs=60000) {
//   let item = { value: token, expiry: Date.now()+expiryMs };
//   localStorage.setItem("authToken", JSON.stringify(item));
// }
// setAuthToken("abcd1234", 5000);

// 13. You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

// function calculateTotal(cart) {
//     return cart.reduce((sum, p) => sum + p.price * p.qty, 0)
// }
// console.log(calculateTotal([{ price: 100, qty: 2 }, { price: 50, qty: 3 }]))

// 14. You are developing a single-page application with a smooth scrolling effect. Implement a function named smoothScrollToTop that smoothly scrolls the window to the top when called.

// function smoothScrollToTop() {
//     window.scrollTo({ top: 0, behavior: "smooth" })
// }