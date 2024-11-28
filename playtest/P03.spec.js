// Test delete post
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/home/authen');
  await page.getByRole('link', { name: 'Newpost' }).click();
  await page.getByRole('link', { name: 'Edit this post' }).click();
  await page.getByLabel('Body').click();
  await page.getByLabel('Body').fill('good bye');
  await page.getByRole('button', { name: 'Update Post' }).click();
  await page.getByRole('link', { name: 'Back to Home' }).click();
  await expect(page.getByText('Detail: good bye')).toBeVisible();
  await page.getByRole('link', { name: 'Newpost' }).click();
  await page.getByRole('button', { name: 'Destroy this post' }).click();
  await page.getByRole('link', { name: 'Back to Home' }).click();
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - paragraph
    - paragraph
    - heading "Welcome to the Authenticated Page!" [level=1]
    - heading "Posts" [level=1]
    - link "Create a New Post"
    - link "Back to Home"
    - link "Log out"
    `);
});