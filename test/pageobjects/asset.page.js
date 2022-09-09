const page = require('./page')

const newAssetNameField = '//app-form-control[1]/div/div[2]/input'
const newAssetCodeNumberField = '//app-form-control[2]/div/div[2]/input'
const newAssetDescriptionField = '[formcontrolname="description"]'
const newAssetGroupSelect = '//app-asset-group-selector/select'
const newAssetCostField = '//app-currency-input/div/input'
const newAssetPurchaseDate = '//app-form-control[6]/div/div[2]/app-date-input/div/input'
const newAssetQuantity = '[formcontrolname="quantity"]'
const newAssetQuantityUnitsSelect = '//div/div[2]/div/select'
const firstClassificationDropDown = '//app-edit-field-allocations[1]//div[2]/div/div[1]/select'
const secondClassificationDropDown = '//app-edit-field-allocations[2]//div[2]/div/div[1]/select'
const assetStatusSold = '[class="badge asset-status rounded-pill bg-dark"]'
const assetStatusIsUse = '[class="badge asset-status rounded-pill bg-success"]'
const assetDescriptionTitle = '//app-standard-page-content-grid/div/div[1]/h3'
const reverseDropDown = '#reverse-dropdown'
const deleteAssetBtn = '//app-standard-page-content-grid/div/div[2]/button[1]'
const setQuantityBtn = '//button[contains(text(), "Set Quantity")]'
const firstUseBtn = '//button[contains(text(), "First Use")]'
const purchaseBtn = '//button[contains(text(), "Purchase")]'
const leaseBtn = '//button[contains(text(), "Lease")]'
const reversalConfirmationTitle = '//*[contains(text(), "Reversal Confirmation")]'
const reversalConfirmationForm = '[class="modal-content"]'
const firstUseAlertMessage = '[class="alert-message"]'
const taxDepreciationNotesField = '#reassessmentNotes'
const assetDetailsLink = '[ngbnavitem="details"] a'
const addAttachmentDropDownBtn = '#disposal-dropdown'
const addLinkBtn = '//*[@class="dropdown-menu show"]/button[2]'
const chooseFilesBtn = '//*[@class="dropdown-menu show"]/button[1]'
const addLinkForm = '//form'
const linkNameField = '[placeholder="Link file name"]'
const urlField = '[placeholder="http or https"]'
const addBtn = '//*[@class="modal-footer"]/button[1]'
const attachmentsForm = '//*/app-standard-page-content-grid/ul'
const firstAttachment = '//*/app-standard-page-content-grid/ul/li[1]'
const attachmentsList = '//*/app-standard-page-content-grid/ul/li'
const deleteLinkAttachmentBtn = '//*/ul/li[1]/div/div[3]/div/button[2]'
const deleteFileAttachmentBtn = '//*/ul/li[1]/div/div[3]/div/button'
const attachmentFileUploadInput = '#import-upload'
const actionsDropDownBtn = '//div/div[2]/div[2]/button'
const addOpeningBalanceBtn = '//div[2]/div[2]/div/button[1]'
const openingBalanceDate = '//app-period-selector/select'
const taxWdv = '//app-form-control[2]//input'
const accountsWdv = '//app-form-control[3]//input'
const openingBalanceBtn = '//button[contains(text(), "Opening Balance")]'
const openingBalanceCell = '//*[contains(text(), "Opening Balance") and @col-id="type"]'
const openingBalanceReservedCell = '//*[contains(text(), "Opening Balance (Reversed)") and @col-id="type"]'
const actionSellBtn = '//div/app-standard-page-content-grid/div/div[2]/div[2]/div/button[4]'
const dateOfSale = '//app-date-input/div/input'
const saleProceeds = '//app-currency-input/div/input'
const saleCell = '//*[contains(text(), "Sale") and @col-id="type"]'
const sale = '//button[contains(text(), "Sale")]'
const reversalSaleCell = '//*[contains(text(), "Reversal (Sale)") and @col-id="type"]'
const actionWriteOffBtn = '//div[2]/div[2]/div/button[5]'
const dateOfWriteOff = '//app-date-input/div/input'
const writeOffCell = '//*[contains(text(), "Write Off") and @col-id="type"]'
const writenOffBtn = '//button[contains(text(), "Write Off")]'
const writeOffReversedCell = '//*[contains(text(), "Write Off (Reversed)") and @col-id="type"]'
const actionSellPartialBtn = '//div/div[2]/div[2]/div/button[6]'
const disposedQuantity = '[formcontrolname="disposedQuantity"]'
const salePartialCell = '//*[contains(text(), "Sale (Partial)") and @col-id="type"]'
const salePartialBtn = '//button[contains(text(), "Sale (Partial)")]'
const salePartialReversedCell = '//*[contains(text(), "Sale (Partial) (Reversed)") and @col-id="type"]'
const actionWriteOffPartialBtn = '//div/div[2]/div[2]/div/button[7]'
const writeOffPartialCell = '//*[contains(text(), "Write Off (Partial)") and @col-id="type"]'
const writeOffPartialBtn = '//app-standard-page/app-standard-page-content//div[2]/div[1]/div/button'
const writeOffPartialReversedCell = '//*[contains(text(), "Reversal (Write Off (Partial))") and @col-id="type"]'
const assetTaxTabLink = '//div[1]/ul/li[1]/a'
const assetAddDropDown = '//div[2]/div[2]/div/div/button'
const reassessmentBtn = '//div[2]/div[2]/div/div/div/button[1]'
const reassessMethodDropDown = '[formcontrolname="depreciationMethodId"]'
const taxDepreciationMethod = '//app-depreciation-method-selector/div[1]/app-form-control[1]/div/div[2]/div[1]/select'
const accountsDepreciationMethod = '//app-depreciation-method-selector/div[2]/app-form-control[1]/div/div[2]/div/select'
const taxEffectiveLifeField = '(//div/div[2]/app-autocalc-life/div/input)[1]'
const accountsEffectiveLifeField = '(//div/div[2]/app-autocalc-life/div/input)[2]'
const effectiveLifeField = '//app-autocalc-life/div/input'
const reassessmentCell = '//*[contains(text(), "Reassessment") and @col-id="type"]'
const reassessmentTaxBtn = '//app-standard-page/app-standard-page-content//div[2]/div[1]/div/button[1]'
const reassessmentReversedCell = '//*[contains(text(), "Reassessment (Reversed)") and @col-id="type"]'
const transferToPoolBtn = '//div[2]/div[2]/div/div/div/button[2]'
const lowValuePoolRadioBtn = '//*[@id="AULVPSBP-AU_LVP"]'
const saveSettingsSetupPoolsBtn = '//app-transfer-asset-modal/div[3]/button[1]'
const pool = '[formcontrolname="poolCode"]'
const writtenDownValue = '//form/div[1]/div[2]/div/div[1]'
const addToPoolCell = '//*[contains(text(), "Add to Pool") and @col-id="type"]'
const transferToPoolTaxBtn = '//app-standard-page/app-standard-page-content//div[2]/div[1]/div/button[1]'
const lowValuePoolLink = '//div[1]/div/h4/a'
const transferToPoolReversedCell = '//*[contains(text(), "Transfer to Pool (Reversed)") and @col-id="type"]'
const adjustmentBtn = '//div[2]/div[2]/div/div/div/button[3]'
const firstUseDateDropDown = '//div[2]/app-fin-year-selector/select'
const dateReassessmentDropDown = '//app-form-control/div/div[2]/app-period-selector/select'
const notesField = '[formcontrolname="notes"]'
const costChangeField = '//form/div[1]/app-form-control[2]//input'
const depreciationChangeField = '//form/div[1]/app-form-control[3]//input'
const adjustmentCell = '//*[contains(text(), "Adjustment") and @col-id="type"]'
const adjustmentTaxBtn = '//app-standard-page/app-standard-page-content//div[2]/div[1]/div/button[1]'
const adjustmentReversedCell = '//*[contains(text(), "Adjustment (Reversed)") and @col-id="type"]'
const reassessmentOfTaxableUseBtn = '//div[2]/div[2]/div/div/div/button[4]'
const taxableUseCell = '//*[contains(text(), "Taxable Use") and @col-id="type"]'
const taxableUseBtn = '//app-standard-page/app-standard-page-content//div[2]/div[1]/div/button[1]'
const taxableUsageValueField = '//app-percentage-input/div/input'
const taxableUseReversedCell = '//*[contains(text(), "Taxable Use (Reversed)") and @col-id="type"]'
const assetAccountsTabLink = '//div[1]/ul/li[2]/a'
const revaluationBtn = '//div[2]/div[2]/div/div/div/button[2]'
const revaluedAmountField = '//app-currency-input/div/input'
const revaluationCell = '//*[contains(text(), "Revaluation") and @col-id="type"]'
const revaluationAccountsBtn = '//app-standard-page/app-standard-page-content//div[2]/div[1]/div/button[1]'
const revaluationReversedCell = '//*[contains(text(), "Revaluation (Reversed)") and @col-id="type"]'
const revalueAssetDate = '//app-period-selector/select'
const impairmentBtn = '//div[2]/div/div/div/button[3]'
const impairedValueField = '//app-currency-input/div/input'
const impairAssetDate = '//app-period-selector/select'
const impairmentCell = '//*[contains(text(), "Impairment") and @col-id="type"]'
const impairmentAccountsBtn = '//app-standard-page/app-standard-page-content//div[2]/div[1]/div/button[1]'
const impairmentReversedCell = '//*[contains(text(), "Impairment (Reversed)") and @col-id="type"]'
const accountsAdjustmentBtn = '//div[2]/div/div/div/button[4]'
const locationLabel = '//div[2]/div/label'
const locationTitle = '//div[2]/div/div/h4'
const serialNumberLabel = '//div[4]/div/label'
const serialNumberTitle = '//div[4]/div/h4'
const assetColumnHeader = '[col-id="AssetGroup_0"]'
const firstClassificationTransferLink = '//div[2]/div[1]/div/a'
const secondClassificationTransferLink = '//div[2]/div[2]/div/a'
const transferEffectiveDate = '//app-period-selector/select'
const transferClassificationDropDown = '//div/div[2]/div/div[1]/select'
const firstClassificationUpdatedCell = '//div[3]/div[2]/div/div/div[6]/div[2]'
const secondClassificationUpdatedCell = '//div[3]/div[2]/div/div/div[7]/div[2]'
const reverseTransferBtn = '//app-standard-page/app-standard-page-content//div/div[2]/div[1]/div/button[3]'

