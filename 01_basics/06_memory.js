//There are two type of memory

/* Stack memory :-
                This memory used in primitive datatypes to stores string boolean number bigint null undefined EventCounts.
                or ye uski copy bana deta hai
*/
let myInstaId = "apsingh56"
let myanotherId = myInstaId;
myanotherId = "bpsingh"

console.log(myInstaId);
console.log(myanotherId);
    

  /*  Heap memory :-
                This memory used in non primitive or reference datatypes like array object and function.
                agar hum iski kisi value meai  change karte hain to wo original value me change ho jayega jisse dono ka answer same hi ayega.
*/
let userOne = {
  email : "anuruddhpratapsingh82974@gmail.com",
  upi   : "userOne.paytm",
  password : 8765
}
let userTwo = userOne  //both will get changed in heap or non primitive bcz it takes changes in the original value 
userTwo.email = "aps902770@gmail.com"
userTwo.password = 23456

console.log(userOne)
console.log(userTwo);



