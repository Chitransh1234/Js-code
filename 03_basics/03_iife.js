//Immediately Invoked Function Expressions(IIFE)
//Jo function immediately execute ho jaye
//global scope ke pollution se problem hoti hai kayi baar
//uss global scope ya jo vaha declaration hai uske pollution ko
//hatane ke liye IIFE ka use karte hai
(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

( (name)=>{
    console.log(`DB CONNECTED 2 ${name}`)
} )('hitesh')

