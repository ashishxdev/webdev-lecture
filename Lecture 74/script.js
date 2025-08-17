let button = document.getElementById("btn")
// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// button.addEventListener("click",()=>{
//     // alert("I was clicked! Hurray")
//     document.querySelector(".box").innerHTML = "<b>Yo u were clicked </b> Enjoy ur click"
//     // document.getElementsByClassName("box")[0].innerHTML = "<b>Yo u were clicked </b> Enjoy ur click"
// })

button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML = "<b>Yo u were clicked </b> Enjoy ur click"
})

button.addEventListener("contextmenu",()=>{
    alert("Dont hack us by right click please")
})

document.addEventListener("keydown",(e)=>{
    console.log(e.key, e.keyCode)
})