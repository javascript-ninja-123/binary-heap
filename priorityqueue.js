console.log('prioirty.js')


class Node{
  constructor(val, priority){
    this.val = val;
    this.priority =priority;
  }
}

class PrioirtyQueue{
  constructor(){
    this.values = [];
  }
  push(val,prioirty){
    if(typeof prioirty !== 'number') return 'prioirty has to be number';
    const value = new Node(val, prioirty);
    this.values.push(value)
    this.bubblePop();
    return value;
  }
  bubblePop(){
    if(this.values.length === 1) return;

    const recurse = (node,index) => {
    const parentIndex = Math.floor((index - 1) /2);
    const parentsNode = this.values[parentIndex];
    if(!parentsNode) return;
    if(parentsNode.priority < node.priority) return;

    this.values[parentIndex] = node;
    this.values[index] = parentsNode;
    recurse(this.values[parentIndex], parentIndex)

  }

  recurse(this.values[this.values.length - 1], this.values.length - 1)
  }
  remove(){
    const value = this.values.shift();
    if(this.values.length === 0) return [];
    const newFirstIndexValue = this.values.pop();
    this.values.unshift(newFirstIndexValue);
    this.sinkDown();
    return value;
  }
  sinkDown(){
    const index = 0;
    const value = this.values[index];

    const recurse = (value,index) => {
    //variables
    const leftNodeIndex = (2 * index) + 1
    const leftValueNode = this.values[leftNodeIndex]
    const rightNodeIndex = (2 * index) + 2
    const rightValueNode = this.values[rightNodeIndex]
    let childNode;
    let childIndex;

    //end condition
    if(!leftValueNode  && !rightValueNode) return;

    if(leftValueNode && !rightValueNode){
        childNode = leftValueNode;
        childIndex = leftNodeIndex
    }
    if(rightValueNode && !leftValueNode){
      childNode = rightValueNode;
      childIndex = rightNodeIndex
    }
    if(leftValueNode && rightValueNode){
      childNode =   leftValueNode.priority < rightValueNode.priority ? leftValueNode : rightValueNode;
      childIndex = leftValueNode.priority < rightValueNode.priority ? leftNodeIndex : rightNodeIndex;
    }
    //end condition
    if(value.priority < childNode.priority) return;

    this.values[childIndex] = value
    this.values[index] = childNode;

    recurse(this.values[childIndex],childIndex)
  }

  recurse(value,index)
}

}


const ER = new PrioirtyQueue();
ER.push('man', 10)
ER.push('flu',5)
ER.push('flu',4)
ER.push('flu',3)
ER.push('flu',2)
ER.push('flu',7)
ER.push('gun shot',1)

ER.remove();


console.log(ER)
