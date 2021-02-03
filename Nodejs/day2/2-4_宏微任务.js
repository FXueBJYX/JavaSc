/**
 * 先执行同步
 * 同步跟随代码（promise）
 * 同步异步切换   nextTick在同步异步切换阶段   在所有异步之前
 * promise异步
 * setTimeout  setInterval
 * setImmdiate
 */
// ——————————————————————————————————————————
/*
process.nextTick(function(){
    console.log(1);
})
Promise.resolve().then(function(){
    console.log(2);
})
process.nextTick(function(){
    console.log(3);
})
Promise.resolve().then(function(){
    console.log(4);
})
*/

// 1 3 2 4
// ——————————————————————————————————————————







// ——————————————————————————————————————————

setImmediate(function(){
    console.log("immediate  1");
    process.nextTick(function(){
        console.log("next插入");
    })
})
setImmediate(function(){
    console.log("immediate  2");
})
setTimeout(function(){
    console.log("setTimeout");
})
process.nextTick(function(){
    console.log("next   1");
})
process.nextTick(function(){
    console.log("next   2");
})
console.log("正常执行");

// ——————————————————————————————————————————







// ——————————————————————————————————————————
/*
setTimeout(function C(){
    console.log(3);
},0)
process.nextTick(function A(){
    console.log(1);
    process.nextTick(function B(){
        console.log(2);
    })
    console.log(4 );
})
*/
// ——————————————————————————————————————————






// ——————————————————————————————————————————
/*
setTimeout(function(){
	console.log(123);
},0);
process.nextTick(function(){
    console.log(1);
})
new Promise(function(resolve){
	console.log(456);
	resolve();
}).then(function(){
    console.log(2);
});
process.nextTick(function(){
    console.log(3);
})
Promise.resolve().then(function(){
    console.log(4);
})
console.log("end");
*/
// ——————————————————————————————————————————





// ——————————————————————————————————————————
/*
async function async1(){
	console.log('async1 start');
	await async2();
	console.log('async1 end');
}

async function async2(){
	console.log('async2');
}

console.log('script start');
async1();
console.log('script end');
*/


// ——————————————————————————————————————————