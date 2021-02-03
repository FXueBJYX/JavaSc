/**
 * 异步回调
 */

//  ————————————————————————————————————
/*
function People(){
    this.think=function(callback){
        console.log("想题 做不出来");
        setTimeout(function(){
            callback();
        },5000)
    }
    this.answer=function(){
        console.log("去做其他题");
    }

};
var p=new People();
p.think(function(){
    console.log("我想五秒钟后做出来了");
})
p.answer();
*/

// ——————————————————————————————————————————







/**
 * 同步回调
 * 等待5秒 打印人名
 */

// ——————————————————————
/*
function printname(name,callback){
    var start=new Date();
    // var t=0;
    while(new Date()-start<5000){
        // var now=new Date();
        // t=new Date()-start;
        
    }
    callback(name);
}
function echo(name){
    console.log(name);
}
printname("bjyx",echo);
console.log("over");
*/
// bjyx  over
// ——————————————————————








/**
 * 异步回调
 */


// ————————————————————

function haveLunch(food,drink,callback){
    console.log("正在吃 "+food+" "+drink);
    setTimeout(function(){
        callback();
    },5000)
}
haveLunch("bread","milk",function(){
    console.log("吃完了");
})

// ————————————————————


















