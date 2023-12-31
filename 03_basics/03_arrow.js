const user = {
    userName : "Anuruddh pratap",
    price : 445,
    welcomeMessage : function(){
        console.log(`${this.userName} , welcome to website`)
        // console.log(this)//for printing the current context(jo bhi current variables hai unko)
    }
}

user.welcomeMessage()
user.userName = "hitesh"
user.welcomeMessage()

console.log(this)//give empty object//kyonki global ke andar koi context hi nhi hai

//browser ke andar jo global object hai wo hai window object jise hum access kar sakte hain console.log(this) se :- interview question


// function chaiOrCode(){
//     console.log(this);
// }
// chaiOrCode()



// function chaiOrCode(){
//     let userName = "hitesh"
//     console.log(this.userName);//we cant use this in functions we use this in objects
// }
// chaiOrCode()


// const chai = function () {
//     userName = "hitesh"
//     console.log(this.userName);//isse karke dekhte hain sayad access kar sake per nhi hoga
// }
// chai()


const chai =  () => {            //function ko hata ke small bracket ke aage arrow sign laga do bas ho gaya """ARROWFUNCTION"""
       userName = "hitesh"
       console.log(this.userName); ///ISME bhi nhi hoga//ans undefined
       console.log(this); ///ISME bhi nhi hoga//ans  {}
}
// chai()



// const chaiOrCode = () => {
//     console.log(this);
// } //nothing happens

const addTwo = (num1, num2) => {
    return num1 + num2
}
// console.log(addTwo(3,4))



//implicit return
// const addTwoNumbers = (num1, num2) => num1 + num2  //this is use more OR
const addTwoNumbers = (num1, num2) => (num1 + num2)  //no need of using return cz there is no curly braces.
console.log(addTwoNumbers(5,6))


//object declaration by this method
const objectUsingArrow = ( ) => ({userName : "anuruddh"})
console.log(objectUsingArrow())


//Explicit return :- jab hum return ka use karte hain 