/*
 * for循环是同步的 
 * 定时器是异步的  执行时会被甩到执行队列里  放5轮
 * 异步函数执行条件：当前进程空闲
 *                 触发条件：时间io  
 *                        磁盘io（本地，网络） 
 *                         自定义事件  on once addListener监听、emit发射
 *执行时，先执行同步内容，异步的会先抛到执行队列里
 *同步的执行完了，再按异步的顺序继续执行
 */

// const { exec } = require("child_process");

// ——————————————————————
/*
console.log("start");

for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },0);
}
console.log("end");
*/

// start end 55555
// ——————————————————————








/*
 * setTimeout setInteval  不是真正定时  都来自process.nextTick
 * 执行到setTimeout抛到事件队列  执行下面的while循环
 * 过去1000ms，再执行上面的setTimeout，正常来说应该end-start等于1000
 * 但是由于setTimeout不是真正的定时结果不一定等于1000
 */

// ——————————————————————
/*
var start=new Date();
setTimeout(function(){
    var end=new Date();
    console.log("Time elapsedc",end-start,"ms");
    // console.log(end);
    // console.log(start);
    
},500);
while(new Date()-start<1000){}
*/

// 1000ms或大于1000ms
// ————————————————————————








/**
 *  setTimeout中0ms和1ms都视同于0ms  
 */ 


// ————————————————————
/*
setTimeout(function(){
    console.log(123);
},1);
setTimeout(function(){
    console.log(456);
},0);
*/

// 123 456
// ——————————————————————






/*
 * setTimeout setInterval
 * 不是真正定时
 * 他们俩的定时来自于process.nextTick 
 *          他允许将事件调度尽可能快的触发
 * 
 * 定时函数：setTimeout setInterval process.nextTick requestAnimationFrame(css3里的)
 *  有些异步函数可以间接取回来（不通过事件队列处理回调） ——promise对象或pubsub模式
 */

// ——————————————————————
/*
var firecount=0;
var start=new Date();
var timer=setInterval(function(){
    if(new Date()-start>1000){
        clearInterval(timer);
        console.log(firecount);
        return;
    }
    firecount++;
},0);
*/

// 输出结果小于1000   他不准
// ————————————————————————————



/**
 * 同步>异步
 * 在当前时间片 异步里：process > setTimeout > setImmediate
 */

// ——————————————————————————————
/*
console.log("start");
setTimeout(function(){
    console.log(123);
})
process.nextTick(function(){
    console.log(456);
})
setImmediate(function(){
    console.log(789);
})
console.log("end");
*/

// start end 456 123 789
// ——————————————————————————————







/**
 * 异步转换同步    ————原生
 * 1、在同步函数里写异步函数
 * 2、同步函数回调形式
 */


// ————————————————————————
/*
for(var i=0;i<10;i++){
    var m=i;
    // setTimeout(function(){
    //     console.log(m);
    // },200);

    // exec(m);

    exec(m,function(m){
        console.log(m);
    })
}
// function exec(m){
//     setTimeout(function(){
//         console.log(m);
//     },200);
// }
function exec(mm,callback){
    setTimeout(function(){
        callback(mm);
    },200)
}
*/

// 0123456789
// ————————————————————————








/**
 * 磁盘io（本地和网络 ）
 * 先读文件等两秒打印出来
 */

//  ————————————————————————————
/*
var fs=require("fs");

fs.readFile("./text/2.txt","utf-8",function(err,data){
    if(err){
        console.log(err);
    }else{
        getData(data);
    }
})
function getData(data){
    setTimeout(function(){
        console.log(data);
    },2000)
    
}
*/

// xz loves yb
// ——————————————————








/**
 * 网络io  容易阻塞  使用异步效率更高
 * 返回网站访问时间
 */


// ——————————————————————————
/*
var http=require("http");
urls=["http://www.qq.com","http://www.baidu.com","http://www.sohu.com"];

function getTime(u){
    var start=new Date();
    http.get(u,function(res){
        console.log(u);
        console.log(new Date()-start);
    })
}
for(var i=0;i<urls.length;i++){
    getTime(urls[i]);
}
*/

// ——————————————————————————



/**
 * 
 * 域名解析DNS    解析成IP地址
 */

//  ————————————————————————————————

var dns=require("dns");
dns.resolve4("www.qq.com",function(err,address){
    if(err){
        console.log(err);
    }else{
        console.log(address);
    }
})


// ——————————————————————————————————





















