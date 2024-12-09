import './style.scss';

const flyoutMenu = document.getElementById('flyout-menu');
const buttonMenu = document.getElementById('button-menu');

buttonMenu.addEventListener('click', () => flyoutMenu.open = true);
flyoutMenu.addEventListener('dismiss', (e) => e.target.open = false);
flyoutMenu.addEventListener('update', (e) => e.target.activeIdentifier = e.detail.activeIdentifier);
