/* ── index.js — Homepage scripts ── */

// Scroll-reveal animation using IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.animation = 'fadeUp 0.6s ease both';
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .step, .subject-pill, .hero-card').forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});
