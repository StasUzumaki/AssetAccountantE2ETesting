const authPage = require('../pageobjects/authentication.page')
const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const assert = require('assert');
const { expect } = require('chai');
const loginData = require('../../data/loginData')
const baseUrl = require('../../data/baseURL')
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');

const randomName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors],
    length: 2
});
const randomOrgName = randomName + "_org";

describe('create organisation', () => {
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
    after('delete created register', async () => {
        await devAssetMainPage.clickUserProfileLink()
        await devAssetMainPage.clickLogoutProfileBtn()
        await expect(await authPage.isSignInBtnDisplayed()).true;
    });
    it('should create a new organisation', async () => {
        await devAssetMainPage.clickCreateOrganisationSelectionDropDown()
        await devAssetMainPage.clickCreateNewOrganisationLink()
        await expect(await devAssetMainPage.isCreateNewOrganisationFormDisplayed()).true;
        await devAssetMainPage.setOrganisationNameField(randomOrgName)
        await devAssetMainPage.setOrganisationDescriptionField('testDescription')
        await devAssetMainPage.setBillingContactNameField(randomOrgName)
        await devAssetMainPage.setBillingContactEmailField(loginData.userEmail)
        await devAssetMainPage.setBillingContactPhoneField('8888888888')
        await devAssetMainPage.clickNewOrganisationSaveBtn()
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true;
        await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register');
    });
});


