import './style.scss';

/**
 * Handle Filter flyout
 */
const filterFlyout = document.getElementById('filter-flyout');
filterFlyout.addEventListener('dismiss', () => {
  filterFlyout.open = false;
});
document.getElementById('filter-button').addEventListener('click', () => {
  filterFlyout.open = true;
});

/**
 * Handle Whishlist flyout
 */
const whishlistFlyout = document.getElementById('whishlist-flyout');
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