class AssetPage {
    
    async isAdjustmentReversedCellDisplayed(){
        return await page.isElementDisplayed(adjustmentReversedCell)
    }

    async getAdjustmentReversedCellText(){
        return await page.getElementText(adjustmentReversedCell)
    }
    
    async clickReverseTransferBtn(){
        return await page.click(reverseTransferBtn)
    }
    
    async isSecondClassificationUpdatedCellDisplayed(){
        return await page.isElementDisplayed(secondClassificationUpdatedCell)
    }

    async getSecondClassificationUpdatedCellText(){
        return await page.getElementText(secondClassificationUpdatedCell)
    }
    
    async getFirstClassificationUpdatedCellText(){
        return await page.getElementText(firstClassificationUpdatedCell)
    }

    async isFirstClassificationUpdatedCellDisplayed(){
        return await page.isElementDisplayed(firstClassificationUpdatedCell)
    }

    async selectTransferClassificationDropDownValue(transferClassificationDropDownValue){
        return await page.clickDropdownItemByIndex(transferClassificationDropDown, transferClassificationDropDownValue)
    }
    
    async selectTransferEffectiveDateValue(transferEffectiveDateValue){
        return await page.clickDropdownItemByIndex(transferEffectiveDate, transferEffectiveDateValue)
    }
    
