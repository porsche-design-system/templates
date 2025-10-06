import { expect, test } from '@playwright/test';

// TODO: doesn't work reliable yet (we might net to set --p-transition-duration: 0 and --p-animation-duration: 0)
// TODO: we need to scroll down the page, to see all fade-in animated elements
test.fixme('has no visual regression', async ({ page }) => {
  await page.goto('/drive-homepage/');

  await expect(page).toHaveScreenshot('drive-homepage.png', { fullPage: true });
});
