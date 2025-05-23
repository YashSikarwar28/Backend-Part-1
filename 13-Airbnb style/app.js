//coe module
const path = require("path")

// External Module
const express = require("express")

//Local Module
const userRouter = require("./routes/userRouter")
const hostRouter = require("./routes/hostRouter")
const rootDirectory = require("./utils/pathUtil")

const app = express()

app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next()
})

app.use(express.urlencoded())//Parsing the body.... like we did in node js where we have to pase the chunks using this method we can do it directly saving out time

app.use(userRouter)
app.use(hostRouter)

app.use(express.static(path.join(rootDirectory,"public")))

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDirectory,'views','404.html'))
})


const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})