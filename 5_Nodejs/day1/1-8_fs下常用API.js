// fs.stat      检测是文件还是目录

var fs=require("fs");

// fs.stat("test1.js",function(err,stats){
//     if(err){
//         console.log(err);
//         return false;
//     }else{
//         // stats里面保存了这个东西文件的true和false
//         console.log("文件："+stats.isFile());
//         console.log("目录："+stats.isDirectory());

//     }
// })

// exists  判断目录或文件是否存在  被废弃了 

// access  

// fs.access("test.js",function(err){
//     if(err){
//         console.log("不存在");
//         return err;
//     }else{
//         console.log("文件存在可读写");
//     }
// })



// 创建目录  

// fs.mkdir("html",function(err){
//     if(err){
//         console.log(err);
//         return false;
//     }else{
//         console.log("创建目录成功");
//     }
// })


// write   写入文件  会覆盖   如果没有这个文件会自己创建
//              文件名  写入内容    

// fs.writeFile("./text/33.txt","lalalala","utf-8",function(err){
//     if(err){
//         console.log(err);
//         return false;
//     }else{
//         console.log("写入成功");
//     }
// })


// 追加    appendFlie
fs.appendFile("./text/33.txt","heiiii",function(err){
    if(err){
        console.log(err);
        return false;
    }else{
        console.log("追加成功");
    }
})


  