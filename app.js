const express=require("express");
const app=express();
const cors=require("cors");

app.use(express.json());
app.use(cors())
const data=require("./metrics.json")

app.get("/data",(req,res)=>{
res.status(200).json(data)
})

app.get("/data/chart",(req,res)=>{
let chart=require(`./backend/${req.query.id}.json`)
res.json(chart)

})

app.listen("5000",()=>{
    console.log("server running")
})   