import './style.scss';

const menu = document.getElementById('menu');
document.getElementById('button-open-menu').addEventListener('click', () => menu.open = true);
menu.addEventListener('dismiss', () => menu.open = false);
menu.addEventListener('update', (e) => menu.activeIdentifier = e.detail.activeIdentifier);
