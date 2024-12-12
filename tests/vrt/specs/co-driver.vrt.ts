import { expect, test } from '@playwright/test';

test('has no visual regression', async ({ page }) => {
  await page.goto('/templates/co-driver/');

  await expect(page).toHaveScreenshot('co-driver.png');
});
