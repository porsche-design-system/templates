import './style.scss';

/**
 * Handle Flyout: Menu
 */
const flyoutMenu = document.getElementById('flyout-menu');
const buttonMenu = document.getElementById('button-menu');
buttonMenu.addEventListener('click', () => flyoutMenu.open = true);
flyoutMenu.addEventListener('dismiss', () => flyoutMenu.open = false);
flyoutMenu.addEventListener('update', (e) => flyoutMenu.activeIdentifier = e.detail.activeIdentifier);

/**
 * Handle Flyout: Search
 */
const flyoutSearch = document.getElementById('flyout-search');
const buttonSearch = document.getElementById('button-search');
buttonSearch.addEventListener('click', () => flyoutSearch.open = true);
flyoutSearch.addEventListener('dismiss', () => flyoutSearch.open = false);
