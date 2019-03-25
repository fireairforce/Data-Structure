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
}

var set = new Set();

set.add(1);
// console.log(set.values());
// console.log(set.has(1));