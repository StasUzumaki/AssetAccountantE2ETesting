const intuitSignUpPage = require('../test/pageobjects/intuitSignUp.page')
const { expect } = require('chai')
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');
const intuitMainPage = require('../test/pageobjects/intuitMain.page');

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
const existingEmailForIntuit = 'stasdevasset+fundamental118@gmail.com'
const passwIntuit = 'DevAsset_123'

class IntuitAccounts{

    async createAccountIntuit(){
        await intuitSignUpPage.clickSignUpBtn()
        await expect(await intuitSignUpPage.isSignUpFormDisplayed()).true;
        await intuitSignUpPage.setEmailFieldValue(tempGoogleMail)
        await intuitSignUpPage.setFirstNameFieldValue(shortUserName)
        await intuitSignUpPage.setLastNameFieldValue(shortLastName)
        await intuitSignUpPage.setPasswordFieldValue(passwIntuit)
        await browser.pause(2000)
        await intuitSignUpPage.setConfirnPasswordFieldValue(passwIntuit)
        await intuitSignUpPage.clickCreateAccountBtn()
        await expect(await intuitSignUpPage.isNotificationMessageDisplayed()).true
        await intuitSignUpPage.clickContinueToIntuitBtn()
        await expect(await intuitSignUpPage.isHeaderGetStartedBtnDisplayed()).true
    }

    async loginToQuickBooksAccount(){
        await intuitSignUpPage.setSignInEmailFieldValue(tempGoogleMail)
        await intuitSignUpPage.setsignInPasswordFieldValue(passwIntuit)
        await intuitSignUpPage.clickSignInToQuickBooksAccountBtn()
    }

    async logoutFromIntuitAcc(){
        await intuitMainPage.clickIntuitProfileIcon()
        await intuitMainPage.clickIntuitSignOutBtn()
        await expect(await intuitSignUpPage.isSignInBtnDisplayed()).true
    }

    async loginToExistingtIntuitAccount(){
        await intuitSignUpPage.setSignInEmailFieldValue(existingEmailForIntuit)
        await intuitSignUpPage.setsignInPasswordFieldValue(passwIntuit)
        await intuitSignUpPage.clickSignInToQuickBooksAccountBtn()
    }
}

module.exports = new IntuitAccounts()