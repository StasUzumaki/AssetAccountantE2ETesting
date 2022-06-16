const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const { expect } = require('chai');
const baseUrl = require('../../data/baseURL');
const helper = require('../pageobjects/helper');

describe('dev asset page', () => {
    before('land to dev asset page and login', async () => {
        await browser.url(baseUrl.baseUrlLink)
        await helper.loginToAccountCreateAsset()
        await devAssetMainPage.clickFirstRegisterLink()
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
        await expect(await devAssetMainPage.isFirstGroupLinkDisplayed()).true;
        await devAssetMainPage.clickAssetsAddBtn()
        await helper.createAsset()
    });
    it('should add and reverse opening balance', async () => {
        await helper.assetAddOpeningBalance()
        await helper.assetReverseOpeningBalance()
    });
    it('should add sell and reverse sale', async () => {
        await helper.assetSell()
        await helper.assetReverseSale()
    });
    it('should write off asset and reverse write off', async () => {
        await browser.pause(2000)
        await helper.assetWriteOff()
        await helper.assetReverseWriteOff()
    });
    it('should partial sell asset and reverse partial sale', async () => {
        await browser.pause(2000)
        await helper.assetPartialSell()
        await helper.assetReversePartialSale()
    });
    it('should partial write off asset and reverse partial write off', async () => {
        await browser.pause(2000)
        await helper.assetPartialWriteOff()
        await helper.assetReversePartialWriteOff()
    });
    it('should add and reverse reassessment', async () => {
        await browser.pause(2000)
        await helper.taxAddReassessment()
        await helper.taxReverseReassessment()
    });
    it('should add and reverse transfer to pool', async () => {
        await browser.pause(2000)
        await helper.taxAddTransferToPool()
        await helper.taxReverseTransferToPool()
    });
    it('should add and reverse adjustment', async () => {
        await browser.pause(2000)
        await helper.taxAddAdjustment()
        await helper.taxReverseAdjustment()
    });
    it('should add and reverse reassessment taxable use', async () => {
        await browser.pause(2000)
        await helper.taxAddReassessmentTaxableUse()
        await helper.taxReverseReassessmentTaxableUse()
    });
    it('should link to account tab, add and reverse reassessment', async () => {
        await browser.pause(2000)
        await helper.accountsAddReassessment()
        await helper.accountsReverseReasessment()
    });
    it('should link to account tab, add and reverse revaluation', async () => {
        await browser.pause(2000)
        await helper.accountsAddRevaluation()
        await helper.accountsReverseRevaluation()
    });
    it('should link to account tab, add and reverse impairment', async () => {
        await browser.pause(2000)
        await helper.accountsAddImpairment()
        await helper.accountsReverseImpairment()
    });
    it('should link to account tab, add and reverse adjustment', async () => {
        await browser.pause(2000)
        await helper.accountsAddAdjustment()
        await helper.accountsReverseAdjustment()
    });
});