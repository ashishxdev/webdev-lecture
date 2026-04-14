console.log("Hello Let's start node.js")

// const { default: slugify } = require("slugify");
var slugify = require('slugify');

let a = slugify('some string have some value')
console.log(a)

// if you prefer something other than '-' as separator
let b = slugify('some is not a value for a person that have some thing in his life', '_+')
// const b = slugify('some st&&*(^%$$^^&ring', '_')  // some_string
console.log(b);

// Slugify - Replace spaces in a string with a separator
