const express = require("express")

const app = express()

app.use("/",(req,res,next)=>{
    console.log(req.url,req.method);
    console.log("<h1>First Middleware</h1>");
    next()
})

app.use("/",(req,res,next)=>{
    console.log(req.url,req.method);
    console.log("<h1>Second Middleware</h1>");
    next()
})

// app.use((req,res,next)=>{
//     res.send("<h1>Third Middleware</h1>")
// })

//Handling / for get request
app.get("/",(req,res,next)=>{
    console.log(`Handling / for get`,req.url,req.method);
    res.send("<h1>Welcome to express handling</h1>")
})

app.get("/contact",(req,res,next)=>{
    res.send(`<h1>Welcome to contact us page</h1>
        <form action="/contact-us" method="POST">
        <input type="text" placeholder="Enter name"/>
        <input type="email" placeholder="Enter email"/>
        <input type="submit" value="Submit"/>
        </form>
        `)
})

app.post("/contact-us",(req,res,next)=>{
    console.log(req.url,req.method);
    res.send(`<h1>We will contact you</h1>`)
})


const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server Running on http://localhost:${PORT}`);  
})