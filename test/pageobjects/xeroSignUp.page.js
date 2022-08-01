const page = require('./page')

const submitBtn = '//*[@id="submitButton"]'
const xeroMainPageSignUpBtn = '//div[2]/div/a[1]'
const firstName = '[name="FirstName"]'
const lastName = '[name="LastName"]'
const email = '[name="EmailAddress"]'
const password = '[name="Password"]'
const phone = '[name="PhoneNumber"]'
const locationDropDown = '//form/div[2]/div/div[5]/div'
const activateLocationDropDown = '#LocationCode'
const xeroSignUpCaptcha = '//*[@id="recaptcha-anchor"]'
const privacyCheckBox = '//div[7]/div/label/span[1]'
const marketingCommunicationsCheckBox = '//div[9]/div/label/span[1]'
const nextConfirmationBtn = '//form/div[2]/div/button'
const confirmYourEmailTitle = '//h1'
const confirmYourEmailMessage = '//main/div/div/div[2]/div/div/div[2]'
const addYourBusinessForm = '//*[@id="shell-app-root"]/div/div/div'
//business form
const businessName = '[data-automationid="organisation-name--input"]'
const industry = '[data-automationid="industry-autocompleter--input"]'
const financialAssetItem = '//div[2]/div/div/div/ul/li[1]/button/span'
const noEmployeesCheckBox = '//*[@id="organisation-do-you-have-employees"]/div/div/div/div[2]/label'
const startTrialBtn = '//form/div[9]/div/button[1]'

class XeroSignUp{

    async clickFinancialAssetItem(){
        return await page.click(financialAssetItem)
    }

    async clickStartTrialBtn(){
        return await page.click(startTrialBtn)
    }

    async clickNoEmployeesCheckBox(){
        return await page.click(noEmployeesCheckBox)
    }

    async setIndustryValue(industryInput){
        return await page.setValue(industry, industryInput)
    }

    async setBusinessNameValue(businessNameInput){
        return await page.setValue(businessName, businessNameInput)
    }

    async isAddYourBusinessFormDisplayed(){
        return await page.isElementDisplayed(addYourBusinessForm)
    }

    async clickSubmitBtn(){
        return await page.click(submitBtn)
    }

    async setPasswordValue(passwordInput){
        return await page.setValue(password, passwordInput)
    }

    async isConfirmYourEmailMessageDisplayed(){
        return await page.isElementDisplayed(confirmYourEmailMessage)
    }

    async getConfirmYourEmailTitleText(){
        return await page.getElementText(confirmYourEmailTitle)
    }

    async isConfirmYourEmailTitleDisplayed(){
        return await page.isElementDisplayed(confirmYourEmailTitle)
    }

    async clickLocationDropDownSelect(){
        return await page.click(locationDropDown)
    }

    async scrollIntoLocationDropDown(){
        return await page.scrollElementIntoViewBottom(locationDropDown)
    }

    async selectLocationDropDownValue(locationDropDownValue){
        return await page.clickDropdownItemByIndex(locationDropDown, locationDropDownValue)
    }

    async selectActivateLocationDropDownValue(activateLocationDropDownValue){
        return await page.clickDropdownItemByIndex(activateLocationDropDown, activateLocationDropDownValue)
    }

    async clickNextConfirmationBtn(){
        return await page.click(nextConfirmationBtn)
    }

    async clickXeroMainPageSignUpBtn(){
        return await page.click(xeroMainPageSignUpBtn)
    }

    async setFirstNameValue(firstNameInput){
        return await page.setValue(firstName, firstNameInput)
    }

    async setLastNameValue(lastNameInput){
        return await page.setValue(lastName, lastNameInput)
    }

    async setEmailValue(emailInput){
        return await page.addValue(email, emailInput)
    }

    async setPhoneValue(phoneInput){
        return await page.setValue(phone, phoneInput)
    }

    async clickXeroSignUpCaptcha(){
        return await page.click(xeroSignUpCaptcha)
    }

    async clickPrivacyCheckBox(){
        return await page.click(privacyCheckBox)
    }

    async clickMarketingCommunicationsCheckBox(){
        return await page.click(marketingCommunicationsCheckBox)
    }

}
module.exports = new XeroSignUp()