document.querySelectorAll('main img').forEach(img => {
  img.style.setProperty('--delay', Math.random() + 's');
  img.style.setProperty('--rotate', (Math.random() * 300 * (Math.random() > .5 ? 1 : -1)) + 'deg');
  img.style.setProperty('--scale', Math.random());
});
