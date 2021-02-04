// 路由

// 完善路由
var coon =require("./coon");

exports.router=function(req,res,pathname){
    switch(pathname){
        case "/":
            coon.goIndex(res);break;
        case "/upload" :
            // 加载上传的静态文件
            coon.upload(res);break;
        case "/do_upload":
            coon.do_upload(req,res);break;
        default:
            coon.goFault(res);break;
    }
}