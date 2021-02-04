var http=require("http");
var fs=require("fs");
var url=require("url");
var querystring=require("querystring");

http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    if(pathname=="/"){
        // 主页显示html
        toIndex(res);
    }else if(pathname=="/parse"){
        // 显示提交到的页面
        // console.log("提交");
        goPost(req,res);
    }else if(pathname=="/img"){
        goImg(res);
    }else{
        // 报404错
        // console.log("错误");
        goFault(res);
    }
}).listen(3000);

console.log(3000);


function toIndex(res){
    var IndexPath=__dirname+"\\static\\"+url.parse("index.html").pathname;
    // console.log(IndexPath);
    var IndexData=fs.readFileSync(IndexPath,"utf-8");

    res.writeHead(200,{"Content-type":"text/html"});
    res.end(IndexData)
}
function goFault(res){
    res.writeHead(404,{"Content-type":"text/plain"});
    res.end("err");
}
function goPost(req,res){
    // req向服务器传输数据  （一段一段） 拼接数据 监听（data）  监听(end)
    // 定义全局变量  最后拼成的那个完整的
    // console.log("bhonjejd");
    var postData="";
    // 确定传输数据编码
    req.setEncoding('utf8');
    // 监听req传输过来的data关键字   
    req.addListener("data",function(postDataChunk){
        postData += postDataChunk;
    });
    // 监听到end
    req.addListener("end",function(){
        // console.log(postData);
        // 返回的是一个字符串  给他转化成对象  序列化和反序列化
        var paramObj = querystring.parse(postData);
        res.writeHead(200,{"Content-type":"text/plain"});
        res.end(paramObj.username);
    })
}

function goImg(res){
    var ImgPath=__dirname+"\\static\\"+url.parse("111.jpg").pathname;
    var ImgData=fs.readFileSync(ImgPath);
    res.writeHead(200,{"Content-type":"image/jpeg"});
    res.end(ImgData);
}
