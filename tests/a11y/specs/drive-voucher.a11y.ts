import { expect, test } from '../utils';

test.describe('has WCAG 2.2 (AA) compliance', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/templates/drive-voucher/');
  });

  // TODO: test fails in CI for Mobile Safari only
  test.fixme('when page is loaded initially', async ({ makeAxeBuilder }) => {
    const a11y = await makeAxeBuilder().analyze();
    expect(a11y.violations).toEqual([]);
  });
});
