import fs from 'fs';

// fs.writeFile('vidhi.txt', 'I just created this file', ()=>{
//     console.log('file created');
//     fs.readFile('vidhi.txt', (err, data)=>{
//         console.log('content: ', data.toString());
//     })
// })

// fs.appendFile('vidhi.txt', '\nI am appending this line', ()=>{
//     console.log('file appended');
// })

// console.log('done!');

let a=fs.writeFile('vidhi.txt', 'I just created this file', () => {
    console.log('file created');
});

let b=fs.appendFile('vidhi.txt', '\nI am appending this line', ()=>{
    console.log('file appended');
});

Promise.all([a,b]).then(()=>{
    console.log('done!');
}).catch((err)=>{
    console.log(err);
});


