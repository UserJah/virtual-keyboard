// import { keyCodes, Key } from "./modules/keyCodes";
const head = document.getElementsByTagName('HEAD')[0];
const csslink = document.createElement('link');
csslink.rel = 'stylesheet';
csslink.type = 'text/css';
csslink.href = './app.css';
head.appendChild(csslink);

class Keyboard {
  constructor() {
    this.wrapper = document.createElement('div');
    this.textareaDiv = document.createElement('div');
    this.textarea = document.createElement('textarea');
    this.keyboard = document.createElement('div');
    this.wrapper.classList.add('wrapper');
    this.textareaDiv.classList.add('textarea');
    this.keyboard.classList.add('keyboard');
    this.wrapper.appendChild(this.textareaDiv);
    this.wrapper.appendChild(this.keyboard);
    this.textareaDiv.appendChild(this.textarea);
  }
}

const keyboard = new Keyboard();
document.body.appendChild(keyboard.wrapper);
