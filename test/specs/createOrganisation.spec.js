const devAssetMainPage = require('../pageobjects/devAssetMain.page')
const helper = require('../pageobjects/helper')
const { expect } = require('chai')
const baseUrl = require('../../data/baseURL')

describe('create organisation', () => {
    before('land to dev asset page and login', async () => {
        await browser.url(baseUrl.baseUrlLink)
        await helper.loginToAccount()
    });
    after('logout', async () => {
        await helper.logout()
    });
    it('should create a new organisation', async () => {
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true
        await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register')
        await helper.createOrganisation()    
    });
});


