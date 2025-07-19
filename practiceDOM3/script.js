// let button1=document.querySelector(".btn1")
document.querySelector(".btn1").addEventListener("click", () => {
    alert("Button 1 was clicked.")
})
document.querySelector(".btn2").addEventListener("click", () => {
    alert("Button 2 was clicked.")
})
document.querySelector(".btn3").addEventListener("click", () => {
    alert("Button 3 was clicked.")
})

document.querySelector(".save").addEventListener("click", () => {
    const link = document.querySelector(".text").value
    document.querySelector(".bookmarks").innerHTML = document.querySelector(".bookmarks").innerHTML + `<li><a href=${link}>${link}</a></li><br>`
    document.querySelector(".text").value = ""
})



setInterval(() => {
    const path = document.querySelector('.st1')
    const currentFill = getComputedStyle(path).fill
    // document.querySelector("svg").classList.toggle(".st1")
    if (currentFill === "rgb(255, 255, 255)") {
        path.style.fill = "#FDDD7B"
    }
    else {
        path.style.fill = "#ffffff"
    }
}, 400)

// document.querySelector("svg").classList.toggle(".yellow")