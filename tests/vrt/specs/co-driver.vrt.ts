import { expect, test } from '@playwright/test';

// TODO: background video needs to be stopped before taking screenshot
test.fixme('has no visual regression', async ({ page }) => {
  await page.goto('/templates/co-driver/');

  await expect(page).toHaveScreenshot('co-driver.png', { fullPage: true });
});
