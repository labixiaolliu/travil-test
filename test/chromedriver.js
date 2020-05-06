const webdriver = require('selenium-webdriver');
const {expect} = require('chai');
const chromeDriver = require('selenium-webdriver/chrome');
const {Builder, By, Key, until} = require('selenium-webdriver');

describe('show open baidu', function() {
  this.timeout(50000);
  let driver;
  before(() => {
    driver = new webdriver.Builder()
      .forBrowser('chrome')
      // .setChromeOptions(new chromeDriver.Options().addArguments(['headless']))
      .build()
  })

  // it('show open baidu', done => {
  //   driver.get('https://www.baidu.com').then(() => {
  //     driver.findElement(By.id("kw")).then(input => {
  //       input.sendKeys("美国疫情").then(() => {
  //         driver.findElement(By.id('su')).then(button => {
  //           button.click().then(() => {
  //             driver.getTitle().then(value => {
  //               console.log(value);
  //               expect(value).to.equal('美国疫情_百度搜索');
  //               done();
  //             })
  //           })
  //         })
  //       })
  //     })
  //   })
  // })

  it('搜索 美国疫情', async () => {
    await driver.get('https://cn.bing.com/');
    const input = await driver.findElement(By.id('sb_form_q'));
    await input.sendKeys('美国疫情');
    const button = await driver.findElement(By.id('sb_form_go'));
    await button.click();
    const handler = await driver.getWindowHandle();
    await driver.switchTo().window(handler);
    const title = await driver.getTitle();
    console.log(title);
    expect(title).to.equal('美国疫情 - 国内版 Bing');
  });

  after(() => {
    driver.quit();
  })
})

// (async function example() {
//   let driver = await new Builder().forBrowser('chrome').build();
//   try {
//     await driver.get('http://www.google.com/ncr');
//     await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
//     await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
//   } finally {
//     await driver.quit();
//   }
// })();