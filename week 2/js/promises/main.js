// class rectangle{
//     constructor(hight,width,color)
//     {
//         this.hight=hight;
//         this.width=width;
//         this.color=color;
//     }
//     area(){
//         const area=this.hight*this.width;
//         return area;
//     }
//     paint(){
//         console.log(`painting with the colour ${this.color}`);
//     }
// }

// const rect=new rectangle(12,10,"red");
// const area=rect.area();
// rect.paint();
// console.log(area);

// const date=new Date();
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());

// const map=new Map();
// map.set('name',"akshay")
// map.set('age',23)
// const Fname=map.get('name');
// console.log(Fname);
// const age=map.get('age');
// console.log(age);

// function waitFor3s(resolve){
//     setTimeout(resolve,3000);
// }
// function main(){
//     console.log("3s are done");
// }
// waitFor3s(main);

// function timer(resolve){
//     setTimeout(resolve,3000);
// }
// function setTimeOutPromisified(){
//     return new Promise(timer);
// }
// function main(){
//     console.log("hello there 3 sec is done");
// }
// setTimeOutPromisified().then(main);

// const fs = require("fs");

// function PrintData(resolve) {
//     setTimeout(function(){
//         fs.readFile("a.txt", "utf-8", function (err, data) {
//           resolve(data);
//         });
//     },3000);
// }
// function readFile() {
//   return new Promise(PrintData);
// }
// function callback(content) {
//   console.log(content);
// }
// readFile().then(callback);

function setTimeOutPromisified(time)
{
    return new Promise(resolve=>setTimeout(resolve,time));
}
function main(){
    console.log("hey 3 sec is done"); 
}
setTimeOutPromisified(3000).then(main); 