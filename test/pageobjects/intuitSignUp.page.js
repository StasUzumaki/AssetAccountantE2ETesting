const page = require('./page')

const title = '[class="ius-header"]'
const signUpBtn = '[data-name="Sign Up"]'
const signUpForm = '#ius-sign-up-wrapper'
const emailField = '#ius-email'
const firstNameField = '#ius-first-name'
const lastNameField = '#ius-last-name'
const phoneField = '#ius-mobile-phone'
const verifyWithTextMessageCheckBox = '#ius-sign-up-label-sms'
const passwordField = '#ius-password'
const confirnPasswordField = '#ius-confirm-password'
const createAccountBtn = '#ius-sign-up-submit-btn'
const notificationMessage = '#ius-signup-notification'
const continueToIntuitBtn = '#ius-sign-up-notification-continue-btn'
const headerGetStartedBtn = '//*[@id="app"]/div[1]/div/div/div[1]/div/div[2]/div[1]/div/div[2]/a'
const confirmationIcon = '[data-testid="confirmation-icon"]'

class IntuitSignUp {
    async clickVerifyWithTextMessageCheckBox(){
        return await page.click(verifyWithTextMessageCheckBox)
    }

    async clickSignUpBtn(){
        return await page.click(signUpBtn)
    }

    async clickCreateAccountBtn(){
        return await page.click(createAccountBtn)
    }

    async clickContinueToIntuitBtn(){
        return await page.click(continueToIntuitBtn)
    }

    async isHeaderGetStartedBtnDisplayed(){
        return await page.isElementDisplayed(headerGetStartedBtn)
    }

    async isConfirmationIconDisplayed(){
        return await page.isElementDisplayed(confirmationIcon)
    }

    async isNotificationMessageDisplayed(){
        return await page.isElementDisplayed(notificationMessage)
    }

    async isSignUpFormDisplayed(){
        return await page.isElementDisplayed(signUpForm)
    }

    async setEmailFieldValue(emailFieldValue){
        return await page.setValue(emailField, emailFieldValue)
    }

    async setFirstNameFieldValue(firstNameFieldValue){
        return await page.setValue(firstNameField, firstNameFieldValue)
    }

    async setLastNameFieldValue(lastNameFieldValue){
        return await page.setValue(lastNameField, lastNameFieldValue)
    }

    async setPhoneFieldValue(phoneFieldValue){
        return await page.setValue(phoneField, phoneFieldValue)
    }

    async setPasswordFieldValue(passwordFieldValue){
        return await page.setValue(passwordField, passwordFieldValue)
    }

    async setConfirnPasswordFieldValue(confirnPasswordFieldValue){
        return await page.setValue(confirnPasswordField, confirnPasswordFieldValue)
    }

}
module.exports = new IntuitSignUp()