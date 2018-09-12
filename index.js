console.log('bst')


class Node{
  constructor(val){
    this.left =null;
    this.right =null;
    this.val = val;
  }
}

class BST{
  constructor(node = null){
    this.size = 0;
    this.root = node;
    this.queue = [];
    this.values = [];
  }
  add(val, node = this.root){
    const newNode = new Node(val);
    //if there is no root
    if(!node){
      this.root = newNode;
      this.size++;
      return newNode;
    }
    //if val of root is bigger than input val
    if(node.val > val){
      //left is null
      if(!node.left){
        node.left = newNode
        this.size++;
        return newNode;
      }
      //left is not null
      return this.add(val, node.left)
    }
    //if val of root is smaller than input val
    if(node.val < val){
      //right is null
      if(!node.right){
        node.right = newNode
        this.size++;
        return newNode;
      }
      //right is not null
      return this.add(val, node.right)
    }
  }
  find(val, node = this.root){
    if(!node) return undefined;
    if(node.val === val) return node;
    //val of node is bigger than input value
    if(node.val > val){
      if(node.left.val === val) return node.left;
      return this.find(val, node.left)
    }
    //val of node is smaller than input value
    if(node.val < val){
      if(node.right.val === val) return node.right;
      return this.find(val, node.right)
    }
  }
  bfs(){
    if(!this.root) return undefined;
    this.values = [];
    var node = this.root;
    const queue = [];
    queue.push(node)
    while(queue.length > 0){
      node = queue.shift();
      this.values.push(node.val);
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }

    return this.values;
    // var node = this.root;
    // this.queue.push(node);
    // while(this.queue.length > 0){
    //   node = this.queue.shift();
    //   this.values.push(node.val);
    //   if(node.left) this.queue.push(node.left)
    //   if(node.right) this.queue.push(node.right)
    // }
    //
    // return this.values;
  }

  dfs(){
    if(!this.root) return undefined;
    this.values = [];
    const recurse = (node) => {
      this.values.push(node.val);
      if(node.left) recurse(node.left);
      if(node.right) recurse(node.right);
    }
    recurse(this.root)
    return this.values;
  }



  dfsPostOrder(){
    if(!this.root) return undefined;
    this.values = [];
    const recurse = node => {
      this.values.push(node.val);
      if(node.right) recurse(node.right);
      if(node.left) recurse(node.left);
    }

    recurse(this.root)
    return this.values;
  }
  dfsInOrder(){
    if(!this.root) return undefined;
    this.values = [];
    const recurse = node => {
      if(node.left) recurse(node.left);
      this.values.push(node.val);
      if(node.right) recurse(node.right);
    }

    recurse(this.root)
    return this.values;
  }
}


module.exports = BST;
