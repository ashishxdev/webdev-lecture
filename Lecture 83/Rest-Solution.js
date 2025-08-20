// 1. The Magical Sorting Hat
function sortingHat(students) {
  return students.map(name => {
    if (name.length < 6) return `${name} → Gryffindor`;
    if (name.length < 8) return `${name} → Hufflepuff`;
    if (name.length < 12) return `${name} → Ravenclaw`;
    return `${name} → Slytherin`;
  });
}
console.log(sortingHat(["Ron", "HarryPotter", "Cedric", "HermioneGranger"]));


// 2. The Double Trouble
function doubleTrouble(arr) {
  return arr.map((num, i) => 
    (i > 0 && num === arr[i-1]) ? num : num*2
  );
}
console.log(doubleTrouble([2,2,3,4,4]));


// 3. The Mirror Mirror
function mirrorString(str) {
  return str + str.split("").reverse().join("");
}
console.log(mirrorString("magic"));


// 4. The Password Validator
function validatePassword(pwd) {
  return pwd.length >= 8 &&
         /[A-Z]/.test(pwd) &&
         /[a-z]/.test(pwd) &&
         /\d/.test(pwd);
}
console.log(validatePassword("Abcd1234")); // true


// 5. The Sum Selector
function sumUntilNegative(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num < 0) break;
    sum += num;
  }
  return sum;
}
console.log(sumUntilNegative([5, 3, 2, -1, 10]));


// 6. The Vowel Counter
function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels("Hello World"));


// 7. The Local Storage Manager
function saveNoteToLocalStorage(note) {
  localStorage.setItem("note", JSON.stringify(note));
}
saveNoteToLocalStorage({ title: "Todo", text: "Study JavaScript" });


// 8. Async Array Mapping
async function asyncMap(arr) {
  return Promise.all(arr.map(num =>
    new Promise(res => setTimeout(() => res(num*2), 500))
  ));
}
asyncMap([1,2,3]).then(console.log);


// 9. The Asynchronous Shopper
function placeOrder(order) {
  return new Promise(res => {
    let delay = Math.random()*2000;
    setTimeout(() => res(`Order for ${order} confirmed!`), delay);
  });
}
placeOrder("Shoes").then(console.log);


// 10. The Coffee Machine
function brewCoffee(type) {
  return new Promise(res => {
    let delay = Math.random()*2000;
    setTimeout(() => res(`${type} is ready! ☕`), delay);
  });
}
brewCoffee("Espresso").then(console.log);


// 11. The Array Filterer
function filterProducts(products, criterion) {
  return products.filter(p =>
    Object.keys(criterion).every(key => p[key] === criterion[key])
  );
}
console.log(filterProducts(
  [{name:"Laptop", brand:"Dell"}, {name:"Phone", brand:"Apple"}],
  {brand:"Apple"}
));


// 12. The Token Manager
function setAuthToken(token, expiryMs=60000) {
  let item = { value: token, expiry: Date.now()+expiryMs };
  localStorage.setItem("authToken", JSON.stringify(item));
}
setAuthToken("abcd1234", 5000);


// 13. The Shopping Cart Totalizer
function calculateTotal(cart) {
  return cart.reduce((sum, p) => sum + p.price*p.qty, 0);
}
console.log(calculateTotal([{price:100, qty:2}, {price:50, qty:3}]));


// 14. The Window Scroller
function smoothScrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
