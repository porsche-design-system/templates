import { expect, test } from '@playwright/test';

test('has no visual regression', async ({ page }) => {
  await page.goto('/templates/shop-product-detail/');

  await expect(page).toHaveScreenshot('shop-product-detail.png', { fullPage: true });
});
