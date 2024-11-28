//Test sign in option
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByLabel('Email').fill('athipat.arip@gmail.com');
  await page.getByLabel('Email').press('Tab');
  await page.getByLabel('Password').fill('super1234');
  await page.getByRole('button', { name: 'Log in' }).click();
});