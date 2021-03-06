import Node from '../scripts/Node';

class CompleteMe {
  constructor() {
    this.root = new Node();
    this.counter = 0;
  }
  
  insert(word) {
    let arrayWord = word.toLowerCase().split('');
    let currentNode = this.root;
    
    while (arrayWord !== []) {
      let currentLetter = arrayWord.shift();  
          
      if (!currentNode.children[currentLetter]) {
        currentNode.children[currentLetter] = new Node(currentLetter);
        currentNode = currentNode.children[currentLetter];
      } else if (currentNode.children[currentLetter]) {
        currentNode = currentNode.children[currentLetter];
      }
      
      if (arrayWord.length === 0) {
        this.counter++;
        currentNode.isWord = true;
        currentNode.value = word;
        return;
      }
    }
  }
  
  count() {
    return this.counter;
  }
  
  suggest(string) {
    let suggestionList = [];
    let searchString = string.toLowerCase().split('');
    let currentNode = this.root;
    searchString.forEach((letter)=> {
      if (currentNode.children[letter]) {
        return currentNode = currentNode.children[letter];
      }
    });
    this.suggestedWords(currentNode, string, suggestionList);
    
    suggestionList.sort((a, b)=> {
      return b.rating - a.rating;
    });
    
    let suggestedWords = suggestionList.map((object)=> {
      return object.word;
    });
    return suggestedWords;
  }
  
  suggestedWords(currentNode, string, suggestionList) {
    if (currentNode.isWord) {
      suggestionList.push({word: string, rating: currentNode.prefCount});
    }
  
    let childLetters = Object.keys(currentNode.children);
    childLetters.forEach((letter)=> {
      let nextNode = currentNode.children[letter];
      this.suggestedWords(nextNode, (string + letter), suggestionList);
    });
  }
  
  populate(array) {
    array.forEach((word)=> {
      this.insert(word);
    });
  }
  
  select(word) {
    let arrayWord = word.toLowerCase().split('');
    let currentNode = this.root;
    
    while (arrayWord !== []) {
      let currentLetter = arrayWord.shift();  
          
      if (currentNode.children[currentLetter]) {
        currentNode = currentNode.children[currentLetter];
      }
  
      if (arrayWord.length === 0) {
        currentNode.prefCount ++;
        return;
      }
    }
  }
}
  
export default CompleteMe;
