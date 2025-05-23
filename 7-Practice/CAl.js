const http = require("http");
const { reqhan } = require("./Handle");

const server = http.createServer(reqhan)

const PORT = 3000;
server.listen((PORT),()=>{
    console.log(`Server running on "http://localhost:${PORT}"`);
    
})