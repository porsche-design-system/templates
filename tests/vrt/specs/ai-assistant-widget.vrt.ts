import { expect, test } from '@playwright/test';
import { enableForcedColors, enableRightToLeft, enableTextZoom } from '../utils';

const templates = ['login', 'intro', 'chat', 'my-inquiries', 'contact', 'terms-of-use'];

test.describe('has no visual regression', () => {
  for (const template of templates) {
    test.describe(`for "${template}"`, () => {
      test.beforeEach(async ({ page }) => {
        await page.goto(`/templates/ai-assistant-widget/#template-${template}`);

        if (template === 'chat') {
          // wait until simulated AI request has finished
          await expect(page.getByText('Can you show me a sample table?')).toBeVisible();

          // stretch popover to fully show its content
          await page.locator('#ai-popover').evaluate((popover) => {
            popover.style.height = 'auto';
            popover.style.maxHeight = 'none';
          });
          await page.setViewportSize({ width: page.viewportSize().width, height: 5000 });
        }
      });

      test('default', async ({ page }) => {
        await expect(page).toHaveScreenshot(`ai-assistant-widget-${template}.png`, {
          fullPage: true,
          animations: 'disabled'
        });
      });

      test.describe(() => {
        test.skip(({ browserName, viewport }) => browserName !== 'chromium' || viewport.width !== 1280);

        test('right to left', async ({ page }) => {
          await enableRightToLeft(page);
          await expect(page).toHaveScreenshot(`ai-assistant-widget-${template}-rtl.png`, {
            fullPage: true,
            animations: 'disabled'
          });
        });

        test('text zoom', async ({ page }) => {
          await enableTextZoom(page);
          await expect(page).toHaveScreenshot(`ai-assistant-widget-${template}-zoom.png`, {
            fullPage: true,
            animations: 'disabled'
          });
        });

        test('high contrast', async ({ page }) => {
          await enableForcedColors(page);
          await expect(page).toHaveScreenshot(`ai-assistant-widget-${template}-hc.png`, {
            fullPage: true,
            animations: 'disabled'
          });
        });
      });
    });
  }
});
