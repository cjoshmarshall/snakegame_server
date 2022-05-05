const mongoose=require("mongoose")

const scoreSchema=new mongoose.Schema({
    user:{type:String,require:true},
    score:{type:Number,required:true}
},
{timestamps:true}
)

module.exports=mongoose.model("score",scoreSchema)