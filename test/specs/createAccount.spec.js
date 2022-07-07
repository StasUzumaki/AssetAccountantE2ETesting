const authPage = require('../pageobjects/authentication.page')
const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const googleMailPage = require('../pageobjects/googleMail.page')
const baseUrl = require('../../data/baseURL')
const { expect } = require('chai');
const helper = require('../pageobjects/helper');
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator')

const shortUserName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors],
    length: 1
});
const randomOrgName = shortUserName + '_org';


describe('Create account', () => {
    before('land to dev asset page', async () => {
        await helper.platformLink()
    });
    after('logout', async () => {
        await helper.logout()
    });
    it('should create account with valid credentials', async () => {
        await helper.createAssetAccount()
        await expect(await authPage.isEmailVerificationFormDisplayed()).true;
        await authPage.clickOkVerifyBtn()
        await expect(await authPage.isSignInBtnDisplayed()).true;
    });
    it('should verify account by email', async () => {
        await browser.url('https://mail.google.com/')
        await browser.pause(2000)
        await helper.loginToGoogleMailBox()
        await googleMailPage.clickVerifyMessage()
        await expect(await googleMailPage.isVerifyLinkDisplayed()).true;
        await googleMailPage.scrollIntoVerifyLink()
        await googleMailPage.clickVerifyLink()
        await googleMailPage.clickBackBtn()
        await googleMailPage.clickSelectVerifyMessageCheckBox()
        await googleMailPage.clickDeleteVerifyMessageBtn()
        await expect(await googleMailPage.isAlertMessageDisplayed()).true;
        await googleMailPage.clickCloseAlertMessageBtn()
        await browser.pause(2000)
    });
    it('should create organisation after email validation', async () => {
        const handles = await browser.getWindowHandles()
        await browser.closeWindow()
        await browser.switchToWindow(handles[1])
        await expect(await authPage.isOrganizationFieldDisplayed()).true;
        await authPage.setOrganizationNameFieldValue(randomOrgName);
        await browser.pause(1000)
        await authPage.selectCountryDropDownValue(0)
        await authPage.clickCreateOrganizationBtn();
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true;
        await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register');
    });
});


