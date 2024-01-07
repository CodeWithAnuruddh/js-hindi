//immidiately invoked function expressions(IIFE)

function two(){
    console.log(`DB connected`);
}
two();

//now how to use iife syntax ()();

(function two(){      //named iife
    console.log(`DB connected`);
})  ();  //last semicolon lagana jaruri hai nahi to error ayega

// now one more type by arrow method

( (name) => {
    console.log(`DB connected Two ${name}`);
} ) ('hitesh');