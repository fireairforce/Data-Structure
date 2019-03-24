var M = function(name){
    this.name = name;
}
var o = new M('wd');
console.log(M.prototype===o.__proto__);
console.log(M.prototype.constructor===M);
M.prototype.say = function(){
    console.log('hi zoomdong!');
}
var m = new M('zoomdong');

m.say();
o.say();