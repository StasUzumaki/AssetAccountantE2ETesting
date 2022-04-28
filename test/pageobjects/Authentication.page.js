const Page = require('./Page')

const createAccBtn = '[class*=" Login-create"]';
const signInBtn = '[class*=" Login-heading"]';
const UserName = '#Username';
const NextBtn = '[class*=" Login-submit"]';
const PasswordSignIn = '#Password';
const signInSubmitBtn = '[class*=" Login-submit"]';
const firstNameCreate = '#FirstName' 
const lastNameCreate = '#LastName'
const email = '#Email';
const PhoneNumb = '#PhoneNumber';
const PasswordCreateAcc = '#Password';
const PasswordConfirm = '#ConfirmPassword';
const RegisterBtn = '[class="btn btn-lg btn-primary"]';
const EmailVerificationForm = '[class="card-body"]'
const organizationNameField = '[class*="form-control"]'
const createOrganizationBtn = '[class*="btn-primary"]'

class AuthPage {

    async setUserNameValue(userNameInput){
        return await Page.setValue(UserName, userNameInput)
    }

    async clickCreateNextBtn(){
        return await Page.click(NextBtn)
    }

    async setPasswordSignInValue(inputPassowrdSignIn){
        return await Page.setValue(PasswordSignIn, inputPassowrdSignIn)
    }

    async clickCreateSignInSubmitBtn(){
        return await Page.click(signInSubmitBtn)
    }

    async clickCreateCreateAccountBtn(){
        return await Page.click(createAccBtn)
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

    async clickCreateRegisterBtn(){
        return await Page.click(RegisterBtn)
    }

    async clickCreateSignInBtn(){
        return await Page.click(signInBtn)
    }

    async isEmailVerificationFormDisplayed(){
        return await Page.isElementDisplayed(EmailVerificationForm)
    }

    async setOrganizationNameFieldValue(organizationNameFieldInput){
        return await Page.setValue(organizationNameField, organizationNameFieldInput)
    }

    async clickCreateCreateOrganizationBtn(){
        return await Page.click(createOrganizationBtn)
    }
}

module.exports = new AuthPage();
