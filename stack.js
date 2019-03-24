function Stack(){
    var items = [];
    this.push = function(element){
        items.push(element); // push就是在数组的尾部加元素
    }
    this.pop = function(){
        return items.pop(); // pop就是把数组顶部的元素弹出去
    } 
    this.peek = function(){
        return items[items.length-1];
    }
    this.isEmpty = function(){
        return items.length === 0;
    }
    this.size = function(){
        return items.length;
    }
    this.clear = function(){
        items = [];
    }
    this.print = function(){
        console.log(items.toString());
    }
}
let stack = new Stack();
for(let i=0;i<5;i++){
    stack.push(i);
}
stack.print();