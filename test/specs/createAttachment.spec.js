const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const { expect } = require('chai');
const baseUrl = require('../../data/baseURL');
const helper = require('../pageobjects/helper');
const dashboardPage = require('../pageobjects/dashboard.page');
const assetsPage = require('../pageobjects/assets.page');
const assetPage = require('../pageobjects/asset.page');

describe('create attachment', () => {
    before('land to dev asset page and login', async () => {
        await helper.platformLink()
        await helper.loginToAccountCreateAsset()
        await dashboardPage.clickFirstRegisterLink()
        //checking existing assets groups and assets
        await helper.checkingExistingGroupsAndAssets()
        //checking existing journals
        await devAssetMainPage.clickJournalLink()
        await helper.checkingExistingJournals()
    });
    after('land to assets and delete created asset group (Blank)', async () => {
        // deleting asset
        await devAssetMainPage.clickAssetsLink()
        await assetsPage.clickFirstGroupLink()
        await assetsPage.clickFirstAssetLink()
        await helper.deleteAsset()
        // deleting asset group
        await helper.deleteAssetGroup()
        //logout
        await helper.logout()
    });
    it('should create asset group (from template) if no groups have been created', async () => {
        await helper.createAssetGroupFromTemplate()
    });
    it('should create asset', async () => {
        await devAssetMainPage.clickAssetsLink()
        await expect(await assetsPage.isFirstGroupLinkDisplayed()).true
        await assetsPage.clickAssetsAddBtn()
        await helper.createAsset()
    });
    it('should add link attachment', async () => {
        await assetPage.clickAssetDetailsLink()
        await helper.addLinkAttachment()
        await helper.deleteAllLinkAttachments()
    });
    it('should add file attachment', async () => {
        await helper.addFilesAttachment()
        await helper.deleteAllFilesAttachments()
    });

});