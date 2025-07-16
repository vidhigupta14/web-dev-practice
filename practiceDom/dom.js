document.body.childNodes
NodeList(13) [text, div.nav, text, table, text, div.ele, text, script, text, comment, text, script, text]
document.body.childNodes[5].firstElementChild.style.backgroundColor="green"
'green'
document.body.childNodes[5].lastElementChild.style.backgroundColor="green"
'green'
document.getElementsByTagName("li")
HTMLCollection(4) [li, li, li, li]0: li1: li2: li3: lilength: 4[[Prototype]]: HTMLCollection
let lists=document.getElementsByTagName("li")
undefined
list=document.getElementsByTagName("li")
HTMLCollection(4) [li, li, li, li]
for(var i=0; i<list.length; i++){
    list[i].style.backgroundColor="cyan"
}

col=["red","green","blue","cyan","aqua","pink","purple","brown","coral","cadetblue"]
boxes=document.querySelectorAll(".box")
boxes.forEach(e => {
    e.style.backgroundColor=col[Math.floor(Math.random()*10)]
    e.style.color=col[Math.floor(Math.random()*10)]
});
console.log(Math.floor(Math.random()*10))