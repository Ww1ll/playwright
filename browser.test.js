const { chromium } = require('playwright');

(async () => {
  try {
    // Inicializa o navegador Chromium
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Navega até a página desejada
    await page.goto('https://www.google.com.br/');

    // Verifica se o título da página está correto
    const title = await page.title();
    console.log(`Título da página: ${title}`);

    if (title !== 'Google') {
      throw new Error('O título da página está incorreto');
    }

    // Faz uma captura de tela da página
    await page.screenshot({ path: 'example.png' });

    // Fecha o navegador
    await browser.close();
  } catch (error) {
    console.error('Erro durante a execução do teste:', error);
  }
})();
