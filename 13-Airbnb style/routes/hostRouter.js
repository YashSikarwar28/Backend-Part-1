const express = require("express")
const path = require("path")

const hostRouter = express.Router();

const rootDirectory = require("../utils/pathUtil")

hostRouter.get("/host/Add-home",(req,res,next)=>{
    res.sendFile(path.join(rootDirectory,'views','addHome.html'))
})

hostRouter.post("/host/Add-home",(req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(rootDirectory,'views','homeadd.html'))
})

module.exports = hostRouter