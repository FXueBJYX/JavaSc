var http=require("http");

var hostname="127.0.0.1";
// var port=8088;

// build后面的用 process.argv
// var port=process.argv;

// config 对象里用process.env.npm_package_config_port
var port=process.env.npm_package_config_port;

// console.log(process.argv);

http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/plain"});
    res.end("success ooo");
}).listen(port);

console.log(port); 
