const { chromium } = require('playwright');

describe('Google', () => {
  it('should display the correct title', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://www.google.com.br/');

    const title = await page.title();
    expect(title).toBe('Google');

    await page.screenshot({ path: 'example2.png' });
    await browser.close();
  });
});
