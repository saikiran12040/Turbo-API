const express=require('express')
const router=express.Router()
const {createCommit,readCommit,deleteCommit,updateCommit}=require("../controllers/commitControllers")
const {fieldAnalyzer}=require("../middlewares/fieldAnalyzer")
const {timeStamp}=require("../middlewares/timeStamp")

router.get("/",timeStamp,readCommit)
router.post("/create",fieldAnalyzer,createCommit)
router.patch("/:id",fieldAnalyzer,updateCommit)
router.delete("/:id",deleteCommit)


module.exports={
    router
}