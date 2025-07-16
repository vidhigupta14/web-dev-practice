object={harry:98, rohan:70, akash:7}

for (let index = 0; index < object.length; index++) {
    console.log(index)
}

for (const key in object) {
    console.log(key + ":" + object[key])
}

do{
    let num=prompt("Enter a number: ")
}while(num!=5){
    console.log("Try again!")
}

function mean(n1,n2,n3,n4,n5) {
    console.log((n1+n2+n3+n4+n5)/5)
}

mean(1,2,34,56,7)