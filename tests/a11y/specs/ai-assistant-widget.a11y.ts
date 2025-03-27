import { expect, test } from '../utils';

test.describe('has WCAG 2.2 (AA) compliance', () => {
  test('when page is navigated to "login"', async ({ page, makeAxeBuilder }) => {
    await page.goto('/templates/ai-assistant-widget/#template-login');

    await expect(page.getByText('Welcome to Ask Porsche')).toBeVisible();

    const a11y = await makeAxeBuilder().analyze();
    expect(a11y.violations).toEqual([]);
  });

  test('when page is navigated to "intro"', async ({ page, makeAxeBuilder }) => {
    await page.goto('/templates/ai-assistant-widget/#template-intro');

    await expect(page.getByText("I'm the AI Assistant of Porsche.")).toBeVisible();

    const a11y = await makeAxeBuilder().analyze();
    expect(a11y.violations).toEqual([]);
  });

  test.fixme('when page is navigated to "chat"', async ({ page, makeAxeBuilder }) => {
    await page.goto('/templates/ai-assistant-widget/#template-chat');

    await expect(page.getByText('How does your loading indicator look like while computing answers?')).toBeVisible();

    const a11y = await makeAxeBuilder().analyze();
    expect(a11y.violations).toEqual([]);
  });

  test('when page is navigated to "my-inquiries"', async ({ page, makeAxeBuilder }) => {
    await page.goto('/templates/ai-assistant-widget/#template-my-inquiries');

    await expect(page.getByText('My inquiries')).toBeVisible();

    const a11y = await makeAxeBuilder().analyze();
    expect(a11y.violations).toEqual([]);
  });

  test('when page is navigated to "contact"', async ({ page, makeAxeBuilder }) => {
    await page.goto('/templates/ai-assistant-widget/#template-contact');

    await expect(page.getByText('Porsche Experience Center')).toBeVisible();

    const a11y = await makeAxeBuilder().analyze();
    expect(a11y.violations).toEqual([]);
  });

  test('when page is navigated to "terms-of-use"', async ({ page, makeAxeBuilder }) => {
    await page.goto('/templates/ai-assistant-widget/#template-terms-of-use');

    await expect(page.getByText('AI Assistant Disclaimer')).toBeVisible();

    const a11y = await makeAxeBuilder().analyze();
    expect(a11y.violations).toEqual([]);
  });
});
