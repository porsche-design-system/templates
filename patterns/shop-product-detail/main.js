import './style.scss';

/**
 * Handle Added to Cart flyout
 */
const filterFlyout = document.getElementById('addedToCartFlyout');
filterFlyout.addEventListener('dismiss', () => {
  filterFlyout.open = false;
});
document.getElementById('addedToCartButton').addEventListener('click', () => {
  filterFlyout.open = true;
});

/**
 * Handle View Size Chart modal
 */
const sizeChartModal = document.getElementById('sizeChartModal');
sizeChartModal.addEventListener('dismiss', () => {
  sizeChartModal.open = false;
});
document.getElementById('sizeChartButton').addEventListener('click', () => {
  sizeChartModal.open = true;
});
