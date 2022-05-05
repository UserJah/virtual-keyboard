const head = document.getElementsByTagName('HEAD')[0];
const csslink = document.createElement('link');
csslink.rel = 'stylesheet';
csslink.type = 'text/css';
csslink.href = './app.css';
head.appendChild(csslink);
