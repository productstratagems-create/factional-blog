export function initPageCount() {
  const numEl = document.getElementById('page-count-num');
  if (!numEl) return;

  const container = numEl.parentElement;

  function update() {
    const lang = localStorage.getItem('site-lang') === 'en' ? 'en' : 'no';
    const count = lang === 'en' ? container?.dataset.countEn : container?.dataset.countNo;
    if (count !== undefined) numEl.textContent = count;
  }

  document.addEventListener('i18n:change', update);
  update();
}
