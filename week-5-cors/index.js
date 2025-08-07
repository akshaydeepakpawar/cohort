const express= require("express")
const bodyParser=require("body-parser")
const cors=require("cors")

const app=express();

app.use(cors())
app.use(bodyParser.json())

app.post("/sum",(req,res)=>{
    const a=parseInt(req.body.a);
    const b=parseInt(req.body.b);
    res.json({
        answer:a+b
    })
})
app.listen(5500);