// 文件流  文件读取流和文件写入流

const fs=require("fs");

const rs=fs.createReadStream("./text/1.txt");
const ws=fs.createWriteStream("./text/2.txt");
// 管道符  支持链式操作
// 读流直接放到写流里
rs.pipe(ws);


// rs.on("data",function(chunk){
//     ws.write(chunk);
// })

// rs.on("end",function(){
//     console.log("ok");
//     ws.end();
// })
