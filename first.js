console.log("Node JS Course");

const fs = require("fs")
//file writing capability in Node JS
fs.writeFile("output.txt","Writing File", (err)=>{
    if (err) console.log("Error Occured");
    else console.log("Successfully Compiled");    
})