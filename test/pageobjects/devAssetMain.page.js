const page = require('./page')

const cancelRegisterBtn = '//form/div[2]/button[1]'
const closeBtn = '[class="btn-close"]'
const saveBtn = '[type="submit"]'
const userProfileLink = '#user-profile'
const userProfileName = '//*[@id="user-profile"]/span'
const logoutProfileBtn = '//*[@id="avatar-dropdown-menu"]/button[3]'
const createFirstRegisterBtn = '//*[@class="col-6 col-lg-3 demo-action"]/button'
const createARegisterBtn = '//app-alert/div/div[2]/button'
const createNewRegisterForm = '[class="modal-content"]'
const registerName = '[formcontrolname="name"]'
const entityName = '[formcontrolname="entityName"]'
const nextRegisterBtn = '[class="btn btn-primary ms-2"]'
const tryForFreeBtn = '//*[contains(text(), "Try For Free")]'
const registerSelection = '#register-selection'
const organisationSelectionDropDown = '#org-selection'
const createNewOrganisationLink = '//*[contains(text(), " Create new organisation")]'
const registersLink = '//nav/section[2]/a'
const allRegisters = '[class="dropdown-item text-primary"]'
const createNewOrganisationForm = '[class="modal-content"]'
const organisationNameField = '//form/div[1]/app-form-control[1]/div/div[2]/input'
const organisationDescriptionField = '//form/div[1]/app-form-control[2]/div/div[2]/input'
const selectCountry = '//app-form-control[3]/div/div[2]/select'
const billingContactNameField = '//form/div[1]/div/app-form-control[1]/div/div[2]/input'
const billingContactEmailField = '//form/div[1]/div/app-form-control[2]/div/div[2]/input'
const billingContactPhoneField = '//form/div[1]/div/app-form-control[3]/div/div[2]/input'
const newOrganisationSaveBtn = '//div[@class="modal-footer"]/button[2]'
const organisationNamesList = '//nav/section[2]/div/div'
const demoRegisterLink = '//app-header-bar/div/div/div[1]/div'
const settingsHeaderWithExistingReg = '[class="page-heading"] h3'
const assetsLink = '[href*="/assets"]'
const journalLink = '[href*="/journals"]'
const deleteConfirmationOkBtn = `//*[@class='modal-footer']/button[2]`
const deleteConfirmationTitle = '//*[contains(text(), "Delete Confirmation")]'
//register settings link
const registerSettingsLink = `//a[contains(.,'Register Settings')]` //'//nav/section[3]/div/a[5]'
const registerSettingsLinkOnly = '//nav/section[3]/div/a[4]'
const registerSettingsWithXeroLink = '//nav/section[3]/div/a[6]'
//organisation settings link
const organisationSettingsLink = `//a[contains(.,'Organisation Settings')]`//'//nav/section[3]/div/a[4]'
const organisationSettings = '//nav/section[3]/div/a[4] [contains(text(), " Settings")]'
const organisationSettingsWithRegisters = '//*[contains(text(), "Organisation Settings")]'
//users tab
const inviteUserForm = '//div/div//form'// for both 
const emailInviteField = '//div/div[2]/input'// for both 
const inviteBtn = '//form/div[3]/button[2]'// for both
const invintationAlert = '[role="alertdialog"][aria-live="polite"]'//for both

//quickbook connection
const tryAgainBtn = '//div/div/div[1]/div[2]/div/a'
const newOrganisationSelect = '#organisationId'
const quickbooksConnectBtn = '//app-quickbooks-select-register//button[2]'
const quickbooksAlertMessage = '[class="alert-message"]'
const quickbooksDisconnectBtn = '//div/div/app-alert/div/div[2]/div/button'
const disconnectConfirmationForm = '[class="modal-content"]'
const disconnectConfirmationBtn = '//ng-component/div[3]/button[2]'
const externalIntegrationForm = '//app-view-integrations/div'

//need to rework
//integration 
const quickbooksOnlineDropDown = '//*[@id="static-1-header"]/button'
const connectToQuickBooksBtn = '//app-quickbooks-connect/div/input'
const xeroDropDown = '//*[@id="static-3-header"]/button'
const connectToXeroBtn = '//app-xero-connect/input'
const xeroDisconnectBtn = '//app-alert/div/div[2]/div/button'
const xeroAlertMessage = '[class="alert-message"]'
const setUptoUseForm = '//div/div/div/div[2]/form'
const setUpToUseConnectBtn = '//form/div[2]/div[1]/button[2]'

class DevAssetMainpage {
    async isXeroAlertMessageDisplayed() {
        return await page.isElementDisplayed(xeroAlertMessage)
    }

    async getXeroAlertMessageText() {
        return await page.getElementText(xeroAlertMessage)
    }

