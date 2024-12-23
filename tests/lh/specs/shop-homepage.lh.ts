import { expect, test } from '../utils';

test.beforeEach(async ({ page }) => {
  await page.goto('/templates/shop-homepage/');
});

test.describe('has sufficient lighthouse score', () => {
  test('on mobile', async ({ lighthouseMobileAudit }) => {
    const { performance, accessibility, bestPractices, seo } = await lighthouseMobileAudit();

    expect(performance, 'Performance').toBeGreaterThanOrEqual(50);
    expect(accessibility, 'Accessibility').toBeGreaterThanOrEqual(100);
    expect(bestPractices, 'Best Practices').toBeGreaterThanOrEqual(100);
    expect(seo, 'SEO').toBeGreaterThanOrEqual(100);
  });

  test('on desktop', async ({ lighthouseDesktopAudit }) => {
    const { performance, accessibility, bestPractices, seo } = await lighthouseDesktopAudit();

    expect(performance, 'Performance').toBeGreaterThanOrEqual(90);
    expect(accessibility, 'Accessibility').toBeGreaterThanOrEqual(100);
    expect(bestPractices, 'Best Practices').toBeGreaterThanOrEqual(70);
    expect(seo, 'SEO').toBeGreaterThanOrEqual(100);
  });
});
