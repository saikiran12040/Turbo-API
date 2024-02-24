const timeStamp=(req,res,next)=>{
    const {timestamp}=req.body
    const [hours,min]=timestamp.split(":")
    req.body.timestamp=toNumber(hours)
    next()
}

module.exports={timeStamp}
