import Node from '../scripts/Node';

class CompleteMe {
  constructor(wordArray) {
    //needs a head?
    this.head = null;
    //needs a counter?
    this.count = 0;
    this.populate(wordArray);
  }
  
  insert(word) {
    this.count++;
    
    //need to be able to add new word to the trie
    //split the word into individual letters
    //increments count by 1 per word
  }
  
  suggest() {
    //needs to be able to display all possible words given a certain 
    //prefix
  }
  
  populate() {
    //should allow me to import the dictionary/set of words
  }
}

export default CompleteMe;
