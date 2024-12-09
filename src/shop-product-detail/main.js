import './style.scss';

/**
 * Handle Added to Cart flyout
 */
const flyoutAddToCart = document.getElementById('flyout-add-to-cart');
const buttonAddToCart = document.getElementById('button-add-to-cart');
flyoutAddToCart.addEventListener('dismiss', () => flyoutAddToCart.open = false);
buttonAddToCart.addEventListener('click', () => flyoutAddToCart.open = true);

/**
 * Handle Modal: Size Chart
 */
const modalSizeChart = document.getElementById('modal-size-chart');
const buttonSizeChart = document.getElementById('button-size-chart');
modalSizeChart.addEventListener('dismiss', () => modalSizeChart.open = false);
buttonSizeChart.addEventListener('click', () => modalSizeChart.open = true);
