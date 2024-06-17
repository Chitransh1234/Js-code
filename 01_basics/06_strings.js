const name="Chitransh"
const repoCount=50

// console.log(name+ repoCount+"Value");
//The above syntax is not used in today
//use back ticks
// the syntax is called string interpolation
console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

//String declaration
const gameName=new String('chitransh-CJ')

console.log(gameName[0]);
console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4);
console.log(newString);

const anotherString=gameName.slice(-8,4);
console.log(anotherString);

const newStringOne="  Chitransh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://google.com/chitransh%20jain"
console.log(url.replace('%20','-'));

console.log(url.includes('chitransh'));

console.log(gameName.split('-'));