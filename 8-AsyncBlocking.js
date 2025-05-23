const fs = require("fs")

console.log("1-Start of Script");

//Synchronous (blocking) operation
console.log("2-Reading file synchronically");
const datasync = fs.readFileSync("user.txt","utf8");
console.log("3-Synchoronous Read Complete");

//Asynchronous (non-blocking) operation
console.log("4-Reading File Synchroniously");
fs.readFile("user.txt","utf-8",(err,dataasync)=>{
    if(err) throw err;
    console.log("6-Asynchronous Read Complete");
})

console.log(("5-End of Script"));



