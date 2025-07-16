const express=require("express");
const app=express();
var users=[{
    name:"john",
    kidneys:[{
        healthy:false
    }]
}];
app.use(express.json());
app.get("/",(req,res)=>{
    const johnKidnys=users[0].kidneys;
    const numbersOfKidneys=johnKidnys.length;
    //filter
    let numberOfHealthyKidneys=0;
    for(let i=0;i<johnKidnys.length;i++)
    {
        if(johnKidnys[i].healthy)
        {
            numberOfHealthyKidneys+=1;
        }
    }
    const numberOfUnhealthyKidneys=numbersOfKidneys-numberOfHealthyKidneys;
    res.json({
        numbersOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/",(req,res)=>{
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done!"
    })
})

app.put("/",(req,res)=>{
    for(let i=0;i<users[0].kidneys.length;i++)
    {
        users[0].kidneys[i].healthy=true;
    }
    res.json({})
})

app.delete("/",(req,res)=>{
    const newKidneys=[];
    for(let i=0;i<users[0].kidneys.length;i++)
    {
        if(users[0].kidneys[i].healthy)
        {
            newKidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys=newKidneys;
    res.json({msg:"done"})
})

app.listen(3000);
