//  hashTable 主要用于能够通过给定一个建值找到返回值在表中的地址
//  本次hashTable存在相同key值的元素会被覆盖，此问题在hashTable2中被解决
//  这里使用的是分离链接法来处理重复的元素
function LinkedList() {
    var Node = function (element) {
        this.element = element;
        this.next = null;
    };
    var length = 0;
    var head = null;
    this.append = function (element) {
        var node = new Node(element),
            current;
        if (head === null) {
            head = node;
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    };
    this.removeAt = function (position) {
        if (position >= 0 && position < length) {
            var current = head,
                previous, index = 0;
            if (position === 0) {
                head = current.next;
            } else {
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    }
    this.insert = function (position, element) {
        var node = new Node(element),
            current = head,
            previous, index = 0;
        if (position >= 0 && position <= length) {
            if (position === 0) {
                node.next === current;
                head = node;
            } else {
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }
    this.toString = function () {
        var current = head,
            string = '';
        while (current) {
            string += ',' + current.element;
            current = current.next;
        }
        return string.slice(1);
    };
    this.indexOf = function (element) {
        var current = head,
            index = 0;
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }
    this.remove = function (element) {
        var index = this.indexOf(element);
        this.removeAt(index);
    }
    this.isEmpty = function () {
        return length === 0;
    }
    this.size = function () {
        return length;
    }
    this.getHead = function () {
        return head;
    }
}

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
    var ValuePair = function (key, value) {
        this.key = key;
        this.value = value;
        this.toString = function () {
            return '[' + this.key + '-' + this.value + ']';
        }
    }
    // 向散列表中添加一个新的项 　　　
    this.put = function (key, value) {
        var position = loseloseHashCode(key);
        if(table[position]==undefined){
            // 如果这个位置是第一次添加元素，我们在这个位置上面初始化一个链表类的实例
            table[position] = new LinkedList();
        }
        //  利用链表里面append方法往链表中添加一个ValuePair的实例,即使key和value相同的,但是每个ValuePair都是不同的
        table[position].append(new ValuePair(key,value));
    }
    // 在散列表中根据key值查一个值
    this.get = function (key) {
        // return table[loseloseHashCode(key)];
        var position = loseloseHashCode(key);
        if(table[position]!==undefined){
            // 通过遍历链表来寻找键/值
            var current = table[position].getHead();
            while(current.next){
                if(current.element.key === key){
                    return current.element.value;
                }
                current = current.next;
            }
            // 检查元素在链表的第一个或者最后一个节点的情况
            if(current.element.key === key){
               return current.element.value;
            }
        }
        return undefined;
    }
    // 从散列表中移除一个值
    this.remove = function (key) {
        // table[loseloseHashCode(key)] = undefined;
        var position = loseloseHashCode(key);
        if(table[position] !==undefined){
            var current = table[position].getHead();
            while(current.next){
                if(current.element.key === key){
                    table[position].remove(current.element);
                   if(table[position].isEmpty()){
                       table[position] = undefined;
                   } 
                   return true;
                }
                current = current.next;
            }
            if(current.element.key===current){
                table[position].remove(current.element);
                if(table[position].isEmpty()){
                    table[position] = undefined;
                }
                return true;
            }
        }
        return false;
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
console.log(hash.remove('wd'));
console.log(hash.get('wd'));
console.log(hash.get('dw'));