    async clickSecondClassificationTransferLink(){
        return await page.click(secondClassificationTransferLink)
    }
    
    async clickFirstClassificationTransferLink(){
        return await page.click(firstClassificationTransferLink)
    }
    
    async isAssetColumnHeaderDisplayed() {
        return await page.isElementDisplayed(assetColumnHeader)
    }
    
    async getSerialNumberTitleText(){
        return await page.getElementText(serialNumberTitle)
    }
    
    async isSerialNumberLabelDisplayed(){
        return await page.isElementDisplayed(serialNumberLabel)
    }
    
    async getLocationTitleText(){
        return await page.getElementText(locationTitle)
    }
    
    async isLocationLabelDisplayed(){
        return await page.isElementDisplayed(locationLabel)
    }
    
    async clickAccountsAdjustmentBtn(){
        return await page.click(accountsAdjustmentBtn)
    }
    
    async isImpairmentReversedCellDisplayed(){
        return await page.isElementDisplayed(impairmentReversedCell)
    }

    async getImpairmentReversedCellText(){
        return await page.getElementText(impairmentReversedCell)
    }
    
    async clickImpairmentAccountsBtn(){
        return await page.click(impairmentAccountsBtn)
    }
    
    async isImpairmentCellDisplayed(){
        return await page.isElementDisplayed(impairmentCell)
    }

