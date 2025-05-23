const http = require("http")
const testingsyntax = require("./syntax");

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method);
    testingsyntax()
})

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server running on "http://localhost:${PORT}"`);
    
})