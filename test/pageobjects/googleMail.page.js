const page = require('./page')

const emailField = '#identifierId'
const nextBtn = '(//*[@class="VfPpkd-vQzf8d"])[2]' //'//span/section/div/div/div[4]/div[1]/div/div/button'
const passwordField = '[type="password"]'
const VerifyMessage = '//div[@class="Cp"]//tbody/tr[1]' 
const inviteMessage = '//span[1][contains(text(), "You have been invited to ")]'
const acceptInvitationLink = '[href*="/invitations/"]'
const VerifyLink = '[href*="Authentication/VerifyEmail"]'
const deleteVerifyMessageBtn = '//div[@act="10"]'
const selectVerifyMessageCheckBox = '//div/div[2]/div[2]/div/div/div/div/div[1]/div/div[1]/div[1]/div/div/div[1]/div/div[1]/span'
const alertMessage = '//div[@role="alert"]//div[1]/div[2]'
const backBtn = '(//div[@act="19"])'
const closeAlertMessageBtn = '[class="bBe"]'
const verifyEmailIntuitLink = '//div/table/tr/td[1]/div[2]/div[2]/div/div[3]/div[2]//table/tbody/tr/td/table/tbody/tr[4]/td/p[3]/a'
const xeroConfirmMail = '//span[1][contains(text(), "Confirm your email address")]'
const xeroVerifyLink = '//center/table/tbody/tr[2]/td/p[3]/a'

class GoogleMailPage {

    async clickXeroVerifyLink(){
        return await page.click(xeroVerifyLink)
    }

    async clickXeroConfirmMail(){
        return await page.click(xeroConfirmMail)
    }

    async isSelectVerifyMessageCheckBoxClickable(){
        return await page.isElementClickable(selectVerifyMessageCheckBox)
    }

    async clickVerifyEmailIntuitLink(){
        return await page.click(verifyEmailIntuitLink)
    }

    async clickBackBtn(){
        return await page.click(backBtn)
    }
    
    async clickCloseAlertMessageBtn(){
        return await page.click(closeAlertMessageBtn)
    }

    async isAlertMessageDisplayed(){
        return await page.isElementDisplayed(alertMessage)
    }

    async clickSelectVerifyMessageCheckBox(){
        return await page.click(selectVerifyMessageCheckBox)
    }

    async clickDeleteVerifyMessageBtn(){
        return await page.click(deleteVerifyMessageBtn)
    }

    async clickInviteMessage(){
        return await page.click(inviteMessage)
    }

    async clickAcceptInvitationLinkLink(){
        return await page.click(acceptInvitationLink)
    }

    async setEmailFieldValue(emailFieldInput){
        return await page.setValue(emailField, emailFieldInput)
    }

    async setPasswordFieldValue(passwordFieldInput){
        return await page.setValue(passwordField, passwordFieldInput)
    }

    async clickNextBtn(){
        return await page.click(nextBtn)
    }

    async clickVerifyMessage(){
        return await page.click(VerifyMessage)
    }

    async clickVerifyLink(){
        return await page.click(VerifyLink)
    }

    async isVerifyLinkDisplayed(){
        return await page.isElementDisplayed(VerifyLink)
    }

    async scrollIntoVerifyLink(){
        return await page.scrollElementIntoViewTop(VerifyLink)
    }
}
 module.exports = new GoogleMailPage()