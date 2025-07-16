a1 = "Crazy"
a2 = "Amazing"
a3 = "Fire"

s1 = "Engine"
s2 = "Foods"
s3 = "Garments"

w1 = "Bros"
w2 = "Limited"
w3 = "Hub"


//for adjective
function adjective(){
    r = Math.random()
    if (r < 0.33) {
        return a1
    }
    if (r >= 0.33 && r < 0.66) {
        return a2
    }
    if (r > 0.66) {
        return a3
    }
}


//for shop name
function shopname(){
    r = Math.random()
    if (r < 0.33) {
        return s1
    }
    if (r >= 0.33 && r < 0.66) {
        return s2
    }
    if (r > 0.66) {
        return s3
    }
}


//for another word
function another(){
    r = Math.random()
    if (r < 0.33) {
        return w1
    }
    if (r >= 0.33 && r <= 0.66) {
        return w2
    }
    if (r > 0.66) {
        return w3
    }
}

biz=adjective()+shopname()+another()
console.log(biz)