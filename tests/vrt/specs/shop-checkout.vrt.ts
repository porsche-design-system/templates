import { expect, test } from '@playwright/test';

test('has no visual regression', async ({ page }) => {
  await page.goto('/templates/shop-checkout/');

  await expect(page).toHaveScreenshot('shop-checkout.png');
});
