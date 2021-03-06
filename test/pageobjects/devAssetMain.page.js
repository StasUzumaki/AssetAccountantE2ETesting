const page = require('./page')

const saveBtn = '[type="submit"]'
const userProfileLink = '#user-profile'
const userProfileName = '//*[@id="user-profile"]/span'
const logoutProfileBtn = '//*[@id="avatar-dropdown-menu"]/button[3]'
const assetsAddBtn = '//app-view-asset-actions/div/button'
const createAssetBtn = '[routerlink="./new"]'
const createFirstRegisterBtn = '//*[@class="col-6 col-lg-3 demo-action"]/button'
const createRegisterBtn = '//div/div[2]/div/button[3]'
const createARegisterBtn = '//app-alert/div/div[2]/button'
const createNewRegisterForm = '[class="modal-content"]'
const tableWithRegisters = '//tbody/tr'
const tableWithAssets = '[class="ag-cell-wrapper ag-row-group-leaf-indent ag-row-group-indent-1"]'
const tableWithJournals = '[class="JournalItem-content"]'
const firstJournalItem = '//ul/li[1]/div[2]/a'
const registerName = '[formcontrolname="name"]'
const entityName = '[formcontrolname="entityName"]'
const nextRegisterBtn = '[class="btn btn-primary ms-2"]'
const tryForFreeBtn = '//*[contains(text(), "Try For Free")]'
const demoRegisterBtn = '//div[2]/div/button[2]'
const registerSelection = '#register-selection'
const organisationSelectionDropDown = '#org-selection'
const createNewOrganisationLink = '//*[contains(text(), " Create new organisation")]'
const registersLink = '//nav/section[2]/a'
const organisationSettingsUpgradeBtn = '//app-payment-settings/div[1]/div/button'
const allRegisters = '[class="dropdown-item text-primary"]'
const firstRegisterLink = '//table/tbody/tr/td[2]/a'
const secondRegisterLink = '//table/tbody/tr[2]/td[2]/a'
const registersTable = '//app-standard-page-content-grid/table'
const secondDropDownToggle = '//table/tbody/tr[2]/td[4]/div/button'
const secondAchiveBtn = '//table/tbody/tr[2]/td[4]/div/div/button[3]'
const dropDownRegisterMenu = '#dropdownBasic1'
const archiveBtn = '//*[contains(text(), "Archive")]'
const manageAccessBtn = '//*[contains(text(), "Manage")]'
const archiveConfirmationOkBtn = `//*[@class='modal-footer']/button[2]`
const successArchivedRegisterMessage = '[aria-label*="Register "]'
const newAssetNameField = '//app-form-control[1]/div/div[2]/input'
const newAssetCodeNumberField = '//app-form-control[2]/div/div[2]/input'
const newAssetDescriptionField = '[formcontrolname="description"]'
const newAssetGroupSelect = '//app-asset-group-selector/select'
const newAssetCostField = '//app-currency-input/div/input'
const newAssetPurchaseDate = '//app-form-control[6]/div/div[2]/app-date-input/div/input'
const newAssetQuantity = '[formcontrolname="quantity"]'
const newAssetQuantityUnitsSelect = '//div/div[2]/div/select'
//
const orgDetailsName = '//app-general-settings/form/div/div[2]/div[1]//input'
const orgDetailsDescription = '[formcontrolname="description"]'
const billingName = '//form/div/div[2]/div[2]/app-form-control[1]/div/div[2]/input'
const billingEmail = '//form/div/div[2]/div[2]/app-form-control[2]/div/div[2]/input'
const billingPhone = '//form/div/div[2]/div[2]/app-form-control[3]/div/div[2]/input'
const createNewOrganisationForm = '[class="modal-content"]'
const organisationNameField = '//form/div[1]/app-form-control[1]/div/div[2]/input'
const organisationDescriptionField = '//form/div[1]/app-form-control[2]/div/div[2]/input'
const selectCountry = '//app-form-control[3]/div/div[2]/select'
const billingContactNameField = '//form/div[1]/div/app-form-control[1]/div/div[2]/input'
const billingContactEmailField = '//form/div[1]/div/app-form-control[2]/div/div[2]/input'
const billingContactPhoneField = '//form/div[1]/div/app-form-control[3]/div/div[2]/input'
const newOrganisationSaveBtn = '//div[@class="modal-footer"]/button[2]'
const organisationNamesList = '//nav/section[2]/div/div'
const demoRegisterLink = '[class="link ng-star-inserted"]'
const settingsHeader = '[class="page-heading ng-star-inserted"] h3'
const settingsHeaderWithExistingReg = '[class="page-heading"] h3'
const assetsLink = '[href*="/assets"]'
const firstThingsFirstAlertMessage = '[class="alert-message"]'
const createAssetGroupTemplateBtn = '[routerlink*="template"]'
const createAssetGroupBlankBtn = '[routerlink="../assetgroups/new"]'
const assetGroupNameBlankField = '//div/div/div[2]/div[1]/input[1]'
const assetGroupDescriptionBlankField = '//div/div/div[2]/div[1]/input[2]'
const blankTaxMethodDropDown = '//div[1]/div[1]/select'
const blankAccountsMethodDropDown = '//app-depreciation-method-selector/div[2]/div/select'
const blankAccountsEffectiveLifeField = '//app-autocalc-life/div/input'
const assetGroupBlankSaveBtn = '//div/div[1]/div[2]/div/button'
const buildingsTemplateAssetForm = '//div[1]/label[1]/div'
const buildingsTemplateCheckBox = '//*[@id="check[0]"]'
const capitalWorksTemplateAssetForm = '//div[1]/label[2]/div'
const capitalWorksTemplateCheckBox = '//*[@id="check[1]"]'
const assetsGroupFromTemplateForms = '[class="CheckboxGrid pb-3"]'
const newAssetGroupFromTemplateTitle = '[class="pe-2 me-auto"]'
const newAssetTitle = '[class="pe-2 me-auto"] h3'
const templateSaveBtn = '[class="btn btn-primary mb-3"]'
const successSavedAlertMessage = '[class="alert-message"] p'
const exitBtn = '[routerlink="../../assets"]'
const editGroupBtn = '[title="Edit Group"]'
const deleteGroupBtn = '[name="trash2"]'
const deleteConfirmationOkBtn = `//*[@class='modal-footer']/button[2]`
const nameGroupField = '//app-standard-page-content[2]/div/div/div[2]/div[1]/input[1]'
const descriptionGroupFiled = '//app-standard-page-content[2]/div/div/div[2]/div[1]/input[2]'
const deleteConfirmationTitle = '//*[contains(text(), "Delete Confirmation")]'
const assetsGroupList = 'div[class="ag-pinned-left-cols-container"] [row-id*="GROUP"]'
const assetGroupBlankAlert = '[role="alertdialog"][aria-live="polite"]'
const assetGroupCardSection = '[class="row view-section"]'
const depreciationForm = '//div/div[2]/app-depreciation-method-selector'
const taxDepreciationForm = '//div[2]/app-depreciation-method-selector/div[1]'
const accountsDepreciationForm = '//div[2]/app-depreciation-method-selector/div[2]'
const newAssetSaveBtn = '[class="btn btn-primary mb-2 ms-2"]'
//register settings link
const registerSettingsLink = '//nav/section[3]/div/a[5]'
const registerSettingsWithXeroLink = '//nav/section[3]/div/a[6]'
const integrationsLink = '//form/div/ul/li[4]/a'
const classificationLink = '//form/div/ul/li[3]/a'
//organisation settings link
const invitedUserEmailCell = '//*/table/tbody/tr[2]/td[2]'
const invitedUserNameCell = '//*/table/tbody/tr[2]/td[1]/label'
const invitedUserRoleCell = '//table/tbody/tr[2]/td[3]/label'
const userAccessDropDown = '//table//tr[2]//td[4]/div/div/div/button'
const userAccessRegisterRemoveBtn = '//table//tr[2]//td[4]/div/div/div//div/button'
const userAccessOrgRemoveBtn = '//table//tr[2]//td[4]/div/div/div//div/button[2]'
const organisationSettingsLink = '//nav/section[3]/div/a[4]'
const organisationSettings = '//nav/section[3]/div/a[4] [contains(text(), " Settings")]'
const subscriptionAndPaymentLink = '//*[contains(text(), "Subscription") and @class="nav-link"]'
const usersLink = '//*[contains(text(), "Users") and @class="nav-link"]'
const inviteUserBtn = '[class="horizontal-wrap align-items-start"] button'
const registerInvitePanel = '[class="table ng-star-inserted"]'
const inviteUserForm = '//div/div//form'
const emailInviteField = '//div/div[2]/input'
const registerCheckBoxForInvite = '//table/tbody/tr[2]//input'
const registerRoleDropDownMenu = '//form/div[2]/table/tbody/tr[2]/td[4]/div'
const registerUserRoleBtn = '//table/tbody/tr[2]/td[4]/div/div/button[2]'
const registerSettingsRoleDropDownMenu = '//div/div[2]/div/button'
const registerSettingsUserRoleBtn = '//div/div[2]/div/div/button[2]'
const inviteBtn = '//form/div[3]/button[2]'
const invintationAlert = '[role="alertdialog"][aria-live="polite"]'
const paymentForm = '[class="form-check"]'
const subscriptionForm = '[class="modal-content"]'
const toggleForAccountingFirms = '[class="switch"]'
const closeBtn = '[class="btn-close"]'
const cancelRegisterBtn = '//form/div[2]/button[1]'
const cancelArchiveRegisterBtn = '//div[3]/button[1]'
const standartChangePlanBtn = '//div[3]//div/button'
const paymentMethodForm = '//ngb-modal-window[2]/div/div'
const paymentUpgradeSubBtn = '[class="modal-footer"] button'
const currentAccountPlan = '[class="card p-4 border"]'
const currentPaymentMethodAlert = '[class="alert-message"]'
//paymentDetails
const cardNumberField = '//*[@id="root"]/form/span[2]/div/div[2]/span/input'
const cardExpiryField = '//*[@id="root"]/form/span[2]/span/input'
const cvcField = '//*[@id="root"]/form/span[2]/span/input'
const cardNumberInput = '//app-form-control[1]/div/div[2]/label'
const cardExpiryInput = '//app-form-control[2]/div/div[2]/label'
const cvcInput = '//app-form-control[3]/div/div[2]/label'
//asset
const assetStatus = '//app-standard-page-content-grid/div/div[1]/span/span'
const assetStatusSold = '[class="badge asset-status rounded-pill bg-dark"]'
const assetStatusIsUse = '[class="badge asset-status rounded-pill bg-success"]'
const contractedGroupDropDown = '//*/div[1]/div[1]/div/span/span[2]'
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
const taxViewForm = '//app-standard-page-content/div'
const taxDepreciationNotesField = '#reassessmentNotes'
const selfAssessedCheckBox = '#asset-setting-1'
const firstGroupLink = '//ng-component/div/div/div/a'
const firstAssetLink = '//*/div/div[2]/div[2]/div[3]/div[1]/div[2]/div/span/span[4]/ng-component/div/div[1]/a'//'//ng-component/div/div[1]/a'
const firstGroupListAssetsDropDown = '//*[@id="ngb-nav-21-panel"]/app-assets-grid//div[3]/div[1]/div[1]/div/span/span[2]'
const subscriptionLimitAlert = '[class="alert-message"]'
const newAssetUpgradeBtn = '//app-alert/div/div[2]/button'
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
const effectiveLifeField = '//app-autocalc-life/div/input'
const effectiveLifeDropDown = '//app-autocalc-life/select'
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
//journal
const journalLink = '[href*="/journals"]'
const createBtn = '//app-standard-page-content/div//div/div[2]/button'
const createJournalForm = '//app-side-panel/div'
const deleteJournalBtn = '//ul/li/div[3]/button'
const deleteCurrentJournalBtn = '//app-standard-page-content-actions/div/div[2]/button'
const exportJournalDropDown = '//*[@id="export-button"]'
const createJournalBtn = '//app-create-journal/form/button'
const journalTitle = '[class="pe-2 me-auto"]'
const journalDescriptionField = '//div/div[2]/input'
const currentlyJournals = '//app-standard-page-content-grid/div/em'
const accountTypeCostCell = '//*[contains(text(), "Cost") and @col-id="glAccountDisplayName" ]'
const accountTypeClearingSuspenseCell = '//*[contains(text(), "Clearing") and @col-id="glAccountDisplayName"]'
const loadingImage = '[role="status"]'
const postToXeroBtn = '//div/div[2]/button[2]'
const chooseTransactionForm = '//div/div[2]/app-post-journal'
const postBtn = '//app-post-journal/form/div/button[1]'
const depreciationCheckBox = '//*[@id="include-depreciation"]'
const purchasesCheckBox = '//*[@id="include-purchases"]'
const successfulllyPostedToXeroAlert = '[class="alert-message"]'
const successfulllyPostedToExcelAlert = '[class="alert-message"]'
const viewJournalInXeroLink = '//app-alert/div/div[2]/p[2]/a'
const exportDropDown = '//*[@id="export-button"]'
const exportAsExcelBtn = '//app-export-button/div/div/button[1]'
//report
const calendarBtn = '#calendar-selection'
const periodsForm = '[aria-labelledby="calendar-selection"]'
const currentFyBtn = '//div/div[3]/button[1]'
const reportsBtn = '//app-view-asset-actions/button[2]'
const reportForm = '//ng-component/form'
const reportTypeDropDown = '[formcontrolname="reportType"]'
const reportFormatDropDown = '[formcontrolname="format"]'
const generateReportBtn = '//form/div[3]/button[2]'
const reportStartDate = '//app-form-control[3]//input'
const reportEndDate = '//app-form-control[4]//input'
//lease
const createHpLeaseAssetBtn = '[routerlink="./new-rou"]'
const newLeaseAssetForm = '//app-standard-page-content[1]/div/div'
const paymentLeaseAssetForm = '//app-standard-page-content[2]/div/div'
const amountLeaseForm = '//app-standard-page-content[3]/div/div'
const leaseNameField = '[formcontrolname="name"]'
const leaseCodeNumberField = '[formcontrolname="code"]'
const leaseDescrField = '[formcontrolname="description"]'
const leaseGroupSelect = '//app-asset-group-selector/select'
const hirePurchaseYesBtn = '[for="hirePurchase-yes"]'
const hirePurchaseNoBtn = '[for="hirePurchase-no"]'
const leaseStartDate = '[formcontrolname="acquisitionDate"] input'
const leaseFirstUseDate = '[formcontrolname="firstUseDate"] input'
const leaseQuantityField = '[formcontrolname="quantity"]'
const leaseQuantityUnitsSelect = '//div//div/select'
const paymentDateField = '[formcontrolname="paymentDate"] input'
const paymentPrincipalField = '[formcontrolname="principal"] input'
const paymentInterestField = '[formcontrolname="interest"] input'
const paymentOtherField = '[formcontrolname="other"] input'
const leaseSaveBtn = '//form/div/div/button'
const leaseTaxDepreciationForm = '//app-depreciation-method-selector/div[1]'
const leaseAccountsDepreciationForm = '//app-depreciation-method-selector/div[2]'
const leaseColumnHeader = '[col-id="LeaseGroup_0"]'
const assetColumnHeader = '[col-id="AssetGroup_0"]'
const alertMessageGenerateScheduleBtn = '[class="alert-message"] button'
const generatePaymentScheduleForm = '//app-side-panel/div'
const generatePaymentScheduleTitle = '//app-side-panel/div//h3'
const amountFinancedField = '[formcontrolname="amountFinanced"] input'
const amountCapitalisedField = '[formcontrolname="amountCapitalised"] input'
const addPaymentsBtn = '//form/div[3]/div[1]/button'
const firstLeasePaymentField = '//form/div[2]/div[1]/div[2]//input'
const firstFrequencyDropDown = '//form/div[2]/div[1]/div[4]/div/select'
const secondLeasePaymentField = '//form/div[2]/div[2]/div[2]//input'
const secondFrequencyDropDown = '//form/div[2]/div[2]/div[4]/div/select'
const secondQuantityField = '//form/div[2]/div[2]/div[4]/div[1]/input'
const generateScheduleBtn = '//div[3]/div[2]/button[1]'
const useScheduleBtn = '//div[3]/div[2]/button[2]'
const paymentScheduleTable = '//app-generate-payment-schedule/table'
//quickbook connection
const tryAgainBtn = '//div/div/div[1]/div[2]/div/a'
const newOrganisationSelect = '#organisationId'
const quickbooksConnectBtn = '//app-quickbooks-select-register//button[2]'
const quickbooksAlertMessage = '[class="alert-message"]'
const quickbooksDisconnectBtn = '//div/div/app-alert/div/div[2]/div/button'
const disconnectConfirmationForm = '[class="modal-content"]'
const disconnectConfirmationBtn = '//ng-component/div[3]/button[2]'
const externalIntegrationForm = '//app-view-integrations/div'
//classification
const addClassificationBtn = '//*[contains(text(), "Add Classification")]'
const classificationNameField = '[formcontrolname="name"]'
const firstOptionField = '//div[2]/div/div[1]/div/input'
const secondOptionField = '//div[2]/div/div[2]/div/input'
const thirdOptionField = '//div[2]/div/div[3]/div/input'
const fourthOptionField = '//div[2]/div/div[4]/div/input'
const fifthOptionField = '//div[2]/div/div[5]/div/input'
const firstClassification = '//app-standard-page-content-grid/div/ul/li[1]'
const secondClassification = '//app-standard-page-content-grid/div/ul/li[2]'
const firstClassificationDropDown = '//app-edit-field-allocations[1]//div[2]/div/div[1]/select'
const secondClassificationDropDown = '//app-edit-field-allocations[2]//div[2]/div/div[1]/select'
const firstClassificationAddedCell = '//div[4]//child-cell/div[1]/div'
const secondClassificationAddedCell = '//div[5]//child-cell/div[1]/div'
const firstClassificationTransferLink = '//div[2]/div[1]/div/a'
const secondClassificationTransferLink = '//div[2]/div[2]/div/a'
const transferEffectiveDate = '//app-period-selector/select'
const transferClassificationDropDown = '//div/div[2]/div/div[1]/select'
const firstClassificationUpdatedCell = '//div[3]/div[2]/div/div/div[6]/div[2]'
const secondClassificationUpdatedCell = '//div[3]/div[2]/div/div/div[7]/div[2]'
const reverseTransferBtn = '//app-standard-page/app-standard-page-content//div/div[2]/div[1]/div/button[3]'
//integration 
const quickbooksOnlineDropDown = '//*[@id="static-1-header"]/button'
const connectToQuickBooksBtn = '//app-quickbooks-connect/div/input'
const xeroDropDown = '//*[@id="static-3-header"]/button'
const connectToXeroBtn = '//app-xero-connect/input'
const xeroDisconnectBtn = '//app-alert/div/div[2]/div/button'
const xeroAlertMessage = '[class="alert-message"]'
const setUptoUseForm = '//div/div/div/div[2]/form'
const setUpToUseConnectBtn = '//form/div[2]/div[1]/button[2]'
//general ledger accounts
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

