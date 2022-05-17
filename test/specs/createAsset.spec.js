const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const { expect } = require('chai');
const baseUrl = require('../../data/baseURL');
const helper = require('../pageobjects/helper');

describe('dev asset page', () => {
    before('land to dev asset page and login', async () => {
        await browser.url(baseUrl.baseUrlLink)
        await helper.loginToAccountCreateAsset()
    });
    after('land to assets, delete created asset, delete created asset group from template and logout', async () => {
        await helper.deleteAsset()
        await helper.deleteAssetGroup()
        await helper.logout()
    });
    it('should create asset group (from template) if no groups have been created', async () => {
        await devAssetMainPage.clickFirstRegisterLink();
        await helper.createAssetGroupFromTemplate()
    });
    it('should create asset', async () => {
        await devAssetMainPage.clickAssetsLink()
        await expect(await devAssetMainPage.isFirstGroupLinkDisplayed()).true;
        await devAssetMainPage.clickAssetsAddBtn()
        await helper.createAsset()
    });
});