    async getImpairmentCellText(){
        return await page.getElementText(impairmentCell)
    }
    
    async selectImpairAssetDateValue(impairAssetDateValue){
        return await page.clickDropdownItemByIndex(impairAssetDate, impairAssetDateValue)
    }
    
    async setImpairedValueFieldValue(impairedValueFieldValue){
        return await page.setValue(impairedValueField, impairedValueFieldValue)
    }

    async clickImpairmentBtn(){
        return await page.click(impairmentBtn)
    }
    
    async selectRevalueAssetDateValue(revalueAssetDateValue){
        return await page.clickDropdownItemByIndex(revalueAssetDate, revalueAssetDateValue)
    }

    async isRevaluationReversedCellDisplayed(){
        return await page.isElementDisplayed(revaluationReversedCell)
    }

    async getRevaluationReversedCellText(){
        return await page.getElementText(revaluationReversedCell)
    }
    
    async clickRevaluationAccountsBtn(){
        return await page.click(revaluationAccountsBtn)
    }
    
    async isRevaluationCellDisplayed(){
        return await page.isElementDisplayed(revaluationCell)
    }

    async getRevaluationCellText(){
        return await page.getElementText(revaluationCell)
    }

    async setRevaluedAmountFieldValue(revaluedAmountFieldValue){
        return await page.setValue(revaluedAmountField, revaluedAmountFieldValue)
    }
    
    async clickRevaluationBtn(){
        return await page.click(revaluationBtn)
    }
    
    async clickAssetAccountsTabLink(){
        return await page.click(assetAccountsTabLink)
    }
    
    async isTaxableUseReversedCellDisplayed(){
        return await page.isElementDisplayed(taxableUseReversedCell)
    }

    async getTaxableUseReversedCellText(){
        return await page.getElementText(taxableUseReversedCell)
    }

    async isTaxableUsageValueFieldDisplayed(){
        return await page.isElementDisplayed(taxableUsageValueField)
    }
    
    async setTaxableUsageValueFieldValue(taxableUsageValueFieldValue){
        return await page.setValue(taxableUsageValueField, taxableUsageValueFieldValue)
    }
    
    async clickTaxableUseBtn(){
        return await page.click(taxableUseBtn)
    }
    
    async isTaxableUseCellDisplayed(){
        return await page.isElementDisplayed(taxableUseCell)
    }

    async getTaxableUseCellText(){
        return await page.getElementText(taxableUseCell)
    }
    
    async clickReassessmentOfTaxableUseBtn(){
        return await page.click(reassessmentOfTaxableUseBtn)
    }
    
    async clickAdjustmentTaxBtn(){
        return await page.click(adjustmentTaxBtn)
    }
    
    async isAdjustmentCellDisplayed(){
        return await page.isElementDisplayed(adjustmentCell)
    }

    async getAdjustmentCellText(){
        return await page.getElementText(adjustmentCell)
    }

    
    async setDepreciationChangeFieldValue(depreciationChangeFieldValue){
        return await page.setValue(depreciationChangeField, depreciationChangeFieldValue)
    }
    
    async setCostChangeFieldValue(costChangeFieldValue){
        return await page.setValue(costChangeField, costChangeFieldValue)
    }
    
    async isNotesFieldDisplayed(){
        return await page.isElementDisplayed(notesField)
    }
    
    async selectDateReassessmentDropDown(dateReassessmentDropDownValue){
        return await page.clickDropdownItemByIndex(dateReassessmentDropDown, dateReassessmentDropDownValue)
    }
    
    async selectFirstUseDateDropDownValue(firstUseDateDropDownValue){
        return await page.clickDropdownItemByIndex(firstUseDateDropDown, firstUseDateDropDownValue)
    }

    async clickAdjustmentBtn(){
        return await page.click(adjustmentBtn)
    }
    
