class CompleteMe {
  constructor() {
    this.root = new Node();
    this.count = 0;
  }
  
  insert(word) {
    let splitWord = word.split('');
    this.addWord(splitWord, this.root);
    this.isWord = true;
    this.counter++;
    // currentNode.value = word;
  }
  
  addWord(wordArray, currentNode) {
    // currentValue += currentLetter;
    if (wordArray === []) {
      // this.isWord = true;
      // this.counter++
      return;
      
    } 
    if (wordArray.length === 0) {
      return;
    }
  
  let currentLetter = wordArray.shift();
    
   if (!currentNode.children[currentLetter]) {
      currentNode.children[currentLetter] = new Node(currentLetter);
      this.addWord(wordArray, currentNode.children[currentLetter]);
      
    } else {
       this.addWord(wordArray, currentNode.children[currentLetter])
    }
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
  

  
  