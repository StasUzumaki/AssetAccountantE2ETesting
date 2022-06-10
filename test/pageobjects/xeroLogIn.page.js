const { click } = require('./page')
const page = require('./page')

const logInBtn = '[data-automationid="LoginSubmit--button"]'
const emailLogIn = '[data-automationid="Username--input"]'
const passwordLogIn = '[data-automationid="PassWord--input"]'
const secondLayerOfSecurityText = '//div/div[1]/h1'
const notNowBtn = '//div/div[1]/button[2]'
const allowAccessBtn = '//form/button[1]'
const assetAccountantDevAccessForm = '/html/body/div/div/div/div[2]/div'
const organisationDataForm = '//*[@id="tenant-dropdown"]/div/div/div/div[2]'
const approveBtn = '//*[@id="approveButton"]'
const signUpLink = '[href*="https://www.xero.com/signup/"]'

class XeroLogInPage{
    async clickSignUpLink(){
        return await page.click(signUpLink)
    }
    
    async clickApproveBtn(){
        return await page.click(approveBtn)
    }

    async isOrganisationDataFormDisplayed(){
        return await page.isElementDisplayed(organisationDataForm)
    }
    
    async clickAllowAccessBtn(){
        return await page.click(allowAccessBtn)
    }

    async isAssetAccountantDevAccessFormDisplayed(){
        return await page.isElementDisplayed(assetAccountantDevAccessForm)
    }

    async clickLogInBtn(){
        return await page.click(logInBtn)
    }

    async isLogInBtnDisplayed(){
        return await page.isElementDisplayed(logInBtn)
    }

    async setEmailLogInValue(emailLogInInput){
        return await page.setValue(emailLogIn, emailLogInInput)
    }

    async setPasswordLogInValue(passwordLogInInput){
        return await page.setValue(passwordLogIn, passwordLogInInput)
    }
    
}
module.exports = new XeroLogInPage()