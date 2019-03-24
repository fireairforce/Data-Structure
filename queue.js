function Queue(){
    var items = [];
    this.enqueue = function(element){
        items.push(element);
    };
    
    this.dequeue = function(){
        return items.shift(); // 把数组最顶端的元素弹出
    };
    
    this.front = function(){
        return items[0];
    };
    
    this.isEmpty = function(){
        return items.length === 0;
    };
    
    this.clear = function(){
        items = [];
    };
    
    this.size = function(){
        return items.length;
    };
    
    this.print = function(){
        console.log(items.toString());
    };
}
let queue = new Queue();
for(let i = 0;i<=5;i++){
   queue.enqueue(i);
}
console.log(queue.print());
console.log(queue.dequeue());