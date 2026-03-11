/* ── cbt.js — CBT login portal scripts ── */

// ── DEMO CREDENTIALS ──
const VALID_PASSWORD = 'student123';

function doLogin() {
  const name = document.getElementById('studentName').value.trim();
  const cls  = document.getElementById('studentClass').value;
  const pw   = document.getElementById('loginPassword').value;

  showError('');

  if (!name) { showError('fauziyah hassan.'); return; }
  if (!cls)  { showError('ss2 a'); return; }
  if (!pw)   { showError('1234'); return; }

  if (pw !== VALID_PASSWORD) {
    showError('⚠️ Incorrect password. Please check your credentials and try again.');
    return;
  }

  // Login success — populate portal
  const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  document.getElementById('avatarInitial').textContent = initials;
  document.getElementById('displayName').textContent   = name;
  document.getElementById('displayClass').textContent  = cls;

  document.getElementById('loginCard').style.display  = 'none';
  document.getElementById('portalView').style.display = 'block';

  sessionStorage.setItem('cbtUser', JSON.stringify({ name, cls }));
}

function showError(msg) {
  const err = document.getElementById('errorMsg');
  err.textContent   = msg;
  err.style.display = msg ? 'block' : 'none';
}

function doLogout() {
  sessionStorage.removeItem('cbtUser');
  document.getElementById('portalView').style.display = 'none';
  document.getElementById('loginCard').style.display  = 'block';
  document.getElementById('loginPassword').value      = '';
}

function togglePw() {
  const inp = document.getElementById('loginPassword');
  const eye = document.getElementById('pwEye');
  if (inp.type === 'password') {
    inp.type = 'text'; eye.textContent = '🙈';
  } else {
    inp.type = 'password'; eye.textContent = '👁';
  }
}

// Restore session if already logged in
window.addEventListener('load', () => {
  const saved = sessionStorage.getItem('cbtUser');
  if (saved) {
    const { name, cls } = JSON.parse(saved);
    const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
    document.getElementById('avatarInitial').textContent = initials;
    document.getElementById('displayName').textContent   = name;
    document.getElementById('displayClass').textContent  = cls;
    document.getElementById('loginCard').style.display  = 'none';
    document.getElementById('portalView').style.display = 'block';
  }
});

// Allow Enter key to trigger login
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && document.getElementById('loginCard').style.display !== 'none') {
    doLogin();
  }
});
