const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const intuitAccounts = require('../../helper/intuitAccounts')
const intuitMainPage = require('../pageobjects/intuitMain.page')
const quickbooksPage = require('../pageobjects/quickbooks.page')
const helper = require('../pageobjects/helper');
const { expect } = require('chai');
const baseUrl = require('../../data/baseURL');
const intuitSignUpPage = require('../pageobjects/intuitSignUp.page');
const googleMailPage = require('../pageobjects/googleMail.page')
const googleMailboxData = require('../../data/googleMailboxData')

const urlForConnectsTheQboCompany = 'https://dev.asset.accountant/quickbooks/connect?provider=Intuit&realmId='

describe('Create an AA account from QBO / connect to QBO from AA', () => {
    before('land to intuit page', async () => {
        await browser.url(baseUrl.baseUrlIntuitLink)
    });
    after('logout', async () => {
        await helper.logout()
        //deleting all mails
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[2])
        await googleMailPage.clickBackBtn()
        await googleMailPage.clickSelectVerifyMessageCheckBox()
        await googleMailPage.clickDeleteVerifyMessageBtn()
        await expect(await googleMailPage.isAlertMessageDisplayed()).true;
        await googleMailPage.clickCloseAlertMessageBtn()
        await browser.closeWindow() 
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
        await intuitMainPage.clickDoneBtn()
        await expect(await intuitSignUpPage.isHeaderGetStartedBtnDisplayed()).true
    });
    it('should add a sandbox company for Australia', async () => {
        await intuitMainPage.clickApiDocsAndToolsLink()
        await intuitMainPage.clickSandboxLink()
        await intuitMainPage.clickAddSandboxBtn()
        await intuitMainPage.clickCountryDropDown()
        await intuitMainPage.clickAustraliaCountryValue()
        await intuitMainPage.clickAddBtn()
    });
    it('should follow the URL for connect the QBO company', async () => {
        const sandboxCompId = await intuitMainPage.getSandboxCompanyIdText()
        const clearSandboxCompId = await sandboxCompId.slice(12)
        const clearUrlForQboCompany = await urlForConnectsTheQboCompany + clearSandboxCompId
        await browser.url(clearUrlForQboCompany)
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
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[3])
        await expect(await intuitMainPage.isIntuitEmailConfirmationFormDisplayed()).true
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
    });
    it('should connect to AA and create new organisation', async () => {
        await devAssetMainPage.clickTryAgainBtn()
        await quickbooksPage.clickSearchForCompanyDropDown()
        await quickbooksPage.clickAuSandboxCompany()
        await quickbooksPage.clickNextBtn()
        await expect(await quickbooksPage.isAuthorizeConnectFormDisplayed()).true
        await quickbooksPage.clickConnectBtn()
        await expect(await devAssetMainPage.isNewOrganisationSelectDisplayed()).true
        await devAssetMainPage.clickQuickbooksConnectBtn()
        await expect(await devAssetMainPage.isQuickbooksAlertMessageDisplayed()).true
        await expect(await devAssetMainPage.getQuickbooksAlertMessageText()).contain('(Sandbox Company_AU_2)')
    }); 
    it('should disconnect from QuickBooks', async () => {
        await devAssetMainPage.clickQuickbooksDisconnectBtn()
        await expect(await devAssetMainPage.isDisconnectConfirmationFormDisplayed()).true
        await devAssetMainPage.clickDisconnectConfirmationBtn()
        await expect(await devAssetMainPage.isExternalIntegrationFormDisplayed()).true
    });
    it('should sign out from QuickBooks account', async () => {
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await intuitAccounts.logoutFromIntuitAcc()
        await browser.switchToWindow(handles[0])
    }); 
    it('should connect and sign in to QuickBooks account', async () => {
        await devAssetMainPage.clickQuickbooksOnlineDropDown()
        await devAssetMainPage.clickConnectToQuickBooksBtn()
        await intuitAccounts.loginToQuickBooksAccount()
        await intuitSignUpPage.clickSkipForNowBtn()
    }); 
    it('should add AU company and connect QuickBooks to AA', async () => {
        await quickbooksPage.clickSearchForCompanyDropDown()
        await quickbooksPage.clickAuSandboxCompany()
        await quickbooksPage.clickNextBtn()
        await expect(await quickbooksPage.isAuthorizeConnectFormDisplayed()).true
        await quickbooksPage.clickConnectBtn()
        await expect(await devAssetMainPage.isQuickbooksAlertMessageDisplayed()).true
        await expect(await devAssetMainPage.getQuickbooksAlertMessageText()).contain('(Sandbox Company_AU_2)')
    });
    it('should disconnect from QuickBooks again', async () => {
        await devAssetMainPage.clickQuickbooksDisconnectBtn()
        await expect(await devAssetMainPage.isDisconnectConfirmationFormDisplayed()).true
        await devAssetMainPage.clickDisconnectConfirmationBtn()
        await expect(await devAssetMainPage.isExternalIntegrationFormDisplayed()).true
    });
});