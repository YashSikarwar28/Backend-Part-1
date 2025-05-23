const { summmm } = require("./Summm");

const reqhan = (req,res) => {
    console.log(req.url,req.method);
    if(req.url==="/"){
        res.setHeader("Content-Type","text/html")
        res.write(`<html>
            <head><title>Node JS Calculator</title></head>
            <body>
            <h1>Welcome to calculator</h1>
            <a href="/cal">Calulate</a>
            </body>
            </html>`)
            return res.end()
    }
    else if(req.url.toLowerCase() === "/cal"){
        res.setHeader("Content-Type","text/html")
        res.write(`<html>
            <head><title>Node JS Calculator</title></head>
            <body>
            <h1>Welcome to calculator</h1>
            <form action="/sum_res" method="POST">
            <input type="text" placeholder="First num" name="first"/>
            <input type="text" placeholder="Second num" name="second"/>
            <input type="submit" value="sum"/>
            </form>
            </body>
            </html>`)
            return res.end()
    }
    else if(req.url==="/sum_res" && req.method==="POST"){
        return summmm(req,res)
    }
}

exports.reqhan = reqhan