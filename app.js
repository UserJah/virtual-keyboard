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
  Object.values(db).forEach(obj => {
    keys1.forEach((key, index) => {
      key.innerHTML = `${Object.values(obj)[index].en[2]}`;
    });
  });
};

const lowerRegister = (db) => {
  const keys1 = document.querySelectorAll('.key');
  Object.values(db).forEach(obj => {
    keys1.forEach((key, index) => {
      key.innerHTML = `${Object.values(obj)[index].en[0]}`;
    });
  });
};

const caps = document.getElementById('CapsLock');
caps.addEventListener('mousedown', upperRegister(keyCodes));
