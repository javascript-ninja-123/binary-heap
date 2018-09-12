const BST = require('../index');
const {expect} = require('chai')



describe('test index', () => {
  let exampleBST;
  before(() => {
    exampleBST = new BST();
  })
  it('nothing in bst', () => {
    expect(exampleBST.size).to.equal(0)
  })
  it('add root',() => {
    exampleBST.add(10)
    expect(exampleBST.root.val).to.equal(10)
  })
  it('add value smaller than the root', () => {
    exampleBST.add(6);
    expect(exampleBST.root.left.val).to.equal(6);
  })
  it('add value bigger than the root', () => {
    exampleBST.add(15);
    expect(exampleBST.root.right.val).to.equal(15);
  })
  it('find a value', () => {
      exampleBST.add(3);
      exampleBST.add(8);
      exampleBST.add(20);
      const exposedNode = exampleBST.find(20);
      expect(exposedNode.val).to.equal(20)
  })


  it('bfs', () => {
    console.log(exampleBST.dfsInOrder())
  })
})
