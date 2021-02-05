var fs=require("fs");
var url=require("url");
var formidable =require("formidable");

exports.goIndex=function(res){
    var pathname=__dirname+"\\static\\"+url.parse("index.html").pathname;
    var data=fs.readFileSync(pathname);
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(data);

}
exports.goFault=function(res){

}
exports.upload=function(res){
    var pathname=__dirname+"\\static\\"+url.parse("upload.html").pathname;
    
    var pathdata=fs.readFileSync(pathname);
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(pathdata);
}
exports.do_upload=function(req,res){
    // 调用第三方包 实现上传
    const form = formidable({multiples:true});
    form.parse(req,(err,fields,files)=>{
        // files  主要的东西
        if(files.sfile.name){
            var oldpath=files.sfile.path;
            var newpath= __dirname+'\\upload\\ll.jpg';
            var readStream=fs.createReadStream(oldpath);
            var writeStream=fs.createWriteStream("./upload/222.jpg");
            readStream.pipe(writeStream);

            readStream.on("end",function(){
                fs.unlinkSync(oldpath);
                console.log("success");
                res.writeHead(200,{"Content-type":"text/plain"});
                res.end("upload success"); 
            })
            /*
            fs.rename(oldpath,newpath,function(err,data){
                if(err){
                    console.log(err);
                }else{
                    console.log(data);
                }
            });*/
        }
    })
}