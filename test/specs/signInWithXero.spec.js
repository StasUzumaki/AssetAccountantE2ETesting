const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const authPage = require('../pageobjects/authentication.page')
const helper = require('../pageobjects/helper');
const xeroSignUpPage = require('../pageobjects/xeroSignUp.page');
const xeroAccounts = require('../../helper/xeroAccounts');
const xeroMainPage = require('../pageobjects/xeroMain.page');
const xeroLogInPage = require('../pageobjects/xeroLogIn.page');
const { expect } = require('chai');
const baseUrl = require('../../data/baseURL');
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');
require('dotenv').config();
const MailSlurp = require('mailslurp-client').default;

const apiKey = process.env.API_MAILSLURP;
const mailslurp = new MailSlurp({ apiKey });

const shortLastName = uniqueNamesGenerator({
    dictionaries: [colors],
    length: 1
});
const shortUserName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors],
    length: 1
});
const randomOrgName = shortLastName + '_org';
const xeroPass = 'XeroPassword123'
const phoneXero = Math.random().toString().slice(2, 12)

describe('Sign in with Xero', () => {
    before('land to Xero developer page', async () => {
        await browser.url(baseUrl.baseUrlXeroLink)
    });
    after('logout', async () => {
        await browser.switchWindow('dev.asset.accountant')
        await helper.logout()
    });
    it('should have create and login to Xero account', async () => {
        const inbox = await mailslurp.inboxController.createInbox({});
        expect(inbox.emailAddress).contain('@mailslurp');
        await xeroSignUpPage.clickXeroMainPageSignUpBtn()
        await browser.closeWindow()
        await browser.switchWindow('Sign up for free trial | Xero')
        //
        await xeroSignUpPage.setFirstNameValue(shortUserName)
        await xeroSignUpPage.setLastNameValue(shortLastName)
        await xeroSignUpPage.setEmailValue(inbox.emailAddress)
        await xeroSignUpPage.setPhoneValue(phoneXero)
        await browser.switchToFrame(0)
        $('//*[@id="recaptcha-anchor"]').moveTo({ 30: 60 })
        await browser.pause(2000)
        await xeroSignUpPage.clickXeroSignUpCaptcha()
        await browser.pause(15000)
        await browser.switchToParentFrame()
        await xeroSignUpPage.clickPrivacyCheckBox()
        await xeroSignUpPage.clickNextConfirmationBtn()
        await expect(await xeroSignUpPage.isConfirmYourEmailMessageDisplayed()).true
        await expect(await xeroSignUpPage.isConfirmYourEmailTitleDisplayed()).true
        await expect(await xeroSignUpPage.getConfirmYourEmailTitleText()).contain(`Hi ${shortUserName}! Confirm your email and start using Xero.`)
        //
        const latestEmail = await mailslurp.waitForLatestEmail(inbox.id, 30000);
        expect(latestEmail.subject).contain('Confirm your email address');
        console.log(latestEmail.body);
        const regexpResult = latestEmail.body.match(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}).*\">Yes/)[0];
        const VerifyUrl = regexpResult.slice(0, -5);
        console.log("VerifyUrl:", VerifyUrl)
        await browser.url(VerifyUrl)
        //activate Xero account
        await xeroSignUpPage.setPasswordValue(xeroPass)
        await xeroSignUpPage.selectLocationDropDownValue()
        await xeroSignUpPage.clickSubmitBtn()
        await expect(await xeroSignUpPage.isAddYourBusinessFormDisplayed()).true
        //fill out business form
        await xeroAccounts.filloutBusinessForm('DevAssetAcc', 'Financial Asset Broking Services')
        //login to Xero acc
        await xeroLogInPage.setEmailLogInValue(inbox.emailAddress)
        await xeroLogInPage.setPasswordLogInValue(xeroPass)
        await xeroLogInPage.clickLogInBtn()
        await expect(await xeroLogInPage.isSecondLayerOfSecurityDisplayed()).true
        await expect(await xeroLogInPage.getSecondLayerOfSecurityText()).contain('Add a second layer of security')
        await xeroLogInPage.clickNotNowBtn()
        await expect(await xeroMainPage.isWelcomeBannerImgDisplayed()).true
        await expect(await xeroMainPage.getWelcomeBannerText()).contain('Hi, let’s get set up')
    });
    it('should have land to dev asset accountant page and choose login with Xero', async () => {
        await browser.newWindow(baseUrl.baseUrlLink)
        await authPage.clickSignInBtn()
        await authPage.clickXeroSignInLink()
        await expect(await xeroLogInPage.isAssetAccountantDevAccessFormDisplayed()).true
    });
    it('should allow access to AA', async () => {
        await xeroLogInPage.clickAllowAccessBtn()
        await expect(await authPage.isOrganizationFieldDisplayed()).true;
        await authPage.setOrganizationNameFieldValue(randomOrgName);
        await browser.pause(2000)
        await authPage.selectCountryDropDownValue(0)
        await authPage.clickCreateOrganizationBtn();
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true;
        await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register');
    });
    it('should connect to Xero and verify that', async () => {
        await devAssetMainPage.clickRegisterSettingsLink()
        await devAssetMainPage.clickIntegrationsLink()
        await devAssetMainPage.clickXeroDropDown()
        await devAssetMainPage.clickConnectToXeroBtn()
        await expect(await xeroLogInPage.isOrganisationDataFormDisplayed()).true
        await xeroLogInPage.clickApproveBtn()
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