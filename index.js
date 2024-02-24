const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const { connection } = require('./db')
require('dotenv').config()

const app=express()


app.use(express.json())
app.use(cors())

// ROUTES FOR THE COMMIT 

const {router}=require("./routes/commitRoutes")
app.use('/commit',router)


// CONNECTION TO THE MONGODB
const PORT=process.env.PORT || 8080

app.listen(PORT,async()=>{
    try{
        await connection
        console.log("connected to mongodb")
    } catch(err) {
        console.log("cannot connect to db")
        console.log(err)
    }
    console.log("server is running in port 8080")
})