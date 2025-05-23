const {sumrequesthandler} = require("./Sum")

const requestHandler = (req,res) => {
    console.log(req.url,req.method);
    if(req.url === '/'){
        res.setHeader("Content-Type","text/html")
        res.write(`<html>

            <head><title>Calculator~Node JS</title></head>
            <body>
            
            <h1>Calulator</h1>
            <a href="/calculator">Go to Calculator</a>

            </body>
            
            </html>
            `)
            return res.end()
    }
    else if(req.url.toLowerCase() === "/calculator"){
        res.setHeader("Content-Type","text/html")
    res.write(`<html>

        <head><title>Calculator~Node JS</title></head>
        <body>
        
        <h1>Calulator Page to Calculate</h1>
        <form action="/cal-res" method="POST">
        <input type="text" placeholder="first num" name="first">
        <input type="text" placeholder="second num" name="second">
        <input type="submit" value="Sum">
        </form>
        </body>
        
        </html>
        `)
        return res.end()
    }
    else if(req.url==="/cal-res" && req.method==="POST"){
       return sumrequesthandler(req,res);
    }
    res.setHeader("Content-Type","text/html")
    res.write(`<html>

        <head><title>Calculator~Node JS</title></head>
        <body>
        
        <h1>Calulator</h1>
        <a href="/">404 go to home</a>

        </body>
        
        </html>
        `)
        return res.end()
}

exports.requestHandler = requestHandler;