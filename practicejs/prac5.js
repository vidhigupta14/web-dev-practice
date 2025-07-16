a=[]
for(var i=0; i<5; i++){
    let n=prompt("enter a number: ")
    a.push(n)
}
let n=9
while(n!=0){
    n=prompt("enter a number: ")
    a.push(n)
}
console.log(a)

b=[8,70,36,46,27,30]
function divbyten(n){
    if(n%10==0){
        return true
    }
}
console.log(b.filter(divbyten))

c=[]
for(var i=0; i<5; i++){
    let n=prompt("enter a number: ")
    c.push(n**2)
}
console.log(c)

function multiply(a, b){
    return a*=b
}
const num=[1,2,3,4,5]
fact=num.reduce(multiply)
console.log(fact)