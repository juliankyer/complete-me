import { expect } from 'chai';
import CompleteMe from '../scripts/CompleteMe';
import Node from '../scripts/Node';
require ('locus');


describe('complete me', ()=> {
  // const text = "/usr/share/dict/words";
  // let dictionary = fs.readFileSystem(text).toString('utf-8').trim().split('\n');


  it.skip('this test is for poking around', ()=> {
    let completeMe = new CompleteMe();
    completeMe.insert('be');
    completeMe.insert('bed');
    completeMe.insert('bead');
    completeMe.insert('bad');
    // completeMe.insert('ad');
    // console.log(completeMe.insert('bad'));
    // console.log(completeMe.suggest('be'));
    console.log(completeMe.suggest('be'));
    // completeMe.insert('app');
    // completeMe.insert('apple');
    // completeMe.insert('apply');
    // completeMe.suggest('ap');
    // console.log(completeMe.suggestionList);
    
    
    // eval(locus);
  });
  
  it('should be an instance of CompleteMe', ()=> {
    let completeMe = new CompleteMe();
    completeMe.insert('hat');
    expect(completeMe).to.be.an.instanceof(CompleteMe);
  });
  
  it('should have a root', ()=> {
    let completeMe = new CompleteMe();
    expect(completeMe).to.have.ownProperty('root');
  });
  
  it('the root should be an instance of a node', ()=> {
    let completeMe = new CompleteMe();
    expect(completeMe.root).to.be.an.instanceof(Node);
  });
  
  it('the root should add the first letter of the word as a child if it starts empty', ()=> {
    let completeMe = new CompleteMe();
    completeMe.insert('hat');
    expect(completeMe.root.children).to.have.ownProperty('h');
  });
  
  it('should split the trie where two words diverge', ()=> {
    let completeMe = new CompleteMe();
    completeMe.insert('car');
    completeMe.insert('cry');
    let base = completeMe.root;
    expect(base.children).to.have.ownProperty('c');
    expect(base.children['c'].children).to.have.ownProperty('a');
    expect(base.children['c'].children).to.have.ownProperty('r');
  });
  
  it('should have a counter that increases by 1 for each word added', ()=> {
    let completeMe = new CompleteMe();
    completeMe.insert('car');
    completeMe.insert('cry');
    expect(completeMe.counter).to.equal(2);
    
    completeMe.insert('bar');
    expect(completeMe.counter).to.equal(3);
  });
  
  it('should have a function that returns the count', ()=> {
    let completeMe = new CompleteMe();
    completeMe.insert('hat');
    completeMe.insert('bar');
    expect(completeMe.count()).to.equal(2);
  });
  
  it('should store the word at the leaf', ()=> {
    let completeMe = new CompleteMe();
    completeMe.insert('car');
    expect(completeMe.root.children['c'].children['a'].children['r'].value).to.equal('car');
  });
  
  it('should have a suggest function that lists all words that are children of a string', ()=> {
    let completeMe = new CompleteMe();
    completeMe.insert('ape');
    completeMe.insert('apple');
    completeMe.insert('apply');
    expect(completeMe.suggest('ap')).to.deep.equal(['ape', 'apple', 'apply']);
  });
  
  it.skip('should have a populate function that allows you to import an array of words like the dictionary', ()=> {
    let completeMe = new CompleteMe();
    completeMe.populate(dictionary);
    expect(completeMe.counter).to.equal(235866);
    expect(completeMe.suggest('piz')).to.equal(['pize', 'pizza', 'pizzeria', 'pizzicato', 'pizzle']);
  })
});