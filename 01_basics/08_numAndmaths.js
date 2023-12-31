const score = 400
// console.log(score)

const balance = new Number(100)//ise new object me define kiya gaya hai jo ki number type ka hai;
// console.log(balance);
// console.log(balance.toString().length)
// console.log(typeof balance);//gives object
// console.log(balance.toFixed(5));//give 100.00000


const otherNumber1 = 23.8966
// console.log(otherNumber1.toPrecision(3))//show three values from left.
const otherNumber2 = 123.8966
// console.log(otherNumber2.toPrecision(3))

const otherNumber3 = 11293.8966
// console.log(otherNumber3.toPrecision(3));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString())//bydefault give commas according to us standerd
// console.log(hundreds.toLocaleString('en-IN'))//bydefault give commas according to Indian standerd



//*************Maths************ */
// console.log(Math)
// console.log(Math.abs(-4));//gives always positive value
// console.log(Math.round(4.5))//less than 4.5 gives 4 and more than or equal to 4.5 gives 5.
// console.log(Math.ceil(4.1))// give 5
// console.log(Math.floor(4.9))//give 4

// console.log(Math.min(3,6,78,5,4,3,5,3,22,22))
// console.log(Math.max(3,6,78,5,4,3,5,3,22,22))


console.log(Math.random())//always between 0 and 1
const randomGen =( Math.random()*10 )+ 1;//for avoiding 0 we apply +1.
console.log(Math.floor(randomGen));


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min + 1) + min));




