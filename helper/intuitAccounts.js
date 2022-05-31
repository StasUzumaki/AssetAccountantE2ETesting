const intuitSignUpPage = require('../test/pageobjects/intuitSignUp.page')

const { expect } = require('chai')
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator')

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
const passwIntuit = 'DevAsset_123'
const phoneIntuit = '9999999999'

class IntuitAccounts{

    async createAccountIntuit(){
        await intuitSignUpPage.clickSignUpBtn()
        await expect(await intuitSignUpPage.isSignUpFormDisplayed()).true;
        await intuitSignUpPage.setEmailFieldValue(tempGoogleMail)
        await intuitSignUpPage.setFirstNameFieldValue(shortUserName)
        await intuitSignUpPage.setLastNameFieldValue(shortLastName)
        await intuitSignUpPage.setPhoneFieldValue(phoneIntuit)
        await intuitSignUpPage.clickVerifyWithTextMessageCheckBox()
        await intuitSignUpPage.setPasswordFieldValue(passwIntuit)
        await intuitSignUpPage.setConfirnPasswordFieldValue(passwIntuit)
        await intuitSignUpPage.clickCreateAccountBtn()
        await expect(await intuitSignUpPage.isNotificationMessageDisplayed()).true
        await intuitSignUpPage.clickContinueToIntuitBtn()
        await expect(await intuitSignUpPage.isHeaderGetStartedBtnDisplayed()).true
    }
}

module.exports = new IntuitAccounts()