import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/drive-voucher/');

  await expect(page).toHaveTitle('Porsche Drive (Template)');
});

// test('should close main navigation when dismiss button is clicked', async ({ page }) => {
//   await page.goto('/');
//
//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();
//
//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
