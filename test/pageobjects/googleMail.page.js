const Page = require('./page')

const emailField = '#identifierId'
const nextBtn = '[class="FliLIb DL0QTb"]'
const passwordField = '[type="password"]'
const VerifyMessage = '//div[@class="Cp"]//tbody/tr[1]' 
const inviteMessage = '//span[1][contains(text(), "You have been invited to Invite")]'
const acceptInvitationLink = '[href*="/invitations/"]'
const VerifyLink = '[href*="Authentication/VerifyEmail"]'
const deleteVerifyMessageBtn = '//div[@act="10"]'
const selectVerifyMessageCheckBox = '//div[2]/div/div/div/div/div[1]/div/div[1]/div[1]/div/div/div[1]/div/div[1]/span'
const alertMessage = '//div[@role="alert"]//div[1]/div[2]'
const backBtn = '(//div[@act="19"])'
const closeAlertMessageBtn = '[class="bBe"]'
const verifyEmailIntuitLink = '//div/table/tr/td[1]/div[2]/div[2]/div/div[3]/div[2]//table/tbody/tr/td/table/tbody/tr[4]/td/p[3]/a'

class GoogleMailPage {

    async isSelectVerifyMessageCheckBoxClickable(){
        return await Page.isElementClickable(selectVerifyMessageCheckBox)
    }

    async clickVerifyEmailIntuitLink(){
        return await Page.click(verifyEmailIntuitLink)
    }

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

    async clickDeleteVerifyMessageBtn(){
        return await Page.click(deleteVerifyMessageBtn)
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