    async clickXeroDisconnectBtn() {
        return await page.click(xeroDisconnectBtn)
    }
    //integration
    async clickSetUpToUseConnectBtn() {
        return await page.click(setUpToUseConnectBtn)
    }

    async isSetUptoUseFormDisplayed() {
        return await page.isElementDisplayed(setUptoUseForm)
    }

    async clickConnectToXeroBtn() {
        return await page.click(connectToXeroBtn)
    }

    async clickXeroDropDown() {
        return await page.click(xeroDropDown)
    }

    async clickConnectToQuickBooksBtn() {
        return await page.click(connectToQuickBooksBtn)
    }

    async clickQuickbooksOnlineDropDown() {
        return await page.click(quickbooksOnlineDropDown)
    }

    //quickbook connection
    async selectNewOrganisationValue(newOrganisationSelectValue) {
        return await page.clickDropdownItemByIndex(newOrganisationSelect, newOrganisationSelectValue)
    }

    async isExternalIntegrationFormDisplayed() {
        return await page.isElementDisplayed(externalIntegrationForm)
    }

    async clickDisconnectConfirmationBtn() {
        return await page.click(disconnectConfirmationBtn)
    }

    async isDisconnectConfirmationFormDisplayed() {
        return await page.isElementDisplayed(disconnectConfirmationForm)
    }

    async clickQuickbooksDisconnectBtn() {
        return await page.click(quickbooksDisconnectBtn)
    }

    async isQuickbooksAlertMessageDisplayed() {
        return await page.isElementDisplayed(quickbooksAlertMessage)
    }

    async getQuickbooksAlertMessageText() {
        return await page.getElementText(quickbooksAlertMessage)
    }

    async clickQuickbooksConnectBtn() {
        return await page.click(quickbooksConnectBtn)
    }

    async isNewOrganisationSelectDisplayed() {
        return await page.isElementDisplayed(newOrganisationSelect)
    }

    async clickTryAgainBtn() {
        return await page.click(tryAgainBtn)
    }
    //profile
    async getUserProfileNameText() {
        return await page.getElementText(userProfileName)
    }

    async clickSaveBtn() {
        return await page.click(saveBtn)
    }
    //lease 
    async getAmountCapitalisedFieldValue() {
        return await page.getElementValue(amountCapitalisedField)
    }

    async setFirstFrequencyDropDownValue(firstFrequencyDropDownValue) {
        return await page.clickDropdownItemByIndex(firstFrequencyDropDown, firstFrequencyDropDownValue)
    }

    async setSecondFrequencyDropDownValue(secondFrequencyDropDownValue) {
        return await page.clickDropdownItemByIndex(secondFrequencyDropDown, secondFrequencyDropDownValue)
    }

    async clickGenerateScheduleBtn() {
        return await page.click(generateScheduleBtn)
    }

    async clickLeaseBtn() {
        return await page.click(leaseBtn)
    }

    async clickUseScheduleBtn() {
        return await page.click(useScheduleBtn)
    }

    async clickCreateHpLeaseAssetBtn() {
        return await page.click(createHpLeaseAssetBtn)
    }

    async clickHirePurchaseYesBtn() {
        return await page.click(hirePurchaseYesBtn)
    }

    async clickHirePurchaseNoBtn() {
        return await page.click(hirePurchaseNoBtn)
    }

    async clickLeaseSaveBtn() {
        return await page.click(leaseSaveBtn)
    }

    async clickAddPaymentsBtn() {
        return await page.click(addPaymentsBtn)
    }

    async getGeneratePaymentScheduleTitleText() {
        return await page.getElementText(generatePaymentScheduleTitle)
    }

    async isPaymentScheduleTableDisplayed() {
        return await page.isElementDisplayed(paymentScheduleTable)
    }

    async isNewLeaseAssetFormDisplayed() {
        return await page.isElementDisplayed(newLeaseAssetForm)
    }

    async isPaymentLeaseAssetFormDisplayed() {
        return await page.isElementDisplayed(paymentLeaseAssetForm)
    }

    async isAmountLeaseFormDisplayed() {
        return await page.isElementDisplayed(amountLeaseForm)
    }

    async isLeaseTaxDepreciationFormDisplayed() {
        return await page.isElementDisplayed(leaseTaxDepreciationForm)
    }

    async isLeaseAccountsDepreciationFormDisplayed() {
        return await page.isElementDisplayed(leaseAccountsDepreciationForm)
    }

    async isLeaseColumnHeaderDisplayed() {
        return await (await page.getElement(leaseColumnHeader)).isDisplayed()
    }

    async isRegisterLinkDisplayed() {
        return await (await page.getElement(firstRegisterLink)).isDisplayed()
    }

