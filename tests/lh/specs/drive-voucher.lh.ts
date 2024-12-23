import { expect, test } from '../utils';

test('has sufficient lighthouse score', async ({ page, lighthouseAudit }) => {
  await page.goto('/templates/drive-voucher/');

  const { performance, accessibility, bestPractices, seo } = await lighthouseAudit();

  expect(performance, 'Performance').toBeGreaterThanOrEqual(60);
  expect(accessibility, 'Accessibility').toBeGreaterThanOrEqual(100);
  expect(bestPractices, 'Best Practices').toBeGreaterThanOrEqual(50);
  expect(seo, 'SEO').toBeGreaterThanOrEqual(100);
});
