const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const { expect } = require('chai');
const baseUrl = require('../../data/baseURL');
const helper = require('../pageobjects/helper');

describe('create attachment', () => {
    before('land to dev asset page and login', async () => {
        await browser.url(baseUrl.baseUrlLink)
        await helper.loginToAccountCreateAsset()
        await devAssetMainPage.clickFirstRegisterLink()
        //checking existing assets groups and assets
        await helper.checkingExistingGroupsAndAssets()
        //checking existing journals
        await devAssetMainPage.clickJournalLink()
        await helper.checkingExistingJournals()
    });
    after('land to assets and delete created asset group (Blank)', async () => {
        // deleting asset
        await devAssetMainPage.clickAssetsLink()
        await devAssetMainPage.clickFirstGroupLink()
        await devAssetMainPage.clickFirstAssetLink()
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
        await expect(await devAssetMainPage.isFirstGroupLinkDisplayed()).true
        await devAssetMainPage.clickAssetsAddBtn()
        await helper.createAsset()
    });
    it('should add link attachment', async () => {
        await devAssetMainPage.clickAssetDetailsLink()
        await helper.addLinkAttachment()
        await helper.deleteAllLinkAttachments()
    });
    it('should add file attachment', async () => {
        await helper.addFilesAttachment()
        await helper.deleteAllFilesAttachments()
        //change delete func
    });

});