    async isTransferToPoolReversedCellDisplayed(){
        return await page.isElementDisplayed(transferToPoolReversedCell)
    }

    async getTransferToPoolReversedCellText(){
        return await page.getElementText(transferToPoolReversedCell)
    }

    async isLowValuePoolLinkDisplayed(){
        return await page.isElementDisplayed(lowValuePoolLink)
    }
    
    async clickTransferToPoolTax(){
        return await page.click(transferToPoolTaxBtn)
    }
    
    async isAddToPoolCellDisplayed(){
        return await page.isElementDisplayed(addToPoolCell)
    }

    async getAddToPoolCellText(){
        return await page.getElementText(addToPoolCell)
    }
    
    async isWrittenDownValueDisplayed(){
        return await page.isElementDisplayed(writtenDownValue)
    }
    
    async selectPoolValue(){
        return await page.clickDropdownItemByIndex(pool, 1)
    }
    
    async clickSaveSettingsSetupPoolsBtn(){
        return await page.click(saveSettingsSetupPoolsBtn)
    }
    
    async clickLowValuePoolRadioBtn(){
        return await page.click(lowValuePoolRadioBtn)
    }
    
    async clickTransferToPoolBtn(){
        return await page.click(transferToPoolBtn)
    }
    
    async isReassessmentReversedCellDisplayed(){
        return await page.isElementDisplayed(reassessmentReversedCell)
    }

    async getReassessmentReversedCellText(){
        return await page.getElementText(reassessmentReversedCell)
    }
    
    async clickReassessmentTaxBtn(){
        return await page.click(reassessmentTaxBtn)
    }
    
    async isReassessmentCellDisplayed(){
        return await page.isElementDisplayed(reassessmentCell)
    }

    async getReassessmentCellText(){
        return await page.getElementText(reassessmentCell)
    }
    
    async setEffectiveLifeFieldValue(effectiveLifeFieldValue){
        return await page.setValue(effectiveLifeField, effectiveLifeFieldValue)
    }
    
    async setAccountsEffectiveLifeFieldValue(accountsEffectiveLifeFieldValue){
        return await page.setValue(accountsEffectiveLifeField, accountsEffectiveLifeFieldValue)
    }
    
    async setTaxEffectiveLifeFieldvalue(taxEffectiveLifeFieldValue){
        return await page.setValue(taxEffectiveLifeField, taxEffectiveLifeFieldValue)
    }
    
    async selectAccountsDepreciationValue(accountsDepreciationMethodValue){
        return await page.clickDropdownItemByIndex(accountsDepreciationMethod, accountsDepreciationMethodValue)
    }
    
    async selectTaxDepreciationValue(taxDepreciationMethodValue){
        return await page.clickDropdownItemByIndex(taxDepreciationMethod, taxDepreciationMethodValue)
    }
    
    async selectReassessMethodDropDownValue(reassessMethodDropDownValue){
        return await page.clickDropdownItemByIndex(reassessMethodDropDown, reassessMethodDropDownValue)
    }
    
    async clickReassessmentBtn(){
        return await page.click(reassessmentBtn)
    }

    async clickAssetAddDropDown(){
        return await page.click(assetAddDropDown)
    }
    
    async clickAssetTaxTabLink() {
        return await page.click(assetTaxTabLink)
    }
    
    async isWriteOffPartialReversedCellDisplayed(){
        return await page.isElementDisplayed(writeOffPartialReversedCell)
    }

    async getWriteOffPartialReversedCellText(){
        return await page.getElementText(writeOffPartialReversedCell)
    }
    
    async clickWriteOffPartialBtn() {
        return await page.click(writeOffPartialBtn)
    }
    
    async isWriteOffPartialCellDisplayed(){
        return await page.isElementDisplayed(writeOffPartialCell)
    }

    async getWriteOffPartialCellText(){
        return await page.getElementText(writeOffPartialCell)
    }

    async clickActionWriteOffPartialBtn() {
        return await page.click(actionWriteOffPartialBtn)
    }
    
    async isSalePartialReversedCellDisplayed(){
        return await page.isElementDisplayed(salePartialReversedCell)
    }

    async getSalePartialReversedCellText(){
        return await page.getElementText(salePartialReversedCell)
    }

    async clickSalePartialBtn() {
        return await page.click(salePartialBtn)
    }

