function sayMyName() {
  console.log("h");
  console.log("i");
  console.log("t");
  console.log("e");
  console.log("s");
  console.log("h");
}
// sayMyName()

// function addThreeNumbers(number1 , number2,number3){
//     console.log(number1 + number2 + number3)
// }   //number1 number2, number3 are the parameters.
// addThreeNumbers(1,2,5)   //call karate hain tab unko bola jata hai arguments.
// addThreeNumbers(1,3,"2a")
// addThreeNumbers(1,"2a",3)
// addThreeNumbers(1,null,5)
// addThreeNumbers(1,5,null)

// const result = addThreeNumbers(2,3,5)
// console.log("Result :",result);  //undefined

function addThreeNumbers(number1, number2, number3) {
//   let result = number1 + number2 + number3;
//   return result;
     return number1 + number2 + number3;

}
const yourResult = addThreeNumbers(5, 5, 5);
// console.log("Result is ", yourResult);



function loginUserMessage(userName){
    if(!userName){
        console.log("Please enter a username")
    }
    return `${userName} just logged IN`
}

// console.log(loginUserMessage())
// console.log(loginUserMessage("Anuruddh Pratap Singh"))



function loginUserMessage(userName = "sam"){
    if(!userName){
        console.log("Please enter a username")//ab hum is block me kabhi jayege hi nhi kyonki iski valur ab kabhi bhi undefined nhi ho sakti..kyonki hum uper defined kar di hai.

        //username sam default value hai agar koi valur pass nhi karege to default me ye aa jaaygi
    }
    return `${userName} just logged IN`
}

// console.log(loginUserMessage())
// console.log(loginUserMessage("Anuruddh Pratap Singh"))



//rest operator(same as spread operator by notation)
function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice( 100, 200, 500, 1000, 2000, 5000));//...num1 called rest operator which bindup all the given values to an array.ab looping se pure cart ki value add kar sakte hain

function calculateCartPrice1(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice1( 100, 200, 500, 1000, 2000, 5000));


const user = {
    userName : "Anuruddh Pratap Singh",
    price : 199
}

function handleObject(anyObject){
    // console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}
// handleObject(user)
//we can also pass direct object like
// handleObject({userName : "Anuruddh Pratap Singh",
// price : 199})

//array ka use function me
myNewArray = [ 99, 199, 299, 399, 499 ]

function returnSecondValue(getSecond){
    return getSecond[1]
}
console.log(returnSecondValue(myNewArray))//or
console.log(returnSecondValue([ 99, 199, 299, 399, 499]));

