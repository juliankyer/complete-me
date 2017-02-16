class CompleteMe {
  constructor() {
    this.root = new Node();
    this.count = 0;
  }
  
  insert(word) {
    let splitWord = word.split('');
    addWord(splitWord, this.root, '');
    // addWord('boom');
    // console.log(this.head);
  }
  
  addWord(wordArray, currentNode, currentValue) {
    console.log(wordArray);
    console.log(currentNode);
    console.log(currentValue);
    // wordArray, currentNode, currentValue
    // let currentLetter = wordArray.shift();
    // currentValue += currentLetter;
    // if (wordArray === []) {
    //   this.isWord = true;
    //   this.count++
    //   return;
    // } else if (!currentNode.children.hasOwnProperty(currentLetter)) {
    //   Object.defineProperty(currentNode.children, currentLetter, {
    //     value: new Node(),
    //   });
    //   addWord(wordArray, currentNode.children[currentLetter], currentValue)
    // } else {
    //   addWord(wordArray, currentNode.children[currentLetter], currentValue)
    // }
  }
  
  
  
  count() {
    // return this.count;
    console.log('boom');
  }
}

class CompleteMe {
  constructor(wordArray) {
    this.head = new Node();
    this.count = 0;
    // this.populate(wordArray);
  }

  insert(word) {
    let splitWord = word.split('');
    let addThisWord = addWord(splitWord, this.head, '');
    //if splitWord[0] is in this.head.children
    //add key/value pair to children
    // 'car' split it to ['c', 'a', 'r']
    // newNode = new Node('c')
    // check to see if newNode is in this.head.children, if not add it
    // this.head.children = {}
    //  add word 'as'
    //  add 'a' Node, => this.head.children['a'] = new Node()
    //  does 's' exist in this.head.children['a'].children
    // functiont aht take in 3 arguments, current letter, current node, current value
    //increments count by 1 per word
    //need to be able to add new word to the trie
    //split the word into individual letters
    
    
    
    // this.head = new Node(firstLetter);
    // console.log(this.head);
    
  }
  
  addWord(wordArray, currentNode, currentValue) {
    let currentLetter = wordArray.shift();
    currentValue += currentLetter;
    if (wordArray === []) {
      // change this.isWord to true
      this.isWord = true;
      // add value to currentValue
      this.count++
      return;
    } else if (!currentNode.children.hasOwnProperty(currentLetter)) {
      // currentLetter does not exist in currentNode.children)                                                     
      // currentNode.children[currentLetter] = new Node()
      Object.defineProperty(currentNode.children, currentLetter, {
        value: new Node(),
      });
      addWord(wordArray, currentNode.children[currentLetter], currentValue)
    } else {
      addWord(wordArray, currentNode.children[currentLetter], currentValue)
    }
  }
  
  
  suggest() {
    //needs to be able to display all possible words given a certain 
    //prefix
  }
  
  populate() {
    //should allow me to import the dictionary/set of words
  }
  count() {
    return this.count;
  }
}
