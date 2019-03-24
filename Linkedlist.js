/**
 * 
 */
function LinkedList(){
  
  var Node = function(element){
      this.element = element;
      this.next = null;
  }
 
  var length = 0;
  var head = null;
  // 向列表尾部追加元素
  this.append = function(element){
     var node = new Node(element),current;
     if(head === null){
         head = node;
     } else {
         current = head;
         // 循环链表，直到找到最后一项,最后一项的next指向是null
         while(current.next){
             current = current.next;
         }
         // 把最后一项的next指针赋值为node
         current.next = node;
     }
     length++; // 更新长度
  };
  this.insert = function(position,element){
       // 越界检查
       if( position >=0 && position <= length ){
           var node = new Node(element),current = head, previous,index = 0;
           if(position === 0) { // 在一项添加
               node.next = current;
               index = 0;
           }else {
               while(index<position){
                   previous = current; 
                   current = current.next;
                   index ++;
               }
               node.next = current;
               previous.next = node;
           }
           length ++;
           return true; 
       } else {
           return false;
       }
  };

  // 把链表里面特定地方的一个值移除
  this.removeAt = function(position){
      // 没越界
      if(position > -1 && position < length){
          var current = head,previous,index = 0;
          if(position === 0){ // 如果移除首位，直接让head指向列表的第二个元素
              head = current.next;
          } else {
              // 先从前遍历，让previous是移除元素前面一项元素的引用,current是当前要移除的元素
              while( index<position ){ 
                  previous = current;
                  current = current.next;
                  index ++;
              }
              // 将previous 和 current 的下一项链接起来;跳过current,从而移除
              previous.next = current.next;
          }
          length --;
          return current.element;
      } else {
         return null;
      }
  };
   // 在链表中找一个特定的元素的值
  this.indexOf = function(element){
        var current = head,index = 0;
        while(current){
            if(element === current.element){
                return index;
            }
            index ++;
            current = current.next;
        }
        return -1;
  };
  // 删除链表中的某个元素
  this.remove = function(element) {
      var index = this.indexOf(element);
      return this.removeAt(index);
  }
  this.isEmpty = function(){
      return length  === 0;
  };
  this.size = function(){
      return length;
  };
  this.getHead = function(){
      return head;
  };
  this.toString = function(){
      var current = head,string = '';
      while(current) { // 用current来检查元素是否存在
         string += ',' + current.element;
         current = current.next;
      }
      return string.slice(1); // 这里要去掉第一个,所以是从1开始进行截取
  };
  this.print = function(){};
}
var list = new LinkedList();
list.append(15);
list.append(10);

console.log(list.toString());
list.removeAt(1);
list.insert(1,5);
console.log(list.toString());
console.log(list.indexOf(15));
console.log(list.isEmpty());