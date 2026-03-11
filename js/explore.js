/* ── explore.js — Explore Materials scripts ── */

let currentFilter = 'all';

function setFilter(type, btn) {
  currentFilter = type;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filterMaterials();
}

function filterMaterials() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  let visible = 0;

  document.querySelectorAll('.subject-block').forEach(block => {
    const subjectMatch = block.dataset.subject.includes(q) || q === '';
    let blockVisible = false;

    block.querySelectorAll('.material-card').forEach(card => {
      const typeMatch = currentFilter === 'all' || card.dataset.type === currentFilter;
      const textMatch = card.innerText.toLowerCase().includes(q) || q === '';

      if ((typeMatch && textMatch) || (typeMatch && subjectMatch)) {
        card.style.display = 'flex';
        blockVisible = true;
        visible++;
      } else {
        card.style.display = 'none';
      }
    });

    block.style.display = blockVisible ? 'block' : 'none';
  });

  document.getElementById('noResults').style.display = visible === 0 ? 'block' : 'none';
}
