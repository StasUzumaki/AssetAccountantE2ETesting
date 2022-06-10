const xeroSignUp = require('../test/pageobjects/xeroSignUp.page')
const { expect } = require('chai')
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');
const xeroMainPage = require('../test/pageobjects/xeroMain.page');
const xeroLogInPage = require('../test/pageobjects/xeroLogIn.page');

const randomCodeNumber = Math.floor(Math.random() * 1000);
const mainEmail = 'stasdevasset'
const shortUserName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors],
    length: 1
});
const shortLastName = uniqueNamesGenerator({
    dictionaries: [colors],
    length: 1
});
const tempGoogleMail = mainEmail + "+" + shortUserName + randomCodeNumber + "@gmail.com";
const xeroMail = 'stasdevasset+loud508@gmail.com'
const xeroPass = 'XeroPassword123'
const phoneXero = Math.random().toString().slice(2, 12)

class XeroAccounts {
    async createAccountXero() {
        await xeroSignUp.setFirstNameValue(shortUserName)
        await xeroSignUp.setLastNameValue(shortLastName)
        await xeroSignUp.setEmailValue(tempGoogleMail)
        await xeroSignUp.setPhoneValue(phoneXero)
        //await xeroSignUp.selectLocationDropDownValue()
        await browser.switchToFrame(0)
        $('//*[@id="recaptcha-anchor"]').moveTo({30:60})
        await browser.pause(2000)
        await xeroSignUp.clickXeroSignUpCaptcha()
        await browser.pause(15000)
        await browser.switchToParentFrame()
        await xeroSignUp.clickPrivacyCheckBox()
        //await xeroSignUp.clickMarketingCommunicationsCheckBox()
        await xeroSignUp.clickNextConfirmationBtn()
        await expect(await xeroSignUp.isConfirmYourEmailMessageDisplayed()).true
        await expect(await xeroSignUp.isConfirmYourEmailTitleDisplayed()).true
        await expect(await xeroSignUp.getConfirmYourEmailTitleText()).contain(`Hi ${shortUserName}! Confirm your email and start using Xero.`)
    }

    async filloutBusinessForm(businessName, industryName){
        await xeroSignUp.setBusinessNameValue(businessName)
        await xeroSignUp.clickNoEmployeesCheckBox()
        await xeroSignUp.setIndustryValue(industryName)
        await xeroSignUp.clickFinancialAssetItem()
        await browser.pause(1000)
        await xeroSignUp.clickStartTrialBtn()
    }

    async logoutXeroAccout(){
        await xeroMainPage.clickProfileMenuBtn()
        await xeroMainPage.clickLogoutBtn()
    }
    async logInToXeroAccout(){
        await xeroLogInPage.setEmailLogInValue(tempGoogleMail)
        await xeroLogInPage.setPasswordLogInValue(xeroPass)
        await xeroLogInPage.clickLogInBtn()
    }

    async logInToExistingXeroAcc(){
        await xeroLogInPage.setEmailLogInValue(xeroMail)
        await xeroLogInPage.setPasswordLogInValue(xeroPass)
        await xeroLogInPage.clickLogInBtn()
    }
}
module.exports = new XeroAccounts()