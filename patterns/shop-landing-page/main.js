import './style.scss';

/**
 * Handle Flyout: Menu
 */
const flyoutMenu = document.getElementById('flyout-menu');
const buttonMenu = document.getElementById('button-menu');
buttonMenu.addEventListener('click', () => flyoutMenu.open = true);
flyoutMenu.addEventListener('dismiss', () => flyoutMenu.open = false);
flyoutMenu.addEventListener('update', (e) => flyoutMenu.activeIdentifier = e.detail.activeIdentifier);
