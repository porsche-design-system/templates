import { expect, test } from '../utils';

test('has sufficient lighthouse score', async ({ page, lighthouseAudit }) => {
  await page.goto('/templates/shop-checkout/');

  const { performance, accessibility, bestPractices, seo } = await lighthouseAudit();

  expect(performance, 'Performance').toBeGreaterThanOrEqual(50);
  expect(accessibility, 'Accessibility').toBeGreaterThanOrEqual(100);
  expect(bestPractices, 'Best Practices').toBeGreaterThanOrEqual(100);
  expect(seo, 'SEO').toBeGreaterThanOrEqual(100);
});
