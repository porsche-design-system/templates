import { expect, test } from '@playwright/test';

// TODO: doesn't work reliable yet
test.fixme('has no visual regression', async ({ page }) => {
  await page.goto('/templates/shop-homepage/');

  await expect(page).toHaveScreenshot('shop-homepage.png', { fullPage: true });
});
