import { expect, test } from '../utils';

test('has sufficient lighthouse score', async ({ page, lighthouseAudit }) => {
  await page.goto('/templates/admin-panel/');

  const { performance, accessibility, bestPractices, seo } = await lighthouseAudit();

  expect(performance, 'Performance').toBeGreaterThanOrEqual(70);
  expect(accessibility, 'Accessibility').toBeGreaterThanOrEqual(100);
  expect(bestPractices, 'Best Practices').toBeGreaterThanOrEqual(100);
  expect(seo, 'SEO').toBeGreaterThanOrEqual(100);
});
