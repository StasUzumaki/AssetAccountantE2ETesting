const page = require('./page')

const assetGroupNameBlankField = '//div/div/div[2]/div[1]/input[1]'
const assetGroupDescriptionBlankField = '//div/div/div[2]/div[1]/input[2]'
const assetGroupBlankSaveBtn = '//div/div[1]/div[2]/div/button'
const blankTaxMethodDropDown = '//div[1]/div[1]/select'
const blankAccountsMethodDropDown = '//app-depreciation-method-selector/div[2]/div/select'
const blankAccountsEffectiveLifeField = '//app-autocalc-life/div/input'
const buildingsTemplateAssetForm = '//div[1]/label[1]/div'
const buildingsTemplateCheckBox = '//*[@id="check[0]"]'
const capitalWorksTemplateCheckBox = '//*[@id="check[1]"]'
const assetsGroupFromTemplateForms = '[class="CheckboxGrid pb-3"]'
const newAssetGroupFromTemplateTitle = '[class="pe-2 me-auto"]'
const newAssetTitle = '[class="pe-2 me-auto"] h3'
const templateSaveBtn = '[class="btn btn-primary mb-3"]'
const successSavedAlertMessage = '[class="alert-message"] p'
const exitBtn = '[routerlink="../../assets"]'
const editGroupBtn = '[title="Edit Group"]'
const deleteGroupBtn = '[name="trash2"]'
const nameGroupField = '//app-standard-page-content[2]/div/div/div[2]/div[1]/input[1]'
const descriptionGroupFiled = '//app-standard-page-content[2]/div/div/div[2]/div[1]/input[2]'
const assetGroupBlankAlert = '[role="alertdialog"][aria-live="polite"]'
const assetGroupCardSection = '[class="row view-section"]'
const depreciationForm = '//div/div[2]/app-depreciation-method-selector'
const taxDepreciationForm = '//div[2]/app-depreciation-method-selector/div[1]'
const accountsDepreciationForm = '//div[2]/app-depreciation-method-selector/div[2]'
const newAssetSaveBtn = '[class="btn btn-primary mb-2 ms-2"]'
const taxDepreciationMethodDropDown = '//app-depreciation-method-selector/div[1]/div[1]/select'
const taxDepreciationEffectiveLife = '//div[1]/div[2]/app-autocalc-life/div/input'
const accountsDepreciationMethodDropDown = '//app-depreciation-method-selector/div[2]/div[1]/select'
const accountsDepreciationEffectiveLife = '//div[2]/div[2]/app-autocalc-life/div/input'
const generalLedgerEditBtn = '//app-standard-page-content/div/div[1]/div/div/button'
const clearingSuspenceDropDown = '//*[@id="Clearing/Suspense"]'
const costDropDown = '//*[@id="Cost"]'
const accumulatedDepreciationDropDown = '//*[@id="Accumulated Depreciation"]'
const depreciationExpenseDropDown = '//*[@id="Depreciation Expense"]'
const immediateClaimDropDown = '//*[@id="Immediate Claim"]'
const profitOnDisposalDropDown = '//*[@id="Profit on Disposal"]'
const lossOnDisposalDropDown = '//*[@id="Loss on Disposal"]'
const revaluationReserveDropDown = '//*[@id="Revaluation Reserve"]'
const accumulatedImpairmentDropDown = '//*[@id="Accumulated Impairment"]'
const revaluationLossDropDown = '//*[@id="Revaluation Loss"]'
const impairmentLossDropDown = '//*[@id="Impairment Loss"]'
const currentLeaseLiabilityDropDown = '//*[@id="Current Lease Liability"]'
const nonCurrentLeaseLiabilityDropDown = '//*[@id="Non Current Lease Liability"]'
const leasePaymentClearingDropDown = '//*[@id="Lease Payment Clearing"]'
const currentUnexpiredInterestDropDown = '//*[@id="Current Unexpired Interest"]'
const nonCurrentUnexpiredInterestDropDown = '//*[@id="Non Current Unexpired Interest"]'
const interestChargeDropDown = '//*[@id="Interest Charge"]'
const profitOnTerminationOfLeaseDropDown = '//*[@id="Profit on Termination of Lease"]'
const lossOnTerminationOfLeaseDropDown = '//*[@id="Loss on Termination of Lease"]'
const generalLedgerSaveBtn = '//form/div[2]/button[2]'

class AssetGroupPage {
    async clickGeneralLedgerSaveBtn() {
        return await page.click(generalLedgerSaveBtn)
    }
    
    async selectLossOnTerminationOfLeaseDropDownValue(lossOnTerminationOfLeaseDropDownValue) {
        return await page.clickDropdownItemByIndex(lossOnTerminationOfLeaseDropDown, lossOnTerminationOfLeaseDropDownValue)
    }
    
