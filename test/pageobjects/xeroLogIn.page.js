const { click } = require('./page')
const page = require('./page')

const logInBtn = '[data-automationid="LoginSubmit--button"]'
const emailLogIn = '[data-automationid="Username--input"]'
const passwordLogIn = '[data-automationid="PassWord--input"]'
const secondLayerOfSecurityText = '//div/div[1]/h1'
const notNowBtn = '//div/div[1]/button[2]'
const allowAccessBtn = '//form/button[1]'
const assetAccountantDevAccessForm = '/html/body/div/div/div/div[2]/div'

class XeroLogInPage{
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