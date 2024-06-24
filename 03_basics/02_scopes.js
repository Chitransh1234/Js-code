let a=300
//Global scope
{
    let a=10
    const b=20
    var c=30
    //block scope
}
// console.log(a);
// console.log(b);
// console.log(c);// it gives output as var is not following scope 


function one(){
    const username="chitransh"

    function two(){
        const website="utube"
        // console.log(username);
    }
    // console.log(website);

    two()

}

// one()
if(true){
    const username="chitransh "
    if(username=="chitransh "){
        const website="youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

//++++++++++++++++++++Interesting+++++++++++++++++++++
addone(5)
function addone(value){
    return num+1
}

addTwo(5)
const addTwo=function(num){
    return num+2
}