class DevAssetMainpage {

    //general ledger accounts
    async setAccountsDepreciationEffectiveLifeValue(accountsDepreciationEffectiveLifeValue) {
        return await page.setValue(accountsDepreciationEffectiveLife, accountsDepreciationEffectiveLifeValue)
    }

    async setTaxDepreciationEffectiveLifeValue(taxDepreciationEffectiveLifeInput) {
        return await page.setValue(taxDepreciationEffectiveLife, taxDepreciationEffectiveLifeInput)
    }

    async selectAccountsDepreciationMethodDropDownValue(accountsDepreciationMethodDropDownValue) {
        return await page.clickDropdownItemByIndex(accountsDepreciationMethodDropDown, accountsDepreciationMethodDropDownValue)
    }

    async selectTaxDepreciationMethodDropDownValue(taxDepreciationMethodDropDownValue) {
        return await page.clickDropdownItemByIndex(taxDepreciationMethodDropDown, taxDepreciationMethodDropDownValue)
    }

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
    //
    async isXeroAlertMessageDisplayed() {
        return await page.isElementDisplayed(xeroAlertMessage)
    }

    async getXeroAlertMessageText() {
        return await page.getElementText(xeroAlertMessage)
    }

    async clickXeroDisconnectBtn() {
        return await page.click(xeroDisconnectBtn)
    }

