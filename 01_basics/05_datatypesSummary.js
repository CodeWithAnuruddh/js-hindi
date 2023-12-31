// //primitive datatypes
// String
// Number
// Boolean
// // Null 
// undefined
// BigInt
// symbol //kisi bhi value ko special banane ke liye hum symbol ka use karte hain

// //Non primitive  and reference datatype
// Arrays
// objects
// // function


//javascript is dynamically typed language because we should not have to declare everything.


const score = 100;
const scoreValue =100.3;//these both are numbers

const isLoggedIn = false//boolean
const outsideTemp = null;

let userEmail = undefined;
let usermail;//both syntaxes are correct.

const id = Symbol('123')
const anotherId = Symbol('123')
console.table([id,anotherId]);//i dont know why this is false..aisa symbol me hota h
console.log(id == anotherId);

const bigNumber = 764358766744n;//put n in last if you want to declare it as bigInt

//Non primitive datatype  array object function;
const heros = ["ironMan" , "spiderMan" , "shaktiMan"] //Array


//objects in javascript
//jo curly braces me key value pair me hote hai unko objects kaha jata h
let myObj = {
    name : "Anuruddh",
    age : 22,

}
console.log(typeof myObj)

//function
const myFunction = function(){
        console.log("hello")
}

console.log(typeof myFunction);
console.log(myFunction);


console.log(typeof heros); //array or object ka return type object hi aata hai


//or function ka return type function hi hota hai
