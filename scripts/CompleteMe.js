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
        return;
      }
    }
  }
  
  // insert(word) {
  //   let splitWord = word.split('');
  //   this.addWord(splitWord, this.root);
  //   this.isWord = true;
  //   this.counter++;
  //   // currentNode.value = word;
  // }
  // 
  // addWord(wordArray, currentNode) {
  //   // currentValue += currentLetter;
  //   if (wordArray === []) {
  //     // this.isWord = true;
  //     // this.counter++
  //     return;
  //     
  //   } 
  //   if (wordArray.length === 0) {
  //     return;
  //   }
  // 
  // let currentLetter = wordArray.shift();
  //   
  //  if (!currentNode.children[currentLetter]) {
  //     currentNode.children[currentLetter] = new Node(currentLetter);
  //     this.addWord(wordArray, currentNode.children[currentLetter]);
  //     
  //   } else {
  //      this.addWord(wordArray, currentNode.children[currentLetter])
  //   }
  // }

  count() {
    return this.counter;
  }
  
  suggest(string) {
    this.suggestionList = [];
    let searchString = string.split('');
    let currentNode = this.root;
    searchString.forEach((letter)=> {
      if (currentNode.children[letter]) {
        return currentNode = currentNode.children[letter];
      }
    });
    this.suggestedWords(currentNode, string);
    //*********************this.orderSuggestions
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
  
  populate(array) {
    array.forEach((word)=> {
      this.insert(word);
    });
  }
  
  select(substring, word) {
    let substringArray = substring.split('');
    let currentNode = this.root;
    substringArray.forEach((letter)=> {
      if (currentNode.children[letter]) {
        return currentNode = currentNode.children[letter];
      }
    });
    this.weightWord(currentNode, word);
  }
  
  weigthWord(currentNode, string) {
    if (currentNode.isWord) {
      currentNode.prefCount++;
    }
    let childLetters = Object.keys(currentNode.children);
    childLetters.forEach((letter)=> {
      let nextNode = currentNode.children[letter];
      this.suggestedWords(nextNode, (string + letter));
    });
  }
  
  orderSuggestions(array) {
    
  }
}
  

export default CompleteMe;

// return JSON.stringify(this, null, 4);

