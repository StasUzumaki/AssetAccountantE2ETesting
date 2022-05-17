const devAssetMainPage = require('../pageobjects/devAssetMain.page')
const helper = require('../pageobjects/helper')
const { expect } = require('chai')
const baseUrl = require('../../data/baseURL')

describe('login to account', () => {
  after('logout', async () => {
    await helper.logout()
  });
  it('should login to existing account', async () => {
    await browser.url(baseUrl.baseUrlLink)
    await helper.loginToAccount()
    await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true;
    await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register');
  });
});




