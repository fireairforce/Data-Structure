function Queue(){
    let items = [];
    this.enqueue = function(element){
        items.push(element);
    }
    this.dequeue = function(){
        return items.shift();
    }
    this.front = function(){
        return items[0];
    }
    this.isEmpty = function(){
        return items.length ===0;
    }
    this.clear = function(){
        items = [];
    }
    this.size = function(){
        return items.length;
    }
    this.print = function(){
        console.log(items.toString());
    }
}

function hotPotato(nameList,num){
    let queue = new Queue();
    for(let i = 0;i<nameList.length;i++){
        queue.enqueue(nameList[i]);
    }
    let eliminated = '';
    while( queue.size()>1 ){
        for(let i = 0;i<num;i++){
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated + '被杀死');
    }
    return queue.dequeue();
}
let names = ['wd','chy','crd','dmy','jy']
let winer = hotPotato(names,7)

console.log('存活者: '+ winer);
