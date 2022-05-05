const express=require("express")
const app=express()
const cors=require("cors")
const dotenv=require("dotenv").config()
const mongoose=require("mongoose")

const dbConnection=mongoose.connect(process.env.MONGO_URL,{
    useUnifiedTopology:true
}).then(()=>console.log("DBConnected"))
.catch((err)=>{
    console.log(err)
})

app.use(express.json())
app.use(cors())

app.use("/api/score",require("./routes/scoreRoute"))

app.get("/",(req,res)=>{
    res.send("Connected")
})

app.listen(process.env.PORT || 3006,()=>{
    console.log("Connected")
})