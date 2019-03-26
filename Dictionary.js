function Dictionary() {
    var items = {};
    // 判断某个键值是否存在某个字典中,使用in来验证key是否是items的一个属性
    this.has = function (key) {
        return key in items;
    }
    // 向字典中添加新元素
    this.set = function (key, value) {
        items[key] = value;
    }
    // 从字典中移除对应的元素
    this.remove = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    }
    // 查找某个特定的值
    this.get = function (key) {
        return this.has(key) ? items[key] : undefined;
    }
    // 以数组的形式返回字典中所有value实例的值
    this.values = function () {
        var values = [];
        for (var k in items) {
            if (items.hasOwnProperty(k)) {
                values.push(items[k]);
            }
        }
        return values;
    }
    this.clear = function () {
        items = {};
    }
    this.size = function () {
        return Object.keys(items).length;
    }
    this.getItems = function () {
        return items;
    }
    this.keys = function(){
        return Object.keys(items);
    }
}
var dictionary = new Dictionary();
dictionary.set('wd', 'wudong@hrsoft.net');
dictionary.set('chy', 'chy@hrsoft.net');
dictionary.set('crd', 'crd@hrsoft.net');
console.log(dictionary.has('wd')); // true
console.log(dictionary.size()); // 3

console.log(dictionary.keys()); // ['wd','chy','crd']

console.log(dictionary.values());