const express=require("express")
const app=express();

// add middleware that shows the url timestamps and methode 

function middleware(req,res,next)
{
    console.log(`time is -->${new Date()} 
        url is-->${req.url} 
        method is-->${req.method}`);
    next();
}
app.use(middleware);

app.get("/sum",(req,res)=>{
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.json({
        answer: a+b
    })
})
app.get("/multiply",(req,res)=>{
    const a = Number(req.query.a);
    const b = Number(req.query.b);
     res.json({
        answer: a*b
    })
})
app.get("/divide",(req,res)=>{
    const a = Number(req.query.a);
    const b = Number(req.query.b);
     res.json({
        answer: a/b
    })
})
app.get("/subtract",(req,res)=>{
    const a = Number(req.query.a);
    const b = Number(req.query.b);
     res.json({
        answer: a-b
    })
})
app.listen(3000);