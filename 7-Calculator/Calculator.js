const http = require("http");
const {requestHandler} = require('./Handler')

const server = http.createServer(requestHandler)


const PORT = 3000;
server.listen((PORT),()=>{
    console.log(`Server Running on "http://localhost:${PORT}"`);
})