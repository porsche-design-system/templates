import './style.scss';

/**
 * Handle Flyout: Menu
 */
const flyoutMenu = document.getElementById('flyout-menu');
const buttonMenu = document.getElementById('button-menu');
buttonMenu.addEventListener('click', () => {
  flyoutMenu.open = true;
});
flyoutMenu.addEventListener('dismiss', () => {
  flyoutMenu.open = false;
});
flyoutMenu.addEventListener('update', (e) => {
  flyoutMenu.activeIdentifier = e.detail.activeIdentifier;
});

/**
 * Handle Flyout: Search
 */
const flyoutSearch = document.getElementById('flyout-search');
const buttonSearch = document.getElementById('button-search');
buttonSearch.addEventListener('click', () => {
  flyoutSearch.open = true;
});
flyoutSearch.addEventListener('dismiss', () => {
  flyoutSearch.open = false;
});

/**
 * Handle Flyout: Filter
 */
const flyoutFilter = document.getElementById('flyout-filter');
const buttonFilter = document.getElementById('button-filter');
flyoutFilter.addEventListener('dismiss', () => {
  flyoutFilter.open = false;
});
buttonFilter.addEventListener('click', () => {
  flyoutFilter.open = true;
});

/**
 * Handle Flyout: Wishlist
 */
const flyoutWishlist = document.getElementById('flyout-wishlist');
const products = document.querySelectorAll('p-link-tile-product');
flyoutWishlist.addEventListener('dismiss', () => {
  flyoutWishlist.open = false;
});

for (const product of products) {
  product.addEventListener('like', () => {
    flyoutWishlist.open = true;
  });
}

/**
 * Handle Accordion
 */
const accordions = document.querySelectorAll('p-accordion');
for (const accordion of accordions) {
  accordion.addEventListener('update', (e) => {
    e.target.open = e.detail.open;
  });
}

/**
 * Handle Modal: Size Chart
 */
const modalSizeChart = document.getElementById('modal-size-chart');
const buttonSizeChart = document.getElementById('button-size-chart');
modalSizeChart.addEventListener('dismiss', () => {
  modalSizeChart.open = false;
});
buttonSizeChart.addEventListener('click', () => {
  modalSizeChart.open = true;
});
