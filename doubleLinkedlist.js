function DoublyLinkedList(){
     
    var Node = function(element){
        this.element = element;
        this.next = null; // 指向前面一个节点
        this.prev = null; // 指向后面一个节点
    }
    var length = 0;
    var head = null;　// 保存对前面一项的引用
    var tail = null;  // 保存对最后一项的引用
    this.insert = function( position,element ) {
        // 检查越界
        if(position >= 0 && position < length){
            var node = new Node(element),current = head,previous,index = 0;
            if(position === 0){ // 在第一个位置插入元素
                if(!head){ // 如果第一个位置是空
                    head = node;
                    tail = node;
                } else { 
                    node.next = current; // 新增元素的next指针指向当前元素
                    current.prev = node;  // 当前元素的前指针指向新增元素
                    head = node; // head 更新为 新增元素
                }
            } else if (position === length) { // 在最后一个位置添加
                 current = tail; // 让当前元素等于尾部
                 current.next = node;
                 node.prev = current;
                 tail = node ; 
            } else {
                while(index < position) {
                    previous = current;
                    current = current.next;
                    index ++;
                }
                node.next = current;
                previous.next = node;
                current.prev = node; // 新增
                node.prev = previous; // 新增
            }
            length ++;
            return true;

        } else {
            return false;
        }
    }
    this.removeAt = function( position ){
        // 判断越界
        if(position > -1 && position < length){
            var current = head,previous,index = 0;
             // 移除第一项
            if(position === 0){
                head = current.next;
                // 如果只有一项,更新tail
                if(length === 1){
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if(position === length-1){ // 删除最后一项
               current = tail;
               tail = current.prev;
               tail.next = null;
            } else {
                while(index<position) {
                    previous = current;
                    current = current.next;
                }
                // 将previous 和　current的下一项链接起来 --- 跳过current
                previous.next = current.next;
                current.next.prev = previous; // 新增
            }
            length-- ;
            return current.element;
        } else {
            return null;
        }
    }
};