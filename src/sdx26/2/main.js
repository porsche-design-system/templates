import './style.css';

// DO NOT USE IN PRODUCTION!
// EXAMPLE CODE FOR DEMONSTRATION PURPOSE ONLY.

document.querySelector('p-select[name="theme"]').addEventListener('update', (e) => {
  document.documentElement.classList.remove('light', 'dark', 'auto');
  document.documentElement.classList.add(e.target.value);

  // update theme prop of all PDS components in Light DOM
  for (const el of Array.from(document.querySelectorAll('*')).filter((el) => el.tagName.startsWith('P-'))) {
    el.theme = e.target.value;
  }
});

const vehicleMap = {
  green: 'aventuringruenmetallic.png',
  blue: 'enzianblaumetallic.png',
  aqua: 'frozenbluemeta_lic.png',
  red: 'kupferrubinmetallic.png',
  limegreen: 'oakgruenmetallic_neo.png',
};

document.querySelector('p-select[name="accent"]').addEventListener('update', (e) => {
  if (e.target.value === 'neutral') {
    document.documentElement.style.removeProperty('--accent');
  } else {
    document.documentElement.style.setProperty('--accent', e.target.value);
    document.querySelector('img#vehicle').src = `/templates/assets/${vehicleMap[e.target.value]}`;
  }
});

document.querySelector('p-select[name="frosted-color"]').addEventListener('update', (e) => {
  if (e.target.value === 'bg-frosted-accent') {
    for (const el of Array.from(document.querySelectorAll('.bg-contrast-100-accent'))) {
      el.classList.remove('bg-contrast-100-accent');
      el.classList.add('bg-frosted-accent');
    }
  } else if (e.target.value === 'bg-contrast-100-accent') {
    for (const el of Array.from(document.querySelectorAll('.bg-frosted-accent'))) {
      el.classList.remove('bg-frosted-accent');
      el.classList.add('bg-contrast-100-accent');
    }
  }
});

for (const btn of Array.from(document.querySelectorAll('button.explore-e-performance'))) {
  btn.addEventListener('click', () => {
    document.querySelector('dialog').showModal();
  });
}

document.getElementById('close-dialog').addEventListener('click', () => {
  document.querySelector('dialog').close();
});
