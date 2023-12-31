//Dates

let myDate = new Date();
// console.log(myDate)//show hard format of date

// console.log(myDate.toString());//day date and time showing
// console.log(myDate.toDateString());//day and date showing
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());//date and time showing
// console.log(typeof myDate)


let myCreatedDate = new Date(2020, 0,23);//month starting with zero in js
let myCreatedDate2 = new Date(2020, 0,23,5,3);//5,3 means 5 bajkar 3 minutes.
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate2.toString());

let myCreatedDate3 = new Date("2023-01-22")//yy-dd-mm in this month not started with zero.
// console.log(myCreatedDate3.toString());

let myCreatedDate4 = new Date("01-12-2023");
// console.log(myCreatedDate4.toLocaleString());


/*************TimeStamp****************/
let myTimeStamp = Date.now() //Time started from 1 jan 1970 till now in milisecond.
// console.log(myTimeStamp);
// console.log(myCreatedDate4.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate.toString())
// console.log(newDate.getHours())
// console.log(newDate.getMonth()+ 1)


newDate.toLocaleString('default',{
    weekday:"long",
})

