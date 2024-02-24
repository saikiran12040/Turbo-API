const mongoose=require('mongoose')
require('dotenv').config()


const connection=mongoose.connect('mongodb+srv://sai:kiran@cluster0.bqgf9qh.mongodb.net/Gitcommits?retryWrites=true&w=majority&appName=Cluster0')

module.exports={
    connection
}