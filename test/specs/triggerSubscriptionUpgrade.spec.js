const devAssetMainPage = require('../pageobjects/devAssetMain.page')
const { expect } = require('chai')
const baseUrl = require('../../data/baseURL')
const helper = require('../pageobjects/helper')
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator')

const randomName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors],
    length: 2
});
const randomAssetName = randomName + '_Asset';

describe('create a new register', () => {
    before('land to dev asset page and login', async () => {
        await browser.url(baseUrl.baseUrlLink)
        await helper.loginToAccount()
    });
    after('delete created registers', async () => {
        await devAssetMainPage.clickAssetsLink()
        await helper.deleteAllAssets()
        await helper.deleteAssetGroup()
        await helper.logout()
    });
    it('should create a new org', async () => {
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true;
        await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register')
        await helper.createOrganisation()
    });
    it('should create a new register', async () => {
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true;
        await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register')
        await devAssetMainPage.clickCreateFirstRegisterBtn()
        await helper.createRegister()
        await devAssetMainPage.clickAssetsLink()
        await expect(await devAssetMainPage.isCreateAssetGroupTemplateBtnDisplayed()).true
        await expect(await devAssetMainPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`)
    });
    it('should create asset group (from template) if no groups have been created', async () => {
        await helper.createAssetGroupFromTemplate()
    });
    it('should create 10 assets', async () => {
        await devAssetMainPage.clickAssetsLink()
        const assetsAmount = 5;
        for (let i = 0; i < assetsAmount; i++) {
            await devAssetMainPage.clickAssetsAddBtn()
            await helper.createAsset()
            await devAssetMainPage.clickAssetsLink()
        }
        await expect(await devAssetMainPage.isFirstGroupLinkDisplayed()).true;
        for (let i = 0; i < assetsAmount; i++) {
            await devAssetMainPage.clickAssetsAddBtn()
            await helper.createAsset()
            await devAssetMainPage.clickAssetsLink()
        }
        await expect(await devAssetMainPage.isFirstGroupLinkDisplayed()).true;
    });
    it('should create and fail 11 asset and change subscription plan', async () => {
        await devAssetMainPage.clickAssetsAddBtn()
        await devAssetMainPage.clickCreateAssetBtn()
        await expect(await devAssetMainPage.isSubscriptionLimitAlertDisplayed()).true
        await expect(await devAssetMainPage.getSubscriptionLimitAlertText()).contain(`Subscription Limit`)
        await devAssetMainPage.clickNewAssetUpgradeBtn()
        await expect(await devAssetMainPage.isSubscriptionFormDisplayed()).true
        await devAssetMainPage.clickToggleForAccountingFirms()
        await devAssetMainPage.clickStandartChangePlanBtn()
        await expect(await devAssetMainPage.isPaymentMethodFormDisplayed()).true
        await browser.switchToFrame(1)
        await devAssetMainPage.setCardNumberFieldValue('4242 4242 4242 4242')
        await browser.switchToParentFrame()
        await browser.switchToFrame(2)
        await devAssetMainPage.setCardExpiryFieldValue('0324')
        await browser.switchToParentFrame()
        await browser.switchToFrame(3)
        await devAssetMainPage.setCvcFieldValue('777')
        await browser.switchToParentFrame()
        await devAssetMainPage.clickPaymentUpgradeSubBtn()
        await expect(await devAssetMainPage.isCurrentPaymentMethodAlertDisplayed()).true
    });
    it('should create 11 asset', async () => {
        const randomCodeNumber = Math.floor(Math.random() * 1000);
        await expect(await devAssetMainPage.isNewAssetTitleDisplayed()).true;
        await devAssetMainPage.setNewAssetNameValue(randomAssetName + randomCodeNumber)
        await devAssetMainPage.setNewAssetCodeNumberValue(randomCodeNumber)
        await devAssetMainPage.setNewAssetDescriptionValue('testDescr')
        await devAssetMainPage.selectNewAssetGroupValue()
        await devAssetMainPage.setNewAssetCostValue('200')
        await devAssetMainPage.setNewAssetPurchaseDateValue('06/05/22')
        await devAssetMainPage.setNewAssetQuantityValue('1')
        await devAssetMainPage.selectNewAssetQuantityUnitsValue()
        await expect(await devAssetMainPage.isDepreciationFormDisplayed()).true
        await expect(await devAssetMainPage.isTaxDepreciationFormDisplayed()).true
        await expect(await devAssetMainPage.isAccountsDepreciationFormDisplayed()).true
        await browser.pause(1000)
        await devAssetMainPage.clickNewAssetSaveBtn()
        await expect(await devAssetMainPage.isAssetDescriptionTitleDisplayed()).true
    });
});