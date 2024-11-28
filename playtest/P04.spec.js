// Run P01 first
// Test Like and comment function
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/home/authen');
  await page.getByRole('link', { name: 'Create a New Post' }).click();
  await page.getByLabel('Title').click();
  await page.getByLabel('Title').fill('New1');
  await page.getByLabel('Title').press('Tab');
  await page.getByLabel('Body').fill('Test1');
  await page.getByRole('button', { name: 'Create Post' }).click();
  await page.getByRole('link', { name: 'Back to Home' }).click();
  await page.getByRole('link', { name: 'New1' }).click();
  await page.getByRole('button', { name: 'Like' }).click();
  await page.getByLabel('Comment').click();
  await page.getByLabel('Comment').fill('Testcomment');
  await page.getByRole('button', { name: 'Create Comment' }).click();
  await expect(page.getByText('Testcomment')).toBeVisible();
  await expect(page.getByText('Likes: 1 Like')).toBeVisible();
});