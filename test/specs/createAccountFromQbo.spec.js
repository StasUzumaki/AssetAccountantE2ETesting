const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const intuitAccounts = require('../../helper/intuitAccounts')
const intuitMainPage = require('../pageobjects/intuitMain.page')
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
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[2])
        await googleMailPage.clickBackBtn()
        await googleMailPage.clickSelectVerifyMessageCheckBox()
        await googleMailPage.clickDeleteVerifyMessageBtn()
        await expect(await googleMailPage.isAlertMessageDisplayed()).true;
        await googleMailPage.clickCloseAlertMessageBtn()
    });
    it('should have create intuit account', async () => {
        await intuitAccounts.createAccountIntuit()
        await expect(await intuitSignUpPage.isConfirmationIconDisplayed()).true
        //mb they block my ip
    });
    it('should have fill Welcome form', async () => {
        await intuitMainPage.clickPrimaryRoleDropDown()
        await intuitMainPage.clickOtherPrimaryRoleValue()
        await intuitMainPage.clickPlanningDropDown()
        await intuitMainPage.clickOtherPlanningValue()
        await intuitMainPage.clickDevExperienceDropDown()
        await intuitMainPage.clickAdvancedExperienceValue()
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
        //console.log("TEXT!!!!!!!!!!!!!!!!! :" + clearSandboxCompId)
        const clearUrlForQboCompany = await urlForConnectsTheQboCompany + clearSandboxCompId
        await browser.url(clearUrlForQboCompany)
        await intuitMainPage.clickAuthorizeBtn()
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


});