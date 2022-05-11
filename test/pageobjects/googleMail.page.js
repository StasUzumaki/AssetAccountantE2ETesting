const Page = require('./page')

const emailField = '#identifierId'
const nextBtn = '[class="FliLIb DL0QTb"]'
const passwordField = '[type="password"]'
const VerifyMessage = '//div[@class="Cp"]//tbody/tr[1]'  //'//span//span[contains(text(), "Welcome to AssetAccountant")]'
const inviteMessage = '//span[1][contains(text(), "You have been invited to Invite")]'
const acceptInvitationLink = '[href*="/invitations/"]'
const VerifyLink = '[href*="Authentication/VerifyEmail"]'

class GoogleMailPage {

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
}
 module.exports = new GoogleMailPage()