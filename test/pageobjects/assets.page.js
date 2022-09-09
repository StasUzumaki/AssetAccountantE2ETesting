const page = require('./page')

const firstThingsFirstAlertMessage = '[class="alert-message"]'
const createAssetGroupTemplateBtn = '[routerlink*="template"]'
const createAssetGroupBlankBtn = '[routerlink="../assetgroups/new"]'
const assetsGroupList = 'div[class="ag-pinned-left-cols-container"] [row-id*="GROUP"]'
const contractedGroupDropDown = '//*/div[1]/div[1]/div/span/span[2]'
const taxViewForm = '//app-standard-page-content/div'
const firstGroupLink = '//ng-component/div/div/div/a'
const firstAssetLink = '//*/div/div[2]/div[2]/div[3]/div[1]/div[2]/div/span/span[4]/ng-component/div/div[1]/a'
const firstGroupAssetsQuantity = '//div[1]/div/span/span[4]//span'
const subscriptionLimitAlert = '[class="alert-message"]'
const newAssetUpgradeBtn = '//app-alert/div/div[2]/button'
const calendarBtn = '#calendar-selection'
const periodsForm = '[aria-labelledby="calendar-selection"]'
const currentFyBtn = '//div/div[3]/button[1]'
const reportsBtn = '//app-view-asset-actions/button[2]'
const reportForm = '//ng-component/form'
const reportTypeDropDown = '[formcontrolname="reportType"]'
const reportFormatDropDown = '[formcontrolname="format"]'
const generateReportBtn = '//form/div[3]/button[2]'
const reportStartDateMonth = '(//div/div[1]/select)[1]'
const reportEndDateMonth = '(//div/div[1]/select)[2]'
const reportStartDate = '//app-form-control[3]//input'
const reportEndDate = '//app-form-control[4]//input'
const createHpLeaseAssetBtn = '[routerlink="./new-rou"]'
const createAssetBtn = '[routerlink="./new"]'
const tableWithAssets = '[class="ag-cell-wrapper ag-row-group-leaf-indent ag-row-group-indent-1"]'
const assetsAddBtn = '//app-view-asset-actions/div/button'

class AssetsPage {
    
    async clickAssetsAddBtn() {
        return await page.click(assetsAddBtn)
    }

    async getAllAssets() {
        return await page.getAllElements(tableWithAssets)
    }

    async getAssetsListSize() {
        await (await page.getElement(tableWithAssets)).waitForDisplayed()
        return await (await this.getAllAssets()).length
    }
    
    async clickCreateAssetBtn() {
        return await page.click(createAssetBtn)
    }
    
    async clickCreateHpLeaseAssetBtn() {
        return await page.click(createHpLeaseAssetBtn)
    }
    
    async setReportEndDateValue(reportEndDateInput) {
        return await page.setValue(reportEndDate, reportEndDateInput)
    }
    
    async setReportStartDateValue(reportStartDateInput) {
        return await page.setValue(reportStartDate, reportStartDateInput)
    }
    
    async isReportEndDateMonthDisplayed(){
        return await page.isElementDisplayed(reportEndDateMonth)
    }

    async selectReportEndDateMonthValue(reportEndDateMonthValue){
        return await page.clickDropdownItemByIndex(reportEndDateMonth, reportEndDateMonthValue)
    }
    
    async selectReportStartDateMonthValue(reportStartDateMonthValue){
        return await page.clickDropdownItemByIndex(reportStartDateMonth, reportStartDateMonthValue)
    }
    
    async isReportStartDateMonthDisplayed(){
        return await page.isElementDisplayed(reportStartDateMonth)
    }
    
    async clickGenerateReportBtn() {
        return await page.click(generateReportBtn)
    }

    async isGenerateReportBtnClikable() {
        return await (await page.getElement(generateReportBtn)).waitForClickable()
    }
    
    async selectReportFormatDropDown(selectValue) {
        return await page.clickDropdownItemByIndex(reportFormatDropDown, selectValue)
    }
    
    async isReportTypeDropDownClickable(){
        return await page.isElementClickable(reportTypeDropDown)
    }

    async selectReportTypeDropDownValue() {
        return await page.clickDropdownItemByIndex(reportTypeDropDown, 2)
    }
    
    async isReportFormDisplayed() {
        return await page.isElementDisplayed(reportForm)
    }
    
    async clickReportsBtn() {
        return await page.click(reportsBtn)
    }

    async clickCurrentFyBtn() {
        return await page.click(currentFyBtn)
    }
    
    async isPeriodsFormDisplayed() {
        return await page.isElementDisplayed(periodsForm)
    }

    async clickCalendarBtn() {
        return await page.click(calendarBtn)
    }

    async clickAddLinkBtn() {
        return await page.click(addLinkBtn)
    }

    async clickNewAssetUpgradeBtn() {
        return await page.click(newAssetUpgradeBtn)
    }
    
    async isSubscriptionLimitAlertDisplayed() {
        return await page.isElementDisplayed(subscriptionLimitAlert)
    }

    async getSubscriptionLimitAlertText() {
        return await page.getElementText(subscriptionLimitAlert)
    }
    
    async getFirstGroupAssetsQuantityText(){
        return await page.getElementText(firstGroupAssetsQuantity)
    }

    async isFirstGroupAssetsQuantityDisplayed(){
        return await page.isElementDisplayed(firstGroupAssetsQuantity)
    }

    async clickFirstAssetLink() {
        return await page.click(firstAssetLink)
    }

    async isFirstAssetLinkDisplayed() {
        return await page.isElementDisplayed(firstAssetLink)
    }

    async isFirstGroupLinkDisplayed() {
        return await page.isElementDisplayed(firstGroupLink)
    }

    async clickFirstGroupLink() {
        return await page.click(firstGroupLink)
    }
    
    async isTaxViewFormDisplayed() {
        return await page.isElementDisplayed(taxViewForm)
    }

    async isContractedGroupDropDownDisplayed() {
        return await (await page.getElement(contractedGroupDropDown)).isDisplayed()
    }

    async clickContractedGroupDropDown() {
        return await page.click(contractedGroupDropDown)
    }
    
    async getAllAssetsGroup() {
        return await page.getAllElements(assetsGroupList)
    }

    async getAssetsGroupListSize() {
        await (await page.getElement(assetsGroupList)).waitForDisplayed()
        return await (await this.getAllAssetsGroup()).length
    }

    async clickCreateAssetGroupBlankBtn() {
        return await page.click(createAssetGroupBlankBtn)
    }
    
    async clickCreateAssetGroupTemplateBtn() {
        return await page.click(createAssetGroupTemplateBtn)
    }

    async isGroupTemplateBtnDisplayed() {
        return await (await page.getElement(createAssetGroupTemplateBtn)).isDisplayed()
    }

    async clickCreateAssetGroupTemplateBtn() {
        return await page.click(createAssetGroupTemplateBtn)
    }

    async isCreateAssetGroupTemplateBtnDisplayed() {
        return await page.isElementDisplayed(createAssetGroupTemplateBtn)
    }

    async isFirstThingsFirstAlertMessageDisplayed() {
        return await page.isElementDisplayed(firstThingsFirstAlertMessage)
    }

    async isFirstThingsFirstAlertMessageExisting() {
        return await page.isElementExisting(firstThingsFirstAlertMessage)
    }

    async getFirstThingsFirstAlertMessageText() {
        return await page.getElementText(firstThingsFirstAlertMessage)
    }
}

module.exports = new AssetsPage();