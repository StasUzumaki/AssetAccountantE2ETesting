const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const { expect } = require('chai');
const baseUrl = require('../../data/baseURL');
const helper = require('../pageobjects/helper');

describe('create report', () => {
    before('land to dev asset page and login', async () => {
        await helper.platformLink()
        await helper.loginToAccountCreateAsset()
        await devAssetMainPage.clickFirstRegisterLink()
        //checking existing assets groups and assets
        await helper.checkingExistingGroupsAndAssets()
    });
    after('land to assets and delete created asset group (Blank)', async () => {
        //deleting lease
        await devAssetMainPage.clickAssetsLink()
        await helper.deleteAllAssets()
        // deleting asset group
        await helper.deleteAssetGroup()
        //logout
        await helper.logout()
    });
    it('should create asset group (from template) if no groups have been created', async () => {
        await helper.createAssetGroupFromTemplate()
    });
    it('should create HP/Lease', async () => {
        await devAssetMainPage.clickAssetsLink()
        await expect(await devAssetMainPage.isFirstGroupLinkDisplayed()).true
        await devAssetMainPage.clickAssetsAddBtn()
        await devAssetMainPage.clickCreateHpLeaseAssetBtn()
        await helper.fillingOutLeaseForm()
        await devAssetMainPage.clickAlertMessageGenerateScheduleBtn()
        await helper.generatePaymentSchedule()
        //await helper.fillingOutLeasePaymentForm()
        await devAssetMainPage.clickLeaseSaveBtn()
        await expect(await devAssetMainPage.isAssetColumnHeaderDisplayed()).true
        await expect(await devAssetMainPage.isLeaseColumnHeaderDisplayed()).true
    });
});