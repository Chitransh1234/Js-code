function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username="hi"){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Chitransh"));
// console.log(loginUserMessage("Chitransh"));

function calculateCartPrice(val1,val2,...num1){
    return num1;
}

//These 3 dots represents rest and spread operators.
// console.log(calculateCartPrice(200,400,500,1000));

//pass Objects in functions
const user={
    username:"chitransh",
    number:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and number is ${anyobject.number}`);
}
// handleObject(user);
// handleObject({
//     username:"sam",
//     number:399
// })


const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[3]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));
