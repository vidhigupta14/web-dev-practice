// function main() {


// loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js", exec);

// function exec(sc) {
// loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js", exec);
// alert("Script loaded.")
// alert(sc.src)
//     return new Promise(resolve=>{
//         setTimeout(() => {
//             resolve("Done!")
//         }, 4000);
//     })
// }
function loadScript(src) {
    return new Promise((resolve, reject) => {
        let s = document.createElement('script')
        s.src = src
        s.onload = () => resolve(s)
        s.onerror = () => reject("Couldn't complete process.")
        document.head.append(s)
    })
}

async function callsies() {
    let a = await loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js");
    console.log(a.src)
    console.log("wow")
}

callsies()
// }

// main()

let studied = false; // change to false and test

let studyPromise = new Promise(function (resolve, reject) {
    if (studied) {
        resolve("yesss!!!")
    }
    else {
        reject("nooooo laboliittiiii :(")
    }
});

studyPromise
    .then(function (msg) {
        console.log(msg)
    })
    .catch(function (err) {
        console.log(err)
    });


function makeDessert(dessertName, callback) {
    console.log("Making " + dessertName + "...");

    setTimeout(function () {
        console.log("Dessert is ready: " + dessertName);
        callback(dessertName)
        // 👉 Now call the callback here
    }, 2000);
}

// Define a callback function here
// Example: function eatDessert() {}
function eatDessert(dessertName) {
    alert("Ate " + dessertName + "...Burrp~")
}

makeDessert("Brownies", eatDessert)
// Call makeDessert and pass the dessert + the callback
// Example: makeDessert("Brownie", eatDessert);

function finishedHomework() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Homework done!")
        }, 2000);
    })
}
async function doHomework() {
    let p = await finishedHomework()
    console.log(p)
}

doHomework()

let p = new Promise((reject) => {
    setTimeout(() => {
        reject("Declined.")
    }, 3000);
})

async  function getval() {
    try{
        let p = await new Promise((resolve, reject) => {
            // r=Math.random()
            // if(r<0.5){
            //     resolve("Pass!")
            // }
            // else{
            //     reject("Fail!")
            // }
        setTimeout(() => {
            reject("Declined.")
        }, 3000);
    })
    console.log(p)
    // console.log("Waited")
    }catch(err){
        console.log(err)
    }
}
getval()

function st(){
    return new Promise((resolve, reject) => {
        r=Math.random()
        if(r<0.5){
            resolve("Pass!")
        }
        else{
            reject("Fail!")
        }
    })
}

function add(){
    return new Promise((resolve, reject) => {
        r=Math.random()
        s=Math.random()
        if(r+s>1){
            resolve("greater than 1")
        }
        else{
            reject("smaller than 1")
        }
    })
}

function checkGreater(){
    return new Promise((resolve, reject) => {
        r=Math.random()
        s=Math.random()
        if(r>s){
            resolve("greater")
        }
        else{
            reject("smaller")
        }
    })
}


Promise.allSettled([st(), add(), checkGreater()])
    .then(resolve=>console.log(resolve))
    .catch(error=>console.log(error))

