import { expect, test } from '@playwright/test';

test('has no visual regression', async ({ page }) => {
  await page.goto('/templates/drive-voucher/');

  await expect(page).toHaveScreenshot('drive-voucher.png', { fullPage: true });
});
