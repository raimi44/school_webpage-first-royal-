/* ── shared.js — Common utilities for all pages ── */

function toggleNav() {
  const ul = document.getElementById('navLinks');
  const isVisible = ul.style.display === 'flex';
  ul.style.display     = isVisible ? 'none' : 'flex';
  ul.style.flexDirection = 'column';
  ul.style.position    = 'absolute';
  ul.style.top         = '68px';
  ul.style.right       = '6%';
  ul.style.background  = '#0b1f3a';
  ul.style.border      = '1px solid rgba(0,196,140,0.2)';
  ul.style.borderRadius = '12px';
  ul.style.padding     = '12px';
  ul.style.gap         = '6px';
  ul.style.zIndex      = '200';
}
