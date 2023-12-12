import './shop-flyout-search.scss';
import template from './shop-flyout-search.html?raw';

document.body.insertAdjacentHTML('beforeend', template);

/**
 * Handle Flyout: Search
 */
const shopFlyoutSearch = document.getElementById('flyout-search');
const buttonSearch = document.getElementById('button-search');
buttonSearch.addEventListener('click', () => shopFlyoutSearch.open = true);
shopFlyoutSearch.addEventListener('dismiss', () => shopFlyoutSearch.open = false);