    async selectProfitOnTerminationOfLeaseDropDownValue(profitOnTerminationOfLeaseDropDownValue) {
        return await page.clickDropdownItemByIndex(profitOnTerminationOfLeaseDropDown, profitOnTerminationOfLeaseDropDownValue)
    }
    
    async selectInterestChargeDropDownValue(interestChargeDropDownValue) {
        return await page.clickDropdownItemByIndex(interestChargeDropDown, interestChargeDropDownValue)
    }
    
    async selectNonCurrentUnexpiredInterestDropDownValue(nonCurrentUnexpiredInterestDropDownValue) {
        return await page.clickDropdownItemByIndex(nonCurrentUnexpiredInterestDropDown, nonCurrentUnexpiredInterestDropDownValue)
    }
    
    async selectCurrentUnexpiredInterestDropDownValue(currentUnexpiredInterestDropDownValue) {
        return await page.clickDropdownItemByIndex(currentUnexpiredInterestDropDown, currentUnexpiredInterestDropDownValue)
    }
    
    async selectLeasePaymentClearingDropDownValue(leasePaymentClearingDropDownValue) {
        return await page.clickDropdownItemByIndex(leasePaymentClearingDropDown, leasePaymentClearingDropDownValue)
    }
    
    async selectNonCurrentLeaseLiabilityDropDownValue(nonCurrentLeaseLiabilityDropDownValue) {
        return await page.clickDropdownItemByIndex(nonCurrentLeaseLiabilityDropDown, nonCurrentLeaseLiabilityDropDownValue)
    }
    
    async selectCurrentLeaseLiabilityDropDownValue(currentLeaseLiabilityDropDownValue) {
        return await page.clickDropdownItemByIndex(currentLeaseLiabilityDropDown, currentLeaseLiabilityDropDownValue)
    }
    
    async selectImpairmentLossDropDownValue(impairmentLossDropDownValue) {
        return await page.clickDropdownItemByIndex(impairmentLossDropDown, impairmentLossDropDownValue)
    }
    
    async selectRevaluationLossDropDownValue(revaluationLossDropDownValue) {
        return await page.clickDropdownItemByIndex(revaluationLossDropDown, revaluationLossDropDownValue)
    }
    
    async selectAccumulatedImpairmentDropDownValue(accumulatedImpairmentDropDownValue) {
        return await page.clickDropdownItemByIndex(accumulatedImpairmentDropDown, accumulatedImpairmentDropDownValue)
    }
    
    async selectRevaluationReserveDropDownValue(revaluationReserveDropDownValue) {
        return await page.clickDropdownItemByIndex(revaluationReserveDropDown, revaluationReserveDropDownValue)
    }
    
    async selectLossOnDisposalDropDownValue(lossOnDisposalDropDownValue) {
        return await page.clickDropdownItemByIndex(lossOnDisposalDropDown, lossOnDisposalDropDownValue)
    }

    async selectProfitOnDisposalDropDownValue(profitOnDisposalDropDownValue) {
        return await page.clickDropdownItemByIndex(profitOnDisposalDropDown, profitOnDisposalDropDownValue)
    }
    
    async selectImmediateClaimDropDownValue(immediateClaimDropDownValue) {
        return await page.clickDropdownItemByIndex(immediateClaimDropDown, immediateClaimDropDownValue)
    }
    
    async selectDepreciationExpenseValue(depreciationExpenseDropDownValue) {
        return await page.clickDropdownItemByIndex(depreciationExpenseDropDown, depreciationExpenseDropDownValue)
    }
    
    async selectAccumulatedDepreciationDropDownValue(accumulatedDepreciationDropDownValue) {
        return await page.clickDropdownItemByIndex(accumulatedDepreciationDropDown, accumulatedDepreciationDropDownValue)
    }
    
    async selectCostDropDownValue(costDropDownValue) {
        return await page.clickDropdownItemByIndex(costDropDown, costDropDownValue)
    }
    
    async selectClearingSuspenceDropDownValue(clearingSuspenceDropDownValue) {
        return await page.clickDropdownItemByIndex(clearingSuspenceDropDown, clearingSuspenceDropDownValue)
    }
    
    async clickGeneralLedgerEditBtn() {
        return await page.click(generalLedgerEditBtn)
    }

    async setAccountsDepreciationEffectiveLifeValue(accountsDepreciationEffectiveLifeValue) {
        return await page.setValue(accountsDepreciationEffectiveLife, accountsDepreciationEffectiveLifeValue)
    }
    
    async selectAccountsDepreciationMethodDropDownValue(accountsDepreciationMethodDropDownValue) {
        return await page.clickDropdownItemByIndex(accountsDepreciationMethodDropDown, accountsDepreciationMethodDropDownValue)
    }
    
