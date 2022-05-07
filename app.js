import keyCodes from './modules/keyCodes.js';
import Keyboard from './modules/Keyboard.js';

const head = document.getElementsByTagName('HEAD')[0];
const csslink = document.createElement('link');
csslink.rel = 'stylesheet';
csslink.type = 'text/css';
csslink.href = './app.css';
head.appendChild(csslink);

const keyboard = new Keyboard();
keyboard.createKeys(keyCodes);

const keys = document.querySelectorAll('.key');
keys.forEach((key, index) => {
  key.setAttribute('id', `${Object.keys(keyCodes.keyCodes)[index]}`);
});

const textarea = document.getElementsByTagName('textarea')[0];
textarea.addEventListener('blur', () => {
  textarea.focus();
});

keyboard.keyboard.addEventListener('mousedown', e => {
  let target = e.target;
  if (target.classList.contains('key')) {
    target.classList.add('active');
  }
});

keyboard.keyboard.addEventListener('mouseup', e => {
  let target = e.target;
  if (target.classList.contains('key')) {
    target.classList.remove('active');
    if (target.getAttribute('id')[0] === 'K' || target.getAttribute('id')[1] === 'i' || target.getAttribute('id') === 'Backquote' || target.getAttribute('id')[1] === 'r' || target.getAttribute('id') === 'Slash' || target.getAttribute('id') === 'Backslash' || target.getAttribute('id') === 'Quote' || target.getAttribute('id') === 'Semicolon' || target.getAttribute('id') === 'Minus' || target.getAttribute('id') === 'Equal' || target.getAttribute('id') === 'Comma' || target.getAttribute('id') === 'Period') {
      textarea.value += e.target.textContent;
    }
  }
});

document.addEventListener('keydown', e => {
  if (document.getElementById(e.code)) {
    document.getElementById(e.code).classList.add('active');
  }
});

document.addEventListener('keyup', e => {
  if (document.getElementById(e.code)) {
    document.getElementById(e.code).classList.remove('active');
  }
});

const upperRegister = (db) => {
  const keys1 = document.querySelectorAll('.key');
  console.log(keys1);
  Object.values(db).forEach(obj => {
    keys1.forEach((key, index) => {
      key.innerHTML = `${Object.values(obj)[index].en[1]}`;
    });
  });
};

const lowerRegister = (db) => {
  const keys1 = document.querySelectorAll('.key');

  Object.values(db).forEach(obj => {
    keys1.forEach((key, index) => {
      key.innerText += `${Object.values(obj)[index].en[0]}`;
    });
  });
};

const caps = document.getElementById('CapsLock');
caps.addEventListener('click', upperRegister(keyCodes));
