const authPage = require('../pageobjects/authentication.page')
const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const googleMailPage = require('../pageobjects/googleMail.page')
const googleMailboxData = require('../../data/googleMailboxData')
const baseUrl = require('../../data/baseURL')
const assert = require('assert');
const { expect } = require('chai');
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');
require('dotenv').config();
const fs = require("fs")
const MailSlurp = require('mailslurp-client').default;

const apiKey = process.env.API_KEY;
const mailslurp = new MailSlurp({ apiKey });

const mainEmail = 'stasdevasset'
const shortUserName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors],
    length: 1
});
const shortLastName = uniqueNamesGenerator({
    dictionaries: [colors],
    length: 1
});
const tempGoogleMail = mainEmail + "+" + shortUserName + "@gmail.com";

describe('Create account', () => {
    it('should create account with valid credentials', async () => {
        //const inbox = await mailslurp.inboxController.createInbox({});
        //expect(inbox.emailAddress).contain('@mailslurp');
        await browser.url(baseUrl.baseUrlLink)
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
        /*const latestEmail = await mailslurp.waitForLatestEmail(inbox.id, 20000);
        expect(latestEmail.subject).contain('Welcome to AssetAccountant');
        console.log(latestEmail.body);
        const regexpResult = latestEmail.body.match(/href="(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})[^"]/)[1];
        const VerifyUrl = regexpResult.slice(0, -1);
        console.log(VerifyUrl)
        const clearVerifyUrl = encodeURI(VerifyUrl);
        console.log("clearUrl", clearVerifyUrl)
        await browser.url(clearVerifyUrl)*/
        await browser.url('https://mail.google.com/')
        await googleMailPage.setEmailFieldValue(googleMailboxData.userEmail)
        await googleMailPage.clickNextBtn()
        await googleMailPage.setPasswordFieldValue(googleMailboxData.userPassword)
        await googleMailPage.clickNextBtn()
        await googleMailPage.clickVerifyMessage()
        await expect(await googleMailPage.isVerifyLinkDisplayed()).true;
        await googleMailPage.clickVerifyLink()
        await browser.url('https://dev.asset.accountant/create-organisation')
        await browser.switchWindow('https://dev.asset.accountant/create-organisation')
        await expect(await authPage.isOrganizationFieldDisplayed()).true;
        await authPage.setOrganizationNameFieldValue('OrganizationTestName');
        await authPage.clickCreateOrganizationBtn();
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true;
        await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register');
    });

    const credentialsData = {
        Email: tempGoogleMail,
        UserName: shortUserName,
        UserLastName: shortLastName,

    };
    let data = JSON.stringify(credentialsData, null, 2);
    fs.appendFile('credentials.json', data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
});


