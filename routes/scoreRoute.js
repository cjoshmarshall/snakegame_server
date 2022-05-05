const router=require("express").Router()

const Score=require("../models/scoreModel")

router.post("/",async (req,res)=>{
    try{
    const newScore=await new Score(req.body)
    await newScore.save()
    res.status(200).json(newScore)
    }catch(err){
        res.status(500).json(err)
    }
    
})

router.get("/",async (req,res)=>{
    try{
        const score=await Score.find().sort({score:-1})
        res.status(200).json(score)
    }catch{
        res.statusMessage(500).json(err)
    }
})

module.exports=router