    async clickIntegrationsLink() {
        return await page.click(integrationsLink)
    }

    async clickClassificationLink(){
        return await page.click(classificationLink)
    }
    //classification
    async clickAddClassificationBtn(){
        return await page.click(addClassificationBtn)
    }

    async setClassificationNameFieldValue(classificationNameFieldValue){
        return await page.setValue(classificationNameField, classificationNameFieldValue)
    }

    async setFirstOptionFieldValue(firstOptionFieldValue){
        return await page.setValue(firstOptionField, firstOptionFieldValue)
    }

    async setSecondOptionFieldValue(secondOptionFieldValue){
        return await page.setValue(secondOptionField, secondOptionFieldValue)
    }

    async setThirdOptionFieldValue(thirdOptionFieldValue){
        return await page.setValue(thirdOptionField, thirdOptionFieldValue)
    }

    async setFourthOptionFieldValue(fourthOptionFieldValue){
        return await page.setValue(fourthOptionField, fourthOptionFieldValue)
    }

    async setFifthOptionFieldValue(fifthOptionFieldValue){
        return await page.setValue(fifthOptionField, fifthOptionFieldValue)
    }

    async isFirstClassificationDisplayed(){
        return await page.isElementDisplayed(firstClassification)
    }

    async isSecondClassificationDisplayed(){
        return await page.isElementDisplayed(secondClassification)
    }

