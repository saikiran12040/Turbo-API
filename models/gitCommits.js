const mongoose=require('mongoose')

const commitSchema=new mongoose.Schema({
    message:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    timestamp:{
        type:String,
        required:true,
    },
    repo:{
        type:String,
        required:true,
    },
    commit_id:{
        type:String,
    }
})

module.exports=mongoose.model("Commit",commitSchema)
