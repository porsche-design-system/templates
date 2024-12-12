import { expect, test } from '@playwright/test';

test('has no visual regression', async ({ page }) => {
  await page.goto('/templates/shop-product-list/');

  await expect(page).toHaveScreenshot('shop-product-list.png', { fullPage: true });
});
