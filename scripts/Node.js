class Node {
  constructor(letter, children = []) {
    //letter
    this.letter = letter;
    //children {} []
    this.children = children;
    //boolean- is it a word?
    this.isWord = false;
    
    
  }
}

export default Node;
