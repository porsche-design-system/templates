import { expect, type Page, test } from '@playwright/test';

const getAiWidget = (page: Page) => page.locator('#ai-popover');
const getAiButton = (page: Page) => page.getByRole('button', { name: 'open / close ai assistant' });

test('has title', async ({ page }) => {
  await page.goto('/templates/ai-assistant-widget/');

  await expect(page).toHaveTitle('AI Assistant widget (Template)');
});

test('ai button toggles ai widget visibility by mouse or keyboard interaction', async ({ page }) => {
  await page.goto('/templates/ai-assistant-widget/');

  await expect(getAiWidget(page)).toBeVisible();

  await getAiButton(page).click();
  await expect(getAiWidget(page)).toBeHidden();

  await getAiButton(page).click();
  await expect(getAiWidget(page)).toBeVisible();

  await getAiButton(page).press('Enter');
  await expect(getAiWidget(page)).toBeHidden();

  await getAiButton(page).press('Enter');
  await expect(getAiWidget(page)).toBeVisible();
});

test('navigates through the ai widget', async ({ page }) => {
  await page.goto('/templates/ai-assistant-widget/');

  await expect(page.getByText('Good to see you.')).toBeVisible();

  await page.getByRole('link', { name: 'Sign in' }).click();
  await expect(page.getByText("Good to see you.")).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Message AI Assistant' })).toBeFocused();

  await page.getByRole('button', { name: 'Ask AI Assistant' }).click();
  await expect(page.getByText('How does your loading indicator look like while computing answers?')).toBeVisible();

  await page.getByRole('link', { name: 'My inquiries' }).click();
  await expect(page.getByText('My inquiries')).toBeVisible();

  await page.getByRole('link', { name: 'Back to chat' }).click();
  await page.getByRole('link', { name: 'Contact' }).click();
  await expect(page.getByText('Porsche Experience Center')).toBeVisible();

  await page.getByRole('link', { name: 'Back to chat' }).click();
  await page.getByRole('link', { name: 'Terms of Use' }).click();
  await expect(page.getByText('AI Assistant Disclaimer')).toBeVisible();

  await page.getByRole('link', { name: 'Start new chat' }).click();
  await expect(page.getByText("Good to see you.")).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Message AI Assistant' })).toBeFocused();

  await page.getByRole('link', { name: 'I lost my charging card' }).click();
  await expect(page.getByText('How does your loading indicator look like while computing answers?')).toBeVisible();
});
