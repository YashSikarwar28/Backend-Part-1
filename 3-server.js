const http = require("http")

const server = http.createServer((req,res) => {
   
    console.log(req.url,req.method,req.headers);
   
    if(req.url==="/home"){
        res.setHeader("Content-Type","text/html")
    res.write("<html>");
    res.write("<head><title>My First NODE JS Page</title></head>")
    res.write("<body><h1>You are on HomePage</h1></body>")
    res.write("</html>")
    return res.end()
    }
    else if(req.url==="/prod"){
        res.setHeader("Content-Type","text/html")
    res.write("<html>");
    res.write("<head><title>My First NODE JS Page</title></head>")
    res.write("<body><h1>You are on Products Page</h1></body>")
    res.write("</html>")
    return res.end()
    }
    res.setHeader("Content-Type","text/html")
    res.write("<html>");
    res.write("<head><title>My First NODE JS Page</title></head>")
    res.write("<body><h1>My Backend Journey Starts....</h1></body>")
    res.write("</html>")
    res.end()

});

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server running on address http://localhost:${PORT}`);
})