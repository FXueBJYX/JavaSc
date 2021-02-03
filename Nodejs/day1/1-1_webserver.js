var http=require("http");

http.createServer(function(req,res){
    // 这解析成html  就能识别html标签
    res.writeHead(200,{"Content-type":"text/html"});
    res.end("<h1>hello</h1>");
}).listen(2000);



// 任何一个服务都要有端口    listen里的端口号  在浏览器那localhost:(端口号)
// 收发数据包  请求包（request--req）向服务端  响应包（response--res）服务端发出
// 一个包分为  ：包头包体    传输时要传包头（用writeHead方法） 包体（write） 结包（end）
// 包头writeHead里写 1、状态码  ：200 404 500 503 301 304
//                   2、编码


// node是单进程  事件循环异步回调