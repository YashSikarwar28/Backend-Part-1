const express = require("express")
const path = require("path")

const userRouter = express.Router()
const rootDirectory = require("../utils/pathUtil")

userRouter.get("/",(req,res,next)=>{
    res.sendFile(path.join(rootDirectory,'views','home.html'))
})

module.exports = userRouter; 