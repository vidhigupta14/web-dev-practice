// const math=require('./math');

// console.log(math.subtract(5,2));

// import {add} from './esm.js';
// console.log(add(5,2));

// console.log("dirname:", __dirname);
// console.log("filename:", __filename);
// console.log("process:", process);
// console.log("require:", require);

const http=require('http');
const server=http.createServer((req, res)=>{
    res.writeHead(200, {"content-Type": "text/plain"})
    res.end("First server created.")
})

server.listen(1425, ()=>{
    console.log("Server port is my birthday!!!")
})