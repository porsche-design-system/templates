import { expect, test } from '../utils';

test.beforeEach(async ({ page }) => {
  await page.goto('/templates/drive-voucher/');
});

test.describe('has sufficient lighthouse score', () => {
  test('on mobile', async ({ lighthouseAuditMobile }) => {
    const { performance, accessibility, bestPractices, seo } = await lighthouseAuditMobile();

    expect(performance, 'Performance').toBeGreaterThanOrEqual(70);
    expect(accessibility, 'Accessibility').toBeGreaterThanOrEqual(100);
    expect(bestPractices, 'Best Practices').toBeGreaterThanOrEqual(50);
    expect(seo, 'SEO').toBeGreaterThanOrEqual(100);
  });

  test('on desktop', async ({ lighthouseAuditDesktop }) => {
    const { performance, accessibility, bestPractices, seo } = await lighthouseAuditDesktop();

    expect(performance, 'Performance').toBeGreaterThanOrEqual(50);
    expect(accessibility, 'Accessibility').toBeGreaterThanOrEqual(100);
    expect(bestPractices, 'Best Practices').toBeGreaterThanOrEqual(50);
    expect(seo, 'SEO').toBeGreaterThanOrEqual(100);
  });
});
