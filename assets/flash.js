(() => {
  const cards = [...document.querySelectorAll('.driver:not(.unavailable)')];
  const install = document.getElementById('install-button');
  const info = document.querySelector('#selected-info strong');
  cards.forEach(card => card.addEventListener('click', () => {
    const input = card.querySelector('input');
    if (!input || input.disabled) return;
    input.checked = true;
    cards.forEach(item => item.classList.toggle('selected', item === card));
    install.setAttribute('manifest', input.value);
    info.textContent = card.querySelector('strong').textContent + ' · ' + card.querySelector('small').textContent;
  }));
})();
