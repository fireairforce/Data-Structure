
function HashTable() {
    var table = [];
    //  一个散列函数
    var loseloseHashCode = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
            // chatCodeAt返回的是字符的ASCII值
        }
        return hash % 37;
        // return hash;
    }
    //  用于分离链接的HashTable实例
    var ValuePair = function (key, value) {
        this.key = key;
        this.value = value;
        this.toString = function () {
            return '[' + this.key + ' - ' + this.value + ']';
        }
    }
    // 向散列表中添加一个新的项 　　　
    this.put = function (key, value) {
        var position = loseloseHashCode(key);
        if(table[position] == undefined){
            table[position] = new LinkedList();
        }
    }
    // 在散列表中根据key值查一个值
    this.get = function (key) {
        return table[loseloseHashCode(key)];
    }
    // 从散列表中移除一个值
    this.remove = function (key) {
        table[loseloseHashCode(key)] = undefined;
    }
    this.print = function () {
        for (var i = 0; i < table.length; i++) {
            if (table[i] !== undefined) {
                console.log(i + ": " + table[i]);
            }
        }
    }
}
var hash = new HashTable();

hash.put('chy', 'chy@qq.com');
hash.put('crd', 'crd@qq.com');
hash.put('wd', 'wd@qq.com');
hash.put('dw', 'dw@qq.com');
hash.remove('dw');