AOS.init({
  duration: 800,
  once: true,
  offset: 50,
});

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

const mobileMenuLinks = mobileMenu.getElementsByTagName('a');
for (let link of mobileMenuLinks) {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero-bg');
  if (!hero) return;

  for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.style.position = 'absolute';
    star.style.width = `${Math.random() * 2}px`;
    star.style.height = star.style.width;
    star.style.backgroundColor = 'white';
    star.style.borderRadius = '50%';
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.opacity = `${Math.random()}`;
    star.style.animation = `twinkle ${Math.random() * 5 + 3}s linear infinite`;
    hero.prepend(star);
  }
});

const keyframes = `
@keyframes twinkle {
    0% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.5); opacity: 1; }
    100% { transform: scale(1); opacity: 0.5; }
}`;
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = keyframes;
document.head.appendChild(styleSheet);