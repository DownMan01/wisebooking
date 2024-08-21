document.getElementById('animateButton').addEventListener('click', () => {
  document.querySelectorAll('#imageContainer img').forEach(img => {
    img.style.setProperty('--delay', Math.random() + 's');
    img.style.setProperty('--rotate', (Math.random() * 300 * (Math.random() > .5 ? 1 : -1)) + 'deg');
    img.style.setProperty('--scale', Math.random());
    img.style.animation = 'float 2s var(--ease-spring-2) var(--delay) infinite';
  });
});
