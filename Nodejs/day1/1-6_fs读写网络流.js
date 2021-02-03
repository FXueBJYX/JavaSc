var fs=require("fs");
var http=require("http");

http.createServer(function(req,res){
    // var data=fs.readFileSync("./text/1.txt","utf-8");
    // res.writeHead(200,{"Content-type":"text/plain"});
    // res.end(data);

    // fs.createReadStream("./text/1.txt").pipe(res);
    
    fs.createReadStream("./text/1.txt").pipe(process.stdout);
}).listen(2000);

console.log("succes");