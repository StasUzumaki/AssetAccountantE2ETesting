const authPage = require('../pageobjects/authentication.page')
const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const googleMailPage = require('../pageobjects/googleMail.page')
const googleMailboxData = require('../../data/googleMailboxData')
const baseUrl = require('../../data/baseURL')
const { expect } = require('chai');
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');
const helper = require('../pageobjects/helper');
//const fs = require("fs")

const mainEmail = 'stasdevasset'
const shortUserName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors],
    length: 1
});
const shortLastName = uniqueNamesGenerator({
    dictionaries: [colors],
    length: 1
});
const randomOrgName = shortUserName + '_org';
const randomCodeNumber = Math.floor(Math.random() * 100);
const tempGoogleMail = mainEmail + "+" + shortUserName + randomCodeNumber + "@gmail.com";

describe('Create account', () => {
    before('land to dev asset page', async () => {
        await browser.url(baseUrl.baseUrlLink)
    });
    after('logout', async () => {
        await helper.logout()
    });
    it('should create account with valid credentials', async () => {
        await authPage.clickCreateAccountBtn();
        await authPage.setFisrtNameValue(shortUserName)
        await authPage.setLastNameValue(shortLastName)
        await authPage.setEmailValue(tempGoogleMail)
        await authPage.setPhoneNumberValue('7777777777')
        await authPage.setPasswordCreateAccValue('devAssetTest')
        await authPage.setPasswordCreateAccConfirmValue('devAssetTest')
        await authPage.clickRegisterBtn()
        await expect(await authPage.isEmailVerificationFormDisplayed()).true;
        await authPage.clickOkVerifyBtn()
        await expect(await authPage.isSignInBtnDisplayed()).true;
    });
    it('should verify account by email', async () => {
        await browser.url('https://mail.google.com/')
        await browser.pause(2000)
        await googleMailPage.setEmailFieldValue(googleMailboxData.userEmail)
        await googleMailPage.clickNextBtn()
        await googleMailPage.setPasswordFieldValue(googleMailboxData.userPassword)
        await googleMailPage.clickNextBtn()
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
        await authPage.clickCreateOrganizationBtn();
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true;
        await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register');
    });
});
    // const credentialsData = {
    //     Email: tempGoogleMail,
    //     UserName: shortUserName,
    //     UserLastName: shortLastName,

    // };
    // let data = JSON.stringify(credentialsData, null, 2);
    // fs.appendFile('credentials.json', data, (err) => {
    //     if (err) throw err;
    //     console.log('Data written to file');
    // });


