// const tinderUser= new Object() //singleton object  
const tinderUser={}
//object 
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser);
const regularUser={
    email:"someone@gmail.com",
    fullname:{
        userfullname:{
            firstName:"chitransh",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstName);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1, ...obj2}
console.log(obj3);


const users=[
    {

    },
    {

    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        
    }
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



//

const course={
    coursename:"js",
    price:"999",
    courseInstructor:"chitransh"
}
// course.courseInstructor

const {courseInstructor:instructor}=course //this is object destructuring
// console.log(courseInstructor);
// console.log(instructor);


// const navbar=({company})=>{

// }
// navbar(company="chitransh")

//array destructuring is also possible but has less use.

// *****************API******************
// {
//     "name":"chitransh",
//     "coursename":"js",
//     "price":"free"

// }
// [
//     {},
//     {},
    // {}
// ]
// the APIs can be fetched according to the need and the json 
//formatter tool is used to elaborate and make the text of API in
//a readable format.
// This is only the basic of APIs .


