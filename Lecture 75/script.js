// asynchronous actions
// console.log("Aashish is a hacker")
// console.log("Shumbham is a hucker")

// setTimeout(() => {
//     console.log("I am inside settimeout")
// }, 0);

// setTimeout(() => {
//     console.log("I am inside settimeout 2")
// }, 1000);

// console.log("The End")

// callback function
const fn = () => {
  console.log("Nothing")
}

const callback = (arg,fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = () => callback("Popcorn",fn);
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )