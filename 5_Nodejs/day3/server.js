var http=require("http");
var fs=require("fs");

var url=require("url");

http.createServer(function(req,res){
    // 通过浏览器发送来的请求加载demo。html
    // req是一个很大的对象  可能用到的：method(请求方式) headers(头)
    // url  拿到响应地址   就是3000后面的东西
    // console.log(req.url);
    //  parse 拿到关于url的相关信息
    // console.log(url.parse(req.url));
    var pathname=url.parse(req.url).pathname;
    if(pathname=="/"||pathname =="/index"){
        // 得知道文件路径
        // __diname：取到当前文件的目录名
        var indexPath=__dirname+'\\static\\'+url.parse("demo.html").pathname;
        // var indexPath="E:\\work\\JavaSc\\Nodejs\\day3\\stativ\\demo.html";
        // console.log(indexPath);
        var indexData=fs.readFileSync(indexPath);
        res.writeHead(200,{"Content-type":"text/html"});
        res.end(indexData);
    }

}).listen(3000);

console.log("3000");