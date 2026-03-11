/* ── contact.js — Contact page scripts ── */

function countChars() {
  const v = document.getElementById('fMessage').value.length;
  document.getElementById('charCount').textContent = `${v} / 500`;
}

function submitForm() {
  const fn  = document.getElementById('fName').value.trim();
  const ln  = document.getElementById('lName').value.trim();
  const cl  = document.getElementById('fClass').value;
  const tp  = document.getElementById('fTopic').value;
  const mg  = document.getElementById('fMessage').value.trim();
  const err = document.getElementById('formError');

  err.style.display = 'none';

  if (!fn || !ln) { err.textContent = 'Please enter your full name.'; err.style.display = 'block'; return; }
  if (!cl)        { err.textContent = 'Please select your class.';    err.style.display = 'block'; return; }
  if (!tp)        { err.textContent = 'Please select a topic.';       err.style.display = 'block'; return; }
  if (!mg)        { err.textContent = 'Please enter your message.';   err.style.display = 'block'; return; }

  document.getElementById('formView').style.display    = 'none';
  document.getElementById('successView').style.display = 'block';
}

function resetForm() {
  document.getElementById('fName').value    = '';
  document.getElementById('lName').value    = '';
  document.getElementById('fClass').value   = '';
  document.getElementById('fTopic').value   = '';
  document.getElementById('fMessage').value = '';
  document.getElementById('charCount').textContent = '0 / 500';
  document.getElementById('formView').style.display    = 'block';
  document.getElementById('successView').style.display = 'none';
}

function toggleFaq(el) {
  const item   = el.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}
