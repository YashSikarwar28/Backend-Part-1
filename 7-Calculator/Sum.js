const sumrequesthandler = (req,res) => {
    console.log("In sum request handler",req.url);
    const body = []
    req.on("data",chunk => {
        body.push(chunk)
    })
    req.on("end",()=>{
        const bodystr=Buffer.concat(body).toString();
        const params = new URLSearchParams(bodystr)
        const bodyobj = Object.fromEntries(params)
        const result = Number(bodyobj.first) + Number(bodyobj.second)
        console.log(result);

        res.setHeader("Content-Type","text/html")
    res.write(`<html>

        <head><title>Calculator~Node JS</title></head>
        <body>
        
        <h1>Calulator</h1>
        <h1>Result : ${result}</h1>

        </body>
        
        </html>
        `)
        return res.end()
    })
}

exports.sumrequesthandler = sumrequesthandler;