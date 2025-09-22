const cards = document.querySelectorAll('.card');
const p = document.querySelector('.hero-content')
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible'); 
    }
  });
}, {
  threshold: 0.3
});

cards.forEach(card => observer.observe(card));
observer.observe(p)