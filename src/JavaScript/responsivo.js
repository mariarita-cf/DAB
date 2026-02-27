const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});


document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});


document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.classList.remove('active');
  }
});
