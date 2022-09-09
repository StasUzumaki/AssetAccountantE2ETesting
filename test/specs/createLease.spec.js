const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const { expect } = require('chai');
const baseUrl = require('../../data/baseURL');
const helper = require('../pageobjects/helper');
const dashboardPage = require('../pageobjects/dashboard.page');
const assetsPage = require('../pageobjects/assets.page');
const leasePage = require('../pageobjects/lease.page');
const assetPage = require('../pageobjects/asset.page');

describe('create report', () => {
    before('land to dev asset page and login', async () => {
        await helper.platformLink()
        await helper.loginToAccountCreateAsset()
        await dashboardPage.clickFirstRegisterLink()
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
        await expect(await assetsPage.isFirstGroupLinkDisplayed()).true
        await assetsPage.clickAssetsAddBtn()
        await assetsPage.clickCreateHpLeaseAssetBtn()
        await helper.fillingOutLeaseForm()
        await leasePage.clickAlertMessageGenerateScheduleBtn()
        await helper.generatePaymentSchedule()
        await leasePage.clickLeaseSaveBtn()
        await expect(await assetPage.isAssetColumnHeaderDisplayed()).true
        await expect(await leasePage.isLeaseColumnHeaderDisplayed()).true
    });
});