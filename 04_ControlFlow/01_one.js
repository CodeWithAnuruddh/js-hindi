//if statement
if (true){  //true hoga to execute hoga agar false to nhi hoga

}

const isUserLoggedIn = true
if (isUserLoggedIn){
    console.log(`user permit to logged In`)
}

//operator
// <, >, <=, >=, ==, !=, ===(strict equal = this checks the value as well as datatype)
console.log(2=="2")
console.log(2==="2")

if(2=="2"){
    console.log("executed two equals")
}
if(2==="2"){
    console.log("executed three equals")
}

const temperature = 41;
if (temperature<50){
    console.log("temperature is less than 50")
}
else{
    console.log("temperature is greater than 50")
}

//scope ki kahani
const score = 200;
if (score>100){
    const power = "fly"
    console.log(`User Power: ${power}`)
}
// console.log(`User Power: ${power}`)//cz it is blocked scope


//direct likho
const balance = 1000;
if (balance >500) console.log("test") , console.log("test2");//aise mat likho execute to ho jayega per accha nhi lagta


//Nested if else
if(balance<500){
    console.log(`less than 500`)
}
else if(balance<750){
    console.log("less than 750")
}
else if(balance<900){
    console.log("less than 900");
}
else{
    console.log("greater than 900");
}


//how they use in real life

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy courses")
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in")
}

