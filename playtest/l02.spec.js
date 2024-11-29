import { test, expect } from '@playwright/test';
import fs from 'fs';

test('test sign in option', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/');
  fs.writeFileSync('signin_step1.html', await page.content());

  await page.getByRole('link', { name: 'Log in' }).click();
  fs.writeFileSync('signin_step2.html', await page.content());

  await page.getByLabel('Email').fill('athipat.arip@gmail.com');
  await page.getByLabel('Email').press('Tab');
  await page.getByLabel('Password').fill('super1234');
  await page.getByRole('button', { name: 'Log in' }).click();
  fs.writeFileSync('signin_step3.html', await page.content());
});
