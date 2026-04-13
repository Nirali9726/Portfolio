const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(l => l.addEventListener('click', () => mobileMenu.classList.remove('open')));

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 10 ? '0 4px 30px rgba(0,0,0,0.5)' : 'none';
});

function sendMsg(e) {
    e.preventDefault();
    const msg = document.getElementById('successMsg');
    msg.classList.add('show');
    e.target.reset();
    setTimeout(() => msg.classList.remove('show'), 4000);
}