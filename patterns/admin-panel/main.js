import './style.scss';

document
  .querySelectorAll('p-accordion')
  .forEach((el) => el.addEventListener('update', (e) => (e.target.open = e.detail.open)));

document
  .querySelectorAll('p-tabs-bar')
  .forEach((el) => el.addEventListener('update', (e) => (e.target.activeTabIndex = e.detail.activeTabIndex)));

document
  .querySelectorAll('p-flyout')
  .forEach((el) => el.addEventListener('dismiss', (e) => (e.target.open = false)));

document.getElementById('theme-switch').addEventListener('update', (e) => {
  e.target.checked = e.detail.checked;

  // update theme prop of all PDS components in Light DOM
  Array.from(document.querySelectorAll('*'))
    .filter((el) => el.tagName.startsWith('P-'))
    .forEach((el) => (el.theme = e.detail.checked ? 'dark' : 'light'));
});
