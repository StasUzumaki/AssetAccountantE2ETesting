const Page = require('./page')

const emailMailsacField = '[class*="myinbox form-control"]'
const checkTheEmailBtn = '[class="btn btn-primary"]'
const createAccBtn = '[class*=" Login-create"]';
const signInBtn = '[class*=" Login-heading"]';
const userName = '#Username';
const nextBtn = '[class*=" Login-submit"]';
const passwordSignIn = '#Password';
const signInSubmitBtn = '[class*=" Login-submit"]';
const firstNameCreate = '#FirstName' 
const lastNameCreate = '#LastName'
const email = '#Email';
const PhoneNumb = '#PhoneNumber';
const PasswordCreateAcc = '#Password';
const PasswordConfirm = '#ConfirmPassword';
const registerBtn = '[class="btn btn-lg btn-primary"]';
const okVerifyBtn = '[class=" mt-3"]'
const EmailVerificationForm = '[class="card-body"]'
const organizationNameField = '[class*="form-control"]'
const createOrganizationBtn = '[class*="btn-primary"]'
const validationAlertMessage = '[class*="alert-message validation"]'

class AuthPage {

    async setUserNameValue(userNameInput){
        return await Page.setValue(userName, userNameInput)
    }

    async clickNextBtn(){
        return await Page.click(nextBtn)
    }

    async setPasswordSignInValue(passowrdSignInInput){
        return await Page.setValue(passwordSignIn, passowrdSignInInput)
    }

    async clickSignInSubmitBtn(){
        return await Page.click(signInSubmitBtn)
    }

    async clickCreateAccountBtn(){
        return await Page.click(createAccBtn)
    }

    async clickOkVerifyBtn(){
        return await Page.click(okVerifyBtn)
    }

    async clickCheckTheEmailBtn(){
        return await Page.click(checkTheEmailBtn)
    }
    
    async setEmailMailsacFieldValue(emailMailsacFieldInput){
        return await Page.setValue(emailMailsacField, emailMailsacFieldInput)
    }

    async setFisrtNameValue(firstNameInput) {
        return await Page.setValue(firstNameCreate, firstNameInput)
    }

    async setLastNameValue(lastNameInput){
        return await Page.setValue(lastNameCreate, lastNameInput)
    }

    async setEmailValue(emailInput){
        return await Page.setValue(email, emailInput)
    }

    async setPhoneNumberValue(PhoneInput){
        return await Page.setValue(PhoneNumb, PhoneInput)
    }

    async setPasswordCreateAccValue(PasswordCreateAccInput){
        return await Page.setValue(PasswordCreateAcc, PasswordCreateAccInput)
    }

    async setPasswordCreateAccConfirmValue(PasswordCreateAccConfirmInput){
        return await Page.setValue(PasswordConfirm, PasswordCreateAccConfirmInput)
    }

    async clickRegisterBtn(){
        return await Page.click(registerBtn)
    }

    async clickSignInBtn(){
        return await Page.click(signInBtn)
    }

    async isEmailVerificationFormDisplayed(){
        return await Page.isElementDisplayed(EmailVerificationForm)
    }

    async isUserNameLoginFieldDisplayed(){
        return await Page.isElementDisplayed(userName)
    }

    async isPasswordLoginFieldDisplayed(){
        return await Page.isElementDisplayed(passwordSignIn)
    }

    async isOrganizationFieldDisplayed(){
        return await Page.isElementDisplayed(organizationNameField)
    }

    async setOrganizationNameFieldValue(organizationNameFieldInput){
        return await Page.setValue(organizationNameField, organizationNameFieldInput)
    }

    async clickCreateOrganizationBtn(){
        return await Page.click(createOrganizationBtn)
    }

    async isValidationAlertMessageDisplayed(){
        return await Page.isElementDisplayed(validationAlertMessage)
    }
}

module.exports = new AuthPage();
