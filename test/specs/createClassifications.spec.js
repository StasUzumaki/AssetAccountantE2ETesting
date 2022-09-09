const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const { expect } = require('chai');
const baseUrl = require('../../data/baseURL');
const helper = require('../pageobjects/helper');
const assetsPage = require('../pageobjects/assets.page');
const registerSettingsPage = require('../pageobjects/registerSettings.page');
const assetPage = require('../pageobjects/asset.page');
const classificationsPage = require('../pageobjects/classifications.page');

describe('dev asset page', () => {
    before('land to dev asset page and login', async () => {
        await browser.url(baseUrl.baseUrlLink)
        await helper.loginToAccountRegister()
        await helper.checkingExistingRegisters()
    });
    after('land to assets, delete created asset, delete created asset group from template and logout', async () => {
        await helper.deleteClassificationInAsset()
        await devAssetMainPage.clickAssetsLink()
        await helper.deleteAllAssets()
        await helper.deleteAssetGroup()
        await devAssetMainPage.clickRegisterSelectionDropDown()
        await devAssetMainPage.clickAllRegistersLink()
        await helper.deleteAllRegisters()
        await helper.logout()
    });
    it('should create a new register', async () => {
        await devAssetMainPage.clickCreateFirstRegisterBtn()
        await helper.createRegister()
        await devAssetMainPage.clickAssetsLink()
        await expect(await assetsPage.isFirstThingsFirstAlertMessageDisplayed()).true
        await expect(await assetsPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`)
    });
    it('should create classifications', async () => {
        await devAssetMainPage.clickRegisterSettingsLink()
        await registerSettingsPage.clickClassificationLink()
        await helper.addClassification()
        await expect(await classificationsPage.isFirstClassificationDisplayed()).true
        await helper.addClassification()
        await expect(await classificationsPage.isSecondClassificationDisplayed()).true
    });
    it('should create asset group (from template) if no groups have been created', async () => {
        await devAssetMainPage.clickAssetsLink()
        await helper.createAssetGroupFromTemplate()
    });
    it('should create asset', async () => {
        await devAssetMainPage.clickAssetsLink()
        await expect(await assetsPage.isFirstGroupLinkDisplayed()).true;
        await assetsPage.clickAssetsAddBtn()
        await helper.createAssetClassification()
    });
    it('should verify that Classifications have been added', async () => {
        await assetPage.clickAssetAccountsTabLink()
        await expect(await classificationsPage.isFirstClassificationAddedCellDisplayed()).true
        await expect(await classificationsPage.isSecondClassificationAddedCellDisplayed()).true
    });
    it('should make some transfer', async () => {
        await assetPage.clickAssetDetailsLink()
        await assetPage.clickFirstClassificationTransferLink()
        await assetPage.selectTransferEffectiveDateValue(1)
        await assetPage.selectTransferClassificationDropDownValue(4)
        await devAssetMainPage.clickSaveBtn()
        await assetPage.clickSecondClassificationTransferLink()
        await assetPage.selectTransferEffectiveDateValue(1)
        await assetPage.selectTransferClassificationDropDownValue(1)
        await devAssetMainPage.clickSaveBtn()
    });
    it('should verify that Classifications have been transferred', async () => {
        await assetPage.clickAssetAccountsTabLink()
        await expect(await assetPage.isFirstClassificationUpdatedCellDisplayed()).true
        await expect(await assetPage.getFirstClassificationUpdatedCellText()).contain('Classification Updated')
        await expect(await assetPage.isSecondClassificationUpdatedCellDisplayed()).true
        await expect(await assetPage.getSecondClassificationUpdatedCellText()).contain('Classification Updated')
    });
});