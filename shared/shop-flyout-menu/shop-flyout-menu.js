import template from './shop-flyout-menu.html?raw';

document.body.insertAdjacentHTML('beforeend', template);

/**
 * Handle Flyout: Menu
 */
const shopFlyoutMenu = document.getElementById('flyout-menu');
const buttonMenu = document.getElementById('button-menu');
buttonMenu.addEventListener('click', () => shopFlyoutMenu.open = true);
shopFlyoutMenu.addEventListener('dismiss', () => shopFlyoutMenu.open = false);
shopFlyoutMenu.addEventListener('update', (e) => shopFlyoutMenu.activeIdentifier = e.detail.activeIdentifier);
