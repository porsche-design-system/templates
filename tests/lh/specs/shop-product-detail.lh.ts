import { expect, test } from '../utils';

test.beforeEach(async ({ page }) => {
  await page.goto('/templates/shop-product-detail/');
});

test.describe('has sufficient lighthouse score', () => {
  test('on mobile', async ({ lighthouseMobileAudit }) => {
    const { performance, accessibility, bestPractices, seo } = await lighthouseMobileAudit();

    expect(performance, 'Performance').toBeGreaterThanOrEqual(50);
    expect(accessibility, 'Accessibility').toBeGreaterThanOrEqual(100);
    expect(bestPractices, 'Best Practices').toBeGreaterThanOrEqual(70);
    expect(seo, 'SEO').toBeGreaterThanOrEqual(90);
  });

  test('on desktop', async ({ lighthouseDesktopAudit }) => {
    const { performance, accessibility, bestPractices, seo } = await lighthouseDesktopAudit();

    expect(performance, 'Performance').toBeGreaterThanOrEqual(70);
    expect(accessibility, 'Accessibility').toBeGreaterThanOrEqual(100);
    expect(bestPractices, 'Best Practices').toBeGreaterThanOrEqual(70);
    expect(seo, 'SEO').toBeGreaterThanOrEqual(90);
  });
});
