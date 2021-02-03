// readFileSync   ：同步读取文件
// readFile       异步  后边要加回调

// 大文件用这个会慢    就是用fs文件流
 
var fs=require("fs");

// 同步    代码逐行执行  会产生阻塞
var data = fs.readFileSync("./text/1.txt","utf-8");
console.log(data);
console.log("end");

// 异步   回调函数会抛到执行队列 等待进程空闲  先输出"end"
// 回调函数中第一个参数是错误时
// 异步函数执行：1 进程空闲 2达到触发条件：磁盘io  事件io 自定义事件
fs.readFile("./text/1.txt","utf-8",function(err,data){
    if(err){
        console.log(err);
        return false;
    }else{
        console.log(data);
    }
})
console.log("end");













