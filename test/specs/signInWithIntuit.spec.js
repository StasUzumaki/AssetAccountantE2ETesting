const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const authPage = require('../pageobjects/authentication.page')
const intuitAccounts = require('../../helper/intuitAccounts')
const intuitMainPage = require('../pageobjects/intuitMain.page')
const quickbooksPage = require('../pageobjects/quickbooks.page')
const helper = require('../pageobjects/helper');
const { expect } = require('chai');
const baseUrl = require('../../data/baseURL');
const intuitSignUpPage = require('../pageobjects/intuitSignUp.page');
const googleMailPage = require('../pageobjects/googleMail.page')
const googleMailboxData = require('../../data/googleMailboxData')
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');

const shortLastName = uniqueNamesGenerator({
    dictionaries: [colors],
    length: 1
});
const randomOrgName = shortLastName + '_org';

describe('Sign in with Intuit', () => {
    before('land to intuit page', async () => {
        await browser.url(baseUrl.baseUrlIntuitLink)
    });
    after('logout', async () => {
        await helper.logout()
    });
    it('should have create intuit account', async () => {
        await intuitAccounts.createAccountIntuit()
        await expect(await intuitSignUpPage.isConfirmationIconDisplayed()).true
    });
    it('should have fill Welcome form', async () => {
        await intuitMainPage.clickPrimaryRoleDropDown()
        await intuitMainPage.clickOtherPrimaryRoleValue()
        await intuitMainPage.clickPlanningDropDown()
        await intuitMainPage.clickOtherPlanningValue()
        await intuitMainPage.clickDevExperienceDropDown()
        await intuitMainPage.clickAdvancedExperienceValue()
        await browser.pause(2000)
        await expect(await intuitMainPage.isDoneBtnClickable()).true
        await intuitMainPage.clickDoneBtn()
        await expect(await intuitSignUpPage.isHeaderGetStartedBtnDisplayed()).true

    });
    it('should have logout of intuit account ', async ()=> {
        await browser.url('https://accounts.intuit.com/account-manager.html')
        await intuitAccounts.logoutFromIntuitAcc()
    });
    it('should have land to dev asset accountant page and choose login with Intuit', async ()=> {
        await browser.url(baseUrl.baseUrlLink)
        await authPage.clickSignInBtn()
        await authPage.clickIntuitSignLink() 
    });
    it('should have enter creedntials for intuit login', async ()=> {
        await intuitAccounts.loginToQuickBooksAccount()
        await intuitSignUpPage.clickSkipForNowBtn()
    });
    it('should have authorise for connect the QBO company', async () => {
        await quickbooksPage.clickAuthorizeBtn()
        await intuitMainPage.clickValidationLink()
    });
    it('sholud have sent a confirmation email for intuit account', async () => {
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await expect(await intuitMainPage.isManageYourAccountFormDisplayed()).true
        await intuitMainPage.clickSignInAndSecurityLink()
        await intuitMainPage.clickIntuitValidateEmailLink()
        await intuitMainPage.clickSendVerificationEmailBtn()
    });
    it('should verify intuit account by email', async () => {
        await browser.newWindow('https://mail.google.com/')
        await browser.pause(2000)
        await googleMailPage.setEmailFieldValue(googleMailboxData.userEmail)
        await googleMailPage.clickNextBtn()
        await googleMailPage.setPasswordFieldValue(googleMailboxData.userPassword)
        await googleMailPage.clickNextBtn()
        await googleMailPage.clickVerifyMessage()
        await googleMailPage.clickVerifyEmailIntuitLink()
        await googleMailPage.clickBackBtn()
        await expect(await googleMailPage.isSelectVerifyMessageCheckBoxClickable()).true
        await googleMailPage.clickSelectVerifyMessageCheckBox()
        await googleMailPage.clickDeleteVerifyMessageBtn()
        await browser.pause(2000)
        await expect(await googleMailPage.isAlertMessageDisplayed()).true;
        await googleMailPage.clickCloseAlertMessageBtn()
        await browser.closeWindow() 
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[2])
        await expect(await intuitMainPage.isIntuitEmailConfirmationFormDisplayed()).true
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
    });
    it('should connect to AA and create new organisation', async () => {
        await devAssetMainPage.clickTryAgainBtn()
        await expect(await authPage.isOrganizationFieldDisplayed()).true;
        await authPage.setOrganizationNameFieldValue(randomOrgName);
        await authPage.clickCreateOrganizationBtn();
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true;
        await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register');
    }); 
    it('should sign out from QuickBooks account', async () => {
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await intuitAccounts.logoutFromIntuitAcc()
        await browser.switchToWindow(handles[0])
    }); 
});