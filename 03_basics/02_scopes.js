// let a = 10;
// const b = 20
// var c = 30
// console.log("a");
// console.log("b");
// console.log("c");

//var ka kabhi bhi use hi nhi karna kyonki var block scope ke bahar bhi global me value ko print kar dega
let a = 300;
if (true){
    let a = 10//agar hum isko comment our karen to bahar ki value ko hum block me use kar sakte hain per block ki vlaue ko hum bahar use nhi kar sakte.
    const b = 20
    // console.log(a)//curly brace ke andar block scope or bahar global scope
    function addNum(){

    }
}
// console.log(a)


// function one(){
//     const userName = "Anuruddh Pratap Singh"
//     function two(){
//         const website = "Youtube"
//         console.log(userName)
//     }
//     // console.log(website)//error kyonki function ke bahar call not allowed.
//     two()
// }
// console.log(one())

if (true){
    const userName = "Anuruddh pratap Singh"
    if (userName == "Anuruddh pratap Singh"){
        const websiteName = " ki website"
        console.log(userName + websiteName);
    }
    // console.log(websiteName); //can't use 
    console.log(userName);
}
// console.log(userName); //cant use


// +++++++++++++++++++=interesting=++++++++++++
function addOne(num){
    return num + 1
}
console.log(addOne(5))

const addTwo = function(num){
    return num + 2
}//is tarike se bhi fn declare karte hain
console.log(addTwo(5))


//now what is the problem
console.log(addOne(5)) //No error
function addOne(num){
    return num + 1
}


// console.log(addTwo2(5)) //isme ayega error, hum is method me function declaraation se phle call nhi kar sakte
const addTwo2 = function(num){
    return num + 2
}






