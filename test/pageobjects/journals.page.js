const page = require('./page')

const createBtn = '//app-standard-page-content/div//div/div[2]/button'
const createJournalForm = '//app-side-panel/div'
const deleteJournalBtn = '//ul/li/div[3]/button'
const deleteCurrentJournalBtn = '//app-standard-page-content-actions/div/div[2]/button'
const exportJournalDropDown = '//*[@id="export-button"]'
const createJournalBtn = '//app-create-journal/form/button'
const journalTitle = '[class="pe-2 me-auto"]'
const journalDescriptionField = '//div/div[2]/input'
const currentlyJournals = '//app-standard-page-content-grid/div/em'
const loadingImage = '[role="status"]'
const postToXeroBtn = '//div/div[2]/button[2]'
const chooseTransactionForm = '//div/div[2]/app-post-journal'
const postBtn = '//app-post-journal/form/div/button[1]'
const postedJournalCheckBox = '#recordSubmission'
const postedCheckBoxEnable = '[class="ng-untouched ng-pristine ng-valid"]'
const successfulllyPostedToXeroAlert = '[class="alert-message"]'
const successfulllyPostedToExcelAlert = '[class="alert-message"]'
const viewJournalInXeroLink = '//app-alert/div/div[2]/p[2]/a'
const exportDropDown = '//*[@id="export-button"]'
const exportAsExcelBtn = '//app-export-button/div/div/button[1]'
const tableWithJournals = '[class="JournalItem-content"]'
const firstJournalItem = '//ul/li[1]/div[2]/a'

class JournalsPage {
    
    async isFirstJournalItemDisplayed() {
        return await page.isElementDisplayed(firstJournalItem)
    }

    async clickFirstJournalItemLink() {
        return await page.click(firstJournalItem)
    }
    
    async getAllJournals() {
        return await page.getAllElements(tableWithJournals)
    }

    async getJournalsListSize() {
        await (await page.getElement(tableWithJournals)).waitForDisplayed()
        return await (await this.getAllJournals()).length
    }
    
    async clickExportAsExcelBtn() {
        return await page.click(exportAsExcelBtn)
    }
    
    async clickExportDropDownBtn() {
        return await page.click(exportDropDown)
    }
    
    async clickViewJournalInXeroLink() {
        return await page.click(viewJournalInXeroLink)
    }
    
    async getSuccessfulllyPostedToExcelAlertText() {
        return await page.getElementText(successfulllyPostedToExcelAlert)
    }

    async isSuccessfulllyPostedToExcelAlertDisplayed() {
        return await page.isElementDisplayed(successfulllyPostedToExcelAlert)
    }

    async isSuccessfulllyPostedToXeroAlertDisplayed() {
        return await page.isElementDisplayed(successfulllyPostedToXeroAlert)
    }
    
    async isPostedCheckBoxEnableDisplayed(){
        return await (await page.getElement(postedCheckBoxEnable)).isDisplayed()
    }
    
    async clickPostedJournalCheckBox(){
        return await page.click(postedJournalCheckBox)
    }

    async isPostedJournalCheckBoxDisplayed(){
        return await page.isElementDisplayed(postedJournalCheckBox)
    }
    
    async clickPostBtn() {
        return await page.click(postBtn)
    }
    
    async isChooseTransactionFormDisplayed() {
        return await page.isElementDisplayed(chooseTransactionForm)
    }
    
    async clickPostToXeroBtn() {
        return await page.click(postToXeroBtn)
    }
    
    async isLoadingImageDisplayed() {
        return await (await page.getElement(loadingImage)).waitForExist({ reverse: true })
    }
    
    async isCurrentlyJournalsDisplayed() {
        return await page.isElementDisplayed(currentlyJournals)
    }

    async setJournalDescriptionFieldValue(journalDescriptionInput) {
        return await page.setValue(journalDescriptionField, journalDescriptionInput)
    }
    
    async getJournalTitleText() {
        return await page.getElementText(journalTitle)
    }

    async isJournalTitleDisplayed() {
        return await page.isElementDisplayed(journalTitle)
    }
    
    async clickCreateJournalBtn() {
        return await page.click(createJournalBtn)
    }

    async isExportJournalDropDownDisplayed() {
        return await page.isElementDisplayed(exportJournalDropDown)
    }
    
    async clickDeleteCurrentJournalBtn() {
        return await page.click(deleteCurrentJournalBtn)
    }

    
    async isDeleteJournalBtnDisplayed() {
        return await (await page.getElement(deleteJournalBtn)).isDisplayed()
    }
    
    async isCreateJournalFormDisplayed() {
        return await page.isElementDisplayed(createJournalForm)
    }
    
    async clickCreateBtn() {
        return await page.click(createBtn)
    }

}

module.exports = new JournalsPage();