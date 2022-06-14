const authPage = require('../pageobjects/authentication.page')
const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const { expect } = require('chai');
const baseUrl = require('../../data/baseURL')
const helper = require('../pageobjects/helper');
const xeroSignUpPage = require('../pageobjects/xeroSignUp.page');
const xeroAccounts = require('../../helper/xeroAccounts');
const xeroMainPage = require('../pageobjects/xeroMain.page');
const xeroLogInPage = require('../pageobjects/xeroLogIn.page');
const googleMailPage = require('../pageobjects/googleMail.page')
const googleMailboxData = require('../../data/googleMailboxData')

const xeroPass = 'XeroPassword123'

describe('Create an account from Xero', () => {
    before('land to dev xero page and create account', async () => {
        await browser.url(baseUrl.baseUrlXeroLink)
    });
    after('logout from AA account', async () => {
        await browser.switchWindow('dev.asset.accountant')
        await helper.logout()
    });
    ////create acc on xero
    it('should have create Xero account', async () => {
        await xeroSignUpPage.clickXeroMainPageSignUpBtn()
        await browser.closeWindow()
        await browser.switchWindow('Sign up for free trial | Xero')
        await xeroAccounts.createAccountXero()
    });
    it('should verify Xero account by email', async () => {
        await browser.newWindow('https://mail.google.com/')
        await browser.pause(15000)
        await googleMailPage.setEmailFieldValue(googleMailboxData.userEmail)
        await googleMailPage.clickNextBtn()
        await googleMailPage.setPasswordFieldValue(googleMailboxData.userPassword)
        await googleMailPage.clickNextBtn()
        await googleMailPage.clickXeroConfirmMail()
        await googleMailPage.clickXeroVerifyLink()
        await googleMailPage.clickBackBtn()
        await expect(await googleMailPage.isSelectVerifyMessageCheckBoxClickable()).true
        await browser.pause(1000)
        await googleMailPage.clickSelectVerifyMessageCheckBox()
        await googleMailPage.clickDeleteVerifyMessageBtn()
        await browser.pause(2000)
        await expect(await googleMailPage.isAlertMessageDisplayed()).true;
        await googleMailPage.clickCloseAlertMessageBtn()
        await browser.closeWindow()
    });
    it('should have activate Xero account', async () => {
        await browser.switchWindow('Activate Account | Xero Accounting')
        await xeroSignUpPage.setPasswordValue(xeroPass)
        await xeroSignUpPage.selectLocationDropDownValue()
        await xeroSignUpPage.clickSubmitBtn()
        await expect(await xeroSignUpPage.isAddYourBusinessFormDisplayed()).true
    });
    it('should have fill out business form', async () => {
        await xeroAccounts.filloutBusinessForm('DevAssetAcc', 'Financial Asset Broking Services')
        await expect(await xeroMainPage.isWelcomeBannerImgDisplayed()).true
        await expect(await xeroMainPage.getWelcomeBannerText()).contain('Hi, let’s get set up')
    });
    it('should land to dev account link and allow access to AA ', async () => {
        await browser.newWindow('https://dev.asset.accountant/xero/launch?tenantId=f84af28e-a8c0-4321-b33a-8b07cf40ea4a')
        await expect(await xeroLogInPage.isAssetAccountantDevAccessFormDisplayed()).true
        await xeroLogInPage.clickAllowAccessBtn()
        await expect(await xeroLogInPage.isOrganisationDataFormDisplayed()).true
        await xeroLogInPage.clickApproveBtn()
    });
    it('should choose Tenant and `create new` organisation', async () => {
        await expect(await devAssetMainPage.isSetUptoUseFormDisplayed()).true
        await devAssetMainPage.clickSetUpToUseConnectBtn()
    });
    it('should have validate that we are connected with Xero', async () => {
        await expect(await devAssetMainPage.isXeroAlertMessageDisplayed()).true
        await expect(await devAssetMainPage.getXeroAlertMessageText()).contain('You are connected to Xero')
    });
    it('should disconnect from from Xero', async () => {
        await devAssetMainPage.clickXeroDisconnectBtn()
        await expect(await devAssetMainPage.isDisconnectConfirmationFormDisplayed()).true
        await devAssetMainPage.clickDisconnectConfirmationBtn() 
        await expect(await devAssetMainPage.isExternalIntegrationFormDisplayed()).true
    }); 
    it('should log out from Xero account', async () => {
        await browser.switchWindow('go.xero.com')
        await xeroAccounts.logoutXeroAccout()
        await expect(await xeroLogInPage.isLogInBtnDisplayed()).true
    }); 
});