//for loop
const array = [1,3,5,6,4,3,2]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
     if (element == 5){
        // console.log("5 is the best number");
     }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`\nOuter loop values:\n ${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop values ${j} and outer loop value ${i}`)
        // console.log(i + '*' + j + '=' + i*j);
    }
    
}


const myArray = ["flash", "batman", "superman" ]
// console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
    
}


//break and continue
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        // console.log(`Detected ${index}`);
        break;
    }
    // console.log(`value of index is ${index}`)
    
}


for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected ${index}`);
        continue;  
    }
    console.log(`value of index is ${index}`)
    
}