const puppeteer = require('puppeteer');

async function getStockInfo(stockCode) {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(`https://finance.naver.com/item/main.nhn?code=${stockCode}`, {
      waitUntil: 'networkidle0',
    });

    const stockName = await page.$eval('div.wrap_company h2', e => e.innerText);
    const stockPrice = await page.$eval('span#_nowVal', e => parseFloat(e.innerText.replace(',', '')));
    const stockDiff = await page.$eval('span#diff > span', e => parseFloat(e.innerText.replace(',', '')));

    const info = {
      name: stockName,
      price: stockPrice,
      diff: stockDiff,
    };

    await browser.close();

    return info;
  } catch (error) {
    console.error(error);
  }
}

// Example usage:
getStockInfo('005930').then(info => {
  console.log(info);
});
