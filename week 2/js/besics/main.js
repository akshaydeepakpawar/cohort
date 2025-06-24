// Q1 
function sum(a,b) {
    return a+b; 
}
let ans=sum("12","34");
console.log(ans);

// Q2 
function canUvote(age) {
    if(age>18)
    {
        console.log("you can vote");   
    }
    else{
        console.log("u can't vote");
    }
}
canUvote(34) 
//Q3
function greet(user)
{
    var prename="Mr."
    if(user.gender=="female")
    {
        prename="Mrs."
    }
    console.log("hello "+prename+user.name+" you age is "+ user.age+" and your gender is "+user.gender);
}
let user={
    name:"akshay",
    age:23,
    gender:"male"
}
greet(user)