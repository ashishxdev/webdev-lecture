// const http = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World <h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// If in package json   "type": "commonjs", then it will run this perfectly. 
// require modules are synchronously loaded
// const http = require('node:http');
// // To import we use require
// const fs = require('fs');

// If in package json   "type": "module", (ES6) then it will not run above code perfectly. 
// It load modules are asynchronously
// import http from "http";
// import {a,b,d} from './mymodule.js'
// console.log(a,b,d)

// import obj from "./mymodule.js"
// console.log(obj)

// import aashish from "./mymodule.js"
// console.log(aashish)

const a = require('./mymodule2.js')
console.log(a, __dirname, __filename)
// console.log(a)

// Common.js - in interview asks from where exports require coming it comes from this function
// (function(exports, require, module, __filename, __dirname){
//     // Module code actually lives here
// });