    async setTaxDepreciationEffectiveLifeValue(taxDepreciationEffectiveLifeInput) {
        return await page.setValue(taxDepreciationEffectiveLife, taxDepreciationEffectiveLifeInput)
    }
    
    async selectTaxDepreciationMethodDropDownValue(taxDepreciationMethodDropDownValue) {
        return await page.clickDropdownItemByIndex(taxDepreciationMethodDropDown, taxDepreciationMethodDropDownValue)
    }
    
    async clickNewAssetSaveBtn() {
        return await page.click(newAssetSaveBtn)
    }
    
    async isAccountsDepreciationFormDisplayed() {
        return await page.isElementDisplayed(accountsDepreciationForm)
    }
    
    async isTaxDepreciationFormDisplayed() {
        return await page.isElementDisplayed(taxDepreciationForm)
    }
    
    async isDepreciationFormDisplayed() {
        return await page.isElementDisplayed(depreciationForm)
    }

    async isAssetCardSectionDisplayed() {
        return await page.isElementDisplayed(assetGroupCardSection)
    }
    
    async getAssetGroupBlankAlertText() {
        return await page.getElementText(assetGroupBlankAlert)
    }
    
    async isAssetGroupBlankAlertDisplayed() {
        return await page.isElementDisplayed(assetGroupBlankAlert)
    }
    
    async isDescriptionGroupFieldDisplayed() {
        return await page.isElementDisplayed(descriptionGroupFiled)
    }
    
    async isNameGroupFieldDisplayed() {
        return await page.isElementDisplayed(nameGroupField)
    }
    
    async clickDeleteGroupBtn() {
        return await page.click(deleteGroupBtn)
    }
    
    async clickEditGroupBtn() {
        return await page.click(editGroupBtn)
    }
    
    async isEditBtnDisplayed() {
        return await page.isElementDisplayed(editGroupBtn)
    }

    async clickExitBtn() {
        return await page.click(exitBtn)
    }

    async getSuccessfullySavedAlertMessageText() {
        return await page.getElementText(successSavedAlertMessage)
    }

    async isSuccessfullySavedAlertMessageDisplayed() {
        return await page.isElementDisplayed(successSavedAlertMessage)
    }
    
    async clickTemplateSaveBtn() {
        return await page.click(templateSaveBtn)
    }

    async isNewAssetTitleDisplayed() {
        return await page.isElementDisplayed(newAssetTitle)
    }

    async isNewAssetGroupFromTemplateTitleDisplayed() {
        return await page.isElementDisplayed(newAssetGroupFromTemplateTitle)
    }

    async getNewAssetGroupFromTemplateTitleText() {
        return await page.getElementText(newAssetGroupFromTemplateTitle)
    }
    
    async isAssetsGroupFromTemplateFormsDisplayed() {
        return await page.isElementDisplayed(assetsGroupFromTemplateForms)
    }

    async clickCapitalWorksTemtplateCheckBox() {
        return await page.click(capitalWorksTemplateCheckBox)
    }

    async clickBuidlingsTemtplateCheckBox() {
        return await page.click(buildingsTemplateCheckBox)
    }

    async clickBuidlingsTemtplateAssetForm() {
        return await page.click(buildingsTemplateAssetForm)
    }
    
    async isBuildingsTemplateAssetFormClickable() {
        return await page.isElementClickable(buildingsTemplateAssetForm)
    }

    async clickAssetGroupBlankSaveBtn() {
        return await page.click(assetGroupBlankSaveBtn)
    }

    async setBlankAccountsEffectiveLifeFieldValue(blankAccountsEffectiveLifeFieldValue){
        return await page.setValue(blankAccountsEffectiveLifeField, blankAccountsEffectiveLifeFieldValue)
    }

    async selectBlankAccountsMethodDropDownValue(blankAccountsMethodDropDownValue){
        return await page.clickDropdownItemByIndex(blankAccountsMethodDropDown, blankAccountsMethodDropDownValue)
    }

    async selectBlankTaxMethodDropDownValue(blankTaxMethodDropDownValue){
        return await page.clickDropdownItemByIndex(blankTaxMethodDropDown, blankTaxMethodDropDownValue)
    }

    async setAssetGroupDescriptionBlankFieldValue(assetGroupDescriptionBlankFieldInput) {
        return await page.setValue(assetGroupDescriptionBlankField, assetGroupDescriptionBlankFieldInput)
    }

    async isAssetGroupDescriptionFieldDisplayed() {
        return await page.isElementDisplayed(assetGroupDescriptionBlankField)
    }

    async isAssetGroupNameFieldDisplayed() {
        return await page.isElementDisplayed(assetGroupNameBlankField)
    }

    async setAssetGroupNameBlankFieldValue(assetGroupNameBlankFieldInput) {
        return await page.setValue(assetGroupNameBlankField, assetGroupNameBlankFieldInput)
    }

}

module.exports = new AssetGroupPage();