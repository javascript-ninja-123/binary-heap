console.log('heap.js')


class MaxBinaryHeap{
  constructor(){
    this.values = [];
  }

  insert(val){
    this.values.push(val);
    this.bubbleUp();
  }
  bubbleUp(){
    let index = this.values.length - 1
    let value = this.values[index];

    const recurse = (value,index) => {
        const parentIndex = Math.floor((index - 1) / 2);
        const parentValue = this.values[parentIndex];
        if(index <= 0) return;
        if(value > parentValue){
           this.values[parentIndex] = value;
           this.values[index] = parentValue;
           recurse(this.values[parentIndex], parentIndex)
        }
    }

    recurse(value,index)

    // while(index > 0){
    //   let parentIndex = Math.floor((index - 1) / 2);
    //   let parentValue = this.values[parentIndex];
    //   if(value <= parentValue) break;
    //   this.values[parentIndex] = value;
    //   this.values[index] = parentValue;
    //   index = parentIndex
    // }
  }
  remove(){
    this.values.shift();
    if(this.values.length === 0) return this.values;
    const last = this.values.pop();
    this.values.unshift(last);
    this.sinkDown();
    return this;
  }
  sinkDown(){
    const index = 0;
    const value = this.values[index];

    const recurse = (value,index) => {
      //variables
      let childIndex;
      let childValue;
      const leftChildIndex = Math.floor((2 * index) + 1);
      const rightChildIndex = Math.floor((2 * index) + 2);
      const leftChildValue = this.values[leftChildIndex];
      const rightChildValue = this.values[rightChildIndex];

      //end condition
      if(!leftChildValue && !rightChildValue) return;
      if(leftChildValue && rightChildValue && value > leftChildValue && value > rightChildValue) return;

      //assign a childIndex and childValue
      if((leftChildValue && !rightChildValue) ||
          (rightChildValue && leftChildValue && leftChildValue > rightChildValue)){
        childIndex = leftChildIndex
        childValue = leftChildValue
      }
      if((rightChildValue && !leftChildValue) ||
        (rightChildValue && leftChildValue && leftChildValue < rightChildValue)
        ){
        childIndex = rightChildIndex
        childValue = rightChildValue
      }
      //acutal logic replace position
      if(value > childValue) return;
      this.values[index] = childValue
      this.values[childIndex] = value;

      return recurse(this.values[childIndex], childIndex);
  }


  return recurse(value,index)
}

}


const heap = new MaxBinaryHeap();
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)

heap.remove();
heap.remove();
heap.remove();
heap.remove();
heap.remove();
heap.remove();
heap.remove();

console.log(heap.values)
