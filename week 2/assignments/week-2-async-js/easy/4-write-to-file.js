// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

let fs=require("fs");
let path=require("path")
let content="here is the written file done";
let filepath=path.join(__dirname,"output.txt");
fs.writeFile(filepath,content,"utf-8",(err)=>{
    if(err) {
        console.log("there is the problem in writting file",err);
        return;
    }
    console.log("there file is written susesfully hehe");
});