import { expect, test } from '../utils';
import type { Page } from '@playwright/test';

const getAiButton = (page: Page) => page.getByRole('button', { name: 'open / close ai assistant' });
const getLikeButton = (page: Page) => page.getByRole('button', { name: 'Like' }).first();
const getDislikeButton = (page: Page) => page.getByRole('button', { name: 'Dislike' }).first();
const getCopyToClipboardButton = (page: Page) => page.getByRole('button', { name: 'Copy to clipboard' }).first();

test.describe('has WCAG 2.2 (AA) compliance', () => {
  test.describe('for "login"', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/templates/ai-assistant-widget/#template-login');
      await expect(page.getByText('Welcome to Ask Porsche')).toBeVisible();
    });

    test('with a11y tree', async ({ page }) => {
      await expect(page.locator('body')).toMatchAriaSnapshot({ name: 'login.aria.yml' });
    });

    test('with axe', async ({ makeAxeBuilder }) => {
      expect((await makeAxeBuilder().analyze()).violations).toEqual([]);
    });

    test('ai button exposes "aria-expanded"', async ({ page }) => {
      await expect(getAiButton(page)).toMatchAriaSnapshot('- button "open / close ai assistant" [expanded]');

      await getAiButton(page).click();
      await expect(getAiButton(page)).toMatchAriaSnapshot('- button "open / close ai assistant"');

      await getAiButton(page).click();
      await expect(getAiButton(page)).toMatchAriaSnapshot('- button "open / close ai assistant" [expanded]');
    });
  });

  test.describe('for "intro"', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/templates/ai-assistant-widget/#template-intro');
      await expect(page.getByText("I'm the AI Assistant of Porsche.")).toBeVisible();
    });

    test('with a11y tree', async ({ page }) => {
      await expect(page.locator('body')).toMatchAriaSnapshot({ name: 'intro.aria.yml' });
    });

    test('with axe', async ({ makeAxeBuilder }) => {
      expect((await makeAxeBuilder().analyze()).violations).toEqual([]);
    });
  });

  test.describe('for "chat"', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/templates/ai-assistant-widget/#template-chat');
      // wait until simulated AI request has finished
      await expect(page.getByText('Can you show me a sample table?')).toBeVisible();
    });

    test('with a11y tree', async ({ page }) => {
      await expect(page.locator('body')).toMatchAriaSnapshot({ name: 'chat.aria.yml' });
    });

    test('with axe', async ({ makeAxeBuilder }) => {
      expect((await makeAxeBuilder().analyze()).violations).toEqual([]);
    });

    test('like + dislike button exposes "aria-pressed"', async ({ page }) => {
      await expect(getDislikeButton(page)).toMatchAriaSnapshot('- button "Dislike"');
      await expect(getLikeButton(page)).toMatchAriaSnapshot('- button "Like"');

      await getLikeButton(page).click();
      await expect(getDislikeButton(page)).toMatchAriaSnapshot('- button "Dislike"');
      await expect(getLikeButton(page)).toMatchAriaSnapshot('- button "Like" [pressed]');

      await getDislikeButton(page).click();
      await expect(getDislikeButton(page)).toMatchAriaSnapshot('- button "Dislike" [pressed]');
      await expect(getLikeButton(page)).toMatchAriaSnapshot('- button "Like"');

      await getLikeButton(page).click();
      await expect(getDislikeButton(page)).toMatchAriaSnapshot('- button "Dislike"');
      await expect(getLikeButton(page)).toMatchAriaSnapshot('- button "Like" [pressed]');
    });

    test('copy to clipboard button exposes "aria-pressed"', async ({ page }) => {
      await expect(getCopyToClipboardButton(page)).toMatchAriaSnapshot('- button "Copy to clipboard"');

      await getCopyToClipboardButton(page).click();
      await expect(getCopyToClipboardButton(page)).toMatchAriaSnapshot('- button "Copy to clipboard" [pressed]');

      await page.waitForTimeout(2000);

      await expect(getCopyToClipboardButton(page)).toMatchAriaSnapshot('- button "Copy to clipboard"');
    });
  });

  test.describe('for "my-inquiries"', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/templates/ai-assistant-widget/#template-my-inquiries');
      await expect(page.getByText('My inquiries')).toBeVisible();
    });

    test('with a11y tree', async ({ page }) => {
      await expect(page.locator('body')).toMatchAriaSnapshot({ name: 'my-inquiries.aria.yml' });
    });

    test('with axe', async ({ makeAxeBuilder }) => {
      expect((await makeAxeBuilder().analyze()).violations).toEqual([]);
    });
  });

  test.describe('for "contact"', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/templates/ai-assistant-widget/#template-contact');
      await expect(page.getByText('Porsche Experience Center')).toBeVisible();
    });

    test('with a11y tree', async ({ page }) => {
      await expect(page.locator('body')).toMatchAriaSnapshot({ name: 'contact.aria.yml' });
    });

    test('with axe', async ({ makeAxeBuilder }) => {
      expect((await makeAxeBuilder().analyze()).violations).toEqual([]);
    });
  });

  test.describe('for "terms-of-use"', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/templates/ai-assistant-widget/#template-terms-of-use');
      await expect(page.getByText('AI Assistant Disclaimer')).toBeVisible();
    });

    test('with a11y tree', async ({ page }) => {
      await expect(page.locator('body')).toMatchAriaSnapshot({ name: 'terms-of-use.aria.yml' });
    });

    test('with axe', async ({ makeAxeBuilder }) => {
      expect((await makeAxeBuilder().analyze()).violations).toEqual([]);
    });
  });
});
