document.querySelector(".container").innerHTML
'\n        <div class="txt">Hellooooo</div>\n        <div class="txt">Javascript</div>\n    '

document.querySelector(".container").textContent
'\n        Hellooooo\n        Javascript\n    '

document.querySelector(".txt").setAttribute("style", "color: red")

document.querySelector(".txt").hasAttribute("style")
// true

document.querySelector(".txt").removeAttribute("style")

document.querySelector(".txt").attributes
// NamedNodeMap {0: class, class: class, length: 1}

let d = document.createElement('div')
d.className = "dynamic"
d.innerHTML = "<span>New div added.</span>"
// document.body.append(d)
// document.body.prepend(d)
// document.body.before(d)
// document.body.after(d)
// document.querySelector(".txt").replaceWith(d)

document.querySelector(".container").insertAdjacentHTML("beforebegin", '<span>Hey i am added.</span>')
document.querySelector(".container").insertAdjacentText("afterbegin", 'Practice')
document.querySelector(".container").insertAdjacentText("beforeend", 'Practice')
document.querySelector(".container").insertAdjacentText("afterend", 'Practice')

function createCard(title, channel, views, months, duration, thumbnail) {
    let viewstr
    if(views<1000){
        viewstr=views
    }
    else if(views>999 && views<1000000){
        viewstr=views/1000 + "K"
    }
    else if(views>=1000000){
        viewstr=views/100000 + "M"
    }
    let html = `<div class="box">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <span class="title"><h3>${title}</span>
                <div class="details"><p>${channel}  .  ${viewstr}   .  ${months} months ago</p></div>
            </div>
        </div>`

    document.querySelector(".card-holder").innerHTML=document.querySelector(".card-holder").innerHTML + html
}

createCard("Web Development #2 | CSS", "Vdihi Gupta", 28500, 5, "12:59", "https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

//https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

