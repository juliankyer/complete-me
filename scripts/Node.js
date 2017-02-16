class Node {
  constructor(letter, children = {}) {
    this.letter = letter;
    this.children = children;
    this.isWord = false;
    this.value = '';
    this.prefCount = 0;
  }
}

export default Node;
