import { expect, test } from '@playwright/test';

// TODO: doesn't work reliable yet
test.fixme('has no visual regression', async ({ page }) => {
  await page.goto('/templates/drive-homepage/');

  await expect(page).toHaveScreenshot('drive-homepage.png', { fullPage: true });
});