    async isPostedCheckBoxEnableDisplayed(){
        return await (await page.getElement(postedCheckBoxEnable)).isDisplayed()
    }

    async isAssetColumnHeaderDisplayed() {
        return await page.isElementDisplayed(assetColumnHeader)
    }

    async isGeneratePaymentScheduleFormDisplayed() {
        return await page.isElementDisplayed(generatePaymentScheduleForm)
    }

    async setSecondQuantityFieldValue(secondQuantityFieldInput) {
        return await page.setValue(secondQuantityField, secondQuantityFieldInput)
    }

    async setFirstLeasePaymentFieldValue(firstLeasePaymentFieldInput) {
        return await page.setValue(firstLeasePaymentField, firstLeasePaymentFieldInput)
    }

    async setSecondLeasePaymentFieldValue(secondLeasePaymentFieldInput) {
        return await page.setValue(secondLeasePaymentField, secondLeasePaymentFieldInput)
    }

    async setAmountFinancedFieldValue(amountFinancedFieldInput) {
        return await page.setValue(amountFinancedField, amountFinancedFieldInput)
    }

    async setLeaseNameFieldValue(leaseNameFieldInput) {
        return await page.setValue(leaseNameField, leaseNameFieldInput)
    }

    async setLeaseCodeNumberFieldValue(leaseCodeNumberFieldInput) {
        return await page.setValue(leaseCodeNumberField, leaseCodeNumberFieldInput)
    }

    async setLeaseDescrFieldValue(leaseDescrFieldInput) {
        return await page.setValue(leaseDescrField, leaseDescrFieldInput)
    }

    async setLeaseGroupSelectValue() {
        return await page.clickDropdownItemByIndex(leaseGroupSelect, 1)
    }

    async setLeaseQuantityUnitsSelectValue() {
        return await page.clickDropdownItemByIndex(leaseQuantityUnitsSelect, 1)
    }

    async setLeaseStartDateValue(leaseStartDateInput) {
        return await page.setValue(leaseStartDate, leaseStartDateInput)
    }

    async setLeaseFirstUseDateValue(leaseFirstUseDateInput) {
        return await page.setValue(leaseFirstUseDate, leaseFirstUseDateInput)
    }

    async setLeaseQuantityFieldValue(leaseQuantityFieldInput) {
        return await page.setValue(leaseQuantityField, leaseQuantityFieldInput)
    }

    async setPaymentDateFieldValue(paymentDateFieldInput) {
        return await page.setValue(paymentDateField, paymentDateFieldInput)
    }

    async setPaymentPrincipalFieldValue(paymentPrincipalFieldInput) {
        return await page.setValue(paymentPrincipalField, paymentPrincipalFieldInput)
    }

    async setPaymentInterestFieldValue(paymentInterestFieldInput) {
        return await page.setValue(paymentInterestField, paymentInterestFieldInput)
    }

    async setPaymentOtherFieldValue(paymentOtherFieldInput) {
        return await page.setValue(paymentOtherField, paymentOtherFieldInput)
    }

    async clickAlertMessageGenerateScheduleBtn() {
        return await page.click(alertMessageGenerateScheduleBtn)
    }

    //report 
    async clickCalendarBtn() {
        return await page.click(calendarBtn)
    }

    async clickCurrentFyBtn() {
        return await page.click(currentFyBtn)
    }

    async clickReportsBtn() {
        return await page.click(reportsBtn)
    }

    async isReportFormDisplayed() {
        return await page.isElementDisplayed(reportForm)
    }

    async isPeriodsFormDisplayed() {
        return await page.isElementDisplayed(periodsForm)
    }

    async isReportTypeDropDownClickable(){
        return await page.isElementClickable(reportTypeDropDown)
    }

    async selectReportTypeDropDownValue() {
        return await page.clickDropdownItemByIndex(reportTypeDropDown, 2)
    }

    async selectReportFormatDropDown(selectValue) {
        return await page.clickDropdownItemByIndex(reportFormatDropDown, selectValue)
    }

    async clickGenerateReportBtn() {
        return await page.click(generateReportBtn)
    }

    async isGenerateReportBtnClikable() {
        return await (await page.getElement(generateReportBtn)).waitForClickable()
    }

    async isReportStartDateMonthDisplayed(){
        return await page.isElementDisplayed(reportStartDateMonth)
    }

    async isReportEndDateMonthDisplayed(){
        return await page.isElementDisplayed(reportEndDateMonth)
    }

    async selectReportStartDateMonthValue(reportStartDateMonthValue){
        return await page.clickDropdownItemByIndex(reportStartDateMonth, reportStartDateMonthValue)
    }

    async selectReportEndDateMonthValue(reportEndDateMonthValue){
        return await page.clickDropdownItemByIndex(reportEndDateMonth, reportEndDateMonthValue)
    }

