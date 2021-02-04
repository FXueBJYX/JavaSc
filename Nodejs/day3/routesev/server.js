var http=require("http");
var url=require("url");
var Router=require("./router.js");
http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    
    Router.router(req,res,pathname);
}).listen(3000)

console.log(3000);