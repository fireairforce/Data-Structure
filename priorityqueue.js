function PriorityQueue(){
    
    var items = [];
    
    function QueueElement(element,priority){
        this.element = element;
        this.priority = priority;
    } 
    this.enqueue = function(element,priority){
        var queueElement = new QueueElement(element,priority);
        if(this.isEmpty()){
            items.push(queueElement);
        }else{
            let added = false;
            for(let i = 0;i<items.length;i++){
                if(queueElement.priority<items[i].priority){
                    items.splice(i,0,queueElement);
                    added = true;
                    break;
                }
            }
            if(!added){
                items.push(queueElement);
            }
        }
    };
    this.isEmpty = function(){
        return items.length===0;
    }
    this.dequeue = function(){
        return items.shift();
    }
    this.front = function(){
        return items[0];
    }
    this.clear = function(){
        items = [];
    }
    this.size = function(){
        return items.length;
    }
    this.print = function(){
        console.log(JSON.stringify(items));
    }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue('wd',100)
priorityQueue.enqueue("chy",0);
priorityQueue.enqueue('wd',100)

// console.log(1);
console.log(priorityQueue.size());
// console.log(priorityQueue.print());
console.log(priorityQueue.front());
