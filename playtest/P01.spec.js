// Test create post
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/home/authen');
  await page.getByRole('link', { name: 'Create a New Post' }).click();
  await page.getByLabel('Title').click();
  await page.getByLabel('Title').fill('Newpost');
  await page.getByLabel('Title').press('Tab');
  await page.getByLabel('Body').fill('good dream');
  await page.getByRole('button', { name: 'Create Post' }).click();
  await page.getByRole('link', { name: 'Back to Home' }).click();
  await expect(page.getByText('Detail: good dream')).toBeVisible();
});