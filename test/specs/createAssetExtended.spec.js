const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const { expect } = require('chai');
const baseUrl = require('../../data/baseURL');
const helper = require('../pageobjects/helper');
const assetsPage = require('../pageobjects/assets.page');
const assetPage = require('../pageobjects/asset.page');

describe('dev asset page', () => {
    before('land to dev asset page and login', async () => {
        await browser.url(baseUrl.baseUrlLink)
        await helper.loginToAccountAssetSuperTest()
        await helper.checkingExistingRegisters()
    });
    after('land to assets, delete created asset, delete created asset group from template and logout', async () => {
        await devAssetMainPage.clickAssetsLink()
        await helper.deleteAllAssets()
        await helper.deleteAssetGroup()
        await devAssetMainPage.clickRegisterSelectionDropDown()
        await devAssetMainPage.clickAllRegistersLink()
        await helper.deleteAllRegisters()
        await helper.logout()
    });
    it('should create a new register', async () => {
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true;
        await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register');
        await devAssetMainPage.clickCreateFirstRegisterBtn()
        await helper.createRegister()
        await devAssetMainPage.clickAssetsLink()
        await expect(await assetsPage.isCreateAssetGroupTemplateBtnDisplayed()).true;
        await expect(await assetsPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`);
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
    it('should add and reverse opening balance', async () => {
        await helper.assetAddOpeningBalance()
        await helper.assetReverseOpeningBalance()
    });
    it('should add sell and reverse sale', async () => {
        await helper.assetSell()
        await helper.assetReverseSale()
    });
    it('should write off asset and reverse write off', async () => {
        await helper.assetWriteOff()
        await helper.assetReverseWriteOff()
    });
    it('should partial sell asset and reverse partial sale', async () => {
        await helper.assetPartialSell()
        await helper.assetReversePartialSale()
    });
    it('should partial write off asset and reverse partial write off', async () => {
        await helper.assetPartialWriteOff()
        await helper.assetReversePartialWriteOff()
    });
    it('should add and reverse reassessment', async () => {
        await helper.taxAddReassessment()
        await helper.taxReverseReassessment()
    });
    it('should add and reverse transfer to pool', async () => {
        await helper.taxAddTransferToPool()
        await helper.taxReverseTransferToPool()
    });
    it('should add and reverse adjustment', async () => {
        await helper.taxAddAdjustment()
        await helper.taxReverseAdjustment()
    });
    it('should add and reverse reassessment taxable use', async () => {
        await helper.taxAddReassessmentTaxableUse()
        await helper.taxReverseReassessmentTaxableUse()
    });
    it('should link to account tab, add and reverse reassessment', async () => {
        await helper.accountsAddReassessment()
        await assetPage.clickAssetAccountsTabLink()
        await helper.accountsReverseReasessment()
    });
    it('should link to account tab, add and reverse revaluation', async () => {
        await helper.accountsAddRevaluation()
        await assetPage.clickAssetAccountsTabLink()
        await helper.accountsReverseRevaluation()
    });
    it('should link to account tab, add and reverse impairment', async () => {
        await helper.accountsAddImpairment()
        await assetPage.clickAssetAccountsTabLink()
        await helper.accountsReverseImpairment()
    });
    it('should link to account tab, add and reverse adjustment', async () => {
        await helper.accountsAddAdjustment()
        await assetPage.clickAssetAccountsTabLink()
        await helper.accountsReverseAdjustment()
    });
});