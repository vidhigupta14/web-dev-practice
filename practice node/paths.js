import path from "path";

let myPath="D:\\web dev\\practice node\\script.cjs";
// console.log(myPath.dirname);
console.log(path.dirname(myPath))
console.log(path.extname(myPath))
console.log(path.basename(myPath))
console.log(path.join("C:/", myPath))