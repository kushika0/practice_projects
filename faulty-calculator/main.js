//This is the faulty calculator which gives incorrect output  (10% times )

let fault= Math.random()



let a=prompt("Fisrt number")
let b= prompt("Second Number")
let c=prompt("enter the operation")

let obj={
    "+":"-",
    "-":"*",
    "*":"/",
    "/":"+"
}

if (fault>0.1){
    alert(`The result is ${eval(`${a} ${c} ${b} `)}`)
}
else{
    c=obj[c]
   alert(`The result is ${eval(`${a} ${c} ${b} `)}`)
}
