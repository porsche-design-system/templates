import { expect, type Page, test } from '@playwright/test';

const getAiButton = (page: Page) => page.getByRole('button', { name: 'open / close ai assistant' });
const getAiWidget = (page: Page) => page.locator('#ai-popover');

test('has title', async ({ page }) => {
  await page.goto('/templates/ai-assistant-widget/');

  await expect(page).toHaveTitle('AI Assistant widget (Template)');
});

test('ai button toggles ai widget visibility', async ({ page }) => {
  await page.goto('/templates/ai-assistant-widget/');

  await expect(getAiWidget(page)).toBeVisible();

  await getAiWidget(page).click();
  await expect(getAiWidget(page)).toBeHidden();

  await getAiButton(page).click();
  await expect(getAiWidget(page)).toBeVisible();
});
