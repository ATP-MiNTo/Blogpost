// Run P01 first
// Test Like and comment function
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/home/authen');
  await page.getByRole('link', { name: 'Newpost' }).click();
  await page.getByRole('button', { name: 'Like' }).click();
  await page.getByLabel('Comment').click();
  await page.getByLabel('Comment').fill('You too buddy');
  await page.getByRole('button', { name: 'Create Comment' }).click();
  await page.getByText('You too buddy').click();
});