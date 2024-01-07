//when we assume in string the value is true then it is called truthy..in this case we doesnt need to cmpare lets take an example..
const userEmail = "anuruddh@knit.ac.in"  //truthy value
if (userEmail){
    console.log("Got user email")
}
else{
    console.log("Don't have user email")
}


const haveUserEmail = "" //falsy value
if (haveUserEmail){
    console.log("Got user email")
}
else{
    console.log("Don't have user email")
}

const aveUserEmail = [] //truthy value
if (aveUserEmail){
    console.log("Got user email")
}
else{
    console.log("Don't have user email")
}


//falsy value

// false
// zero
// -0
// BigInt
// ""
// null
// undefined

//except them all are truthy value

//truthy value
// "0"
// 'false'
// "  "      //string k andar space
// // []
// {}
// // function(){}


const myArray = []
if(myArray.length === 0){
    console.log("Empty Array")
    // console.log(myArray[0])
}

const myObj = {}
if (Object.keys(myObj).length === 0){
    console.log("An Empty Object")
}

// console.log(false == 0);
// console.log(false == '');
// console.log(0 == '');


//Nullish coalescing Operator (??) : null undefined
// let val1 = 5 ?? 10
let val1 = null ?? 10  //10 ki jagah complex function use karege agar wo ans na de to null assign kardo warna jo output aaye usko print kar do
console.log(val1)

let val2 = undefined ?? 15
console.log(val2)

let val3 = null ?? 10 ?? 20
console.log(val3)

let val4 = null ?? 1-2
console.log(val4)


//ternary operator
// condition ? true : false

const iceTeaPrice =100
iceTeaPrice>=80 ? console.log("more than 80") : console.log("less than 80")