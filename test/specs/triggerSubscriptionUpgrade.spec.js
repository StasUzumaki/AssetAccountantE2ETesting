const devAssetMainPage = require('../pageobjects/devAssetMain.page')
const { expect } = require('chai')
const baseUrl = require('../../data/baseURL')
const helper = require('../pageobjects/helper')
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator')
const assetPage = require('../pageobjects/asset.page')
const assetsPage = require('../pageobjects/assets.page')
const assetGroups = require('../pageobjects/assetGroups.page')
const subscriptionAndPaymentPage = require('../pageobjects/subscriptionAndPayment.page')

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
        await expect(await assetsPage.isCreateAssetGroupTemplateBtnDisplayed()).true
        await expect(await assetsPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`)
    });
    it('should create asset group (from template) if no groups have been created', async () => {
        await helper.createAssetGroupFromTemplate()
    });
    it('should create 10 assets', async () => {
        await devAssetMainPage.clickAssetsLink()
        const assetsAmount = 5;
        for (let i = 0; i < assetsAmount; i++) {
            await assetsPage.clickAssetsAddBtn()
            await helper.createAsset()
            await devAssetMainPage.clickAssetsLink()
        }
        await expect(await assetsPage.isFirstGroupLinkDisplayed()).true;
        for (let i = 0; i < assetsAmount; i++) {
            await assetsPage.clickAssetsAddBtn()
            await helper.createAsset()
            await devAssetMainPage.clickAssetsLink()
        }
        await expect(await assetsPage.isFirstGroupLinkDisplayed()).true;
    });
    it('should create and fail 11 asset and change subscription plan', async () => {
        await assetsPage.clickAssetsAddBtn()
        await assetsPage.clickCreateAssetBtn()
        await expect(await assetsPage.isSubscriptionLimitAlertDisplayed()).true
        await expect(await assetsPage.getSubscriptionLimitAlertText()).contain(`Subscription Limit`)
        await assetsPage.clickNewAssetUpgradeBtn()
        await expect(await subscriptionAndPaymentPage.isSubscriptionFormDisplayed()).true
        await subscriptionAndPaymentPage.clickToggleForAccountingFirms()
        await subscriptionAndPaymentPage.clickStandartPlusLeasesChangePlanBtn()
        await expect(await subscriptionAndPaymentPage.isPaymentMethodFormDisplayed()).true
        await expect(await subscriptionAndPaymentPage.isCardNumberInputDisplayed()).true
        await browser.switchToFrame(1)
        await subscriptionAndPaymentPage.setCardNumberFieldValue('4242 4242 4242 4242')
        await browser.switchToParentFrame()
        await expect(await subscriptionAndPaymentPage.isCardExpiryInputDisplayed()).true
        await browser.switchToFrame(2)
        await subscriptionAndPaymentPage.setCardExpiryFieldValue('0324')
        await browser.switchToParentFrame()
        await expect(await subscriptionAndPaymentPage.isCvcInputDisplayed()).true
        await browser.switchToFrame(3)
        await subscriptionAndPaymentPage.setCvcFieldValue('777')
        await browser.switchToParentFrame()
        await subscriptionAndPaymentPage.clickPaymentUpgradeSubBtn()
        await expect(await subscriptionAndPaymentPage.isCurrentPaymentMethodAlertDisplayed()).true
    });
    it('should create 11 asset', async () => {
        const randomCodeNumber = Math.floor(Math.random() * 1000);
        await expect(await assetGroups.isNewAssetTitleDisplayed()).true;
        await assetPage.setNewAssetNameValue(randomAssetName + randomCodeNumber)
        await assetPage.setNewAssetCodeNumberValue(randomCodeNumber)
        await assetPage.setNewAssetDescriptionValue('testDescr')
        await assetPage.selectNewAssetGroupValue()
        await assetPage.setNewAssetCostValue('200')
        await assetPage.setNewAssetPurchaseDateValue('06/05/22')
        await assetPage.setNewAssetQuantityValue('1')
        await assetPage.selectNewAssetQuantityUnitsValue()
        await expect(await assetGroups.isDepreciationFormDisplayed()).true
        await expect(await assetGroups.isTaxDepreciationFormDisplayed()).true
        await expect(await assetGroups.isAccountsDepreciationFormDisplayed()).true
        await browser.pause(1000)
        await assetGroups.clickNewAssetSaveBtn()
        await expect(await assetPage.isAssetDescriptionTitleDisplayed()).true
    });
});