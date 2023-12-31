let score = "33";

console.log(typeof score);
console.log(typeof (score));

let scoreInNumber = Number(score);
console.log(scoreInNumber);
console.log(typeof scoreInNumber);
//NaN means not a number
let value = "33abc";
let coreInNumber = Number(value);
console.log(coreInNumber);//this will give nan which means it is not a number;
console.log(typeof coreInNumber);//this will give number because we convert it into a number

//if it is a boolean expression
let alue = true;
let oreInNumber = Number(alue);
console.log(oreInNumber);
//same u can check for null and undefined



//"33" => 33
//"33abc"  => NaN
// true => 1; false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);//for converting into boolean
console.log(booleanIsLoggedIn);


let sLoggedIn = "";
let booleanIsLogedIn = Boolean(sLoggedIn);//for converting into boolean
console.log(booleanIsLogedIn);//you get a false value


let LoggedIn = "Anuruddh";
let boleanIsLogedIn = Boolean(LoggedIn);//for converting into boolean
console.log(boleanIsLogedIn);//you get a true value


let sumNumber = 3;
let sumNumbertostring = String(sumNumber);
console.log(sumNumbertostring);//for converting it into string
console.log(typeof sumNumbertostring);



//*********************operation************//

let values = 3;
let negvalue = -values;
console.log(negvalue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2&2);



let str1 = "hello"
let str2 = " hitesh"
let str3 = str1 + str2;
console.log(str3);

str4 = 1 +"2"
console.log(1 +"2");
console.log("1"+2);
console.log(typeof str4);


console.log("1" + 2 +2);
console.log(1 + 2 +"2");//agar string se phle koi sa sum karaoge to to ho jayega varna agar string phle aa gyi to pura code string me convert ho jayega


console.log(true);//this give true 
console.log(+true);//this will give the output as 1
// console.log(true+);//this will thrown an error
console.log(+"");//this will give valuee as zero because empty string give you a false value

let num1,num2,num3;
num1 = num2 = num3 =2+2;
console.table([num1,num2,num3]);


let gamecounter = 100;
gamecounter++;
++gamecounter;
console.log(gamecounter);

