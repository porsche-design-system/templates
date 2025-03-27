import { expect, test } from '@playwright/test';

test.describe('has no visual regression', () => {
  test('for "login"', async ({ page }) => {
    await page.goto('/templates/ai-assistant-widget/#template-login');

    await expect(page).toHaveScreenshot('ai-assistant-widget-login.png', { fullPage: true });
  });

  test('for "intro"', async ({ page }) => {
    await page.goto('/templates/ai-assistant-widget/#template-intro');

    await expect(page).toHaveScreenshot('ai-assistant-widget-intro.png', { fullPage: true });
  });

  test('for "chat"', async ({ page }) => {
    await page.goto('/templates/ai-assistant-widget/#template-chat');

    await expect(page).toHaveScreenshot('ai-assistant-widget-chat.png', { fullPage: true });
  });

  test('for "my-inquiries"', async ({ page }) => {
    await page.goto('/templates/ai-assistant-widget/#template-my-inquiries');

    await expect(page).toHaveScreenshot('ai-assistant-widget-my-inquiries.png', { fullPage: true });
  });

  test('for "contact"', async ({ page }) => {
    await page.goto('/templates/ai-assistant-widget/#template-contact');

    await expect(page).toHaveScreenshot('ai-assistant-widget-contact.png', { fullPage: true });
  });

  test('for "terms-of-use"', async ({ page }) => {
    await page.goto('/templates/ai-assistant-widget/#template-terms-of-use');

    await expect(page).toHaveScreenshot('ai-assistant-widget-terms-of-use.png', { fullPage: true });
  });
});
