const Page = require('./page')

const emailField = '#identifierId'
const nextBtn = '[class="FliLIb DL0QTb"]'
const passwordField = '[type="password"]'
const VerifyMessage = '//div[@class="Cp"]//tbody/tr[1]'  //'//span//span[contains(text(), "Welcome to AssetAccountant")]'
const inviteMessage = '//span[1][contains(text(), "You have been invited to Invite")]'
const acceptInvitationLink = '[href*="/invitations/"]'
const VerifyLink = '[href*="Authentication/VerifyEmail"]'
const CheckVerifyMessageBtn = '//div[@act="10"]'
const selectVerifyMessageCheckBox = '//div[@class="Cp"]//tbody/tr[1]/td[2]'
const alertMessage = '//div[@role="alert"]//div[1]/div[2]'
const backBtn = '(//div[@act="19"])'
const closeAlertMessageBtn = '[class="bBe"]'


class GoogleMailPage {

    async clickBackBtn(){
        return await Page.click(backBtn)
    }
    
    async clickCloseAlertMessageBtn(){
        return await Page.click(closeAlertMessageBtn)
    }

    async isAlertMessageDisplayed(){
        return await Page.isElementDisplayed(alertMessage)
    }

    async clickSelectVerifyMessageCheckBox(){
        return await Page.click(selectVerifyMessageCheckBox)
    }

    async clickCheckVerifyMessageBtn(){
        return await Page.click(CheckVerifyMessageBtn)
    }

    async clickInviteMessage(){
        return await Page.click(inviteMessage)
    }

    async clickAcceptInvitationLinkLink(){
        return await Page.click(acceptInvitationLink)
    }

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

    async scrollIntoVerifyLink(){
        return await Page.scrollElementIntoViewTop(VerifyLink)
    }
}
 module.exports = new GoogleMailPage()