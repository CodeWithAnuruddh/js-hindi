const name = "Anuruddh"
const score = 56
console.log(name + " Pratap" + " Singh " +score );//This is the old way to represent it as this way and not a good programmer prfer it to write 

// how to write
console.log(`Hello my name is ${name} and i scored ${score} runs in my first match` )

const gameName = new String("Bgmi-freefire codmobile")
console.log(gameName);/*this method also used to declare in string and it give indexing as
0 :"B"
1: "g".....
and also the length and indexing and prototype and primitive value
prototype : String
Primitive value : "Bg" and much more methods available when you pasted this in chrome console.*/
console.log(gameName[0]);
console.log(gameName.__proto__)//this will gave u object.
console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,4);
console.log(newString)

const anotherString = gameName.slice(-15,6)//it slices from negative indexing.
console.log(anotherString);

// Trim and replace method
const newStringOne = "       anuruddh     "
console.log(newStringOne)
console.log(newStringOne.trim());//for removing spaces


const url ="https://hitesh.com/hitesh@29chaudhary"
console.log(url.replace('@29','_'));
console.log(url.includes('hitesh'))
console.log(url.includes('pitaji'))

console.log(gameName.split('i'))//i se hi split ho jayega.


