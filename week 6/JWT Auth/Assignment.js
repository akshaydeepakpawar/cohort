// Assignment #1 - Write a function that takes in a username 
// and password and returns a JWT token with the username encoded. 
// Should return null if the username is not a 
// valid email or if the password is less than 6 characters. 
// Try using the zod library here

const jwt =require('jsonwebtoken')
const zod=require("zod")
const secret="secret";

const emailSchema=zod.string().email()
const passwordSchema=zod.string().min(6)

function signJWT(username,password)
{
    const usernameResponse=emailSchema.safeParse(username);
    const passwordResponse=passwordSchema.safeParse(password);
    if(!usernameResponse.success || !passwordResponse.success)
        return null;
    else return jwt.sign(username,secret)
}

const token=signJWT("anshjbasd@gmail.com","password");
console.log(token);

// Assignment #2 - Write a function that takes a jwt as input and 
//  returns true if the jwt can be DECODED (not verified). 
//  Return false otherwise

console.log(decodeJWT(token))

function decodeJWT(token)
{
    if(jwt.decode(token))
        return true;
    else return false;
}

// Assignment #3 - Write a function that takes a jwt as input 
// and returns true if the jwt can be VERIFIED. Return false otherewise

console.log(verifyJWT(token))

function verifyJWT(token)
{
    try {
        jwt.verify(token,secret);
        return true;
    } catch (error) {
        return false;
    }
}
