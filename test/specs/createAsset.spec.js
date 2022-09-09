const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const { expect } = require('chai');
const baseUrl = require('../../data/baseURL');
const helper = require('../pageobjects/helper');
const dashboardPage = require('../pageobjects/dashboard.page');
const assetsPage = require('../pageobjects/assets.page');

describe('dev asset page', () => {
    before('land to dev asset page and login', async () => {
        await helper.platformLink()
        await helper.loginToAccountCreateAsset()
        await dashboardPage.clickFirstRegisterLink()
        await helper.checkingExistingGroupsAndAssets()
    });
    after('land to assets, delete created asset, delete created asset group from template and logout', async () => {
        await devAssetMainPage.clickAssetsLink()
        await helper.deleteAllAssets()
        await helper.deleteAssetGroup()
        await helper.logout()
    });
    it('should create asset group (from template) if no groups have been created', async () => {
        await helper.createAssetGroupFromTemplate()
    });
    it('should create asset', async () => {
        await devAssetMainPage.clickAssetsLink()
        await expect(await assetsPage.isFirstGroupLinkDisplayed()).true;
        await assetsPage.clickAssetsAddBtn()
        await helper.createAsset()
    });
});