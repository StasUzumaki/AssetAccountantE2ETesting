const page = require('./page')

const bulkActionLink = '[href*="/imports"]'
const newUploadDropDownBtn = '//div/div[2]/div/div[2]/button'
const newAssetsBtn = '//div/div[2]/div/div[2]/div/button[1]'
const uploadBtn = '//app-upload-file/form/div[2]/button[2]'
const importFileInput = '#import-upload'
const importName = '//app-form-control[1]/div/div[2]/input'
const nextBtn = '//button[contains(text(), "Next")]'
const processBtn = '//button[contains(text(), "Process")]'
const doneBtn = '//button[contains(text(), "Done")]'
const openingBalanceDate = '//div/div[1]/select'
const yearInput = '//app-month-year-date-selector/div/div[2]/input'
const containsPooledAssetsNoBtn = '[for="containsPooledAssets-no"]'
const containsRevaluedAssetsNoBtn = '[for="containsRevaluedAssets-no"]'
const differentPurchaseNoBtn = '[for="differentPurchase-no"]'
const assetNameLabel = '//app-form-control[1]/div/div[1]/app-form-label'
const quantityUnitsField = '[formcontrolname="quantityUnits"]'
const assetGroupSelect = '(//*[@formcontrolname="assetGroupId"])[1]'
const costSelect = '[formcontrolname="cost"]'
const methodSelect = '[formcontrolname="method"]'
const depreciationMethodSelect = '[formcontrolname="depreciationMethodId"]'
const alertMassage = '[class="alert-message"]'
const locationSelect = '(//div/div[2]/div/select)[1]'
const serialNumber = '(//div/div[2]/div/select)[2]'
const locationCheckBox = '//app-form-control[1]//input'
const serialNumberCheckBox = '//app-form-control[2]//input'
const taxDetails = '//form/div[1]/p[2]'
const accountDetails = '//form/div[1]/p[3]'
const importResult = '//app-import-result/div[2]/p[1]'
const viewAssetsLink = '[href="/organisations/-/registers/-/regimes/-/periods/-/assets"]'
const importDropDownMenu = '#importMenu'
const downloadBtn = '//table/tbody/tr/td[6]/div/div/div/div/button[1]'
const rollbackImportBtn = '//table/tbody/tr/td[6]/div/div/div/div/button[2]'
const rollbackConfirmationForm = '//ng-component/form'
const rollbackConfirmationInput = '//form/div[1]/input'
const rollbackBtn = '//form/div[2]/button[2]'
const importCompleteStatus = '[class="badge bg-success rounded-pill text-white"]'
const importUnprocessedStatus = '[class="badge bg-warning rounded-pill text-white"]'
const deleteBtn = '//table/tbody/tr/td[6]/div/div/div/div/button[3]'
const assetImport = '//table/tbody/tr[1]'
const upgradeSubscriptionBtn = '//app-add-payment-method-modal/form/div[2]/button'

class ImportsPage{
    async clickUpgradeSubscriptionBtn(){
        return await page.click(upgradeSubscriptionBtn)
    }

    async isAssetImportDisplayed(){
        return await page.isElementDisplayed(assetImport)
    }

    async isAssetImportExisting(){
        return await (await page.getElement(assetImport)).waitForExist({ reverse: true })
    }

    async clickDeleteBtn(){
        return await page.click(deleteBtn)
    }

    async getImportCompleteStatusText(){
        return await page.getElementText(importCompleteStatus)
    }

    async isImportCompleteStatusDisplayed(){
        return await page.isElementDisplayed(importCompleteStatus)
    }

    async getImportUnprocessedStatusText(){
        return await page.getElementText(importUnprocessedStatus)
    }

    async isImportUnprocessedStatusDisplayed(){
        return await page.isElementDisplayed(importUnprocessedStatus)
    }

    async clickRollbackBtn(){
        return await page.click(rollbackBtn)
    }

