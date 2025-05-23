const summmm = (req,res) => {
    console.log(req.url,req.method);
    const body=[]
    req.on("data",(chunk)=>{
        console.log(chunk);
        body.push(chunk)
    })
    req.on("end",()=>{
        const bodystr = Buffer.concat(body).toString()
        const params = new URLSearchParams(bodystr)
        const bodyobj = Object.fromEntries(params)
        const result = Number(bodyobj.first) + Number(bodyobj.second)

        res.setHeader("Content-Type","text.html")
        res.write(`
            <html>
            <head><title>Caluclator</title></head>
            <body>
            <h1>Result : ${result}</h1>
            </body>
            </html>
            `)
            return res.end()
    })
    
}

exports.summmm = summmm