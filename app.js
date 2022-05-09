import keyCodes from './modules/keyCodes.js';
import Keyboard from './modules/keyboard.js';

const head = document.getElementsByTagName('HEAD')[0];
const csslink = document.createElement('link');
csslink.rel = 'stylesheet';
csslink.type = 'text/css';
csslink.href = './app.css';
head.appendChild(csslink);

const faviconlink = document.createElement('link');
faviconlink.rel = 'icon';
faviconlink.href = './assets/rsicon.ico';
head.appendChild(faviconlink);

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

const changeRegister = (db) => {
  if (keys[15].textContent === 'q') {
    Object.values(db).forEach(obj => {
      keys.forEach((key, index) => {
        keys[index].innerHTML = `${Object.values(obj)[index].en[2]}`;
      });
    });
  } else if (keys[15].textContent === 'Q') {
    Object.values(db).forEach(obj => {
      keys.forEach((key, index) => {
        keys[index].innerHTML = `${Object.values(obj)[index].en[0]}`;
      });
    });
  } else if (keys[15].textContent === 'й') {
    Object.values(db).forEach(obj => {
      keys.forEach((key, index) => {
        keys[index].innerHTML = `${Object.values(obj)[index].ru[2]}`;
      });
    });
  } else if (keys[15].textContent === 'Й') {
    Object.values(db).forEach(obj => {
      keys.forEach((key, index) => {
        keys[index].innerHTML = `${Object.values(obj)[index].ru[0]}`;
      });
    });
  }
};
const changeRegisterShift = (db) => {
  if (keys[15].textContent === 'q') {
    Object.values(db).forEach(obj => {
      keys.forEach((key, index) => {
        keys[index].innerHTML = `${Object.values(obj)[index].en[1]}`;
      });
    });
  } else if (keys[15].textContent === 'Q') {
    Object.values(db).forEach(obj => {
      keys.forEach((key, index) => {
        keys[index].innerHTML = `${Object.values(obj)[index].en[0]}`;
      });
    });
  } else if (keys[15].textContent === 'й') {
    Object.values(db).forEach(obj => {
      keys.forEach((key, index) => {
        keys[index].innerHTML = `${Object.values(obj)[index].ru[1]}`;
      });
    });
  } else if (keys[15].textContent === 'Й') {
    Object.values(db).forEach(obj => {
      keys.forEach((key, index) => {
        keys[index].innerHTML = `${Object.values(obj)[index].ru[0]}`;
      });
    });
  }
};

const caps = document.getElementById('CapsLock');
caps.addEventListener('mousedown', () => changeRegister(keyCodes));

document.addEventListener('keydown', e => {
  if (e.code === 'CapsLock') {
    if (e.repeat) {
      return;
    }
    changeRegister(keyCodes);
  }
});

const shiftLeft = document.getElementById('ShiftLeft');
const shiftRight = document.getElementById('ShiftRight');

shiftLeft.addEventListener('mousedown', () => changeRegisterShift(keyCodes));
shiftLeft.addEventListener('mouseup', () => changeRegisterShift(keyCodes));
shiftRight.addEventListener('mousedown', () => changeRegisterShift(keyCodes));
shiftRight.addEventListener('mouseup', () => changeRegisterShift(keyCodes));

document.addEventListener('keydown', e => {
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    if (e.repeat) {
      return;
    }
    changeRegisterShift(keyCodes);
  }
});
document.addEventListener('keyup', e => {
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    changeRegisterShift(keyCodes);
  }
});

const space = document.getElementById('Space');
space.addEventListener('click', () => {
  textarea.value += ' ';
});

const tab = document.getElementById('Tab');
tab.addEventListener('click', () => {
  textarea.value += '    ';
});
document.addEventListener('keydown', e => {
  if (e.code === 'Tab') {
    textarea.value += '    ';
  }
});

const backspace = document.getElementById('Backspace');
backspace.addEventListener('click', () => {
  textarea.value = textarea.value.split('').slice(0, -1).join('');
});

const enter = document.getElementById('Enter');
enter.addEventListener('click', () => {
  textarea.value += '\n';
});

const changeLang = (db) => {
  if (keys[15].textContent === 'q') {
    Object.values(db).forEach(obj => {
      keys.forEach((key, index) => {
        keys[index].innerHTML = `${Object.values(obj)[index].ru[0]}`;
      });
    });
  } else if (keys[15].textContent === 'Q') {
    Object.values(db).forEach(obj => {
      keys.forEach((key, index) => {
        keys[index].innerHTML = `${Object.values(obj)[index].ru[2]}`;
      });
    });
  } else if (keys[15].textContent === 'й') {
    Object.values(db).forEach(obj => {
      keys.forEach((key, index) => {
        keys[index].innerHTML = `${Object.values(obj)[index].en[0]}`;
      });
    });
  } else if (keys[15].textContent === 'Й') {
    Object.values(db).forEach(obj => {
      keys.forEach((key, index) => {
        keys[index].innerHTML = `${Object.values(obj)[index].en[2]}`;
      });
    });
  }
};

const win = document.getElementById('MetaLeft');
win.addEventListener('click', () => {
  changeLang(keyCodes);
});

function runOnKeys(func, ...codes) {
  let pressed = new Set();
  document.addEventListener('keydown', (e) => {
    pressed.add(e.code);

    for (let i = 0; i < codes.length; i += 1) { // все ли клавиши из набора нажаты?
      if (!pressed.has(codes[i])) {
        return;
      }
    }
    pressed.clear();

    func();
  });

  document.addEventListener('keyup', e => {
    pressed.delete(e.code);
  });
}

runOnKeys(
  () => changeLang(keyCodes),
  'ShiftLeft',
  'AltLeft'
);

document.addEventListener('keydown', e => {
  if (e.code === 'AltLeft' || e.code === 'AltRight') {
    e.preventDefault();
  }
})