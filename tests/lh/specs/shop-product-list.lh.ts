import { expect, test } from '../utils';

test.beforeEach(async ({ page }) => {
  await page.goto('/templates/shop-product-list/');
});

test.describe('has sufficient lighthouse score', () => {
  test('on mobile', async ({ lighthouseAuditMobile }) => {
    const { performance, accessibility, bestPractices, seo } = await lighthouseAuditMobile();

    expect(performance, 'Performance').toBeGreaterThanOrEqual(45);
    expect(accessibility, 'Accessibility').toBeGreaterThanOrEqual(98);
    expect(bestPractices, 'Best Practices').toBeGreaterThanOrEqual(70);
    expect(seo, 'SEO').toBeGreaterThanOrEqual(90);
  });

  test('on desktop', async ({ lighthouseAuditDesktop }) => {
    const { performance, accessibility, bestPractices, seo } = await lighthouseAuditDesktop();

    expect(performance, 'Performance').toBeGreaterThanOrEqual(90);
    expect(accessibility, 'Accessibility').toBeGreaterThanOrEqual(98);
    expect(bestPractices, 'Best Practices').toBeGreaterThanOrEqual(100);
    expect(seo, 'SEO').toBeGreaterThanOrEqual(90);
  });
});
