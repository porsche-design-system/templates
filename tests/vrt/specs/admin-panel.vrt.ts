import { expect, test } from '@playwright/test';

test('has no visual regression', async ({ page }) => {
  await page.goto('/templates/admin-panel/');

  await expect(page).toHaveScreenshot('admin-panel.png');
});
