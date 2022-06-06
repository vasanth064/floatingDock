window.addEventListener('mousemove', (e) => {
  const dock = document.querySelector('.dockList');

  if (e.clientX <= 150 && e.clientY >= 300 && e.clientY <= 700) {
    dock.classList.add('dockActive');
  }

  if (e.clientX >= 150) {
    dock.classList.remove('dockActive');
  }
});
