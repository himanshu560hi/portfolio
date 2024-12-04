// Toggle navigation menu visibility
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


var typed = new Typed('#element', {
  strings: ['Web Developer', 'Web Designer'],
  typeSpeed: 100,
  loop: true,
  });