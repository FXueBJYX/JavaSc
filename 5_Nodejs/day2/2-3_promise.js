// 解决异步变同步
// 1、回调调用回调  2、promise   3、async/await


// ——————————————————————
/*
function setname(callback){
    setTimeout(function(){
        var n="bjyx";
        callback(n);
    })
}
setname(function(name){
    console.log(name);
})
*/
// ——————————————————————————————




/**
 * promise对象有两个参数 resolve（成功）和reject（失败）
 * 成功就是再调用  .then
 * promise   不会阻塞   resolve 是异步
 * async/await会阻塞
 */

//  ——————————————————————————————
/*
var p=new Promise(function(resolve,reject){
    var t=Math.random();
    var name="bjyx";
    if(t<0.5){
        console.log(123);
        resolve(name);
        console.log(456);
    }else{
        reject("失败");
    }
})
p.then(function(name){
    console.log(name);
})
*/
// ————————————————————————————-——



/**
 * 先执行同步 在执行异步
 */

// ——————————————————————————————————————————
/*
function getName(resolve,reject){
    console.log(123);
    setTimeout(function(){
        var name="bjyx"
        resolve(name);
    },1000)
    console.log(456);
}
var p=new Promise(getName)
    .then(function(name){
        console.log(name);
})
*/
// ——————————————————————————————————————————






/**
 * new promise----->async 返回promise.then------>async/await
 * async  返回的就是一个promise对象
 */


// ——————————————————————————————————————————————
/*
async function getData(){
    return "这是一个数据"
}
p=getData().
    then(function(data){
        console.log(data);
});
// console.log(p);
*/
// ——————————————————————————————————————————————





/**
 * async/await    能完成阻塞
 * await只能在函数体内用  必须和async一起用
 */

// ————————————————————————————————————————————————
/*
async function getData(){
    return "数据";
}
async function temp(){
    console.log(123);
    var m= await getData();
    console.log(m);
    console.log(456);
}
temp();
*/
// ————————————————————————————————————————————————







/**
 * await阻塞例子
 */

// ——————————————————————————————————————————————————
/*
async function getData(){
    console.log(2);
    return  "数据"
}
async function temp(){
    console.log(1);
    var m=await getData();
    console.log(m);
    console.log(3);
}
temp();
*/
// ——————————————————————————————————————————————————


/**
 * 异步函数返回值是promise对象也可以用async/await
 */


// ——————————————————————————————————————————————————

function getData(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            var name="bjyx";
            resolve(name);
        },1000)

    })
}
async function temp(){
    var m=await getData();
    console.log(m);
}
temp();

// ——————————————————————————————————————————————————



