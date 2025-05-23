const express = require("express")
const path = require("path")
const contactRouter = express.Router()
const rootDirectory = require("../utils/pathUtils")

contactRouter.get("/contact-us",(req,res,next)=>{
    res.sendFile(path.join(rootDirectory,"views","contact.html"))
})

contactRouter.post("/contact-us",(req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(rootDirectory,"views","contact-success.html"))
})

module.exports = contactRouter;