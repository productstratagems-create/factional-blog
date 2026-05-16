export function initPageCount() {
  const numEl = document.getElementById('page-count-num');
  if (!numEl) return;

  const container = numEl.parentElement;

  function update() {
    const lang = document.documentElement.getAttribute('data-lang-filter') || 'all';
    const count =
      lang === 'en' ? container?.dataset.countEn :
      lang === 'no' ? container?.dataset.countNo :
      container?.dataset.countAll;
    if (count !== undefined) numEl.textContent = count;
  }

  document.addEventListener('i18n:change', update);
  update();
}
