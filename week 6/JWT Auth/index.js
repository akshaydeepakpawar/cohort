const jwt=require("jsonwebtoken");
const secret_jwt="donttellanyone"

//decode ,verify,generate

const value={
    name:"akshay",
    accountNumber:321768976128
}

const token=jwt.sign(value,secret_jwt);
console.log(token);
