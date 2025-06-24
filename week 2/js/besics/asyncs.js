const fs=require("fs")
// const data1=fs.readFileSync("a.txt","utf-8");
// const data2=fs.readFileSync("b.txt","utf-8");
// console.log(data1);
// console.log(data2);

// function cb(err,data)
// {
//     if(err)
//     {console.log(err);}
//     else
//    { console.log(data);}
// }
// fs.readFile("a.txt","utf-8",cb);

console.log("hi");
function bro(){
    console.log("hey bro");
}
setTimeout(bro,1000);
for(let i=0;i<10000000000;i++);
console.log("expensive op done");