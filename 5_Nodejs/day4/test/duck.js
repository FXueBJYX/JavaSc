var Animal=require("Animal");
var util=require("util");

function Duck(){
    Animal.call(this);
    this.say=function(){
        console.log("ga ga");
    }
}


util.inherits(Duck,Animal);

var duck=new Duck();
module.exports=duck;

