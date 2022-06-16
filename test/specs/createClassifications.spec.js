const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const { expect } = require('chai');
const baseUrl = require('../../data/baseURL');
const helper = require('../pageobjects/helper');

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
        await expect(await devAssetMainPage.isFirstThingsFirstAlertMessageDisplayed()).true
        await expect(await devAssetMainPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`)
    });
    it('should create classifications', async () => {
        await devAssetMainPage.clickRegisterSettingsLink()
        await devAssetMainPage.clickClassificationLink()
        await helper.addClassification()
        await expect(await devAssetMainPage.isFirstClassificationDisplayed()).true
        await helper.addClassification()
        await expect(await devAssetMainPage.isSecondClassificationDisplayed()).true
    });
    it('should create asset group (from template) if no groups have been created', async () => {
        await devAssetMainPage.clickAssetsLink()
        await helper.createAssetGroupFromTemplate()
    });
    it('should create asset', async () => {
        await devAssetMainPage.clickAssetsLink()
        await expect(await devAssetMainPage.isFirstGroupLinkDisplayed()).true;
        await devAssetMainPage.clickAssetsAddBtn()
        await helper.createAssetClassification()
    });
    it('should verify that Classifications have been added', async () => {
        await devAssetMainPage.clickAssetAccountsTabLink()
        await expect(await devAssetMainPage.isFirstClassificationAddedCellDisplayed()).true
        await expect(await devAssetMainPage.isSecondClassificationAddedCellDisplayed()).true
    });
    it('should make some transfer', async () => {
        await devAssetMainPage.clickAssetDetailsLink()
        await devAssetMainPage.clickFirstClassificationTransferLink()
        await devAssetMainPage.selectTransferEffectiveDateValue(1)
        await devAssetMainPage.selectTransferClassificationDropDownValue(4)
        await devAssetMainPage.clickSaveBtn()
        await devAssetMainPage.clickSecondClassificationTransferLink()
        await devAssetMainPage.selectTransferEffectiveDateValue(1)
        await devAssetMainPage.selectTransferClassificationDropDownValue(1)
        await devAssetMainPage.clickSaveBtn()
    });
    it('should verify that Classifications have been transferred', async () => {
        await devAssetMainPage.clickAssetAccountsTabLink()
        await expect(await devAssetMainPage.isFirstClassificationUpdatedCellDisplayed()).true
        await expect(await devAssetMainPage.getFirstClassificationUpdatedCellText()).contain('Classification Updated')
        await expect(await devAssetMainPage.isSecondClassificationUpdatedCellDisplayed()).true
        await expect(await devAssetMainPage.getSecondClassificationUpdatedCellText()).contain('Classification Updated')
    });
});