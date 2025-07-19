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

let d=document.createElement('div')
d.className="dynamic"
d.innerHTML="<span>New div added.</span>"
// document.body.append(d)
// document.body.prepend(d)
// document.body.before(d)
// document.body.after(d)
// document.querySelector(".txt").replaceWith(d)

document.querySelector(".container").insertAdjacentHTML("beforebegin", '<span>Hey i am added.</span>')
document.querySelector(".container").insertAdjacentText("afterbegin", 'Practice')
document.querySelector(".container").insertAdjacentText("beforeend", 'Practice')
document.querySelector(".container").insertAdjacentText("afterend", 'Practice')

