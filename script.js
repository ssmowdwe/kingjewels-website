/* ============================================================
   KING JEWELS — script.js
   Handles: page loader, header scroll, search bar,
            mobile menu, cart drawer (Shopify SDK manages items),
            particles, toast, scroll animations
   ============================================================ */

/* ─── PAGE LOADER ─── */
window.addEventListener('load', () => {
  const loader = document.getElementById('pageLoader');
  setTimeout(() => {
    loader.classList.add('hidden');
    document.body.style.overflow = '';
  }, 1200);
});

/* ─── HEADER: scroll shadow ─── */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}, { passive: true });

/* ─── SEARCH BAR ─── */
const searchBtn   = document.getElementById('searchBtn');
const searchBar   = document.getElementById('searchBar');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');

searchBtn.addEventListener('click', () => {
  searchBar.classList.toggle('open');
  if (searchBar.classList.contains('open')) {
    setTimeout(() => searchInput && searchInput.focus(), 350);
  }
});

searchClose.addEventListener('click', () => {
  searchBar.classList.remove('open');
});

/* Close search on Escape */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    searchBar.classList.remove('open');
    closeMobileMenu();
    closeCart();
  }
});

/* ─── MOBILE MENU ─── */
const hamburgerBtn    = document.getElementById('hamburgerBtn');
const mobileMenu      = document.getElementById('mobileMenu');
const mobileOverlay   = document.getElementById('mobileOverlay');
const closeMobileBtn  = document.getElementById('closeMobileMenu');

function openMobileMenu() {
  mobileMenu.classList.add('open');
  mobileOverlay.classList.add('open');
  document.body.classList.add('no-scroll');
}

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  mobileOverlay.classList.remove('open');
  document.body.classList.remove('no-scroll');
}

hamburgerBtn.addEventListener('click', openMobileMenu);
closeMobileBtn.addEventListener('click', closeMobileMenu);
mobileOverlay.addEventListener('click', closeMobileMenu);

/* ─── CART DRAWER ─── */
const cartBtn     = document.getElementById('cartBtn');
const cartDrawer  = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('cartClose');

function openCart() {
  cartDrawer.classList.add('open');
  cartOverlay.classList.add('open');
  document.body.classList.add('no-scroll');
}

function closeCart() {
  cartDrawer.classList.remove('open');
  cartOverlay.classList.remove('open');
  document.body.classList.remove('no-scroll');
}

cartBtn.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

/* ─── TOAST NOTIFICATION ─── */
const toastEl = document.getElementById('toast');
let toastTimer;

function showToast(message) {
  clearTimeout(toastTimer);
  toastEl.textContent = message;
  toastEl.classList.add('show');
  toastTimer = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 3000);
}

/* ─── NEWSLETTER FORM ─── */
function handleNewsletter(e) {
  e.preventDefault();
  const input = e.target.querySelector('.newsletter-input');
  if (input && input.value) {
    showToast(`🎉  Welcome to the Royal Family!`);
    input.value = '';
  }
  return false;
}

/* ─── HERO PARTICLES ─── */
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const count = 40;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';

    const size = Math.random() * 3 + 1;
    const left = Math.random() * 100;
    const delay = Math.random() * 12;
    const duration = Math.random() * 10 + 8;

    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      animation-delay: ${delay}s;
      animation-duration: ${duration}s;
    `;

    container.appendChild(p);
  }
}

createParticles();

/* ─── SMOOTH SCROLL for hero button ─── */
document.querySelectorAll('a[href="#products"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  });
});

/* ─── INTERSECTION OBSERVER: fade-in sections ─── */
const fadeStyle = document.createElement('style');
fadeStyle.textContent = `
  .fade-in-section {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .fade-in-section.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(fadeStyle);

const sections = document.querySelectorAll(
  '.trust-section, .categories-section, .products-section, .brand-section, .reviews-section, .newsletter-section'
);

sections.forEach(sec => sec.classList.add('fade-in-section'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

sections.forEach(sec => observer.observe(sec));

/* ─── PRODUCT CARD: stagger animation ─── */
const cardStyle = document.createElement('style');
cardStyle.textContent = `
  .product-card {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease;
  }
  .product-card.card-visible {
    opacity: 1;
    transform: translateY(0);
  }
  .product-card.card-visible:hover {
    transform: translateY(-4px);
  }
`;
document.head.appendChild(cardStyle);

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const cards = [...document.querySelectorAll('.product-card')];
      const idx   = cards.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('card-visible');
      }, idx * 80);
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card').forEach(card => cardObserver.observe(card));
