const Page = require('./page')

const emailField = '#identifierId'
const nextBtn = '[class="FliLIb DL0QTb"]'
const passwordField = '[type="password"]'
const VerifyMessage = '[class="zA zE"]'
const VerifyLink = '[href*="Authentication/VerifyEmail"]'

class GoogleMailPage {

    async setEmailFieldValue(emailFieldInput){
        return await Page.setValue(emailField, emailFieldInput)
    }

    async setPasswordFieldValue(passwordFieldInput){
        return await Page.setValue(passwordField, passwordFieldInput)
    }

    async clickNextBtn(){
        return await Page.click(nextBtn)
    }

    async clickVerifyMessage(){
        return await Page.click(VerifyMessage)
    }

    async clickVerifyLink(){
        return await Page.click(VerifyLink)
    }

    async isVerifyLinkDisplayed(){
        return await Page.isElementDisplayed(VerifyLink)
    }
}
 module.exports = new GoogleMailPage()