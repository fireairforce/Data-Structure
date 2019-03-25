/**
 * 目前ES6里面有支持Set这种数据结构的库了
 * let set = new Set()
 */

function Set() {
    var items = {}
    // 判断集合里面有没有这个值,下面两种方法都可行
    this.has = function (value) {
        // return value in items;
        return items.hasOwnProperty(value);
    }
    // 往集合里面添加一个新的值，集合里面有了就不用添加了,返回false
    this.add = function (value) {
        if (!this.has(value)) { // 没有才添加
            items[value] = value;
            return true;
        }
        return false;
    }
    this.remove = function (value) {
        if (this.has(value)) {
            delete items[value]; // 直接使用delete操作符从对象中移除属性 
            return true;
        }
        return false;
    }
    this.clear = function () {
        items = {};
    }
    // 这里也可以像链表一样用一个length来记录长度
    this.size = function () {
        return Object.keys(items).length;
    }
    //　等价于下面这段代码
    this.sizeLegacy = function () {
        var count = 0;
        for (var prop in items) {
            if (items.hasOwnProperty(prop)) {
                count++;
            }
        }
        return count;
    }
    // values的方法就是提取items对象的所有属性值，以数组的形式返回
    this.values = function () {
        return Object.keys(items);
    }
    // 等价于下面这段代码
    this.valueLegacy = function () {
        var keys = [];
        for (var key in items) {
            if (items.hasOwnProperty(key)) {
                keys.push(key);
            }
        }
        return keys;
    }
    // 两个集合返回并集
    this.union = function (otherSet) {
        var unionSet = new Set(); // 用一个集合把两个集合里面所有的值都存进来
        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        values = otherSet.values();
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        return unionSet;
    };
    // 两个集合返回交集
    this.intersection = function (otherSet) {
        var intersectionSet = new Set();
        var values = this.values(); // 取出目前集合里面所有的集合值
        for (var i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) { // 如果这个集合在新的集合里面也存在，就加入集合
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }
    // 两个集合返回差集
    this.difference = function (otherSet) {
        var values = this.values();
        var differenceSet = new Set();
        for (var i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    }
    // 两个集合返回子集
    this.subset = function (otherSet) {
        if (this.size() > otherSet.size()) { // 当前集合大于放入集合当前集合肯定不为子集
            return false;
        } else {
            var values = this.values();
            for (var i = 0; i < values.length; i++) {
                if (!otherSet.has(values[i])) { // 当前集合里面有另一个集合里面没有的东西
                   return false;
                }
            }
            return true;
        }
    }
}
// 并集
var setA = new Set();
for (var i = 1; i <= 3; i++) {
    setA.add(i);
}
var setB = new Set();
for (var i = 3; i <= 6; i++) {
    setB.add(i);
}
var unionAB = setA.union(setB);
console.log(unionAB.values()); // ['1','2','3','4','5','6']

// 交集
var setC = new Set();
for (var i = 1; i <= 3; i++) {
    setC.add(i);
}
var setD = new Set();
for (var i = 3; i <= 6; i++) {
    setD.add(i);
}
var interCD = setC.intersection(setD);
console.log(interCD.values());

// 差集
var setE = new Set();
var setF = new Set();
for (var i = 1; i <= 3; i++) {
    setE.add(i);
}
for (var i = 3; i <= 6; i++) {
    setF.add(i);
}
// console.log(setE.values());
// console.log(setF.values());
var differEF = setE.difference(setF);
console.log(differEF.values());

// 子集
var setG = new Set();
var setH = new Set();
for(var i=1;i<=3;i++){
    setG.add(i);
}
for(var i=1;i<=4;i++){
    setH.add(i);
}

console.log(setG.subset(setH));
// var set = new Set();

// set.add(1);
// console.log(set.values());
// console.log(set.has(1));