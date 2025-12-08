const carrosselContainer = document.querySelector('.carrossel-container');
const prevBtn = document.querySelector('.carrossel-btn.prev');
const nextBtn = document.querySelector('.carrossel-btn.next');

const scrollAmount = 320; // scroll por clique

nextBtn.addEventListener('click', () => {
  carrosselContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  carrosselContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

// Autoplay simples
setInterval(() => {
  if (carrosselContainer.scrollLeft + carrosselContainer.clientWidth >= carrosselContainer.scrollWidth) {
    carrosselContainer.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    carrosselContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}, 5000);
