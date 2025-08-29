// class complex {
//     constructor(real, i) {
//         // this.real = parseInt(real)
//         // this.complex = parseInt(i)
//         if (Number.isNaN(parseInt(real)) || Number.isNaN(parseInt(i))) {
//             throw Error("Not allowed.")
//         } else {
//             // this.real = parseInt(real)
//             // this.complex = parseInt(i)
//             this._real = parseInt(real)
//             this._complex = parseInt(i)
//         }
//     }
//     get num() {
//         return this._real + "+" + this._complex + "i"
//     }
//     set num([r, i]) {
//         if (Number.isNaN(parseInt(r)) || Number.isNaN(parseInt(i))) {
//             throw Error("Not allowed.")
//         } else {
//             this._real = parseInt(r)
//             this._complex = parseInt(i)
//         }

//     }
//     display() {
//         console.log(this.real + "+" + this.complex + "i")
//     }
//     add(r, i) {
//         if (Number.isNaN(parseInt(r)) || Number.isNaN(parseInt(i))) {
//             throw Error("Not allowed.")
//         } else {
//             let rl = this.real + parseInt(r)
//             let cmplx = this.complex + parseInt(i)
//             console.log(rl + "+" + cmplx + "i")
//         }

//     }
// }

// let n = new complex(23, 4)
// n.display()

// class Human{
//     constructor(name){
//         this.name=name
//         console.log("Hello"+this.name)
//     }
//     studies(){
//         console.log("maybe")
//     }
// }

// class student extends Human{
//     constructor(name){
//         super(name)
//     }
//     studied(){
//         console.log("true")
//     }
// }

// const a="the", b="no"
// const c={a, b}
// console.log(c)

// (function abc(){
//     console.log("running...")    //IIFE
// })()

// let [x, y, ...c]=[10,20,30,40,50,60]    //Destructuring
// console.log([x, y, c])

// const obj={a:1,b:2,c:3,d:4}
// const {a,d}=obj
// console.log({a,d})

// const x=[1,2,3,4,5]      //Spread syntax
// const y={...x}
// console.log(y)

// (function (){
//     setTimeout(() => {
//         console.log("hello")
//     }, 1000);
//     setTimeout(() => {
//         console.log("world")
//     }, 2000);
// })()

// function sum(a, b, c){
//     return parseInt(a)+parseInt(b)+parseInt(c)
// }
// let arr=[1,2,3]
// const arr2=sum(...arr)
// console.log(arr2/3)

// (function seconds(n){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve(console.log("true"))
//         }, n);
//     })
// })(3000)

// function guess(){
//     count=0
//     let n=Math.floor(Math.random()*100)
//     let ans=prompt("Guess a number between 0-100")
//     // console.log(n)
//     count+=1
//     while(ans!=n){
//         if(count===100){
//             console.log("You lost :(")
//             console.log("The number was"+n)
//             break
//         }
//         console.log("Try again...")
//         ans=prompt("Guess a number between 0-100")
//         count+=1
//     }
//     console.log("Correct! Your score is "+(100-count))
// }

