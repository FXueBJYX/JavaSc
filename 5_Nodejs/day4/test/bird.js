var Animal=require("./Animal.js");
var util=require("util");


function Bird(){
    Animal.call(this);
    this.say=function(){
        console.log("jiu jiu");
    }
}

// 子  父
util.inherits(Bird,Animal);

module.exports=Bird;












