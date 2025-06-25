import './style.css';

// DO NOT USE IN PRODUCTION!
// EXAMPLE CODE FOR DEMONSTRATION PURPOSE ONLY.

/*const navDrilldown = document.getElementById('nav-drilldown');
const navButton = document.getElementById('nav-button');

navButton.addEventListener('click', () => {
  navDrilldown.open = true;
});

navDrilldown.addEventListener('dismiss', (e) => {
  e.target.open = false;
});

navDrilldown.addEventListener('update', (e) => {
  e.target.activeIdentifier = e.detail.activeIdentifier;
});*/

document.querySelector('select[name="theme"]').addEventListener('change', (e) => {
  document.documentElement.classList.remove('light', 'dark', 'auto');
  document.documentElement.classList.add(e.target.value);

  // update theme prop of all PDS components in Light DOM
  for (const el of Array.from(document.querySelectorAll('*')).filter((el) => el.tagName.startsWith('P-'))) {
    el.theme = e.target.value;
  }
});

document.querySelector('input[name="accent"]').addEventListener('input', (e) => {
  document.documentElement.style.setProperty('--accent', e.target.value);
});
