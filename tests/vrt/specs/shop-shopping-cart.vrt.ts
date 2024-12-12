import { expect, test } from '@playwright/test';

test('has no visual regression', async ({ page }) => {
  await page.goto('/templates/shop-shopping-cart/');

  await expect(page).toHaveScreenshot('shop-shopping-cart.png');
});
