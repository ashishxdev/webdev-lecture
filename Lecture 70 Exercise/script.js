console.log("Assigning Random Colors to boxes")

document.querySelectorAll(".box").forEach(e => {
    console.log(r = Math.floor(Math.random() * 256))
    console.log(g = Math.floor(Math.random() * 256))
    console.log(b = Math.floor(Math.random() * 256))
    e.style.backgroundColor = `rgb(${r},${g},${b})`
})

