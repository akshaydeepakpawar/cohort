const express=require("express");
const app=express();

//function returns the boolen if age of the person is more then 14
function isOldEnoughMiddleware(req,res,next){
    const age=req.query.age;
    if(age>=14) next();
    else {
        res.status(411).json({
            msg:"sorry u are not age yet !"
        })
    }
}

app.use(isOldEnoughMiddleware);

app.get("/ride1",(req,res)=>{
        res.json({
            msg:"u have succesfully booked the ride !"
        })
    })
app.get("/ride2",(req,res)=>{
        res.json({
            msg:"u have succesfully booked the ride !"
        })
    })

app.listen(3000);