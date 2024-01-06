let son1 = prompt("1-sonnni kiriting")
let son2 = prompt("2-sonnni kiriting")
let son3 = prompt("3-sonnni kiriting")

if (son1 < son2 && son1 > son3) {
    console.log("o'rta son ",son1)
}else if(son1 < son3 && son1 > son2) 
    console.log("o'rta son ",son1)
else if (son2 < son1 && son2 > son3) {
    console.log("o'rta son ",son2)
}else if(son2 < son3 && son2 > son1) 
    console.log("o'rta son ",son2)
else if (son3 < son2 && son3 > son1) {
    console.log("o'rta son ",son3)
}else if(son3 < son1 && son3 > son2) 
    console.log("o'rta son ",son3)