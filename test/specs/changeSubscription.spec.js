const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const { expect } = require('chai');
const baseUrl = require('../../data/baseURL')
const helper = require('../pageobjects/helper');
const organisationSettingsPage = require('../pageobjects/organisationSettings.page');
const assetsPage = require('../pageobjects/assets.page');
const subscriptionAndPaymentPage = require('../pageobjects/subscriptionAndPayment.page');
const organisationSettingsUsersPage = require('../pageobjects/organisationSettingsUsers.page');

describe('create a new register', () => {
    before('land to dev asset page and login', async () => {
        await browser.url(baseUrl.baseUrlLink)
        await helper.loginToAccount()
    });
    after('delete created registers', async () => {
        await helper.logout()
    });
    it('should create a new org', async () => {
        await expect(await devAssetMainPage.isCreateFirstRegisterBtnDisplayed()).true;
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true;
        await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register');
        await helper.createOrganisation()
    });
    it('should create a new register', async () => {
        await expect(await devAssetMainPage.isCreateFirstRegisterBtnDisplayed()).true;
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true;
        await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register');
        await devAssetMainPage.clickCreateFirstRegisterBtn()
        await helper.createRegister()
        await devAssetMainPage.clickAssetsLink()
        await expect(await assetsPage.isCreateAssetGroupTemplateBtnDisplayed()).true;
        await expect(await assetsPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`);
    });
    it('should change subscription plan', async () => {
        await devAssetMainPage.clickOrganisationSettingsLink()
        await organisationSettingsUsersPage.clickSubscriptionAndPaymentLink()
        await expect(await subscriptionAndPaymentPage.isPaymentFormDisplayed()).true
        await subscriptionAndPaymentPage.clickOrganisationSettingsUpgradeBtn()
        await expect(await subscriptionAndPaymentPage.isSubscriptionFormDisplayed()).true
        await subscriptionAndPaymentPage.clickToggleForAccountingFirms()
        await subscriptionAndPaymentPage.clickStandartChangePlanBtn()
        await expect(await subscriptionAndPaymentPage.isPaymentMethodFormDisplayed()).true
        await browser.switchToFrame(5)
        await subscriptionAndPaymentPage.setCardNumberFieldValue('4242 4242 4242 4242')
        await browser.switchToParentFrame()
        await browser.switchToFrame(6)
        await subscriptionAndPaymentPage.setCardExpiryFieldValue('0324')
        await browser.switchToParentFrame()
        await browser.switchToFrame(7)
        await subscriptionAndPaymentPage.setCvcFieldValue('777')
        await browser.switchToParentFrame()
        await subscriptionAndPaymentPage.clickPaymentUpgradeSubBtn()
        await expect(await subscriptionAndPaymentPage.isCurrentPaymentMethodAlertDisplayed()).true
        await expect(await subscriptionAndPaymentPage.isCurrentAccountPlanDispalyed()).true
        await expect(await subscriptionAndPaymentPage.isChangePlanBtnDisplayed()).true
    });
});