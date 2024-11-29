import { test, expect } from '@playwright/test';
import fs from 'fs';

test('test post functionalities', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/home/authen');
  fs.writeFileSync('post_step1.html', await page.content());

  await page.getByRole('link', { name: 'Create a New Post' }).click();
  fs.writeFileSync('post_step2.html', await page.content());

  await page.getByLabel('Title').click();
  await page.getByLabel('Title').fill('Tleti');
  await page.locator('#post_body').click();
  await page.locator('#post_body').fill('momomo');
  await page.getByRole('button', { name: 'Create Post' }).click();
  fs.writeFileSync('post_step3.html', await page.content());

  await page.getByRole('link', { name: 'Back to Home' }).click();
  await page.getByRole('link', { name: 'Tleti' }).click();
  fs.writeFileSync('post_step4.html', await page.content());

  await page.getByRole('button', { name: 'Like' }).click();
  await page.getByLabel('Comment').click();
  await page.getByLabel('Comment').fill('Cenmom');
  await page.getByRole('button', { name: 'Create Comment' }).click();
  fs.writeFileSync('post_step5.html', await page.content());

  await page.getByRole('link', { name: 'Edit this post' }).click();
  fs.writeFileSync('post_step6.html', await page.content());

  await page.getByLabel('Title').click();
  await page.getByLabel('Title').fill('Okko');
  await page.getByText('momomo').click();
  await page.getByText('momomo').fill('I yah');
  await page.getByRole('button', { name: 'Update Post' }).click();
  fs.writeFileSync('post_step7.html', await page.content());

  await page.getByRole('link', { name: 'Back to Home' }).click();
  await page.getByRole('link', { name: 'Okko' }).click();
  await page.getByRole('button', { name: 'Destroy this post' }).click();
  await page.getByRole('link', { name: 'Back to Home' }).click();
  fs.writeFileSync('post_step8.html', await page.content());

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