    async isSalePartialCellDisplayed(){
        return await page.isElementDisplayed(salePartialCell)
    }

    async getSalePartialCellText(){
        return await page.getElementText(salePartialCell)
    }
    
    async setDisposedQuantityValue(disposedQuantityValue) {
        return await page.setValue(disposedQuantity, disposedQuantityValue)
    }
    
    async clickActionSellPartialBtn() {
        return await page.click(actionSellPartialBtn)
    }

    async isWriteOffReversedCellDisplayed(){
        return await page.isElementDisplayed(writeOffReversedCell)
    }

    async getWriteOffReversedCellText(){
        return await page.getElementText(writeOffReversedCell)
    }
    
    async clickWritenOffBtn() {
        return await page.click(writenOffBtn)
    }
    
    async isWriteOffCellDisplayed(){
        return await page.isElementDisplayed(writeOffCell)
    }

    async getWriteOffCellText(){
        return await page.getElementText(writeOffCell)
    }
    
    async setDateOfWriteOffValue(dateOfWriteOffValue) {
        return await page.setValue(dateOfWriteOff, dateOfWriteOffValue)
    }
    
    async clickActionWriteOffBtn() {
        return await page.click(actionWriteOffBtn)
    }
    
    async isReversalSaleCellDisplayed(){
        return await page.isElementDisplayed(reversalSaleCell)
    }

    async getReversalSaleCellText(){
        return await page.getElementText(reversalSaleCell)
    }

    async clickSaleBtn() {
        return await page.click(sale)
    }

    async isSaleCellDispalyed(){
        return await page.isElementDisplayed(saleCell)
    }

    async getSaleCellText(){
        return await page.getElementText(saleCell)
    }

    async setDateOfSaleValue(dateOfSaleValue) {
        return await page.setValue(dateOfSale, dateOfSaleValue)
    }

    async setSaleProceedsValue(saleProceedsValue) {
        return await page.setValue(saleProceeds, saleProceedsValue)
    }

    
    async clickActionSellBtn() {
        return await page.click(actionSellBtn)
    }

    async isOpeningBalanceReservedCellDisplayed() {
        return await page.isElementDisplayed(openingBalanceReservedCell)
    }

    async getOpeningBalanceReservedCellText(){
        return await page.getElementText(openingBalanceReservedCell)
    }

    async isOpeningBalanceCellDisplayed() {
        return await page.isElementDisplayed(openingBalanceCell)
    }

    async getOpeningBalanceCellText(){
        return await page.getElementText(openingBalanceCell)
    }
    
    async clickOpeningBalanceBtn() {
        return await page.click(openingBalanceBtn)
    }
    
    async setAccountsWdvValue(accountsWdvValue) {
        return await page.setValue(accountsWdv, accountsWdvValue)
    }
    
    async setTaxWdvValue(taxWdvValue) {
        return await page.setValue(taxWdv, taxWdvValue)
    }
    
    async selectOpeningBalanceDateValue() {
        return await page.clickDropdownItemByIndex(openingBalanceDate, 2)
    }
    
    async clickAddOpeningBalanceBtn() {
        return await page.click(addOpeningBalanceBtn)
    }
    
    async clickActionsDropDownBtn() {
        return await page.click(actionsDropDownBtn)
    }
    
    async setAttachmentFileUploadInputValue(attachmentFileUpload) {
        return await page.setValue(attachmentFileUploadInput, attachmentFileUpload)
    }
    
    async clickDeleteFileAttachmentBtn() {
        return await page.click(deleteFileAttachmentBtn)
    }
    
    async clickDeleteLinkAttachmentBtn() {
        return await page.click(deleteLinkAttachmentBtn)
    }

    async getAllAttachments() {
        return await page.getAllElements(attachmentsList)
    }

    async getAttachmentsListSize() {
        await (await page.getElement(attachmentsList)).waitForDisplayed()
        return await (await this.getAllAttachments()).length
    }
    
    async getFirstAttachmentText() {
        return await page.getElementText(firstAttachment)
    }

    async isAttachmentsFormExist() {
        return await (await page.getElement(attachmentsForm)).waitForExist({ reverse: true })
    }
    
    async isAttachmentsFormDisplayed() {
        return await page.isElementDisplayed(attachmentsForm)
    }
    
    async clickAddBtn() {
        return await page.click(addBtn)
    }
    