    async setReportStartDateValue(reportStartDateInput) {
        return await page.setValue(reportStartDate, reportStartDateInput)
    }

    async setReportEndDateValue(reportEndDateInput) {
        return await page.setValue(reportEndDate, reportEndDateInput)
    }
    //asset
    async clickAssetDetailsLink() {
        return await page.click(assetDetailsLink)
    }

    async clickAddAttachmentDropDownBtn() {
        return await page.click(addAttachmentDropDownBtn)
    }

    async clickAddLinkBtn() {
        return await page.click(addLinkBtn)
    }

    async clickChooseFilesBtn() {
        return await page.click(chooseFilesBtn)
    }

    async isAddLinkFormDisplayed() {
        return await page.isElementDisplayed(addLinkForm)
    }

    async setLinkNameFieldValue(linkNameFieldInput) {
        return await page.setValue(linkNameField, linkNameFieldInput)
    }

    async setUrlFieldValue(urlFieldInput) {
        return await page.setValue(urlField, urlFieldInput)
    }

    async clickAddBtn() {
        return await page.click(addBtn)
    }

    async isAttachmentsFormDisplayed() {
        return await page.isElementDisplayed(attachmentsForm)
    }

    async isPurchaseBtnDisplayed() {
        return await (await page.getElement(purchaseBtn)).isDisplayed()
    }

    async getFirstAttachmentText() {
        return await page.getElementText(firstAttachment)
    }

    async getAllAttachments() {
        return await page.getAllElements(attachmentsList)
    }

    async getAttachmentsListSize() {
        await (await page.getElement(attachmentsList)).waitForDisplayed()
        return await (await this.getAllAttachments()).length
    }

    async clickDeleteLinkAttachmentBtn() {
        return await page.click(deleteLinkAttachmentBtn)
    }

    async clickDeleteFileAttachmentBtn() {
        return await page.click(deleteFileAttachmentBtn)
    }

    async setAttachmentFileUploadInputValue(attachmentFileUpload) {
        return await page.setValue(attachmentFileUploadInput, attachmentFileUpload)
    }

    async clickActionsDropDownBtn() {
        return await page.click(actionsDropDownBtn)
    }

    async clickAddOpeningBalanceBtn() {
        return await page.click(addOpeningBalanceBtn)
    }

    async selectOpeningBalanceDateValue() {
        return await page.clickDropdownItemByIndex(openingBalanceDate, 2)
    }

    async setTaxWdvValue(taxWdvValue) {
        return await page.setValue(taxWdv, taxWdvValue)
    }

    async setAccountsWdvValue(accountsWdvValue) {
        return await page.setValue(accountsWdv, accountsWdvValue)
    }

    async clickOpeningBalanceBtn() {
        return await page.click(openingBalanceBtn)
    }

    async isOpeningBalanceCellDisplayed() {
        return await page.isElementDisplayed(openingBalanceCell)
    }

    async getOpeningBalanceCellText(){
        return await page.getElementText(openingBalanceCell)
    }

    async isOpeningBalanceReservedCellDisplayed() {
        return await page.isElementDisplayed(openingBalanceReservedCell)
    }

    async getOpeningBalanceReservedCellText(){
        return await page.getElementText(openingBalanceReservedCell)
    }

    async clickActionSellBtn() {
        return await page.click(actionSellBtn)
    }

    async setDateOfSaleValue(dateOfSaleValue) {
        return await page.setValue(dateOfSale, dateOfSaleValue)
    }

    async setSaleProceedsValue(saleProceedsValue) {
        return await page.setValue(saleProceeds, saleProceedsValue)
    }

    async isSaleCellDispalyed(){
        return await page.isElementDisplayed(saleCell)
    }

