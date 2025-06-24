/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

//bad practive but its async wait with blocking

// function sleep(milliseconds) {
//     return new Promise(resolve=>{
//         const start=Date.now();
//         while(Date.now()-start<milliseconds)
//         {
//             //busy waiting
//         }
//         resolve();
//     });
// }

//good practice non-blocking

function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}
console.log("Start");
sleep(3000).then(()=>{
    console.log("the three seconds are done !");
})