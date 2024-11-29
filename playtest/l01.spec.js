import { test, expect } from '@playwright/test';
import fs from 'fs';

test('test sign up option', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/');
  fs.writeFileSync('signup_step1.html', await page.content());

  await page.getByRole('link', { name: 'Log in' }).click();
  fs.writeFileSync('signup_step2.html', await page.content());

  await page.getByRole('link', { name: 'Sign up' }).click();
  fs.writeFileSync('signup_step3.html', await page.content());

  await page.getByLabel('Email').fill('athipat.arip@gmail.com');
  await page.getByLabel('Email').press('Tab');
  await page.getByLabel('Password', { exact: true }).fill('super1234');
  await page.getByLabel('Password', { exact: true }).press('Tab');
  await page.getByLabel('Password confirmation').fill('super1234');
  await page.getByRole('button', { name: 'Sign up' }).click();
  fs.writeFileSync('signup_step4.html', await page.content());
});
