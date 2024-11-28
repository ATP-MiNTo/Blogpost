const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './playtest',
  use: {
    headless: true, // Run in headless mode by default
  },
});
