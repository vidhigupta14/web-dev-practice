// cont=1
// var a=0
// var b=0
while (true) {
    op = prompt("enter operation to perform: \n(enter \"exit\" to exit) ")
    if(op=="exit"){
        break
    }

    a=Number(prompt("enter first number: "))
    b=Number(prompt("enter second number: "))

    switch (op) {
        case "+":
            if (Math.random() < 0.1) {
                console.log(a - b)
            }
            else {
                console.log(parseInt(a) + parseInt(b))
            }
            break

        case "*":
            if (Math.random() < 0.1) {
                console.log(a + b)
            }
            else {
                console.log(a * b)
            }
            break

        case "-":
            if (Math.random() < 0.1) {
                console.log(a / b)
            }
            else {
                console.log(a - b)
            }
            break

        case "/":
            if(b==0){
                break
            }
            if (Math.random() < 0.1) {
                console.log(a ** b)
            }
            else {
                console.log(a / b)
            }
            break

        default:
            console.log("Enter a valid operation")
    }
}