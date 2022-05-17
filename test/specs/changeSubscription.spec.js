const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const { expect } = require('chai');
const baseUrl = require('../../data/baseURL')
const helper = require('../pageobjects/helper');

describe('create a new register', () => {
    before('land to dev asset page and login', async () => {
        await browser.url(baseUrl.baseUrlLink)
        await helper.loginToAccount()
    });
    after('delete created registers', async () => {
        await helper.logout()
    });
    it('should create a new org', async () => {
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true;
        await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register');
        await helper.createOrganisation()
    });
    it('should create a new register', async () => {
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true;
        await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register');
        await devAssetMainPage.clickCreateFirstRegisterBtn()
        await helper.createRegister()
        await devAssetMainPage.clickAssetsLink()
        await expect(await devAssetMainPage.isCreateAssetGroupTemplateBtnDisplayed()).true;
        await expect(await devAssetMainPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`);
    });
    it('should change subscription plan', async () => {
        await devAssetMainPage.clickOrganisationSettingsLink()
        await devAssetMainPage.clickSubscriptionAndPaymentLink()
        await expect(await devAssetMainPage.isPaymentFormDisplayed()).true
        await devAssetMainPage.clickOrganisationSettingsUpgradeBtn()
        await expect(await devAssetMainPage.isSubscriptionFormDisplayed()).true
        await devAssetMainPage.clickToggleForAccountingFirms()
        await devAssetMainPage.clickStandartChangePlanBtn()
        await expect(await devAssetMainPage.isPaymentMethodFormDisplayed()).true
        await browser.switchToFrame(5)
        await devAssetMainPage.setCardNumberFieldValue('4242 4242 4242 4242')
        await browser.switchToParentFrame()
        await browser.switchToFrame(6)
        await devAssetMainPage.setCardExpiryFieldValue('0324')
        await browser.switchToParentFrame()
        await browser.switchToFrame(7)
        await devAssetMainPage.setCvcFieldValue('777')
        await browser.switchToParentFrame()
        await devAssetMainPage.clickPaymentUpgradeSubBtn()
        await expect(await devAssetMainPage.isCurrentPaymentMethodAlertDisplayed()).true
        await expect(await devAssetMainPage.isCurrentAccountPlanDispalyed()).true
        await expect(await devAssetMainPage.isChangePlanBtnDisplayed()).true
    });
});