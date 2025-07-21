// async function hack() {
//     let p1 = await new Promise((resolve) => {
//         setTimeout(async () => {
//             let l1 = document.createElement('div')
//                 l1.innerHTML = "Initializing hacking"
//                 document.body.appendChild(l1)
//                 await dotted(l1)
//         }, Math.random() * 7000)
//         resolve()
//     }).then(
//         res => {
//             msg2()
//         }
//     )
// }

// async function msg2() {
//     let p2 = await new Promise((resolve) => {
//         setTimeout(async () => {
//             let l2 = document.createElement('div')
//                 l2.innerHTML = "Reading files"
//                 document.body.appendChild(l2)
//                 await dotted(l2)
//         }, Math.random() * 7000)
//         resolve()
//     }).then(
//         res => {
//             msg3()
//         }
//     )
// }


// async function msg3() {
//     let p3 = await new Promise((resolve) => {
//         setTimeout(async () => {
//             let l3 = document.createElement('div')
//                 l3.innerHTML = "Sensitive information detected"
//                 document.body.appendChild(l3)
//                 await dotted(l3)
//         }, Math.random() * 7000)
//         resolve()
//     }).then(
//         res => {
//             msg4()
//         }
//     )
// }

// async function msg4() {
//     let p4 = await new Promise((resolve) => {
//         setTimeout(async () => {
//             let l4 = document.createElement('div')
//                 l4.innerHTML = "Sending data to server"
//                 document.body.appendChild(l4)
//                 await dotted(l4)
//         }, Math.random() * 7000)
//         resolve()
//     }).then(
//         res => {
//             msg5()
//         }
//     )
// }

// async function msg5() {
//     let p5 = await new Promise(async (resolve) => {
//         setTimeout(async () => {
//             let l5 = document.createElement('div')
//             l5.innerHTML = "Cleaning up"
//             document.body.appendChild(l5)
//             await dotted(l5)
//         }, Math.random() * 7000)
//         resolve()
//     })
// }

// hack()

// function dotted(ele) {
//     return new Promise((resolve) => {
//         let count = 3
//         function dots() {
//             ele.innerHTML = ele.innerHTML + "."
//         }
//         const inter = setInterval(() => {
//             if (count > 0) {
//                 dots()
//             }
//             else {
//                 clearInterval(inter)
//                 resolve()
//             }
//             count -= 1
//         }, 1000);
//     })

// }


// // let l1 = document.createElement('div')
// // l1.innerHTML = "just got created"
// // document.body.appendChild(l1)
// // await dotted(l1)

// // document.querySelector(".hacklines").insertAdjacentHTML("beforeend","I just created this element")
// // sentence.innerHTML="I just created this element"
// // await await dotted(sentence)

async function hack() {
    let l1 = document.createElement('div');
    l1.innerHTML = "Initializing hacking";
    document.body.appendChild(l1);
    await dotted(l1);
    await msg2();
}

async function msg2() {
    let l2 = document.createElement('div');
    l2.innerHTML = "Reading files";
    document.body.appendChild(l2);
    await dotted(l2);
    await msg3();
}

async function msg3() {
    let l3 = document.createElement('div');
    l3.innerHTML = "Sensitive information detected";
    document.body.appendChild(l3);
    await dotted(l3);
    await msg4();
}

async function msg4() {
    let l4 = document.createElement('div');
    l4.innerHTML = "Sending data to server";
    document.body.appendChild(l4);
    await dotted(l4);
    await msg5();
}

async function msg5() {
    let l5 = document.createElement('div');
    l5.innerHTML = "Cleaning up";
    document.body.appendChild(l5);
    await dotted(l5);
}

function dotted(ele) {
    return new Promise((resolve) => {
        let count = 3;
        function dots() {
            ele.innerHTML += ".";
        }
        const inter = setInterval(() => {
            if (count > 0) {
                dots();
            } else {
                clearInterval(inter);
                resolve();
            }
            count--;
        }, 1000);
    });
}

hack();

