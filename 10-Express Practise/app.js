const express = require("express")

const app = express()

const PORT = 3000
app.use(PORT,()=>{
    console.log(`Server Running on http://localhost:${PORT}`);
})