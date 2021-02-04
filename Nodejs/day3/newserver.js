var http=require("http");
var fs=require("fs");
var url=require("url");

// 处理静态资源  只能解析html文件其他都没有打包

http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    // console.log(pathname);
    var realname=__dirname+"\\statics\\"+pathname;

    // 图标
    if(pathname=="/favicon.ico"){
        return;
    }else if(pathname=="/"||pathname=="/index"){
        // 首页
        goIndex(res);
    }else{
        // 静态资源管理器
        // 网络路径  真实路径
        dealStatic(pathname,realname,res);
    }
}).listen(3000)

console.log(3000);

function goIndex(res){
    var pathname=__dirname+"\\statics\\"+url.parse("index.html").pathname;
    var pathdata=fs.readFileSync(pathname,"utf-8");
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(pathdata);
}




function dealStatic(pathname,realname,res){
    fs.exists(realname,function(exists){
        if(!exists){
            res.writeHead(404,{"Content-type":"text/plain"});
            res.end("wong");
        }else{
            // 找文件名里的最后一个点  取后缀的第一个字母的索引
            var pointPosition=pathname.lastIndexOf(".");
            // 取后缀
            var mString=pathname.substring(pointPosition+1);
            // Content-type 后面每个静态资源对应的
            var mType;
            switch(mString){
                case "css":
                    mType="text/css";break;
                case "jpg":
                    mType="image/jpeg";break;
                default:
                    mType="text/plain";break;

            }
            // 读文件  二进制编码
            fs.readFile(realname,"binary",function(err,file){
                if(err){
                    res.writeHead(500,{"Content-type":"text/plain"});
                    res.end(err);
                }else{
                    res.writeHead(200,{"Content-type":mType});
                    res.write(file,'binary');
                    res.end();
                }
            })
        }
    })
}