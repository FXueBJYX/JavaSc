// 对象1中方法给对象2用

function Cat(){

}

// Cat.prototype.food="fish";


Cat.prototype={
    food:"fish",
    say:function(){
        console.log("i love "+this.food);

    }
}

var bCat=new Cat();
bCat.say();

// 让狗取调用猫的方法

var whiteDog={
    food:"bone"
}

bCat.say.call(whiteDog);
// say() 以say的形式
// 下面这个不用加括号

whiteDog.say;




