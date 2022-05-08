import Key from '/modules/key.js';

export default class Keyboard {
  constructor() {
    this.wrapper = document.createElement('div');
    this.textareaDiv = document.createElement('div');
    this.textarea = document.createElement('textarea');
    this.textarea.setAttribute('placeholder', 'FOR START PRESS HERE');
    this.keyboard = document.createElement('div');
    this.OSINFO = document.createElement('p');
    this.OSINFO.textContent = 'KEYBOARD FOR WINDOWS';
    this.CHANGELANGINFO = document.createElement('p');
    this.CHANGELANGINFO.textContent = 'FOR CHANGE EN/RU PRESS LSHIFT + LALT ON REAL KEYBOARD OR WIN ON VIRTUAL KEYBOARD';
    this.wrapper.classList.add('wrapper');
    this.textareaDiv.classList.add('textarea');
    this.keyboard.classList.add('keyboard');
    this.wrapper.appendChild(this.textareaDiv);
    this.wrapper.appendChild(this.keyboard);
    this.wrapper.appendChild(this.OSINFO);
    this.wrapper.appendChild(this.CHANGELANGINFO);
    this.textareaDiv.appendChild(this.textarea);
    document.body.appendChild(this.wrapper);
    for (let i = 0; i < 5; i += 1) {
      this.row = document.createElement('div');
      this.row.classList.add('row');
      this.keyboard.appendChild(this.row);
    }
    this.rows = document.querySelectorAll('.row');
  }

  createKeys(db) {
    Object.values(db).forEach(obj => {
      for (let i = 0; i < Object.values(obj).slice(0, 14).length; i += 1) {
        const key = new Key();
        key.node.innerHTML = `${Object.values(obj)[i].en[0]}`;
        this.rows[0].appendChild(key.node);
      }
      for (let i = 14; i < Object.values(obj).slice(0, 29).length; i += 1) {
        const key = new Key();
        key.node.innerHTML = `${Object.values(obj)[i].en[0]}`;
        this.rows[1].appendChild(key.node);
      }
      for (let i = 29; i < Object.values(obj).slice(0, 42).length; i += 1) {
        const key = new Key();
        key.node.innerHTML = `${Object.values(obj)[i].en[0]}`;
        this.rows[2].appendChild(key.node);
      }
      for (let i = 42; i < Object.values(obj).slice(0, 55).length; i += 1) {
        const key = new Key();
        key.node.innerHTML = `${Object.values(obj)[i].en[0]}`;
        this.rows[3].appendChild(key.node);
      }
      for (let i = 55; i < Object.values(obj).length; i += 1) {
        const key = new Key();
        key.node.innerHTML = `${Object.values(obj)[i].en[0]}`;
        this.rows[4].appendChild(key.node);
      }
    });
  }
}