    async selectFirstClassificationDropDownValue(firstClassificationDropDownValue){
        return await page.clickDropdownItemByIndex(firstClassificationDropDown, firstClassificationDropDownValue)
    }

    async selectSecondClassificationDropDownValue(secondClassificationDropDownValue){
        return await page.clickDropdownItemByIndex(secondClassificationDropDown, secondClassificationDropDownValue)
    }

    async isFirstClassificationAddedCellDisplayed(){
        return await page.isElementDisplayed(firstClassificationAddedCell)
    }

    async isSecondClassificationAddedCellDisplayed(){
        return await page.isElementDisplayed(secondClassificationAddedCell)
    }

    async selectTransferEffectiveDateValue(transferEffectiveDateValue){
        return await page.clickDropdownItemByIndex(transferEffectiveDate, transferEffectiveDateValue)
    }

    async selectTransferClassificationDropDownValue(transferClassificationDropDownValue){
        return await page.clickDropdownItemByIndex(transferClassificationDropDown, transferClassificationDropDownValue)
    }

    async clickFirstClassificationTransferLink(){
        return await page.click(firstClassificationTransferLink)
    }

    async clickSecondClassificationTransferLink(){
        return await page.click(secondClassificationTransferLink)
    }

    async isFirstClassificationUpdatedCellDisplayed(){
        return await page.isElementDisplayed(firstClassificationUpdatedCell)
    }

