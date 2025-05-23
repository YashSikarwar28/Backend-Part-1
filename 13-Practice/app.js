const express = require("express")
const path = require("path")
const rootDirectory = require("./utils/pathUtils")

const app = express()

const homeRouter = require("./routes/homeRouter")
const contactRouter = require("./routes/contactRouter")

app.use(express.urlencoded())

app.use(homeRouter);
app.use(contactRouter)

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDirectory,"views","404.html"))
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server Running on http://localhost:${PORT}`);  
})