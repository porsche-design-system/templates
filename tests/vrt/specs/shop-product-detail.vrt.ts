import { expect, test } from '@playwright/test';

// TODO: doesn't work reliable yet (we might net to set --p-transition-duration: 0 and --p-animation-duration: 0)
test.fixme('has no visual regression', async ({ page }) => {
  await page.goto('/shop-product-detail/');

  await expect(page).toHaveScreenshot('shop-product-detail.png', { fullPage: true });
});
