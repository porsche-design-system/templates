import { expect, test } from '../utils';

test.describe('has WCAG 2.2 (AA) compliance', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/templates/drive-homepage/');
  });

  // TODO: test fails in CI for Mobile Safari only. Seems to be a Playwright issue: https://github.com/microsoft/playwright/issues/27701
  test('when page is loaded initially', async ({ makeAxeBuilder }) => {
    const a11y = await makeAxeBuilder().analyze();
    expect(a11y.violations).toEqual([]);
  });
});
