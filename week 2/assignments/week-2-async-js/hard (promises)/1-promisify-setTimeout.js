/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(resolve=>setTimeout(resolve,n*1000));
}
function main(){
    console.log("hey 3 sec is done"); 
}
wait(3).then(main);

// module.exports = wait;
