export default class Key {
  constructor() {
    this.node = document.createElement('button');
    this.node.classList.add('key');
    this.node.setAttribute('type', 'button');
  }
  
  keyup() {
    this.node.classList.add('active');
  }

  keydown() {
    this.node.classList.remove('active');
  }
}
