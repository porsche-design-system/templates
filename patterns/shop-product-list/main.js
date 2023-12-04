import './style.scss';

/**
 * Handle Filter flyout
 */
const filterFlyout = document.getElementById('filterFlyout');
filterFlyout.addEventListener('dismiss', () => {
  filterFlyout.open = false;
});
document.getElementById('filterButton').addEventListener('click', () => {
  filterFlyout.open = true;
});

/**
 * Handle Whishlist flyout
 */
const whishlistFlyout = document.getElementById('whishlistFlyout');
const whishlistItems = document.querySelectorAll('.product-list__item');
whishlistFlyout.addEventListener('dismiss', () => {
  whishlistFlyout.open = false;
});

whishlistItems.forEach((item) =>
  item.addEventListener('click', () => {
    whishlistFlyout.open = true;
  })
);



/**
 * Handle Accordion components
 */
const accordions = document.querySelectorAll('p-accordion');
accordions.forEach((accordion) =>
  accordion.addEventListener('update', (e) => {
    e.target.open = e.detail.open;
  })
);

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