    async setRollbackConfirmationInputValue(rollbackConfirmationInputValue){
        return await page.setValue(rollbackConfirmationInput, rollbackConfirmationInputValue)
    }

    async isRollbackConfirmationFormDisplayed(){
        return await page.isElementDisplayed(rollbackConfirmationForm)
    }

    async clickRollbackImportBtn(){
        return await page.click(rollbackImportBtn)
    }

    async clickDownloadBtn(){
        return await page.click(downloadBtn)
    }

    async clickImportDropDownMenu(){
        return await page.click(importDropDownMenu)
    }

    async clickDoneBtn(){
        return await page.click(doneBtn)
    }

    async clickViewAssetsLink(){
        return await page.click(viewAssetsLink)
    }

    async isViewAssetsLinkDisplayed(){
        return await page.isElementDisplayed(viewAssetsLink)
    }

    async getImportResultText(){
        return await page.getElementText(importResult)
    }

    async clickProcessBtn(){
        return await page.click(processBtn)
    }

    async isTaxDetailsDisplayed(){
        return await page.isElementDisplayed(taxDetails)
    }

    async isAccountDetailsDisplayed(){
        return await page.isElementDisplayed(accountDetails)
    }

    async clickLocationCheckBox(){
        return await page.click(locationCheckBox)
    }

    async clickSerialNumberCheckBox(){
        return await page.click(serialNumberCheckBox)
    }

    async selectSerialNumberValue(serialNumberValue){
        return await page.clickDropdownItemByIndex(serialNumber, serialNumberValue)
    }

    async selectLocationValue(locationSelectValue){
        return await page.clickDropdownItemByIndex(locationSelect, locationSelectValue)
    }

    async isAlertMessageDisplayed(){
        return await page.isElementDisplayed(alertMassage)
    }

    async isDepreciationMethodSelectDislpayed(){
        return await page.isElementDisplayed(depreciationMethodSelect)
    }
    
    async isMethodSelectDisplayed(){
        return await page.isElementDisplayed(methodSelect)
    }

    async isCostSelectDisplayed(){
        return await page.isElementDisplayed(costSelect)
    }

    async isAssetGroupSelectDisplayed(){
        return await page.isElementDisplayed(assetGroupSelect)
    }

    async isQuantityUnitsFieldDisplayed(){
        return await page.isElementDisplayed(quantityUnitsField)
    }

    async clickBulkActionLink(){
        return await page.click(bulkActionLink)
    }

    async clickNewUploadDropDownBtn(){
        return await page.click(newUploadDropDownBtn)
    }

    async clickNewAssetsBtn(){
        return await page.click(newAssetsBtn)
    }

    async clickUploadBtn(){
        return await page.click(uploadBtn)
    }

    async setImportFileInputValue(importFileInputValue){
        return await page.setValue(importFileInput, importFileInputValue)
    }

    async isImportFileInputDisplayed(){
        return await page.isElementDisplayed(importFileInput)
    }

    async isImportNameDisplayed(){
        return await page.isElementDisplayed(importName)
    }

    async clickNextBtn(){
        return await page.click(nextBtn)
    }

    async selectOpeningBalanceDateValue(openingBalanceDateValue){
        return await page.clickDropdownItemByIndex(openingBalanceDate, openingBalanceDateValue)
    }

    async setYearInputValue(yearInputValue){
        return await page.setValue(yearInput, yearInputValue)
    }

    async clickContainsPooledAssetsNoBtn(){
        return await page.click(containsPooledAssetsNoBtn)
    }

    async clickContainsRevaluedAssetsNoBtn(){
        return await page.click(containsRevaluedAssetsNoBtn)
    }

    async clickDifferentPurchaseNoBtn(){
        return await page.click(differentPurchaseNoBtn)
    }

    async isAssetNameLabelDisplayed(){
        return await page.isElementDisplayed(assetNameLabel)
    }

    async getAssetNameLabelText(){
        return await page.getElementText(assetNameLabel)
    }

}
module.exports = new ImportsPage()
