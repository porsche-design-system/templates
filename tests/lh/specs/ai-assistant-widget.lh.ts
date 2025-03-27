import { expect, test } from '../utils';

test.describe('has sufficient lighthouse score', () => {
  test.describe('for "login"', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/templates/ai-assistant-widget/#template-login');
      await expect(page.getByText('Welcome to Ask Porsche')).toBeVisible();
    });

    test('on mobile', async ({ lighthouseAuditMobile }) => {
      const { performance, accessibility, bestPractices, seo } = await lighthouseAuditMobile();

      expect(performance, 'Performance').toBeGreaterThanOrEqual(90);
      expect(accessibility, 'Accessibility').toBeGreaterThanOrEqual(100);
      expect(bestPractices, 'Best Practices').toBeGreaterThanOrEqual(100);
      expect(seo, 'SEO').toBeGreaterThanOrEqual(100);
    });

    test('on desktop', async ({ lighthouseAuditDesktop }) => {
      const { performance, accessibility, bestPractices, seo } = await lighthouseAuditDesktop();

      expect(performance, 'Performance').toBeGreaterThanOrEqual(90);
      expect(accessibility, 'Accessibility').toBeGreaterThanOrEqual(100);
      expect(bestPractices, 'Best Practices').toBeGreaterThanOrEqual(100);
      expect(seo, 'SEO').toBeGreaterThanOrEqual(100);
    });
  });

  test.describe('for "intro"', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/templates/ai-assistant-widget/#template-intro');
      await expect(page.getByText("I'm the AI Assistant of Porsche.")).toBeVisible();
    });

    test('on mobile', async ({ lighthouseAuditMobile }) => {
      const { performance, accessibility, bestPractices, seo } = await lighthouseAuditMobile();

      expect(performance, 'Performance').toBeGreaterThanOrEqual(90);
      expect(accessibility, 'Accessibility').toBeGreaterThanOrEqual(100);
      expect(bestPractices, 'Best Practices').toBeGreaterThanOrEqual(100);
      expect(seo, 'SEO').toBeGreaterThanOrEqual(100);
    });

    test('on desktop', async ({ lighthouseAuditDesktop }) => {
      const { performance, accessibility, bestPractices, seo } = await lighthouseAuditDesktop();

      expect(performance, 'Performance').toBeGreaterThanOrEqual(90);
      expect(accessibility, 'Accessibility').toBeGreaterThanOrEqual(100);
      expect(bestPractices, 'Best Practices').toBeGreaterThanOrEqual(100);
      expect(seo, 'SEO').toBeGreaterThanOrEqual(100);
    });
  });

  test.describe('for "chat"', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/templates/ai-assistant-widget/#template-chat');
      await expect(page.getByText('How does your loading indicator look like while computing answers?')).toBeVisible();
    });

    test('on mobile', async ({ lighthouseAuditMobile }) => {
      const { performance, accessibility, bestPractices, seo } = await lighthouseAuditMobile();

      expect(performance, 'Performance').toBeGreaterThanOrEqual(70);
      expect(accessibility, 'Accessibility').toBeGreaterThanOrEqual(100);
      expect(bestPractices, 'Best Practices').toBeGreaterThanOrEqual(70);
      expect(seo, 'SEO').toBeGreaterThanOrEqual(100);
    });

    test('on desktop', async ({ lighthouseAuditDesktop }) => {
      const { performance, accessibility, bestPractices, seo } = await lighthouseAuditDesktop();

      expect(performance, 'Performance').toBeGreaterThanOrEqual(90);
      expect(accessibility, 'Accessibility').toBeGreaterThanOrEqual(100);
      expect(bestPractices, 'Best Practices').toBeGreaterThanOrEqual(70);
      expect(seo, 'SEO').toBeGreaterThanOrEqual(100);
    });
  });

  test.describe('for "my-inquiries"', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/templates/ai-assistant-widget/#template-my-inquiries');
      await expect(page.getByText('My inquiries')).toBeVisible();
    });

    test('on mobile', async ({ lighthouseAuditMobile }) => {
      const { performance, accessibility, bestPractices, seo } = await lighthouseAuditMobile();

      expect(performance, 'Performance').toBeGreaterThanOrEqual(90);
      expect(accessibility, 'Accessibility').toBeGreaterThanOrEqual(100);
      expect(bestPractices, 'Best Practices').toBeGreaterThanOrEqual(100);
      expect(seo, 'SEO').toBeGreaterThanOrEqual(100);
    });

    test('on desktop', async ({ lighthouseAuditDesktop }) => {
      const { performance, accessibility, bestPractices, seo } = await lighthouseAuditDesktop();

      expect(performance, 'Performance').toBeGreaterThanOrEqual(90);
      expect(accessibility, 'Accessibility').toBeGreaterThanOrEqual(100);
      expect(bestPractices, 'Best Practices').toBeGreaterThanOrEqual(100);
      expect(seo, 'SEO').toBeGreaterThanOrEqual(100);
    });
  });

  test.describe('for "contact"', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/templates/ai-assistant-widget/#template-contact');
      await expect(page.getByText('Porsche Experience Center')).toBeVisible();
    });

    test('on mobile', async ({ lighthouseAuditMobile }) => {
      const { performance, accessibility, bestPractices, seo } = await lighthouseAuditMobile();

      expect(performance, 'Performance').toBeGreaterThanOrEqual(90);
      expect(accessibility, 'Accessibility').toBeGreaterThanOrEqual(100);
      expect(bestPractices, 'Best Practices').toBeGreaterThanOrEqual(100);
      expect(seo, 'SEO').toBeGreaterThanOrEqual(100);
    });

    test('on desktop', async ({ lighthouseAuditDesktop }) => {
      const { performance, accessibility, bestPractices, seo } = await lighthouseAuditDesktop();

      expect(performance, 'Performance').toBeGreaterThanOrEqual(90);
      expect(accessibility, 'Accessibility').toBeGreaterThanOrEqual(100);
      expect(bestPractices, 'Best Practices').toBeGreaterThanOrEqual(100);
      expect(seo, 'SEO').toBeGreaterThanOrEqual(100);
    });
  });

  test.describe('for "terms-of-use"', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/templates/ai-assistant-widget/#template-terms-of-use');
      await expect(page.getByText('AI Assistant Disclaimer')).toBeVisible();
    });

    test('on mobile', async ({ lighthouseAuditMobile }) => {
      const { performance, accessibility, bestPractices, seo } = await lighthouseAuditMobile();

      expect(performance, 'Performance').toBeGreaterThanOrEqual(90);
      expect(accessibility, 'Accessibility').toBeGreaterThanOrEqual(100);
      expect(bestPractices, 'Best Practices').toBeGreaterThanOrEqual(100);
      expect(seo, 'SEO').toBeGreaterThanOrEqual(100);
    });

    test('on desktop', async ({ lighthouseAuditDesktop }) => {
      const { performance, accessibility, bestPractices, seo } = await lighthouseAuditDesktop();

      expect(performance, 'Performance').toBeGreaterThanOrEqual(90);
      expect(accessibility, 'Accessibility').toBeGreaterThanOrEqual(100);
      expect(bestPractices, 'Best Practices').toBeGreaterThanOrEqual(100);
      expect(seo, 'SEO').toBeGreaterThanOrEqual(100);
    });
  });
});
