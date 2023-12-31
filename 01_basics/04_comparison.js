/*console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);*/

console.log("2" > 1);
console.log("02" > 1);//both gives a true value


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);//comparison convert nulll to a number and treating it as zero.


console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);//in these cases it should give you false value.

console.log("2" == 2);//in this case it convert string 2 as number and gives true output.
console.log("2" === 2);//in this case it also check the datatype by third equal sign.