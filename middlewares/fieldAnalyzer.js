const fieldAnalyzer=(req,res,next)=>{
    const commitData=req.body
    if(!commitData.message || !commitData.author || !commitData.repo){
        return res.status(404).json({err:"few fields are missing"})
    }
    next()
}

module.exports={fieldAnalyzer}
