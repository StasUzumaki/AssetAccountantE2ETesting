const authPage = require('../pageobjects/authentication.page')
const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const assert = require('assert');
const { expect } = require('chai');
const loginData = require('../../data/loginData')
const baseUrl = require('../../data/baseURL')
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');

const shortUserName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors],
    length: 1
});

const registerNameSettings = shortUserName + '_TestRegister'
const randomOrgName = shortUserName + "_org";

describe('create a new register', () => {
    before('land to dev asset page and login', async () => {
        await browser.url(baseUrl.baseUrlLink)
        await authPage.clickSignInBtn();
        await authPage.isUserNameLoginFieldDisplayed();
        await authPage.setUserNameValue(loginData.userEmail);
        await authPage.clickNextBtn();
        await authPage.isPasswordLoginFieldDisplayed();
        await authPage.setPasswordSignInValue(loginData.userPassw);
        await authPage.clickSignInSubmitBtn();
    });
    after('delete created registers', async () => {
        await devAssetMainPage.clickUserProfileLink()
        await devAssetMainPage.clickLogoutProfileBtn()
        await expect(await authPage.isSignInBtnDisplayed()).true;
    });
    it('should create a new org', async () => {
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true;
        await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register');
        await devAssetMainPage.clickCreateOrganisationSelectionDropDown()
        await devAssetMainPage.clickCreateNewOrganisationLink()
        await expect(await devAssetMainPage.isCreateNewOrganisationFormDisplayed()).true;
        await devAssetMainPage.setOrganisationNameField(randomOrgName)
        await devAssetMainPage.setOrganisationDescriptionField('testDescription')
        await devAssetMainPage.setBillingContactNameField(randomOrgName)
        await devAssetMainPage.setBillingContactEmailField(loginData.userEmail)
        await devAssetMainPage.setBillingContactPhoneField('8888888888')
        await devAssetMainPage.clickNewOrganisationSaveBtn()
        await expect(await devAssetMainPage.isSettingsHeaderDisplayed()).true;
        await expect(await devAssetMainPage.getSettingsHeaderText()).contain(`${randomOrgName}`);
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true;
        await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register');
    });
    it('should create a new register', async () => {
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true;
        await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register');
        await devAssetMainPage.clickCreateFirstRegisterBtn()
        await expect(await devAssetMainPage.isCreateNewRegisterFormDisplayed()).true;
        await expect(await devAssetMainPage.isRegisterNameFieldDisplayed()).true;
        await devAssetMainPage.setRegisterNameValue(registerNameSettings)
        await expect(await devAssetMainPage.isEntityNameFieldDisplayed()).true;
        await devAssetMainPage.setRegisterEntityValue('testRegisterEntity')
        await devAssetMainPage.clickNextRegisterBtn()
        await devAssetMainPage.clickTryForFreeBtn()
        await expect(await devAssetMainPage.isSettingsHeaderDisplayed()).true;
        await expect(await devAssetMainPage.getSettingsHeaderText()).contain(`${registerNameSettings} › Settings`);
        await expect(await devAssetMainPage.isRegisterNameFieldDisplayed()).true;
        await expect(await devAssetMainPage.isEntityNameFieldDisplayed()).true;
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