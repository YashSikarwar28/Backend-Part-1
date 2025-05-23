//External Module
const express = require("express")
//Local Module
const requesthandler = require("./user")

const app = express()

app.use("/",(req,res,next)=>{
    console.log("Came in first middleware",req.url,req.method);
    next()
})

app.use("/submit-details",(req,res,next)=>{
    console.log("Came in second middleware",req.url,req.method);
    res.send(`<p>Welcomeeeeee.....</p>`)
})

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server Running on http://localhost:${PORT}`);  
})