const myArr1 = [1,2,3,45,5]
// console.log(myArr2[3]);

const myHeroes = ["shaktiman","Iron man","captain America","Hulk"]

const myArr = new Array(0,1,2,3,4,5)//this is the object of type array
// console.log(myArr);
// console.log(typeof myArr)

//Array Methods

// myArr.push(6);//for adding new values to array
// myArr.push(5);//for adding new values to array
// myArr.push(8);//for adding new values to array

// myArr.pop()//for removing last element

// myArr.unshift(9)//for adding 9 at zero index
// myArr.shift()//for removing the element of zeroth index
// console.log(myArr)

// console.log(myArr.includes(9))//for checking element is present or not
// console.log(myArr.indexOf(9))//for wrong value, answer will be -1
// console.log(myArr.indexOf(3))

// const newArr = myArr.join();//convert array to its datatype string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr)


//slice and splice
console.log("A " , myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B ",myArr);

const myArr2 = myArr.splice(1,3);//splice manupulates the original array , it removes the original array having the values lies at 1 to 3.
console.log(myArr2);
console.log("C ",myArr)




