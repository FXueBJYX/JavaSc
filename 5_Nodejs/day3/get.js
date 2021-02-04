// http://localhost/bjyx?name=wyb&love=xz
// 取url.paese 得到的是一个对象 下面的quey:name=wyb&love=xz  pathname:bjyx

var http=require("http");
var url=require("url");
var querystring=require("querystring");

// 对象变成串：序列化       querystring.stringfy   
// 串变成对象：反序列化     querystring.PARSE

http.createServer(function(req,res){
    var paramStr=url.parse(req.url).query;
    // console.log(paramStr);
    // 分割
    // var paramObj=paramStr.split("&");
    // console.log(paramObj);
    // var a=paramObj[0].split("=");
    // console.log(a[1]);


    var paramObj=querystring.parse(paramStr);
    console.log(paramObj);
}).listen(3000)

console.log(3000);