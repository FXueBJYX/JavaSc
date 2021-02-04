// function Demo(){
//     var a=777;    //私有变量  访问不到
//     // 下面的能访问到
//     this.aa=111;
//     this.bb=function(){
//         console.log("hhh");
//     }
// }

// var a=new Demo();
// a.bb();
// console.log(a.aa);




// 需要把资源公布给外部
// moudel exports  或 exports
// moudel exports   可以直接传类、对象、数组
// exports          只能公布对象

// export={}   这样不好使  是直接赋值

// require 加载模块时 加载得失module.exoorts的地址  exports 是modelu.exports地址的引用
// exports赋值是会改变引用地址  就找不到module.exports的地址了
// 用module  时不会改变地址





// module.exports=Demo;

module.exports={
    'a':11,
    'b':function(){
        console.log(2);
    }
}