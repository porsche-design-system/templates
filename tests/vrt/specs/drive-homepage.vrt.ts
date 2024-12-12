import { expect, test } from '@playwright/test';

test('has no visual regression', async ({ page }) => {
  await page.goto('/templates/drive-homepage/');

  await expect(page).toHaveScreenshot('drive-homepage.png');
});
