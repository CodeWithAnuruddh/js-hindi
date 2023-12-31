//singleton
Object.create//for making singleton

//object literal

const mySym = Symbol("key1")
const jsUser = {
    name : "Anuruddh",
    mySym : "myKey2",//this is not symbol declaration it consider it as an string.
    [mySym] : "myKey1",//this is how we declare symbol in the object.
    "full Name" : "Anuruddh Pratap Singh",
    age : 20,
    location : "Etah",
     email : "anuruddhpratapsingh82974@gmail.com",
     isLoggedIn : false,
     lastLogindays : ["Monday", "Saturday"]
    

}
// console.log(jsUser.age)//we cant get full name by this method.u can use below method .but most of time we use this method to access key in objects
// console.log(jsUser["age"])

// console.log(jsUser["mySym"]);
// console.log(jsUser[mySym]);//not taking inverted commas while printing symbols

jsUser.email = "aps90277@gmail.com"
// Object.freeze(jsUser)//ab iske bad jsuser ki value change nhi ho saketi ya update nhi ho sakti
jsUser.email = "anuruddhsingh39"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user")//for adding greeting name ka funtion
}
jsUser.greetingTwo = function(){
    console.log(`Hello Js user , ${this.name}`)//``this is called string manupulation
}
jsUser.nunu = "good nunu";//for adding in object

// console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
console.log(jsUser)