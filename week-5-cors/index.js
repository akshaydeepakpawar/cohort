const express= require("express")
<<<<<<< HEAD
const bodyParser=require("body-parser")
const cors=require("cors")

const app=express();

=======
const app=express();
const bodyParser=require("body-parser")
const cors=require("cors")

>>>>>>> 792b2740f1760bab9c0afa9ace2353b57f346560
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