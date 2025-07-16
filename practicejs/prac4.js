let s = "vidhi\'"
console.log(s.length)
console.log(s.includes("z"))

let s2 = "JAVASCRIPT"
console.log(s2.toLowerCase())
// console.log(s2.toLocaleLowerCase())

let s3 = "please give Rs 1000"
result = ""
for (let index = 0; index < s3.length; index++) {
    if("1234567890".includes(s3.charAt(index))){
        result+=s3.charAt(index)
        console.log(result)
    }
}
console.log(result)

// let str="string"
// str.slice(4,5)="a"

// for (let index = 0; index < s3.length; index++) {
//     if (typeof s3[index]) {
//         result += index
//         console.log(result)
//     }
// }
// for (const key in s3) {
//     result += key
//     console.log(result)
// }
// console.log(result)