    async isSecondClassificationUpdatedCellDisplayed(){
        return await page.isElementDisplayed(secondClassificationUpdatedCell)
    }

    async getFirstClassificationUpdatedCellText(){
        return await page.getElementText(firstClassificationUpdatedCell)
    }

    async getSecondClassificationUpdatedCellText(){
        return await page.getElementText(secondClassificationUpdatedCell)
    }

    async clickReverseTransferBtn(){
        return await page.click(reverseTransferBtn)
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

    async clickRegisterSettingsWithXeroLink() {
        return await page.click(registerSettingsWithXeroLink)
    }

    async isRegisterSettingsDisplayed() {
        return await page.isElementDisplayed(registerSettingsLink)
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

    async clickRegisterUserRoleBtn() {
        return await page.click(registerUserRoleBtn)
    }

    async clickRegisterRoleDropDown() {
        return await page.click(registerRoleDropDownMenu)
    }

    async clickRegisterSettingsRoleDropDownMenu() {
        return await page.click(registerSettingsRoleDropDownMenu)
    }

    async clickRegisterSettingsUserRoleBtn() {
        return await page.click(registerSettingsUserRoleBtn)
    }

    async clickRegisterCheckBoxForInvite() {
        return await page.click(registerCheckBoxForInvite)
    }

    async clickInviteBtn() {
        return await page.click(inviteBtn)
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

    async isAccountTypeClearingSuspenseCellDisplayed() {
        return await page.isElementDisplayed(accountTypeClearingSuspenseCell)
    }

    async isAccountTypeCostCellDisplayed() {
        return await page.isElementDisplayed(accountTypeCostCell)
    }

    async isCurrentlyJournalsDisplayed() {
        return await page.isElementDisplayed(currentlyJournals)
    }

    async isCreateJournalFormDisplayed() {
        return await page.isElementDisplayed(createJournalForm)
    }

    async isFirstGroupLinkDisplayed() {
        return await page.isElementDisplayed(firstGroupLink)
    }

    async clickFirstGroupLink() {
        return await page.click(firstGroupLink)
    }

    async clickFirstAssetLink() {
        return await page.click(firstAssetLink)
    }

    async isFirstAssetLinkDisplayed() {
        return await page.isElementDisplayed(firstAssetLink)
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

    async getSuccessfulllyPostedToXeroAlertText() {
        return await page.getElementText(successfulllyPostedToXeroAlert)
    }

    async isSuccessfulllyPostedToXeroAlertDisplayed() {
        return await page.isElementDisplayed(successfulllyPostedToXeroAlert)
    }

    async getSuccessfulllyPostedToExcelAlertText() {
        return await page.getElementText(successfulllyPostedToExcelAlert)
    }

    async isSuccessfulllyPostedToExcelAlertDisplayed() {
        return await page.isElementDisplayed(successfulllyPostedToExcelAlert)
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

    async clickCreateJournalBtn() {
        return await page.click(createJournalBtn)
    }

    async clickDeleteJournalBtn() {
        return await page.click(deleteJournalBtn)
    }

    async clickCreateBtn() {
        return await page.click(createBtn)
    }

    async clickJournalLink() {
        return await page.click(journalLink)
    }

    async clickPurchasesCheckBox() {
        return await page.click(purchasesCheckBox)
    }

    async clickDepreciationCheckBox() {
        return await page.click(depreciationCheckBox)
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

    async clickSelfAssessedCheckBox() {
        return await page.click(selfAssessedCheckBox)
    }

    async setTaxDepreciationNotesFieldValue(taxDepreciationNotesInput) {
        return await page.setValue(taxDepreciationNotesField, taxDepreciationNotesInput)
    }

    async isTaxViewFormDisplayed() {
        return await page.isElementDisplayed(taxViewForm)
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

    async clickDeleteAssetBtn() {
        return await page.click(deleteAssetBtn)
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

    async clickReverseDropDown() {
        return await page.click(reverseDropDown)
    }

    async isAssetDescriptionTitleDisplayed() {
        return await page.isElementDisplayed(assetDescriptionTitle)
    }

    async setCardNumberFieldValue(cardNumberFieldInput) {
        return await page.setValue(cardNumberField, cardNumberFieldInput)
    }

    async setCardExpiryFieldValue(cardExpiryFieldInput) {
        return await page.setValue(cardExpiryField, cardExpiryFieldInput)
    }

    async setCvcFieldValue(cvcFieldInput) {
        return await page.setValue(cvcField, cvcFieldInput)
    }

    async isCardNumberInputDisplayed() {
        return await page.isElementDisplayed(cardNumberInput)
    }

    async isCardExpiryInputDisplayed() {
        return await page.isElementDisplayed(cardExpiryInput)
    }

    async isCvcInputDisplayed() {
        return await page.isElementDisplayed(cvcInput)
    }

    async isPaymentFormDisplayed() {
        return await page.isElementDisplayed(paymentForm)
    }

    async isDepreciationFormDisplayed() {
        return await page.isElementDisplayed(depreciationForm)
    }

    async isTaxDepreciationFormDisplayed() {
        return await page.isElementDisplayed(taxDepreciationForm)
    }

    async isAccountsDepreciationFormDisplayed() {
        return await page.isElementDisplayed(accountsDepreciationForm)
    }

    async isSubscriptionFormDisplayed() {
        return await page.isElementDisplayed(subscriptionForm)
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

    async setNewAssetCodeNumberValue(newAssetCodeNumberFieldInput) {
        return await page.setValue(newAssetCodeNumberField, newAssetCodeNumberFieldInput)
    }

    async setNewAssetNameValue(newAssetNameFieldInput) {
        return await page.setValue(newAssetNameField, newAssetNameFieldInput)
    }

    async setNewAssetDescriptionValue(newAssetDescriptionFieldInput) {
        return await page.setValue(newAssetDescriptionField, newAssetDescriptionFieldInput)
    }

    async selectNewAssetGroupValue() {
        return await page.clickDropdownItemByIndex(newAssetGroupSelect, 1)
    }

    async clickStandartChangePlanBtn() {
        return await page.click(standartChangePlanBtn)
    }

    async clickToggleForAccountingFirms() {
        return await page.click(toggleForAccountingFirms)
    }

    async clickCloseBtn() {
        return await page.click(closeBtn)
    }

    async clickCancelRegisterBtn(){
        return await page.click(cancelRegisterBtn)
    }

    async clickCancelArchiveRegisterBtn(){
        return await page.click(cancelArchiveRegisterBtn)
    }

    async clickOrganisationSettingsUpgradeBtn() {
        return await page.click(organisationSettingsUpgradeBtn)
    }

    async clickRegistersLink() {
        return await page.click(registersLink)
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

    async clickUsersLink() {
        return await page.click(usersLink)
    }

    async isUserLinkDisplayed(){
        return await page.isElementDisplayed(usersLink)
    }

    async isUserLinkClickable(){
        return await page.isElementClickable(usersLink)
    }

    async clickNewAssetSaveBtn() {
        return await page.click(newAssetSaveBtn)
    }

    async clickCreateFirstRegisterBtn() {
        return await page.click(createFirstRegisterBtn)
    }

    async clickUserProfileLink() {
        return await page.click(userProfileLink)
    }

    async clickLogoutProfileBtn() {
        return await page.click(logoutProfileBtn)
    }

    async clickAssetsAddBtn() {
        return await page.click(assetsAddBtn)
    }

    async clickCreateAssetBtn() {
        return await page.click(createAssetBtn)
    }

    async isPaymentMethodFormDisplayed() {
        return await page.isElementDisplayed(paymentMethodForm)
    }

    async isAssetsAddBtnDisplayed() {
        return await page.isElementDisplayed(assetsAddBtn)
    }

    async isAssetCardSectionDisplayed() {
        return await page.isElementDisplayed(assetGroupCardSection)
    }

    async getAllRegisters() {
        return await page.getAllElements(tableWithRegisters)
    }

    async getRegistersListSize() {
        await (await page.getElement(tableWithRegisters)).waitForDisplayed()
        return await (await this.getAllRegisters()).length
    }

    async getAllAssetsGroup() {
        return await page.getAllElements(assetsGroupList)
    }

    async getAssetsGroupListSize() {
        await (await page.getElement(assetsGroupList)).waitForDisplayed()
        return await (await this.getAllAssetsGroup()).length
    }

    async getAllAssets() {
        return await page.getAllElements(tableWithAssets)
    }

    async getAssetsListSize() {
        await (await page.getElement(tableWithAssets)).waitForDisplayed()
        return await (await this.getAllAssets()).length
    }

    async getAllJournals() {
        return await page.getAllElements(tableWithJournals)
    }

    async getJournalsListSize() {
        await (await page.getElement(tableWithJournals)).waitForDisplayed()
        return await (await this.getAllJournals()).length
    }

    async isCreateRegisterBtnDisplayed() {
        return await page.isElementDisplayed(createRegisterBtn)
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

    async clickCreateRegisterBtn() {
        return await page.click(createRegisterBtn)
    }

    async clickCreateARegisterBtn(){
        return await page.click(createARegisterBtn)
    }

    async clickRegisterSelectionDropDown() {
        return await page.click(registerSelection)
    }

    async clickDemoRegisterBtn() {
        return await page.click(demoRegisterBtn)
    }

    async clickAllRegistersLink() {
        return await page.click(allRegisters)
    }

    async clickFirstRegisterLink() {
        return await page.click(firstRegisterLink)
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

    async clickCreateAssetGroupTemplateBtn() {
        return await page.click(createAssetGroupTemplateBtn)
    }

    async clickBuidlingsTemtplateCheckBox() {
        return await page.click(buildingsTemplateCheckBox)
    }

    async clickCapitalWorksTemtplateCheckBox() {
        return await page.click(capitalWorksTemplateCheckBox)
    }

    async clickDropDownRegisterMenu() {
        return await page.click(dropDownRegisterMenu)
    }

    async clickSecondDropDownToggle(){
        return await page.click(secondDropDownToggle)
    }

    async clickSecondAchiveBtn(){
        return await page.click(secondAchiveBtn)
    }

    async clickArchiveBtn() {
        return await page.click(archiveBtn)
    }

    async clickArchiveConfirmationOkBtn() {
        return await page.click(archiveConfirmationOkBtn)
    }

    async clickBuidlingsTemtplateAssetForm() {
        return await page.click(buildingsTemplateAssetForm)
    }

    async clickTemplateSaveBtn() {
        return await page.click(templateSaveBtn)
    }

    async clickExitBtn() {
        return await page.click(exitBtn)
    }

    async clickEditGroupBtn() {
        return await page.click(editGroupBtn)
    }

    async clickDeleteGroupBtn() {
        return await page.click(deleteGroupBtn)
    }

    async clickDeleteCofirmationOkBtn() {
        return await page.click(deleteConfirmationOkBtn)
    }
    async clickCreateAssetGroupBlankBtn() {
        return await page.click(createAssetGroupBlankBtn)
    }

    async clickAssetGroupBlankSaveBtn() {
        return await page.click(assetGroupBlankSaveBtn)
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

    async setAssetGroupDescriptionBlankFieldValue(assetGroupDescriptionBlankFieldInput) {
        return await page.setValue(assetGroupDescriptionBlankField, assetGroupDescriptionBlankFieldInput)
    }

    async setAssetGroupNameBlankFieldValue(assetGroupNameBlankFieldInput) {
        return await page.setValue(assetGroupNameBlankField, assetGroupNameBlankFieldInput)
    }

    async selectBlankTaxMethodDropDownValue(blankTaxMethodDropDownValue){
        return await page.clickDropdownItemByIndex(blankTaxMethodDropDown, blankTaxMethodDropDownValue)
    }

    async selectBlankAccountsMethodDropDownValue(blankAccountsMethodDropDownValue){
        return await page.clickDropdownItemByIndex(blankAccountsMethodDropDown, blankAccountsMethodDropDownValue)
    }

    async setBlankAccountsEffectiveLifeFieldValue(blankAccountsEffectiveLifeFieldValue){
        return await page.setValue(blankAccountsEffectiveLifeField, blankAccountsEffectiveLifeFieldValue)
    }

    async isNewAssetTitleDisplayed() {
        return await page.isElementDisplayed(newAssetTitle)
    }

    async isAssetGroupBlankAlertDisplayed() {
        return await page.isElementDisplayed(assetGroupBlankAlert)
    }

    async isNameGroupFieldDisplayed() {
        return await page.isElementDisplayed(nameGroupField)
    }

    async isDescriptionGroupFieldDisplayed() {
        return await page.isElementDisplayed(descriptionGroupFiled)
    }

    async isFirstRegisterLinkDisplayed() {
        return await page.isElementDisplayed(firstRegisterLink)
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

    async isOrgDetailsNameDisplayed(){
        return await page.isElementDisplayed(orgDetailsName)
    }

    async isOrgDetailsNameClickable(){
        return await page.isElementClickable(orgDetailsName)
    }

    async isOrgDetailsDescriptionDisplayed(){
        return await page.isElementDisplayed(orgDetailsDescription)
    }

    async isOrgDetailsDescriptionClickable(){
        return await page.isElementClickable(orgDetailsDescription)
    }

    async isBillingNameDisplayed(){
        return await page.isElementDisplayed(billingName)
    }

    async isBillingNameClickable(){
        return await page.isElementClickable(billingName)
    }

    async isBillingEmailDisplayed(){
        return await page.isElementDisplayed(billingEmail)
    }

    async isBillingEmailClickable(){
        return await page.isElementClickable(billingEmail)
    }

    async isBillingPhoneDisplayed(){
        return await page.isElementDisplayed(billingPhone)
    }

    async isBillingPhoneClickable(){
        return await page.isElementClickable(billingPhone)
    }

    async isCreateNewOrganisationFormDisplayed() {
        return await page.isElementDisplayed(createNewOrganisationForm)
    }

    async isCreateNewRegisterFormDisplayed() {
        return await page.isElementDisplayed(createNewRegisterForm)
    }

    async isCreateAssetGroupTemplateBtnDisplayed() {
        return await page.isElementDisplayed(createAssetGroupTemplateBtn)
    }

    async isSuccessArchivedRegisterMessageDisplayed() {
        return await page.isElementDisplayed(successArchivedRegisterMessage)
    }

    async isRegisterNameFieldDisplayed() {
        return await page.isElementDisplayed(registerName)
    }

    async isEntityNameFieldDisplayed() {
        return await page.isElementDisplayed(entityName)
    }

    async isAssetGroupNameFieldDisplayed() {
        return await page.isElementDisplayed(assetGroupNameBlankField)
    }

    async isAssetGroupDescriptionFieldDisplayed() {
        return await page.isElementDisplayed(assetGroupDescriptionBlankField)
    }

    async isAssetsGroupFromTemplateFormsDisplayed() {
        return await page.isElementDisplayed(assetsGroupFromTemplateForms)
    }

    async isNewAssetGroupFromTemplateTitleDisplayed() {
        return await page.isElementDisplayed(newAssetGroupFromTemplateTitle)
    }

    async isDeleteConfirmationTitleDisplayed() {
        return await page.isElementDisplayed(deleteConfirmationTitle)
    }

    async getNewAssetGroupFromTemplateTitleText() {
        return await page.getElementText(newAssetGroupFromTemplateTitle)
    }

    async getLinkText(linkSelector) {
        return await page.getElementText(linkSelector);
    }

    async getSuccessfullySavedAlertMessageText() {
        return await page.getElementText(successSavedAlertMessage)
    }

    async getCurrentOrganisationNamesListText() {
        return await page.getElementText(organisationNamesList)
    }

    async getAssetGroupBlankAlertText() {
        return await page.getElementText(assetGroupBlankAlert)
    }

    async isBuildingsTemplateAssetFormClickable() {
        return await page.isElementClickable(buildingsTemplateAssetForm)
    }

    async isSuccessfullySavedAlertMessageDisplayed() {
        return await page.isElementDisplayed(successSavedAlertMessage)
    }

    async isDemoRegisterLinkDisplayed() {
        return await page.isElementDisplayed(demoRegisterLink)
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

    async isSettingsHeaderDisplayed() {
        return await page.isElementDisplayed(settingsHeader)
    }

    async getSettingsHeaderText() {
        return await page.getElementText(settingsHeader)
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