    async setUrlFieldValue(urlFieldInput) {
        return await page.setValue(urlField, urlFieldInput)
    }
    
    async setLinkNameFieldValue(linkNameFieldInput) {
        return await page.setValue(linkNameField, linkNameFieldInput)
    }
    
    async isAddLinkFormDisplayed() {
        return await page.isElementDisplayed(addLinkForm)
    }
    
    async isAddLinkFormExist() {
        return await (await page.getElement(addLinkForm)).waitForExist({ reverse: true })
    }
    
    async clickChooseFilesBtn() {
        return await page.click(chooseFilesBtn)
    }
    
    async clickAddLinkBtn() {
        return await page.click(addLinkBtn)
    }

    async clickAddAttachmentDropDownBtn() {
        return await page.click(addAttachmentDropDownBtn)
    }

    async clickAssetDetailsLink() {
        return await page.click(assetDetailsLink)
    }
    
    async setTaxDepreciationNotesFieldValue(taxDepreciationNotesInput) {
        return await page.setValue(taxDepreciationNotesField, taxDepreciationNotesInput)
    }
    
    async isFirstUseAlertMessageDisplayted() {
        return await page.isElementDisplayed(firstUseAlertMessage)
    }

    async isReversalConfirmationFormDisplayed() {
        return await page.isElementDisplayed(reversalConfirmationForm)
    }

    async isDeleteConfirmationFormDisplayed() {
        return await page.isElementDisplayed(reversalConfirmationForm)
    }
    
    async isReversalConfirmationTitleDisplayed() {
        return await page.isElementDisplayed(reversalConfirmationTitle)
    }
    
    async clickLeaseBtn() {
        return await page.click(leaseBtn)
    }

    async clickPurchaseBtn() {
        return await page.click(purchaseBtn)
    }
    
    async clickFirstUseBtn() {
        return await page.click(firstUseBtn)
    }
    
    async clickSetQuantityBtn() {
        return await page.click(setQuantityBtn)
    }
    
    async clickDeleteAssetBtn() {
        return await page.click(deleteAssetBtn)
    }
    
    async clickReverseDropDown() {
        return await page.click(reverseDropDown)
    }
    
    async isAssetDescriptionTitleDisplayed() {
        return await page.isElementDisplayed(assetDescriptionTitle)
    }
    
    async isAssetStatusIsUseDispayed() {
        return await page.isElementDisplayed(assetStatusIsUse)
    }
    
    async isAssetStatusSoldDisplayed() {
        return await page.isElementDisplayed(assetStatusSold)
    }

    async selectNewAssetQuantityUnitsValue() {
        return await page.clickDropdownItemByIndex(newAssetQuantityUnitsSelect, 1)
    }
    
    async setNewAssetQuantityValue(newAssetQuantityInput) {
        return await page.setValue(newAssetQuantity, newAssetQuantityInput)
    }

    async setNewAssetPurchaseDateValue(newAssetPurchaseDateInput) {
        return await page.setValue(newAssetPurchaseDate, newAssetPurchaseDateInput)
    }

    async setNewAssetCostValue(newAssetCostFieldInput) {
        return await page.setValue(newAssetCostField, newAssetCostFieldInput)
    }

    async setNewAssetNameValue(newAssetNameFieldInput) {
        return await page.setValue(newAssetNameField, newAssetNameFieldInput)
    }

    async setNewAssetDescriptionValue(newAssetDescriptionFieldInput) {
        return await page.setValue(newAssetDescriptionField, newAssetDescriptionFieldInput)
    }

    async setNewAssetCodeNumberValue(newAssetCodeNumberFieldInput) {
        return await page.setValue(newAssetCodeNumberField, newAssetCodeNumberFieldInput)
    }

    async selectNewAssetGroupValue() {
        return await page.clickDropdownItemByIndex(newAssetGroupSelect, 1)
    }

    async selectFirstClassificationDropDownValue(firstClassificationDropDownValue){
        return await page.clickDropdownItemByIndex(firstClassificationDropDown, firstClassificationDropDownValue)
    }

    async selectSecondClassificationDropDownValue(secondClassificationDropDownValue){
        return await page.clickDropdownItemByIndex(secondClassificationDropDown, secondClassificationDropDownValue)
    }
}

module.exports = new AssetPage();