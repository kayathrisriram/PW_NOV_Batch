import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('html').click();
  await page.goto('https://www.gmail.com');
  await page.getByLabel('Email or phone').fill('kayathrisriram@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
});