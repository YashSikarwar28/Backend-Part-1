//conditional routing 

const http = require("http");

const server = http.createServer((req,res) => {
  console.log(req.url, req.method);

  if(req.url==='/Home'){
    res.write('<h1>Welcome to Home Page</h1>')
    return res.end()
  } 
  else if(req.url==='/Men'){
    res.write('<h1>Welcome to Mens Page</h1>')
    return res.end()
  }
  else if(req.url==='/Women'){
    res.write('<h1>Welcome to Women Page</h1>')
    return res.end()
  }
  else if(req.url==='/Kids'){
    res.write('<h1>Welcome to Kids Page</h1>')
    return res.end()
  } else if(req.url==='/Cart'){
    res.write('<h1>Welcome to Cart Page</h1>')
    return res.end()
  }

  res.write(`
        <html lang="en">
<head>
    <title>Myntra</title>
</head>
<body>
    <nav>
        <ul>
            <li><a href="/Home">Home</a></li>
            <li><a href="/Men">Men</a></li>
            <li><a href="/Women">Women</a></li>
            <li><a href="/Kids">Kids</a></li>
            <li><a href="/Cart">Cart</a></li>
        </ul>
    </nav>
</body>
</html>
        `);
  res.end();
});

server.listen(3000, () => {
  console.log(`Server running on address http://localhost:3000`);
});
