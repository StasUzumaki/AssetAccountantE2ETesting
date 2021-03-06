const page = require("./page");

const invitedUserEmailCell = "//*/table/tbody/tr[5]/td[2]";
const userAccessDropDown = "//table//tr[5]//td[4]/div/div/div/button";
const adminMenuDropDown = "//table//tr[2]//td[4]/div/div/div/button";
const managerMenuDropDown = '//table//tr[3]//td[4]/div/div/div/button'
const manageAccessBtn = '//*/table/tbody/tr[2]/td[4]/div/div/div/div/button[1]'
const manageAccessManagerBtn = '//table/tbody/tr[3]/td[4]/div/div/div/div/button[1]'
const managerAccessOrgRemoveBtn = '//table//tr[3]//td[4]/div/div/div//div/button[2]'
const grantAccessBtn = '//*[contains(text(), "Grant")]'
const removeAccessBtn = '//*[contains(text(), "Remove Access")]'
const userAccessResendBtn = '//table//tr[5]//td[4]/div/div/div//div/button[1]';
const userAccessOrgRemoveBtn = "//table//tr[5]//td[4]/div/div/div//div/button[2]";
const userAccessRegisterRemoveBtn = "//table//tr[5]//td[4]/div/div/div//div/button";
const userRoleAccountOwnerBtn = '//table/tbody/tr[2]/td[3]/div/div/button[1]'
const userRoleAccountManagerBtn = '//table/tbody/tr[3]/td[3]/div/div/button[1]'
const alertInvitationCloseBtn = '[aria-label="Close"]'
const listUsers = '.table'
const registersTable = '[class="table"]'
const roleDropDownToggle = '//*/table/tbody/tr[2]/td[3]/div/button'
const roleDropDownToggleManager = '//*/table/tbody/tr[3]/td[3]/div/button'
const demoRegisterRoleDropDown = '//table/tbody/tr/td[3]/div/button'
const registerManagerRoleBtn = '//button/p[contains(text(), "Register Manager")]'
const registerUserRoleBtn = '//button/p[contains(text(), "Register User")]'
const organisationSettingsBackLink = '//div/div/div/div/span[1]'
const adminRegisterDropDownToggle = '//table/tbody/tr/td[4]/div/button'

class UsersPage {
    async isUserRoleAccountManagerBtnDisplayed(){
        return await page.isElementDisplayed(userRoleAccountManagerBtn)
    }
    async isUserRoleAccountManagerBtnClickable(){
        return await page.isElementClickable(userRoleAccountManagerBtn)
    }
    async isUserRoleAccountOwnerBtnClickable(){
        return await page.isElementClickable(userRoleAccountOwnerBtn)
    }
    async isUserRoleAccountOwnerBtnDisplayed(){
        return await page.isElementDisplayed(userRoleAccountOwnerBtn)
    }
    async clickUserRoleAccountOwnerBtn(){
        return await page.click(userRoleAccountOwnerBtn)
    }
    async clickOrganisationSettingsBackLink(){
        return await page.click(organisationSettingsBackLink)
    }
    async clickAdminRegisterDropDownToggle(){
        return await page.click(adminRegisterDropDownToggle)
    }
    async clickRegisterUserRoleBtn(){
        return await page.click(registerUserRoleBtn)
    }
    async clickRegisterManagerRoleBtn(){
        return await page.click(registerManagerRoleBtn)
    }
    async isDemoRegisterRoleDropDownDisplayed(){
        return await page.isElementDisplayed(demoRegisterRoleDropDown)
    }
    async isDemoRegisterRoleDropDownClickable(){
        return await page.isElementClickable(demoRegisterRoleDropDown)
    }
    async clickDemoRegisterRoleDropDown(){
        return await page.click(demoRegisterRoleDropDown)
    }
    async clickGrantAccessBtn(){
        return await page.click(grantAccessBtn)
    }
    async clickRemoveAccessBtn(){
        return await page.click(removeAccessBtn)
    }
    async isRegistersTableDisplayed(){
        return await page.isElementDisplayed(registersTable)
    }
    async clickManageAccessBtn() {
        return await page.click(manageAccessBtn)
    }
    async clickManageAccessManagerBtn(){
        return await page.click(manageAccessManagerBtn)
    }
    async clickManagerAccessOrgRemoveBtn(){
        return await page.click(managerAccessOrgRemoveBtn)
    }
    async clickAdminMenuDropDown(){
        return await page.click(adminMenuDropDown)
    }
    async clickManagerMenuDropDown(){
        return await page.click(managerMenuDropDown)
    }
    async isRoleDropDownToggleManagerDisplayed(){
        return await page.isElementDisplayed(roleDropDownToggleManager)
    }
    async isRoleDropDownToggleManagerClickable(){
        return await page.isElementClickable(roleDropDownToggleManager)
    }
    async clickRoleDropDownToggleManager(){
        return await page.click(roleDropDownToggleManager)
    }
    async isRoleDropDownToggleDisplayed(){
        return await page.isElementDisplayed(roleDropDownToggle)
    }
    async isRoleDropDownToggleClickable(){
        return await page.isElementClickable(roleDropDownToggle)
    }
    async clickRoleDropDownToggle(){
        return await page.click(roleDropDownToggle)
    }
    async isInvitedUserEmailCellDisplayed() {
        return await page.isElementDisplayed(invitedUserEmailCell);
    }
    async getInvitedUserEmailCellText() {
        return await page.getElementText(invitedUserEmailCell);
    }
    async clickAlertInvitationCloseBtn(){
        return await page.click(alertInvitationCloseBtn)
    }
    async clickUserAccessDropDown() {
        return await page.click(userAccessDropDown);
    }
    async clickUserAccessOrgRemoveBtn() {
        return await page.click(userAccessOrgRemoveBtn);
    }
    async clickUserAccessRegisterRemoveBtn() {
        return await page.click(userAccessRegisterRemoveBtn);
    }
    async clickUserAccessResendBtn() {
        return await page.click(userAccessResendBtn);
    }
    async isInvitedUserEmailCellExist() {
        return await (await page.getElement(invitedUserEmailCell)).waitForExist({ reverse: true });
    }
    async isListUsersDisplayed(){
        return await page.isElementDisplayed(listUsers)
    }
}
module.exports = new UsersPage();
