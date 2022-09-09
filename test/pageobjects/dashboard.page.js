const page = require('./page')

const createRegisterBtn = '//div/div[2]/div/button[3]'  
const tableWithRegisters = '//tbody/tr'
const demoRegisterBtn = '//div[2]/div/button[2]'
const firstRegisterLink = '//table/tbody/tr/td[2]/a'
const registersTable = '//app-standard-page-content-grid/table'
const dropDownRegisterMenu = '#dropdownBasic1'
const archiveBtn = '//*[contains(text(), "Archive")]'
const manageAccessBtn = '//*[contains(text(), "Manage")]'
const archiveConfirmationOkBtn = `//*[@class='modal-footer']/button[2]`
const successArchivedRegisterMessage = '[aria-label*="Register "]'
const cancelArchiveRegisterBtn = '//div[3]/button[1]'

class DashboardPage {

    async clickCancelArchiveRegisterBtn(){
        return await page.click(cancelArchiveRegisterBtn)
    }

    async isSuccessArchivedRegisterMessageDisplayed() {
        return await page.isElementDisplayed(successArchivedRegisterMessage)
    }
    
    async clickArchiveConfirmationOkBtn() {
        return await page.click(archiveConfirmationOkBtn)
    }

    async clickManageAccessBtn() {
        return await page.click(manageAccessBtn)
    }
    
    async isArchiveBtnExisting(){
        return await page.isElementExisting(archiveBtn)
    }

    async clickArchiveBtn() {
        return await page.click(archiveBtn)
    }

    async clickDropDownRegisterMenu() {
        return await page.click(dropDownRegisterMenu)
    }

    async isRegistersTableDisplayed(){
        return await page.isElementDisplayed(registersTable)
    }

    async isRegistersTableExisting(){
        return await page.isElementExisting(registersTable)
    }

    async getRegisterNameText() {
        return await page.getElementText(firstRegisterLink)
    }

    async isFirstRegisterLinkDisplayed() {
        return await page.isElementDisplayed(firstRegisterLink)
    }

    async clickFirstRegisterLink() {
        return await page.click(firstRegisterLink)
    }

    async isRegisterLinkDisplayed() {
        return await (await page.getElement(firstRegisterLink)).isDisplayed()
    }

    async clickCreateRegisterBtn() {
        return await page.click(createRegisterBtn)
    }

    async isCreateRegisterBtnDisplayed() {
        return await page.isElementDisplayed(createRegisterBtn)
    }

    async getAllRegisters() {
        return await page.getAllElements(tableWithRegisters)
    }

    async getRegistersListSize() {
        await (await page.getElement(tableWithRegisters)).waitForDisplayed()
        return await (await this.getAllRegisters()).length
    }

    async clickDemoRegisterBtn() {
        return await page.click(demoRegisterBtn)
    }


}

module.exports = new DashboardPage();