    async getSaleCellText(){
        return await page.getElementText(saleCell)
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

    async clickActionWriteOffBtn() {
        return await page.click(actionWriteOffBtn)
    }

    async setDateOfWriteOffValue(dateOfWriteOffValue) {
        return await page.setValue(dateOfWriteOff, dateOfWriteOffValue)
    }

    async isWriteOffCellDisplayed(){
        return await page.isElementDisplayed(writeOffCell)
    }

    async getWriteOffCellText(){
        return await page.getElementText(writeOffCell)
    }

    async clickWritenOffBtn() {
        return await page.click(writenOffBtn)
    }

    async isWriteOffReversedCellDisplayed(){
        return await page.isElementDisplayed(writeOffReversedCell)
    }

    async getWriteOffReversedCellText(){
        return await page.getElementText(writeOffReversedCell)
    }

    async clickActionSellPartialBtn() {
        return await page.click(actionSellPartialBtn)
    }

    async setDisposedQuantityValue(disposedQuantityValue) {
        return await page.setValue(disposedQuantity, disposedQuantityValue)
    }

    async isSalePartialCellDisplayed(){
        return await page.isElementDisplayed(salePartialCell)
    }

    async getSalePartialCellText(){
        return await page.getElementText(salePartialCell)
    }

    async clickSalePartialBtn() {
        return await page.click(salePartialBtn)
    }

    async isSalePartialReversedCellDisplayed(){
        return await page.isElementDisplayed(salePartialReversedCell)
    }

    async getSalePartialReversedCellText(){
        return await page.getElementText(salePartialReversedCell)
    }

    async clickActionWriteOffPartialBtn() {
        return await page.click(actionWriteOffPartialBtn)
    }

    async isWriteOffPartialCellDisplayed(){
        return await page.isElementDisplayed(writeOffPartialCell)
    }

    async getWriteOffPartialCellText(){
        return await page.getElementText(writeOffPartialCell)
    }

    async clickWriteOffPartialBtn() {
        return await page.click(writeOffPartialBtn)
    }

    async isWriteOffPartialReversedCellDisplayed(){
        return await page.isElementDisplayed(writeOffPartialReversedCell)
    }

    async getWriteOffPartialReversedCellText(){
        return await page.getElementText(writeOffPartialReversedCell)
    }

    async clickAssetTaxTabLink() {
        return await page.click(assetTaxTabLink)
    }

    async clickAssetAddDropDown(){
        return await page.click(assetAddDropDown)
    }

    async clickReassessmentBtn(){
        return await page.click(reassessmentBtn)
    }

    async selectReassessMethodDropDownValue(reassessMethodDropDownValue){
        return await page.clickDropdownItemByIndex(reassessMethodDropDown, reassessMethodDropDownValue)
    }

    async selectEffectiveLifeDropDownValue(effectiveLifeDropDownValue){
        return await page.clickDropdownItemByIndex(effectiveLifeDropDown, effectiveLifeDropDownValue)
    }

    async setEffectiveLifeFieldValue(effectiveLifeFieldValue){
        return await page.setValue(effectiveLifeField, effectiveLifeFieldValue)
    }

    async isReassessmentCellDisplayed(){
        return await page.isElementDisplayed(reassessmentCell)
    }

    async getReassessmentCellText(){
        return await page.getElementText(reassessmentCell)
    }

    async clickReassessmentTaxBtn(){
        return await page.click(reassessmentTaxBtn)
    }

    async isReassessmentReversedCellDisplayed(){
        return await page.isElementDisplayed(reassessmentReversedCell)
    }

    async getReassessmentReversedCellText(){
        return await page.getElementText(reassessmentReversedCell)
    }

    async clickTransferToPoolBtn(){
        return await page.click(transferToPoolBtn)
    }

    async clickLowValuePoolRadioBtn(){
        return await page.click(lowValuePoolRadioBtn)
    }

    async clickSaveSettingsSetupPoolsBtn(){
        return await page.click(saveSettingsSetupPoolsBtn)
    }

    async selectPoolValue(){
        return await page.clickDropdownItemByIndex(pool, 1)
    }

    async isWrittenDownValueDisplayed(){
        return await page.isElementDisplayed(writtenDownValue)
    }

    async isAddToPoolCellDisplayed(){
        return await page.isElementDisplayed(addToPoolCell)
    }

    async getAddToPoolCellText(){
        return await page.getElementText(addToPoolCell)
    }

    async clickTransferToPoolTax(){
        return await page.click(transferToPoolTaxBtn)
    }

    async isLowValuePoolLinkDisplayed(){
        return await page.isElementDisplayed(lowValuePoolLink)
    }

    async isTransferToPoolReversedCellDisplayed(){
        return await page.isElementDisplayed(transferToPoolReversedCell)
    }

    async getTransferToPoolReversedCellText(){
        return await page.getElementText(transferToPoolReversedCell)
    }

    async clickAdjustmentBtn(){
        return await page.click(adjustmentBtn)
    }

    async selectFirstUseDateDropDownValue(firstUseDateDropDownValue){
        return await page.clickDropdownItemByIndex(firstUseDateDropDown, firstUseDateDropDownValue)
    }

    async selectDateReassessmentDropDown(dateReassessmentDropDownValue){
        return await page.clickDropdownItemByIndex(dateReassessmentDropDown, dateReassessmentDropDownValue)
    }

    async isNotesFieldDisplayed(){
        return await page.isElementDisplayed(notesField)
    }

    async setCostChangeFieldValue(costChangeFieldValue){
        return await page.setValue(costChangeField, costChangeFieldValue)
    }

    async setDepreciationChangeFieldValue(depreciationChangeFieldValue){
        return await page.setValue(depreciationChangeField, depreciationChangeFieldValue)
    }

    async isAdjustmentCellDisplayed(){
        return await page.isElementDisplayed(adjustmentCell)
    }

    async getAdjustmentCellText(){
        return await page.getElementText(adjustmentCell)
    }

    async clickAdjustmentTaxBtn(){
        return await page.click(adjustmentTaxBtn)
    }

    async isAdjustmentReversedCellDisplayed(){
        return await page.isElementDisplayed(adjustmentReversedCell)
    }

    async getAdjustmentReversedCellText(){
        return await page.getElementText(adjustmentReversedCell)
    }

    async clickReassessmentOfTaxableUseBtn(){
        return await page.click(reassessmentOfTaxableUseBtn)
    }

    async isTaxableUseCellDisplayed(){
        return await page.isElementDisplayed(taxableUseCell)
    }

    async getTaxableUseCellText(){
        return await page.getElementText(taxableUseCell)
    }

    async clickTaxableUseBtn(){
        return await page.click(taxableUseBtn)
    }

    async isTaxableUsageValueFieldDisplayed(){
        return await page.isElementDisplayed(taxableUsageValueField)
    }
    
    async setTaxableUsageValueFieldValue(taxableUsageValueFieldValue){
        return await page.setValue(taxableUsageValueField, taxableUsageValueFieldValue)
    }

    async isTaxableUseReversedCellDisplayed(){
        return await page.isElementDisplayed(taxableUseReversedCell)
    }

    async getTaxableUseReversedCellText(){
        return await page.getElementText(taxableUseReversedCell)
    }

    async clickAssetAccountsTabLink(){
        return await page.click(assetAccountsTabLink)
    }

    async clickRevaluationBtn(){
        return await page.click(revaluationBtn)
    }

    async setRevaluedAmountFieldValue(revaluedAmountFieldValue){
        return await page.setValue(revaluedAmountField, revaluedAmountFieldValue)
    }

    async isRevaluationCellDisplayed(){
        return await page.isElementDisplayed(revaluationCell)
    }

    async getRevaluationCellText(){
        return await page.getElementText(revaluationCell)
    }

    async clickRevaluationAccountsBtn(){
        return await page.click(revaluationAccountsBtn)
    }

    async isRevaluationReversedCellDisplayed(){
        return await page.isElementDisplayed(revaluationReversedCell)
    }

    async getRevaluationReversedCellText(){
        return await page.getElementText(revaluationReversedCell)
    }

    async selectRevalueAssetDateValue(revalueAssetDateValue){
        return await page.clickDropdownItemByIndex(revalueAssetDate, revalueAssetDateValue)
    }

    async clickImpairmentBtn(){
        return await page.click(impairmentBtn)
    }

    async setImpairedValueFieldValue(impairedValueFieldValue){
        return await page.setValue(impairedValueField, impairedValueFieldValue)
    }

    async selectImpairAssetDateValue(impairAssetDateValue){
        return await page.clickDropdownItemByIndex(impairAssetDate, impairAssetDateValue)
    }

    async isImpairmentCellDisplayed(){
        return await page.isElementDisplayed(impairmentCell)
    }

    async getImpairmentCellText(){
        return await page.getElementText(impairmentCell)
    }

    async clickImpairmentAccountsBtn(){
        return await page.click(impairmentAccountsBtn)
    }

    async isImpairmentReversedCellDisplayed(){
        return await page.isElementDisplayed(impairmentReversedCell)
    }

    async getImpairmentReversedCellText(){
        return await page.getElementText(impairmentReversedCell)
    }

    async clickAccountsAdjustmentBtn(){
        return await page.click(accountsAdjustmentBtn)
    }

    async getLocationTitleText(){
        return await page.getElementText(locationTitle)
    }

    async isLocationLabelDisplayed(){
        return await page.isElementDisplayed(locationLabel)
    }

    async isSerialNumberLabelDisplayed(){
        return await page.isElementDisplayed(serialNumberLabel)
    }

    async getSerialNumberTitleText(){
        return await page.getElementText(serialNumberTitle)
    }
    //
    async isRegisterInvitePanelDispalayed() {
        return await page.isElementDisplayed(registerInvitePanel)
    }

    async isExportJournalDropDownDisplayed() {
        return await page.isElementDisplayed(exportJournalDropDown)
    }

    async clickDeleteCurrentJournalBtn() {
        return await page.click(deleteCurrentJournalBtn)
    }

    async isAttachmentsFormExist() {
        return await (await page.getElement(attachmentsForm)).waitForExist({ reverse: true })
    }

    async isAddLinkFormExist() {
        return await (await page.getElement(addLinkForm)).waitForExist({ reverse: true })
    }

    async isLoadingImageDisplayed() {
        return await (await page.getElement(loadingImage)).waitForExist({ reverse: true })
    }

    async isDeleteJournalBtnDisplayed() {
        return await (await page.getElement(deleteJournalBtn)).isDisplayed()
    }

    async isFirstAttachmentExist() {
        return await (await page.getElement(firstAttachment)).waitForExist({ reverse: false })
    }

    async isInvitedUserEmailCellExist() {
        return await (await page.getElement(invitedUserEmailCell)).waitForExist({ reverse: true })
    }

    async isFirstJournalItemDisplayed() {
        return await page.isElementDisplayed(firstJournalItem)
    }

    async clickFirstJournalItemLink() {
        return await page.click(firstJournalItem)
    }

    async clickUserAccessDropDown() {
        return await page.click(userAccessDropDown)
    }

    async clickUserAccessRegisterRemoveBtn() {
        return await page.click(userAccessRegisterRemoveBtn)
    }

    async clickUserAccessOrgRemoveBtn() {
        return await page.click(userAccessOrgRemoveBtn)
    }
    async clickManageAccessBtn() {
        return await page.click(manageAccessBtn)
    }

    async getInvitedUserNameCellText() {
        return await page.getElementText(invitedUserNameCell)
    }

    async isInvitedUserNameCellDisplayed() {
        return await page.isElementDisplayed(invitedUserNameCell)
    }

    async getInvitedUserEmailCellText() {
        return await page.getElementText(invitedUserEmailCell)
    }

    async isInvitedUserEmailCellDisplayed() {
        return await page.isElementDisplayed(invitedUserEmailCell)
    }
    //
    async getInvitedUserRoleCellText() {
        return await page.getElementText(invitedUserRoleCell)
    }

    async isInvitedUserRoleCellDisplayed() {
        return await page.isElementDisplayed(invitedUserRoleCell)
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

    async isContractedGroupDropDownDisplayed() {
        return await (await page.getElement(contractedGroupDropDown)).isDisplayed()
    }

    async isAssetStatusDisplayed() {
        return await page.isElementDisplayed(assetStatus)
    }

    async isAssetStatusSoldDisplayed() {
        return await page.isElementDisplayed(assetStatusSold)
    }

    async isAssetStatusIsUseDispayed() {
        return await page.isElementDisplayed(assetStatusIsUse)
    }

    async getAssetStatusText() {
        return await page.getElementText(assetStatus)
    }

    async clickContractedGroupDropDown() {
        return await page.click(contractedGroupDropDown)
    }

    async isEditBtnDisplayed() {
        return await page.isElementDisplayed(editGroupBtn)
    }

    async isGroupTemplateBtnDisplayed() {
        return await (await page.getElement(createAssetGroupTemplateBtn)).isDisplayed()
    }

    async isFirstGroupListAssetsDropDownDisplayed() {
        return await page.isElementDisplayed(firstGroupListAssetsDropDown)
    }

    async getChangePlanText(text) {
        return await page.waitUntilElementIncludesText(organisationSettingsUpgradeBtn, text)
    }

    async isChangePlanBtnDisplayed() {
        return await page.isElementDisplayed(organisationSettingsUpgradeBtn)
    }

    async isChangePlanBtnClickable(){
        return await page.isElementClickable(organisationSettingsUpgradeBtn)
    }

    async isCurrentAccountPlanDispalyed() {
        return await page.isElementDisplayed(currentAccountPlan)
    }

    async isCurrentPaymentMethodAlertDisplayed() {
        return await page.isElementDisplayed(currentPaymentMethodAlert)
    }

    async clickPaymentUpgradeSubBtn() {
        return await page.click(paymentUpgradeSubBtn)
    }

    async clickRegisterSettingsLink() {
        return await page.click(registerSettingsLink)
    }

    async clickRegisterSettingsLinkOnly(){
        return await page.click(registerSettingsLinkOnly)
    }

    async clickRegisterSettingsWithXeroLink() {
        return await page.click(registerSettingsWithXeroLink)
    }

    async isRegisterSettingsDisplayed() {
        return await page.isElementDisplayed(registerSettingsLink)
    }

    async isRegisterSettingsLinkOnly(){
        return await page.isElementDisplayed(registerSettingsLinkOnly)
    }

    async isOrganisationSettingsExisting(){
        return await page.isElementExisting(organisationSettings)
    }

    async isOrganisationSettingsDisplayed(){
        return await page.isElementDisplayed(organisationSettings)
    }
        
    async isOrganisationSettingsClickable() {
        return await page.isElementClickable(organisationSettings)
    }

    async isOrganisationSettingsWithRegistersDisplayed(){
        return await page.isElementDisplayed(organisationSettingsWithRegisters)
    }

    async isInvintationAlertDisplayed() {
        return await page.isElementDisplayed(invintationAlert)
    }

    async getInvintationAlertText() {
        return await page.getElementText(invintationAlert)
    }

    async setEmailInviteFieldValue(emailInviteFieldInput) {
        return await page.setValue(emailInviteField, emailInviteFieldInput)
    }

    async isInviteUserFormDisplayed() {
        return await page.isElementDisplayed(inviteUserForm)
    }

    async clickInviteBtn() {
        return await page.click(inviteBtn)
    }

    async clickJournalLink() {
        return await page.click(journalLink)
    }

    async clickCloseBtn() {
        return await page.click(closeBtn)
    }

    async clickCancelRegisterBtn(){
        return await page.click(cancelRegisterBtn)
    }

    async clickRegistersLink() {
        return await page.click(registersLink)
    }

    async clickCreateFirstRegisterBtn() {
        return await page.click(createFirstRegisterBtn)
    }

    async isCreateFirstRegisterBtnDisplayed(){
        return await page.isElementDisplayed(createFirstRegisterBtn)
    }

    async clickUserProfileLink() {
        return await page.click(userProfileLink)
    }

    async clickLogoutProfileBtn() {
        return await page.click(logoutProfileBtn)
    }

    async setRegisterNameValue(registerNameInput) {
        return await page.setValue(registerName, registerNameInput)
    }

    async setRegisterEntityValue(entityNameInput) {
        return await page.setValue(entityName, entityNameInput)
    }

    async clickNextRegisterBtn() {
        return await page.click(nextRegisterBtn)
    }

    async clickTryForFreeBtn() {
        return await page.click(tryForFreeBtn)
    }

    async clickCreateARegisterBtn(){
        return await page.click(createARegisterBtn)
    }

    async clickRegisterSelectionDropDown() {
        return await page.click(registerSelection)
    }

    async clickAllRegistersLink() {
        return await page.click(allRegisters)
    }

    async clickCreateOrganisationSelectionDropDown() {
        return await page.click(organisationSelectionDropDown)
    }

    async clickCreateNewOrganisationLink() {
        return await page.click(createNewOrganisationLink)
    }

    async clickNewOrganisationSaveBtn() {
        return await page.click(newOrganisationSaveBtn)
    }

    async clickOrganisationSettingsLink() {
        return await page.click(organisationSettingsLink)
    }

    async isOrganisationSettingsLinkDisplayed(){
        return await page.isElementDisplayed(organisationSettingsLink)
    }

    async clickAssetsLink() {
        return await page.click(assetsLink)
    }

    async clickDeleteCofirmationOkBtn() {
        return await page.click(deleteConfirmationOkBtn)
    }

    async selectCountryValue() {
        return await page.clickDropdownItemByIndex(selectCountry, 1)
    }

    async setOrganisationNameField(organisationNameFieldInput) {
        return await page.setValue(organisationNameField, organisationNameFieldInput)
    }

    async setOrganisationDescriptionField(organisationDescriptionFieldInput) {
        return await page.setValue(organisationDescriptionField, organisationDescriptionFieldInput)
    }

    async setBillingContactNameField(billingContactNameFieldInput) {
        return await page.setValue(billingContactNameField, billingContactNameFieldInput)
    }

    async setBillingContactEmailField(billingContactEmailFieldInput) {
        return await page.setValue(billingContactEmailField, billingContactEmailFieldInput)
    }

    async setBillingContactPhoneField(billingContactPhoneFieldInput) {
        return await page.setValue(billingContactPhoneField, billingContactPhoneFieldInput)
    }

    async isCreateNewOrganisationFormDisplayed() {
        return await page.isElementDisplayed(createNewOrganisationForm)
    }

    async isCreateNewRegisterFormDisplayed() {
        return await page.isElementDisplayed(createNewRegisterForm)
    }

    async isRegisterNameFieldDisplayed() {
        return await page.isElementDisplayed(registerName)
    }

    async isEntityNameFieldDisplayed() {
        return await page.isElementDisplayed(entityName)
    }

    async isDeleteConfirmationTitleDisplayed() {
        return await page.isElementDisplayed(deleteConfirmationTitle)
    }

    async getCurrentOrganisationNamesListText() {
        return await page.getElementText(organisationNamesList)
    }

    async isDemoRegisterLinkDisplayed() {
        return await page.isElementDisplayed(demoRegisterLink)
    }

    async isSettingsHeaderWithExistingRegDisplayed() {
        return await page.isElementDisplayed(settingsHeaderWithExistingReg)
    }

    async getSettingsHeaderWithExistingRegText() {
        return await page.getElementText(settingsHeaderWithExistingReg)
    }

    async getDemoRegisterText() {
        return await page.getElementText(demoRegisterLink)
    }
}
module.exports = new DevAssetMainpage();