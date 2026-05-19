// ── CUSTOM CURSOR ────────────────────────────────────────────
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX - 10 + 'px';
  cursor.style.top  = e.clientY - 10 + 'px';
});
document.querySelectorAll('a, button, .skill-card, .project-card, .filter-btn').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.style.transform = 'scale(2.5)');
  el.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
});

// ── NAVBAR SCROLL EFFECT ─────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ── HAMBURGER MENU ───────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ── SMOOTH SCROLL + ACTIVE NAV ───────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ── SCROLL REVEAL ────────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, entry.target.dataset.delay || 0);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach((el, i) => {
  el.dataset.delay = (i % 4) * 100;
  observer.observe(el);
});

// ── SKILL BAR ANIMATION ──────────────────────────────────────
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fills = entry.target.querySelectorAll('.skill-fill');
      fills.forEach(fill => {
        fill.style.width = fill.dataset.width + '%';
      });
    }
  });
}, { threshold: 0.3 });
document.querySelector('.skills-section') && skillObserver.observe(document.querySelector('.skills-section'));

// ── COUNTER ANIMATION ────────────────────────────────────────
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-num').forEach(el => {
        const target = +el.dataset.count;
        let current = 0;
        const step = Math.ceil(target / 40);
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(timer); }
          el.textContent = current;
        }, 40);
      });
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
document.querySelector('.about-stats') && counterObserver.observe(document.querySelector('.about-stats'));

// ── PROJECT FILTER ───────────────────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      const cats = card.dataset.category || '';
      if (filter === 'all' || cats.includes(filter)) {
        card.classList.remove('hidden');
        card.style.animation = 'fadeIn 0.4s ease forwards';
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ── CONTACT FORM VALIDATION ──────────────────────────────────
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const nameErr = document.getElementById('nameError');
    const emailErr = document.getElementById('emailError');
    const msgErr = document.getElementById('msgError');

    // Reset errors
    [name, email, message].forEach(f => f.classList.remove('error'));
    [nameErr, emailErr, msgErr].forEach(e => e.textContent = '');

    if (name.value.trim().length < 2) {
      name.classList.add('error');
      nameErr.textContent = 'Please enter your name.';
      valid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      email.classList.add('error');
      emailErr.textContent = 'Please enter a valid email address.';
      valid = false;
    }
    if (message.value.trim().length < 10) {
      message.classList.add('error');
      msgErr.textContent = 'Message must be at least 10 characters.';
      valid = false;
    }

    if (valid) {
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Sending...';
      btn.disabled = true;
      setTimeout(() => {
        form.reset();
        document.getElementById('formSuccess').classList.add('show');
        btn.innerHTML = 'Send Message <i class="bi bi-send-fill"></i>';
        btn.disabled = false;
        setTimeout(() => document.getElementById('formSuccess').classList.remove('show'), 4000);
      }, 1200);
    }
  });
}

// ── FOOTER YEAR ──────────────────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();

// ── TYPING EFFECT (optional hero tag) ───────────────────────
const roles = ['Frontend Developer', 'UI Designer', 'HTML/CSS Specialist', 'JavaScript Enthusiast'];
let roleIdx = 0, charIdx = 0, deleting = false;
const heroTag = document.querySelector('.hero-tag');
function typeEffect() {
  if (!heroTag) return;
  const current = roles[roleIdx];
  heroTag.textContent = deleting ? current.substring(0, charIdx--) : current.substring(0, charIdx++);
  if (!deleting && charIdx === current.length + 1) {
    deleting = true; setTimeout(typeEffect, 1800); return;
  }
  if (deleting && charIdx === 0) {
    deleting = false; roleIdx = (roleIdx + 1) % roles.length;
  }
  setTimeout(typeEffect, deleting ? 60 : 100);
}
setTimeout(typeEffect, 1000);
