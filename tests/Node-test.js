import { expect } from 'chai';
import Node from '../scripts/Node';

describe('node', () => {
  it('should hold a letter', ()=> {
    let node = new Node('a');
    expect(node.letter).to.equal('a');
  });
  
  it('should have an empty object to hold its children', ()=> {
    let node = new Node();
    expect(node.children).to.deep.equal({});
  });
  
  it('should have a "is this a word" boolean that defaults to false', ()=> {
    let node = new Node();
    expect(node.isWord).to.equal(false);
  });
  
  it('should have an empty string to hold word values', ()=> {
    let node = new Node();
    expect(node.value).to.deep.equal('');
  });
});
