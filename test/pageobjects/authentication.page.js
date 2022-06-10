const page = require('./page')

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
const countryDropDown = '//div/div/div/select'
const createOrganizationBtn = '//div/div/form/div/div/button'
const validationAlertMessage = '[class*="alert-message validation"]'
const intuitSignInLink = '[class="Login-intuit"]'
const xeroSignInLink = '[class="btn btn-white Login-xero"]'

class Authpage {
    async clickXeroSignInLink(){
        return await page.click(xeroSignInLink)
    }

    async clickIntuitSignLink(){
        return await page.click(intuitSignInLink)
    }

    async setUserNameValue(userNameInput){
        return await page.setValue(userName, userNameInput)
    }

    async clickNextBtn(){
        return await page.click(nextBtn)
    }

    async setPasswordSignInValue(passowrdSignInInput){
        return await page.setValue(passwordSignIn, passowrdSignInInput)
    }

    async clickSignInSubmitBtn(){
        return await page.click(signInSubmitBtn)
    }

    async clickCreateAccountBtn(){
        return await page.click(createAccBtn)
    }

    async clickOkVerifyBtn(){
        return await page.click(okVerifyBtn)
    }

    async clickCheckTheEmailBtn(){
        return await page.click(checkTheEmailBtn)
    }
    
    async setEmailMailsacFieldValue(emailMailsacFieldInput){
        return await page.setValue(emailMailsacField, emailMailsacFieldInput)
    }

    async setFisrtNameValue(firstNameInput) {
        return await page.setValue(firstNameCreate, firstNameInput)
    }

    async setLastNameValue(lastNameInput){
        return await page.setValue(lastNameCreate, lastNameInput)
    }

    async setEmailValue(emailInput){
        return await page.setValue(email, emailInput)
    }

    async setPhoneNumberValue(PhoneInput){
        return await page.setValue(PhoneNumb, PhoneInput)
    }

    async setPasswordCreateAccValue(PasswordCreateAccInput){
        return await page.setValue(PasswordCreateAcc, PasswordCreateAccInput)
    }

    async setPasswordCreateAccConfirmValue(PasswordCreateAccConfirmInput){
        return await page.setValue(PasswordConfirm, PasswordCreateAccConfirmInput)
    }

    async clickRegisterBtn(){
        return await page.click(registerBtn)
    }

    async clickSignInBtn(){
        return await page.click(signInBtn)
    }

    async isSignInBtnDisplayed(){
        return await page.isElementDisplayed(signInBtn)
    }

    async isEmailVerificationFormDisplayed(){
        return await page.isElementDisplayed(EmailVerificationForm)
    }

    async isUserNameLoginFieldDisplayed(){
        return await page.isElementDisplayed(userName)
    }

    async isPasswordLoginFieldDisplayed(){
        return await page.isElementDisplayed(passwordSignIn)
    }

    async isOrganizationFieldDisplayed(){
        return await page.isElementDisplayed(organizationNameField)
    }

    async setOrganizationNameFieldValue(organizationNameFieldInput){
        return await page.setValue(organizationNameField, organizationNameFieldInput)
    }

    async selectCountryDropDownValue(countryDropDownValue){
        return await page.clickDropdownItemByIndex(countryDropDown, countryDropDownValue)
    }

    async clickCreateOrganizationBtn(){
        return await page.click(createOrganizationBtn)
    }

    async isValidationAlertMessageDisplayed(){
        return await page.isElementDisplayed(validationAlertMessage)
    }
}

module.exports = new Authpage();
