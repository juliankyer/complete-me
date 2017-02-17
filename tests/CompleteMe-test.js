import { expect } from 'chai';
import CompleteMe from '../scripts/CompleteMe';
import Node from '../scripts/Node';
require ('locus');
import fs from 'fs';


describe('complete me', ()=> {
  const text = '/usr/share/dict/words';
  const dictionary = fs.readFileSync(text).toString('utf-8').trim().split('\n');
  
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
  
  it('should have a populate function that allows you to pass in an array that then gets added to the trie', ()=> {
    let completeMe = new CompleteMe();
    let array = ['pen', 'people', 'prairie'];
    completeMe.populate(array);
    expect(completeMe.suggest('p')).to.deep.equal(array);
  });
  
  it('should have a populate function that allows you to import an array of words like the dictionary', ()=> {
    let completeMe = new CompleteMe();
    completeMe.populate(dictionary);
    expect(completeMe.count()).to.equal(235886);
    expect(completeMe.suggest('piz')).to.deep.equal(['pize', 'pizza', 'pizzeria', 'pizzicato', 'pizzle']);
  });
  
  it('should have a select function that allows user to prefer a suggestion returned from a substring', ()=> {
    let completeMe = new CompleteMe();
    completeMe.populate(['pize', 'pizza', 'pizzeria', 'pizzicato', 'pizzle']);
    expect(completeMe.suggest('piz')).to.deep.equal(['pize', 'pizza', 'pizzeria', 'pizzicato', 'pizzle']);
    
    completeMe.select('pizzeria');
    expect(completeMe.suggest('piz')).to.deep.equal(['pizzeria', 'pize', 'pizza', 'pizzicato', 'pizzle']);
  });
  
  it('should order preferred words by vote', ()=> {
    let completeMe = new CompleteMe();
    completeMe.populate(['pize', 'pizza', 'pizzeria', 'pizzicato', 'pizzle']);
    completeMe.select('pizza');
    completeMe.select('pizza');
    completeMe.select('pizzeria');
    expect(completeMe.suggest('piz')).to.deep.equal(['pizza', 'pizzeria', 'pize', 'pizzicato', 'pizzle']);
  });
});