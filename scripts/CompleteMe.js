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
    this.suggestionList = [];
    let searchString = string.split('');
    let currentNode = this.root;
    searchString.forEach(letter=> {
        if (currentNode.children[letter]) {
        return currentNode = currentNode.children[letter];
      }
    });
    this.suggestedWords(currentNode, string);
    return this.suggestionList;
  }
  
  suggestedWords(currentNode, string) {
    if (currentNode.isWord) {
      this.suggestionList.push(string);
    }
    let childLetters = Object.keys(currentNode.children);
    childLetters.forEach((letter)=> {
      let nextNode = currentNode.children[letter];
      this.suggestedWords(nextNode, (string + letter));
    });
  }
  
  populate() {
    
  }
}
  

export default CompleteMe;
