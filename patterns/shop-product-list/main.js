import './style.scss';

/**
 * Handle Flyout: Filter
 */
const flyoutFilter = document.getElementById('flyout-filter');
const buttonFilter = document.getElementById('button-filter');
flyoutFilter.addEventListener('dismiss', () => flyoutFilter.open = false);
buttonFilter.addEventListener('click', () => flyoutFilter.open = true);

/**
 * Handle Flyout: Wishlist
 */
const flyoutWishlist = document.getElementById('flyout-wishlist');
const products = document.querySelectorAll('p-link-tile-product');
flyoutWishlist.addEventListener('dismiss', () => flyoutWishlist.open = false);
products.forEach((product) =>
  product.addEventListener('like', () => flyoutWishlist.open = true)
);

/**
 * Handle Accordion
 */
const accordions = document.querySelectorAll('p-accordion');
accordions.forEach((accordion) =>
  accordion.addEventListener('update', (e) => e.target.open = e.detail.open)
);

/**
 * Handle Modal: Size Chart
 */
const modalSizeChart = document.getElementById('modal-size-chart');
const buttonSizeChart = document.getElementById('button-size-chart');
modalSizeChart.addEventListener('dismiss', () => modalSizeChart.open = false);
buttonSizeChart.addEventListener('click', () => modalSizeChart.open = true);
