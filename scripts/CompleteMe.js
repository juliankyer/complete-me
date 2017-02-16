import Node from '../scripts/Node';

class CompleteMe {
  constructor() {
    this.root = new Node();
    this.counter = 0;
    this.suggestionList = [];
  }
  
  insert(word) {
    let arrayWord = word.split('');
    let currentNode = this.root;
    
    while (arrayWord !== []) {
      let currentLetter = arrayWord.shift();  
          
      if (!currentNode.children[currentLetter]) {
        currentNode.children[currentLetter] = new Node(currentLetter);
        currentNode = currentNode.children[currentLetter];
      } else if (currentNode.children[currentLetter]) {
        currentNode = currentNode.children[currentLetter]
      };
      
      if (arrayWord.length === 0) {
        this.counter++;
        currentNode.isWord = true;
        currentNode.value = word;
        // return JSON.stringify(this, null, 4);
        return;
      }
    }
  }

  count() {
    return this.counter;
  }
  
  suggest(string) {
    //split string
    let searchString = string.split('');
    //establish current node
    
    //run for each over split string
    //if current node has children with index of letter from suggestion
    //move node to next match
    
    //call word suggestion finder function and pass in current node and string
    
  }
  
  suggestedWords(currentNode, string) {
    //if the currentNode isWord, push the string into suggestions array
    //then look at current node children, and turn into array with Object.keys
    //loop through this array with foreach, pass in letter, 
    //let next node = currentNode.children[letter]
    //call this.suggestedWords(next node, (string + letter));
    
  }
  
  populate() {
    
  }
}
  

export default CompleteMe;
