const page = require('./page')

const invitedUserEmailCell = '//*/table/tbody/tr[2]/td[2]'
const invitedUserNameCell = '//*/table/tbody/tr[2]/td[1]/label'
const invitedUserRoleCell = '//table/tbody/tr[2]/td[3]/label'
const userAccessDropDown = '//table//tr[2]//td[4]/div/div/div/button'
const userAccessRegisterRemoveBtn = '//table//tr[2]//td[4]/div/div/div//div/button'
const userAccessOrgRemoveBtn = '//table//tr[2]//td[4]/div/div/div//div/button[2]'
const subscriptionAndPaymentLink = '//*[contains(text(), "Subscription") and @class="nav-link"]'
const inviteUserBtn = '[class="horizontal-wrap align-items-start"] button'
const registerCheckBoxForInvite = '//table/tbody/tr[2]//input'
const registerRoleDropDownMenu = '//form/div[2]/table/tbody/tr[2]/td[4]/div'
const registerUserRoleBtn = '//table/tbody/tr[2]/td[4]/div/div/button[2]'

class OrganisationSettingsUsersPage {
    
    async clickRegisterUserRoleBtn() {
        return await page.click(registerUserRoleBtn)
    }
    
    async clickRegisterRoleDropDown() {
        return await page.click(registerRoleDropDownMenu)
    }
    
    async clickRegisterCheckBoxForInvite() {
        return await page.click(registerCheckBoxForInvite)
    }

    async clickInviteUserBtn() {
        return await page.click(inviteUserBtn)
    }

    async isInviteUserBtnDisplayed(){
        return await page.isElementDisplayed(inviteUserBtn)
    }

    async isInviteUserBtnClickable(){
        return await page.isElementClickable(inviteUserBtn)
    }
    
    async clickSubscriptionAndPaymentLink() {
        return await page.click(subscriptionAndPaymentLink)
    }

    async isSubscriptionAndPaymentLinkClickable(){
        return await page.isElementClickable(subscriptionAndPaymentLink)
    }

    async isSubscriptionAndPaymentLinkDisplayed(){
        return await page.isElementDisplayed(subscriptionAndPaymentLink)
    }
    
    async clickUserAccessOrgRemoveBtn() {
        return await page.click(userAccessOrgRemoveBtn)
    }
    
    async clickUserAccessRegisterRemoveBtn() {
        return await page.click(userAccessRegisterRemoveBtn)
    }

    async clickUserAccessDropDown() {
        return await page.click(userAccessDropDown)
    }

    async getInvitedUserNameCellText() {
        return await page.getElementText(invitedUserNameCell)
    }

    async isInvitedUserNameCellDisplayed() {
        return await page.isElementDisplayed(invitedUserNameCell)
    }

    async getInvitedUserRoleCellText() {
        return await page.getElementText(invitedUserRoleCell)
    }

    async isInvitedUserRoleCellDisplayed() {
        return await page.isElementDisplayed(invitedUserRoleCell)
    }
    
    async isInvitedUserEmailCellExist() {
        return await (await page.getElement(invitedUserEmailCell)).waitForExist({ reverse: true })
    }

    async getInvitedUserEmailCellText() {
        return await page.getElementText(invitedUserEmailCell)
    }

    async isInvitedUserEmailCellDisplayed() {
        return await page.isElementDisplayed(invitedUserEmailCell)
    }
}

module.exports = new OrganisationSettingsUsersPage();