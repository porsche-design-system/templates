import './style.css';
// DO NOT USE IN PRODUCTION!
// EXAMPLE CODE FOR DEMONSTRATION PURPOSE ONLY.

for (const accordion of document.querySelectorAll('p-accordion')) {
  accordion.addEventListener('update', (e) => (e.target.open = e.detail.open));
}
