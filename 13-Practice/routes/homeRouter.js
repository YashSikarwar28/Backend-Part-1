const express = require("express")
const rootDirectory = require("../utils/pathUtils")
const path = require("path")

const homeRouter = express.Router()

homeRouter.get("/",(req,res,next)=>{
     res.sendFile(path.join(rootDirectory,"views","home.html"))
})

module.exports = homeRouter;