import { expect, test } from '@playwright/test';
import { enableForcedColors, enableRightToLeft, enableTextZoom } from '../utils';

const views = ['login', 'intro', 'chat', 'my-inquiries', 'contact', 'terms-of-use'];

test.describe('has no visual regression', () => {
  for (const view of views) {
    test.describe(`for "${view}"`, () => {
      test.beforeEach(async ({ page }) => {
        await page.goto(`/ai-assistant-widget/#template-${view}`);

        await page.addStyleTag({
          content: `
            :root {
              --p-animation-duration: 0s !important;
              --p-transition-duration: 0s !important;
              --transition-duration-short: 0s !important;
              --transition-duration-moderate: 0s !important;
              --transition-duration-long: 0s !important;
              --transition-duration-very-long: 0s !important;
            }
            
            * {
              animation: none !important;
              transition: none !important;
            }
            
            main {
              display: none !important;
            }
          `,
        });

        if (view === 'chat') {
          // wait until simulated AI request has finished
          await expect(page.getByText('Can you show me a sample table?')).toBeVisible();

          // stretch popover to fully show its content (TODO: flaky)
          /* await page.locator("#ai-popover").evaluate((popover) => {
            popover.style.height = "auto";
            popover.style.maxHeight = "none";
          });
          await page.setViewportSize({
            width: page.viewportSize().width,
            height: 5000,
          });*/
        }
      });

      test('default', async ({ page }) => {
        await expect(page).toHaveScreenshot(`ai-assistant-widget-${view}.png`, { fullPage: true });
      });

      test.describe(() => {
        test.skip(({ browserName, viewport }) => browserName !== 'chromium' || viewport.width !== 1280);

        test('right to left', async ({ page }) => {
          await enableRightToLeft(page);
          await expect(page).toHaveScreenshot(`ai-assistant-widget-${view}-rtl.png`, { fullPage: true });
        });

        test('text zoom', async ({ page }) => {
          await enableTextZoom(page);
          await expect(page).toHaveScreenshot(`ai-assistant-widget-${view}-zoom.png`, { fullPage: true });
        });

        test('high contrast', async ({ page }) => {
          await enableForcedColors(page);
          await expect(page).toHaveScreenshot(`ai-assistant-widget-${view}-hc.png`, { fullPage: true });
        });
      });
    });
  }
});
