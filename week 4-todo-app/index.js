const express= require("express");
const uuid=require("uuid")
const cors = require("cors");
const app=express();
app.use(cors());
const PORT=3000;

app.use(express.json()); //allows us to read form body (middleware)

const todos=[]


app.get('/',(req,res)=>{
    res.json({msg:"todolist home page"})
})

app.get("/todos",(req,res)=>{
    res.json(todos);
})

app.get("/todos/:id",(req,res)=>{
    let todo=todos.filter((todo)=>todo.id==req.params.id)
    res.json({msg:"1 todo",data :todo});
})

// get ,post , put , delete , patch

app.post("/todos",(req,res)=>{
    todos.push({id:uuid.v4(),...req.body})
    res.json({msg:"add todo",data:todos})
})
app.put("/todos/:id",(req,res)=>{
    let todo=todos.find((todo)=>todo.id==req.params.id);
    if(todo){
        todo.name=req.body.name;
        todo.completed=req.body.completed;
        res.json({msg:"edit todo",data:todos})
    }
    else {
        res.json({msg:"todo not found"})
    }
})
app.delete("/todos/:id",(req,res)=>{
    let index=todos.findIndex((todo)=>todo.id==req.params.id);
    todos.splice(index,1);
    res.json({msg:"delete todo",data:todos})
})

app.listen(PORT,()=>{
    console.log(`App is running on PORT ${PORT}`);
});