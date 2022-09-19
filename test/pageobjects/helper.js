const devAssetMainPage = require("./devAssetMain.page");
const authPage = require("./authentication.page");
const loginData = require("../../data/loginData");
const googleMailPage = require("../pageobjects/googleMail.page");
const googleMailboxData = require("../../data/googleMailboxData");
const dashboardPage = require('../pageobjects/dashboard.page')
const assetPage = require('../pageobjects/asset.page')
const assetGroups = require('../pageobjects/assetGroups.page')
const assetsPage = require("./assets.page");
const baseUrl = require("../../data/baseURL");
const fs = require("fs");
const assert = require("assert");
const pdfParse = require("pdf-parse");
const path = require("path");
const csv = require("fast-csv");
const { expect } = require("chai");
const { uniqueNamesGenerator, adjectives, colors, animals, countries, languages, names, starWars } = require("unique-names-generator");
const organisationSettingsPage = require("./organisationSettings.page");
const journalsPage = require("./journals.page");
const leasePage = require("./lease.page");
const classificationsPage = require("./classifications.page");
require("dotenv").config();

function getDateTime() {
    var now = new Date();
    var year = now.getFullYear();
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    if (hour.toString().length == 1) {
        hour = "0" + hour;
    }
    if (day.toString().length == 1) {
        day = "0" + day;
    }
    if (minute.toString().length == 1) {
        minute = "0" + minute;
    }
    if (hour <= 11) {
        timesOfDay = " AM";
    } else {
        timesOfDay = " PM";
    }
    var dateTime = day + ", " + year; //+ ' ' + hour + ':' + minute + timesOfDay;
    return dateTime;
}
const randomCodeNumber = Math.floor(Math.random() * 1000);
const randomName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors],
    length: 2,
});
const shortUserName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors],
    length: 1,
});
const shortLastName = uniqueNamesGenerator({
    dictionaries: [colors],
    length: 1,
});
const mainEmail = "stasdevasset";
const tempGoogleMail = mainEmail + "+" + shortUserName + randomCodeNumber + "@gmail.com";
const randomOrgName = randomName + "_org";
const randomAssetName = randomName + "_Asset";
const assetGroupName = "TestGroup" + randomName + randomCodeNumber + "_Blank";
const randomLeaseName = randomName + "_Lease";
const registerNameSettings = randomName + "_TestRegister";
const filePathes = {
    currentPdfFilePath: "./tempDownloads/Asset testing - Asset Summary (Tax) 2021-07-01 to 2022-06-30.pdf",
    currentCsvFilePath: "./tempDownloads/Asset testing - Asset Summary (Tax) 2021-07-01 to 2022-06-30.csv",
};

class Helper {
    async platformLink() {
        await browser.url(baseUrl.baseUrlLink)
    }

    async randomClassificationName() {
        const randomClassName = uniqueNamesGenerator({
            dictionaries: [adjectives, animals, colors],
            length: 2,
        });
        return randomClassName;
    }

    async randomName() {
        const randomName = uniqueNamesGenerator({
            dictionaries: [adjectives, animals, colors, countries, languages, names, starWars],
            length: 1,
        });
        return randomName;
    }

    async loginToGoogleMailBox() {
        await googleMailPage.setEmailFieldValue(googleMailboxData.userEmail);
        await googleMailPage.clickNextBtn();
        await googleMailPage.setPasswordFieldValue(googleMailboxData.userPassword);
        await googleMailPage.clickNextBtn();
    }

    async loginToAccount() {
        await authPage.clickSignInBtn();
        await authPage.isUserNameLoginFieldDisplayed();
        await authPage.setUserNameValue(loginData.userEmail);
        await authPage.clickNextBtn();
        await authPage.isPasswordLoginFieldDisplayed();
        await authPage.setPasswordSignInValue(loginData.userPassw);
        await authPage.clickSignInSubmitBtn();
    }

    async loginToAccountAssetGroup() {
        await authPage.clickSignInBtn();
        await authPage.isUserNameLoginFieldDisplayed();
        await authPage.setUserNameValue(loginData.userEmailAssetGrp);
        await authPage.clickNextBtn();
        await authPage.isPasswordLoginFieldDisplayed();
        await authPage.setPasswordSignInValue(loginData.userPasswAssetGrp);
        await authPage.clickSignInSubmitBtn();
    }

    async loginToAccountCreateAsset() {
        await authPage.clickSignInBtn();
        await authPage.isUserNameLoginFieldDisplayed();
        await authPage.setUserNameValue(loginData.userEmailAssetTesting);
        await authPage.clickNextBtn();
        await authPage.isPasswordLoginFieldDisplayed();
        await authPage.setPasswordSignInValue(loginData.userPasswAssetTesting);
        await authPage.clickSignInSubmitBtn();
    }

    async loginToAccountRegister() {
        await authPage.clickSignInBtn();
        await authPage.isUserNameLoginFieldDisplayed();
        await authPage.setUserNameValue(loginData.userEmailRegister);
        await authPage.clickNextBtn();
        await authPage.isPasswordLoginFieldDisplayed();
        await authPage.setPasswordSignInValue(loginData.userPasswRegister);
        await authPage.clickSignInSubmitBtn();
    }
    async loginToAccountUserSuperTest() {
        await authPage.clickSignInBtn();
        await authPage.isUserNameLoginFieldDisplayed();
        await authPage.setUserNameValue(loginData.userEmailAccountUser);
        await authPage.clickNextBtn();
        await authPage.isPasswordLoginFieldDisplayed();
        await authPage.setPasswordSignInValue(loginData.userPasswAccountUser);
        await authPage.clickSignInSubmitBtn();
    }

    async loginToAccountAssetSuperTest() {
        await authPage.clickSignInBtn();
        await authPage.isUserNameLoginFieldDisplayed();
        await authPage.setUserNameValue(loginData.userEmailAccountAssetSuperTest);
        await authPage.clickNextBtn();
        await authPage.isPasswordLoginFieldDisplayed();
        await authPage.setPasswordSignInValue(loginData.userPasswAccountAssetSuperTest);
        await authPage.clickSignInSubmitBtn();
    }

    async loginToAccountInvTo() {
        await authPage.clickSignInBtn();
        await authPage.isUserNameLoginFieldDisplayed();
        await authPage.setUserNameValue(loginData.userEmailInviteTo);
        await authPage.clickNextBtn();
        await authPage.isPasswordLoginFieldDisplayed();
        await authPage.setPasswordSignInValue(loginData.userPasswInviteTo);
        await authPage.clickSignInSubmitBtn();
    }

    async loginToRoleTestingAccount(email, passw) {
        await authPage.clickSignInBtn();
        await authPage.isUserNameLoginFieldDisplayed();
        await authPage.setUserNameValue(email);
        await authPage.clickNextBtn();
        await authPage.isPasswordLoginFieldDisplayed();
        await authPage.setPasswordSignInValue(passw);
        await authPage.clickSignInSubmitBtn();
    }

    async logout() {
        await devAssetMainPage.clickUserProfileLink();
        await devAssetMainPage.clickLogoutProfileBtn();
        await expect(await authPage.isSignInBtnDisplayed()).true;
    }

    async createAssetAccount() {
        await authPage.clickCreateAccountBtn();
        await authPage.setFisrtNameValue(shortUserName);
        await authPage.setLastNameValue(shortLastName);
        await authPage.setEmailValue(tempGoogleMail);
        await authPage.setPhoneNumberValue("7777777777");
        await authPage.setPasswordCreateAccValue("devAssetTest");
        await authPage.setPasswordCreateAccConfirmValue("devAssetTest");
        await authPage.clickRegisterBtn();
    }

    async createRegister() {
        await expect(await devAssetMainPage.isCreateNewRegisterFormDisplayed()).true
        await expect(await devAssetMainPage.isRegisterNameFieldDisplayed()).true
        await devAssetMainPage.setRegisterNameValue(registerNameSettings)
        await expect(await devAssetMainPage.isEntityNameFieldDisplayed()).true
        await devAssetMainPage.setRegisterEntityValue('testRegisterEntity')
        await browser.pause(2000)
        await devAssetMainPage.clickNextRegisterBtn()
        await devAssetMainPage.clickTryForFreeBtn()
        await expect(await organisationSettingsPage.isUserLinkDisplayed()).true;
        await expect(await organisationSettingsPage.isSettingsHeaderDisplayed()).true
        await expect(await organisationSettingsPage.getSettingsHeaderText()).contain(`${registerNameSettings}`)
        await expect(await devAssetMainPage.isRegisterNameFieldDisplayed()).true
        await expect(await devAssetMainPage.isEntityNameFieldDisplayed()).true
    }

    async createRegisterSuperTest(registerNameSettings) {
        await expect(await devAssetMainPage.isCreateNewRegisterFormDisplayed()).true
        await expect(await devAssetMainPage.isRegisterNameFieldDisplayed()).true
        await devAssetMainPage.setRegisterNameValue(registerNameSettings)
        await expect(await devAssetMainPage.isEntityNameFieldDisplayed()).true
        await devAssetMainPage.setRegisterEntityValue('testRegisterEntity')
        await browser.pause(2000)
        await devAssetMainPage.clickNextRegisterBtn()
        await devAssetMainPage.clickTryForFreeBtn()
        await expect(await organisationSettingsPage.isUserLinkDisplayed()).true;
        await expect(await organisationSettingsPage.isSettingsHeaderDisplayed()).true
        await expect(await organisationSettingsPage.getSettingsHeaderText()).contain(`${registerNameSettings}`)
        await expect(await devAssetMainPage.isRegisterNameFieldDisplayed()).true
        await expect(await devAssetMainPage.isEntityNameFieldDisplayed()).true
    }

    async createRegisterWithExistingRegister() {
        await expect(await devAssetMainPage.isCreateNewRegisterFormDisplayed()).true;
        await expect(await devAssetMainPage.isRegisterNameFieldDisplayed()).true;
        await devAssetMainPage.setRegisterNameValue(registerNameSettings);
        await expect(await devAssetMainPage.isEntityNameFieldDisplayed()).true;
        await devAssetMainPage.setRegisterEntityValue("testRegisterEntity");
        await devAssetMainPage.clickNextRegisterBtn();
        await expect(await organisationSettingsPage.isSettingsHeaderDisplayed()).true;
        await expect(await devAssetMainPage.isRegisterNameFieldDisplayed()).true;
        await expect(await devAssetMainPage.isEntityNameFieldDisplayed()).true;
    }

    async createOrganisation() {
        await devAssetMainPage.clickCreateOrganisationSelectionDropDown()
        await devAssetMainPage.clickCreateNewOrganisationLink()
        await expect(await devAssetMainPage.isCreateNewOrganisationFormDisplayed()).true
        await devAssetMainPage.setOrganisationNameField(randomOrgName)
        await devAssetMainPage.setOrganisationDescriptionField('testDescription')
        await browser.pause(1000)
        await devAssetMainPage.selectCountryValue()
        await devAssetMainPage.setBillingContactNameField(randomOrgName)
        await devAssetMainPage.setBillingContactEmailField(loginData.userEmail)
        await devAssetMainPage.setBillingContactPhoneField('8888888888')
        await devAssetMainPage.clickNewOrganisationSaveBtn()
        await expect(await devAssetMainPage.isCreateFirstRegisterBtnDisplayed()).true
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true
        await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register')
    }

    async deleteAssetGroup() {
        await devAssetMainPage.clickAssetsLink();
        await console.log("Assets Group list size: " + (await assetsPage.getAssetsGroupListSize()));
        const assetsGroupCount = await assetsPage.getAssetsGroupListSize();
        for (let i = 0; i < assetsGroupCount; i++) {
            await assetGroups.clickEditGroupBtn();
            await expect(await assetGroups.isNameGroupFieldDisplayed()).true;
            await expect(await assetGroups.isDescriptionGroupFieldDisplayed()).true;
            await assetGroups.clickDeleteGroupBtn();
            await expect(await devAssetMainPage.isDeleteConfirmationTitleDisplayed()).true;
            await devAssetMainPage.clickDeleteCofirmationOkBtn();
        }
        await expect(await assetsPage.isCreateAssetGroupTemplateBtnDisplayed()).true;
        await expect(await assetsPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`);
    }

    async createAssetGroupFromTemplate() {
        await assetsPage.clickCreateAssetGroupTemplateBtn();
        await expect(await assetGroups.isNewAssetGroupFromTemplateTitleDisplayed()).true;
        await expect(await assetGroups.getNewAssetGroupFromTemplateTitleText()).contain(`New Asset Group from Template`);
        await expect(await assetGroups.isAssetsGroupFromTemplateFormsDisplayed()).true;
        await assetGroups.clickBuidlingsTemtplateCheckBox();
        await assetGroups.clickTemplateSaveBtn();
        await expect(await assetGroups.isSuccessfullySavedAlertMessageDisplayed()).true;
        await expect(await assetGroups.getSuccessfullySavedAlertMessageText()).contain(`Saved 1 asset groups successfully`);
    }

    async createAssetGroupBlank() {
        const randomCodeNumber = Math.floor(Math.random() * 100);
        await assetsPage.clickCreateAssetGroupBlankBtn();
        await expect(await assetGroups.isAssetGroupNameFieldDisplayed()).true;
        await assetGroups.setAssetGroupNameBlankFieldValue(assetGroupName + randomCodeNumber);
        await expect(await assetGroups.isAssetGroupDescriptionFieldDisplayed()).true;
        await assetGroups.setAssetGroupDescriptionBlankFieldValue("TestGroupDescription");
        await assetGroups.selectBlankTaxMethodDropDownValue(7);
        await assetGroups.selectBlankAccountsMethodDropDownValue(1);
        await assetGroups.setBlankAccountsEffectiveLifeFieldValue(40);
        await assetGroups.clickAssetGroupBlankSaveBtn();
        await expect(await assetGroups.isAssetGroupBlankAlertDisplayed()).true;
        await expect(await assetGroups.isAssetCardSectionDisplayed()).true;
    }

    async createAssetGroupBlankWithGeneralLedger() {
        const randomCodeNumber = Math.floor(Math.random() * 100);
        await assetsPage.clickCreateAssetGroupBlankBtn();
        await expect(await assetGroups.isAssetGroupNameFieldDisplayed()).true;
        await assetGroups.setAssetGroupNameBlankFieldValue(assetGroupName + randomCodeNumber);
        await expect(await assetGroups.isAssetGroupDescriptionFieldDisplayed()).true;
        await assetGroups.setAssetGroupDescriptionBlankFieldValue("TestGroupDescription");
        await assetGroups.selectTaxDepreciationMethodDropDownValue(1);
        await assetGroups.setTaxDepreciationEffectiveLifeValue("1");
        await assetGroups.selectAccountsDepreciationMethodDropDownValue(1);
        await assetGroups.setAccountsDepreciationEffectiveLifeValue("1");
        await assetGroups.clickGeneralLedgerEditBtn();
        await assetGroups.selectClearingSuspenceDropDownValue(7);
        await assetGroups.selectCostDropDownValue(14);
        await assetGroups.selectAccumulatedDepreciationDropDownValue(7);
        await assetGroups.selectDepreciationExpenseValue(2);
        await assetGroups.selectImmediateClaimDropDownValue(4);
        await assetGroups.selectProfitOnDisposalDropDownValue(9);
        await assetGroups.selectLossOnDisposalDropDownValue(1);
        await assetGroups.selectRevaluationReserveDropDownValue(5);
        await assetGroups.selectAccumulatedImpairmentDropDownValue(2);
        await assetGroups.selectRevaluationLossDropDownValue(2);
        await assetGroups.selectImpairmentLossDropDownValue(2);
        await assetGroups.selectCurrentLeaseLiabilityDropDownValue(5);
        await assetGroups.selectNonCurrentLeaseLiabilityDropDownValue(2);
        await assetGroups.selectLeasePaymentClearingDropDownValue(3);
        await assetGroups.selectCurrentUnexpiredInterestDropDownValue(1);
        await assetGroups.selectNonCurrentUnexpiredInterestDropDownValue(12);
        await assetGroups.selectInterestChargeDropDownValue(4);
        await assetGroups.selectProfitOnTerminationOfLeaseDropDownValue(2);
        await assetGroups.selectLossOnTerminationOfLeaseDropDownValue(2);
        await assetGroups.clickGeneralLedgerSaveBtn();
        await assetGroups.clickAssetGroupBlankSaveBtn();
        await expect(await assetGroups.isAssetGroupBlankAlertDisplayed()).true;
        await expect(await assetGroups.isAssetCardSectionDisplayed()).true;
    }

    async createAsset() {
        const randomCodeNumber = Math.floor(Math.random() * 10000);
        await assetsPage.clickCreateAssetBtn();
        await expect(await assetGroups.isNewAssetTitleDisplayed()).true;
        await assetPage.setNewAssetNameValue(randomAssetName + randomCodeNumber);
        await assetPage.setNewAssetCodeNumberValue(randomCodeNumber);
        await assetPage.setNewAssetDescriptionValue("testDescr");
        await assetPage.selectNewAssetGroupValue();
        await assetPage.setNewAssetCostValue("500");
        await assetPage.setNewAssetPurchaseDateValue("06/05/22");
        await assetPage.setNewAssetQuantityValue("10");
        await assetPage.selectNewAssetQuantityUnitsValue();
        await expect(await assetGroups.isDepreciationFormDisplayed()).true;
        await expect(await assetGroups.isTaxDepreciationFormDisplayed()).true;
        await expect(await assetGroups.isAccountsDepreciationFormDisplayed()).true;
        await browser.pause(1000);
        await assetGroups.clickNewAssetSaveBtn();
        await expect(await assetPage.isAssetDescriptionTitleDisplayed()).true;
    }

    async createAssetClassification() {
        const randomCodeNumber = Math.floor(Math.random() * 1000);
        await assetsPage.clickCreateAssetBtn();
        await expect(await assetGroups.isNewAssetTitleDisplayed()).true;
        await assetPage.setNewAssetNameValue(randomAssetName + randomCodeNumber);
        await assetPage.setNewAssetCodeNumberValue(randomCodeNumber);
        await assetPage.setNewAssetDescriptionValue("testDescr");
        await assetPage.selectNewAssetGroupValue();
        await assetPage.setNewAssetCostValue("1000");
        await assetPage.setNewAssetPurchaseDateValue("06/05/22");
        await assetPage.setNewAssetQuantityValue("10");
        await assetPage.selectNewAssetQuantityUnitsValue();
        await assetPage.selectFirstClassificationDropDownValue(2);
        await assetPage.selectSecondClassificationDropDownValue(2);
        await expect(await assetGroups.isDepreciationFormDisplayed()).true;
        await expect(await assetGroups.isTaxDepreciationFormDisplayed()).true;
        await expect(await assetGroups.isAccountsDepreciationFormDisplayed()).true;
        await browser.pause(1000);
        await assetGroups.clickNewAssetSaveBtn();
        await expect(await assetPage.isAssetDescriptionTitleDisplayed()).true;
    }

    async assetAddOpeningBalance() {
        await assetPage.clickActionsDropDownBtn();
        await assetPage.clickAddOpeningBalanceBtn();
        await assetPage.selectOpeningBalanceDateValue();
        await assetPage.setTaxWdvValue(300);
        await assetPage.setAccountsWdvValue(400);
        await devAssetMainPage.clickSaveBtn();
        await expect(await assetPage.isOpeningBalanceCellDisplayed()).true;
        await expect(await assetPage.getOpeningBalanceCellText()).contain("Opening Balance");
    }

    async assetReverseOpeningBalance() {
        //await browser.pause(4000)
        await assetPage.clickReverseDropDown();
        await assetPage.clickOpeningBalanceBtn();
        await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
        await devAssetMainPage.clickDeleteCofirmationOkBtn();
        await expect(await assetPage.isAssetStatusIsUseDispayed()).true;
        await expect(await assetPage.isAssetDescriptionTitleDisplayed()).true;
        await expect(await assetPage.isOpeningBalanceReservedCellDisplayed()).true;
        await expect(await assetPage.getOpeningBalanceReservedCellText()).contain("Opening Balance (Reversed)");
    }

    async assetSell() {
        await assetPage.clickActionsDropDownBtn();
        await assetPage.clickActionSellBtn();
        await assetPage.setDateOfSaleValue("06/05/22");
        await assetPage.setSaleProceedsValue(200);
        await devAssetMainPage.clickSaveBtn();
        await expect(await assetPage.isAssetStatusSoldDisplayed()).true;
        await expect(await assetPage.isSaleCellDispalyed()).true;
        await expect(await assetPage.getSaleCellText()).contain("Sale");
    }

    async assetReverseSale() {
        await assetPage.clickReverseDropDown();
        await assetPage.clickSaleBtn();
        await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
        await devAssetMainPage.clickDeleteCofirmationOkBtn();
        await expect(await assetPage.isAssetStatusIsUseDispayed()).true;
        await expect(await assetPage.isAssetDescriptionTitleDisplayed()).true;
        await expect(await assetPage.isReversalSaleCellDisplayed()).true;
        await expect(await assetPage.getReversalSaleCellText()).contain("Reversal (Sale)");
    }

    async assetWriteOff() {
        await assetPage.clickActionsDropDownBtn();
        await assetPage.clickActionWriteOffBtn();
        await assetPage.setDateOfWriteOffValue("06/05/22");
        await devAssetMainPage.clickSaveBtn();
        await expect(await assetPage.isAssetStatusSoldDisplayed()).true;
        await expect(await assetPage.isWriteOffCellDisplayed()).true;
        await expect(await assetPage.getWriteOffCellText()).contain("Write Off");
    }

    async assetReverseWriteOff() {
        await assetPage.clickReverseDropDown();
        await assetPage.clickWritenOffBtn();
        await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
        await devAssetMainPage.clickDeleteCofirmationOkBtn();
        await expect(await assetPage.isAssetStatusIsUseDispayed()).true;
        await expect(await assetPage.isAssetDescriptionTitleDisplayed()).true;
        await expect(await assetPage.isWriteOffReversedCellDisplayed()).true;
        await expect(await assetPage.getWriteOffReversedCellText()).contain("Write Off (Reversed)");
    }

    async assetPartialSell() {
        await assetPage.clickActionsDropDownBtn();
        await assetPage.clickActionSellPartialBtn();
        await assetPage.setSaleProceedsValue(100);
        await assetPage.setDisposedQuantityValue(2);
        await devAssetMainPage.clickSaveBtn();
        await expect(await assetPage.isAssetStatusIsUseDispayed()).true;
        await expect(await assetPage.isSalePartialCellDisplayed()).true;
        await expect(await assetPage.getSalePartialCellText()).contain("Sale (Partial)");
    }

    async assetReversePartialSale() {
        await assetPage.clickReverseDropDown();
        await assetPage.clickSalePartialBtn();
        await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
        await devAssetMainPage.clickDeleteCofirmationOkBtn();
        await expect(await assetPage.isAssetStatusIsUseDispayed()).true;
        await expect(await assetPage.isAssetDescriptionTitleDisplayed()).true;
        await expect(await assetPage.isSalePartialReversedCellDisplayed()).true;
        await expect(await assetPage.getSalePartialReversedCellText()).contain("Sale (Partial) (Reversed)");
    }

    async assetPartialWriteOff() {
        await assetPage.clickActionsDropDownBtn();
        await assetPage.clickActionWriteOffPartialBtn();
        await assetPage.setDisposedQuantityValue(5);
        await devAssetMainPage.clickSaveBtn();
        await expect(await assetPage.isAssetStatusIsUseDispayed()).true;
        await expect(await assetPage.isWriteOffPartialCellDisplayed()).true;
        await expect(await assetPage.getWriteOffPartialCellText()).contain("Write Off (Partial)");
    }

    async assetReversePartialWriteOff() {
        await assetPage.clickReverseDropDown();
        await assetPage.clickWriteOffPartialBtn();
        await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
        await devAssetMainPage.clickDeleteCofirmationOkBtn();
        await expect(await assetPage.isAssetStatusIsUseDispayed()).true;
        await expect(await assetPage.isAssetDescriptionTitleDisplayed()).true;
        await expect(await assetPage.isWriteOffPartialReversedCellDisplayed()).true;
        await expect(await assetPage.getWriteOffPartialReversedCellText()).contain("Reversal (Write Off (Partial))");
    }

    async taxAddReassessment() {
        await browser.pause(2000);
        await assetPage.clickAssetTaxTabLink();
        await assetPage.clickAssetAddDropDown();
        await assetPage.clickReassessmentBtn();
        await assetPage.setTaxDepreciationNotesFieldValue("test notes test notes");
        await assetPage.selectReassessMethodDropDownValue(5);
        await assetPage.setEffectiveLifeFieldValue(5);
        await browser.pause(2000);
        await devAssetMainPage.clickSaveBtn();
        await expect(await assetPage.isAssetStatusIsUseDispayed()).true;
        await expect(await assetPage.isReassessmentCellDisplayed()).true;
        await expect(await assetPage.getReassessmentCellText()).contain("Reassessment");
    }

    async taxReverseReassessment() {
        await assetPage.clickReverseDropDown();
        await assetPage.clickReassessmentTaxBtn();
        await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
        await devAssetMainPage.clickDeleteCofirmationOkBtn();
        await expect(await assetPage.isAssetStatusIsUseDispayed()).true;
        await expect(await assetPage.isAssetDescriptionTitleDisplayed()).true;
        await expect(await assetPage.isReassessmentReversedCellDisplayed()).true;
        await expect(await assetPage.getReassessmentReversedCellText()).contain("Reassessment (Reversed)");
    }

    async taxAddTransferToPool() {
        await assetPage.clickAssetAddDropDown();
        await assetPage.clickTransferToPoolBtn();
        await assetPage.clickLowValuePoolRadioBtn();
        await assetPage.clickSaveSettingsSetupPoolsBtn();
        await assetPage.selectPoolValue();
        await expect(await assetPage.isWrittenDownValueDisplayed()).true;
        await devAssetMainPage.clickSaveBtn();
        await expect(await assetPage.isLowValuePoolLinkDisplayed()).true;
        await expect(await assetPage.isAddToPoolCellDisplayed()).true;
        await expect(await assetPage.getAddToPoolCellText()).contain("Add to Pool");
    }

    async taxReverseTransferToPool() {
        await assetPage.clickReverseDropDown();
        await assetPage.clickTransferToPoolTax();
        await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
        await devAssetMainPage.clickDeleteCofirmationOkBtn();
        await expect(await assetPage.isAssetStatusIsUseDispayed()).true;
        await expect(await assetPage.isAssetDescriptionTitleDisplayed()).true;
        await expect(await assetPage.isTransferToPoolReversedCellDisplayed()).true;
        await expect(await assetPage.getTransferToPoolReversedCellText()).contain("Transfer to Pool (Reversed)");
    }

    async taxAddAdjustment() {
        await assetPage.clickAssetAddDropDown();
        await assetPage.clickAdjustmentBtn();
        await assetPage.selectFirstUseDateDropDownValue(1);
        await assetPage.setCostChangeFieldValue(1000);
        await assetPage.setDepreciationChangeFieldValue("-300");
        await expect(await assetPage.isNotesFieldDisplayed()).true;
        await devAssetMainPage.clickSaveBtn();
        await expect(await assetPage.isAssetStatusIsUseDispayed()).true;
        await expect(await assetPage.isAdjustmentCellDisplayed()).true;
        await expect(await assetPage.getAdjustmentCellText()).contain("Adjustment");
    }

    async taxReverseAdjustment() {
        await assetPage.clickReverseDropDown();
        await assetPage.clickAdjustmentTaxBtn();
        await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
        await devAssetMainPage.clickDeleteCofirmationOkBtn();
        await expect(await assetPage.isAssetStatusIsUseDispayed()).true;
        await expect(await assetPage.isAssetDescriptionTitleDisplayed()).true;
        await expect(await assetPage.isAdjustmentReversedCellDisplayed()).true;
        await expect(await assetPage.getAdjustmentReversedCellText()).contain("Adjustment (Reversed)");
    }

    async taxAddReassessmentTaxableUse() {
        await assetPage.clickAssetAddDropDown();
        await assetPage.clickReassessmentOfTaxableUseBtn();
        await expect(await assetPage.isTaxableUsageValueFieldDisplayed()).true;
        await assetPage.selectFirstUseDateDropDownValue(1);
        await assetPage.setTaxableUsageValueFieldValue(80);
        await devAssetMainPage.clickSaveBtn();
        await expect(await assetPage.isAssetStatusIsUseDispayed()).true;
        await expect(await assetPage.isTaxableUseCellDisplayed()).true;
        await expect(await assetPage.getTaxableUseCellText()).contain("Taxable Use");
    }

    async taxReverseReassessmentTaxableUse() {
        await assetPage.clickReverseDropDown();
        await assetPage.clickTaxableUseBtn();
        await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
        await devAssetMainPage.clickDeleteCofirmationOkBtn();
        await expect(await assetPage.isAssetStatusIsUseDispayed()).true;
        await expect(await assetPage.isAssetDescriptionTitleDisplayed()).true;
        await expect(await assetPage.isTaxableUseReversedCellDisplayed()).true;
        await expect(await assetPage.getTaxableUseReversedCellText()).contain("Taxable Use (Reversed)");
    }

    async accountsAddReassessment() {
        await assetPage.clickAssetAccountsTabLink()
        await assetPage.clickAssetAddDropDown()
        await assetPage.clickReassessmentBtn()
        await assetPage.setTaxDepreciationNotesFieldValue('test notes test notes')
        await assetPage.selectDateReassessmentDropDown(1)
        await assetPage.selectReassessMethodDropDownValue(2)
        await assetPage.setEffectiveLifeFieldValue(10)
        await browser.pause(2000)
        await devAssetMainPage.clickSaveBtn()
        await expect(await assetPage.isAssetStatusIsUseDispayed()).true
        await expect(await assetPage.isReassessmentCellDisplayed()).true
        await expect(await assetPage.getReassessmentCellText()).contain('Reassessment')
    }

    async accountsReverseReasessment() {
        await assetPage.clickReverseDropDown();
        await assetPage.clickReassessmentTaxBtn();
        await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
        await devAssetMainPage.clickDeleteCofirmationOkBtn();
        await expect(await assetPage.isAssetStatusIsUseDispayed()).true;
        await expect(await assetPage.isAssetDescriptionTitleDisplayed()).true;
        await expect(await assetPage.isReassessmentReversedCellDisplayed()).true;
        await expect(await assetPage.getReassessmentReversedCellText()).contain("Reassessment (Reversed)");
    }

    async accountsAddRevaluation() {
        await assetPage.clickAssetAccountsTabLink();
        await assetPage.clickAssetAddDropDown();
        await assetPage.clickRevaluationBtn();
        await assetPage.selectRevalueAssetDateValue(1);
        await assetPage.setRevaluedAmountFieldValue(100);
        await expect(await assetPage.isNotesFieldDisplayed()).true;
        await devAssetMainPage.clickSaveBtn();
        await expect(await assetPage.isAssetStatusIsUseDispayed()).true;
        await expect(await assetPage.isRevaluationCellDisplayed()).true;
        await expect(await assetPage.getRevaluationCellText()).contain("Revaluation");
    }

    async accountsReverseRevaluation() {
        await assetPage.clickReverseDropDown();
        await assetPage.clickRevaluationAccountsBtn();
        await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
        await devAssetMainPage.clickDeleteCofirmationOkBtn();
        await expect(await assetPage.isAssetStatusIsUseDispayed()).true;
        await expect(await assetPage.isAssetDescriptionTitleDisplayed()).true;
        await expect(await assetPage.isRevaluationReversedCellDisplayed()).true;
        await expect(await assetPage.getRevaluationReversedCellText()).contain("Revaluation (Reversed)");
    }

    async accountsAddImpairment() {
        await assetPage.clickAssetAccountsTabLink();
        await assetPage.clickAssetAddDropDown();
        await assetPage.clickImpairmentBtn();
        await assetPage.selectImpairAssetDateValue(1);
        await assetPage.setImpairedValueFieldValue(100);
        await expect(await assetPage.isNotesFieldDisplayed()).true;
        await devAssetMainPage.clickSaveBtn();
        await expect(await assetPage.isAssetStatusIsUseDispayed()).true;
        await expect(await assetPage.isImpairmentCellDisplayed()).true;
        await expect(await assetPage.getImpairmentCellText()).contain("Impairment");
    }

    async accountsReverseImpairment() {
        await assetPage.clickReverseDropDown();
        await assetPage.clickImpairmentAccountsBtn();
        await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
        await devAssetMainPage.clickDeleteCofirmationOkBtn();
        await expect(await assetPage.isAssetStatusIsUseDispayed()).true;
        await expect(await assetPage.isAssetDescriptionTitleDisplayed()).true;
        await expect(await assetPage.isImpairmentReversedCellDisplayed()).true;
        await expect(await assetPage.getImpairmentReversedCellText()).contain("Impairment (Reversed)");
    }

    async accountsAddAdjustment() {
        await assetPage.clickAssetAccountsTabLink();
        await assetPage.clickAssetAddDropDown();
        await assetPage.clickAccountsAdjustmentBtn();
        await assetPage.selectFirstUseDateDropDownValue(1);
        await assetPage.setCostChangeFieldValue(1000);
        await assetPage.setDepreciationChangeFieldValue("-300");
        await expect(await assetPage.isNotesFieldDisplayed()).true;
        await devAssetMainPage.clickSaveBtn();
        await expect(await assetPage.isAssetStatusIsUseDispayed()).true;
        await expect(await assetPage.isAdjustmentCellDisplayed()).true;
        await expect(await assetPage.getAdjustmentCellText()).contain("Adjustment");
    }

    async accountsReverseAdjustment() {
        await assetPage.clickReverseDropDown();
        await assetPage.clickAdjustmentTaxBtn();
        await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
        await devAssetMainPage.clickDeleteCofirmationOkBtn();
        await expect(await assetPage.isAssetStatusIsUseDispayed()).true;
        await expect(await assetPage.isAssetDescriptionTitleDisplayed()).true;
        await expect(await assetPage.isAdjustmentReversedCellDisplayed()).true;
        await expect(await assetPage.getAdjustmentReversedCellText()).contain("Adjustment (Reversed)");
    }

    async addClassification() {
        await classificationsPage.clickAddClassificationBtn();
        await classificationsPage.setClassificationNameFieldValue(await this.randomClassificationName());
        await classificationsPage.setFirstOptionFieldValue(await this.randomClassificationName());
        await classificationsPage.setSecondOptionFieldValue(await this.randomClassificationName());
        await classificationsPage.setThirdOptionFieldValue(await this.randomClassificationName());
        await classificationsPage.setFourthOptionFieldValue(await this.randomClassificationName());
        await classificationsPage.setFifthOptionFieldValue(await this.randomClassificationName());
        await devAssetMainPage.clickSaveBtn();
    }

    async deleteAsset() {
        await assetPage.clickReverseDropDown();
        await assetPage.clickSetQuantityBtn();
        await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
        await expect(await assetPage.isReversalConfirmationTitleDisplayed()).true;
        await devAssetMainPage.clickDeleteCofirmationOkBtn();
        await assetPage.clickReverseDropDown();
        await assetPage.clickFirstUseBtn();
        await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
        await expect(await assetPage.isReversalConfirmationTitleDisplayed()).true;
        await devAssetMainPage.clickDeleteCofirmationOkBtn();
        await expect(await assetPage.isFirstUseAlertMessageDisplayted()).true;
        await assetPage.clickReverseDropDown();
        await assetPage.clickPurchaseBtn();
        await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
        await expect(await assetPage.isReversalConfirmationTitleDisplayed()).true;
        await devAssetMainPage.clickDeleteCofirmationOkBtn();
        await assetPage.clickDeleteAssetBtn();
        await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
        await devAssetMainPage.clickDeleteCofirmationOkBtn();
        await expect(await assetsPage.isTaxViewFormDisplayed()).true;
    }

    async deleteAllAssets() {
        await assetsPage.clickContractedGroupDropDown();
        await assetsPage.isFirstAssetLinkDisplayed();
        await console.log("Assets list size: " + (await assetsPage.getAssetsListSize()));
        const assetsCount = await assetsPage.getAssetsListSize();
        await assetsPage.clickFirstGroupLink();
        for (let i = 0; i < assetsCount; i++) {
            await assetsPage.clickFirstGroupLink();
            await assetsPage.isFirstAssetLinkDisplayed();
            await assetsPage.clickFirstAssetLink();
            await expect(await assetPage.isAssetColumnHeaderDisplayed()).true;
            //checking if that lease
            const leaseColumnDisplayed = await leasePage.isLeaseColumnHeaderDisplayed();
            if ((await leaseColumnDisplayed) === true) {
                await assetPage.clickReverseDropDown();
                await assetPage.clickSetQuantityBtn();
                await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
                await expect(await assetPage.isReversalConfirmationTitleDisplayed()).true;
                await devAssetMainPage.clickDeleteCofirmationOkBtn();
                await expect(await assetPage.isFirstUseAlertMessageDisplayted()).true;
                await assetPage.clickReverseDropDown();
                await assetPage.clickLeaseBtn();
                await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
                await expect(await assetPage.isReversalConfirmationTitleDisplayed()).true;
                await devAssetMainPage.clickDeleteCofirmationOkBtn();
                await expect(await assetPage.isFirstUseAlertMessageDisplayted()).true;
                await assetPage.clickDeleteAssetBtn();
                await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
                await devAssetMainPage.clickDeleteCofirmationOkBtn();
                await expect(await assetsPage.isTaxViewFormDisplayed()).true;
            } else {
                await assetPage.clickReverseDropDown();
                await assetPage.clickSetQuantityBtn();
                await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
                await expect(await assetPage.isReversalConfirmationTitleDisplayed()).true;
                await devAssetMainPage.clickDeleteCofirmationOkBtn();
                await assetPage.clickReverseDropDown();
                await assetPage.clickFirstUseBtn();
                await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
                await expect(await assetPage.isReversalConfirmationTitleDisplayed()).true;
                await devAssetMainPage.clickDeleteCofirmationOkBtn();
                await expect(await assetPage.isFirstUseAlertMessageDisplayted()).true;
                await assetPage.clickReverseDropDown();
                await assetPage.clickPurchaseBtn();
                await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
                await expect(await assetPage.isReversalConfirmationTitleDisplayed()).true;
                await devAssetMainPage.clickDeleteCofirmationOkBtn();
                await assetPage.clickDeleteAssetBtn();
                await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
                await devAssetMainPage.clickDeleteCofirmationOkBtn();
                await expect(await assetsPage.isTaxViewFormDisplayed()).true;
            }
        }
    }

    async deleteClassificationInAsset() {
        await assetPage.clickReverseDropDown();
        await assetPage.clickReverseTransferBtn();
        await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
        await devAssetMainPage.clickDeleteCofirmationOkBtn();
        await browser.pause(3000);
        await assetPage.clickReverseDropDown();
        await assetPage.clickReverseTransferBtn();
        await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
        await devAssetMainPage.clickDeleteCofirmationOkBtn();
        await browser.pause(3000);
        await assetPage.clickReverseDropDown();
        await assetPage.clickReverseTransferBtn();
        await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
        await devAssetMainPage.clickDeleteCofirmationOkBtn();
        await browser.pause(3000);
        await assetPage.clickReverseDropDown();
        await assetPage.clickReverseTransferBtn();
        await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
        await devAssetMainPage.clickDeleteCofirmationOkBtn();
        await browser.pause(3000);
    }

    async deleteJournals() {
        await console.log("Journals list size: " + (await journalsPage.getJournalsListSize()));
        const journalsCount = await journalsPage.getJournalsListSize();
        for (let i = 0; i < journalsCount; i++) {
            await expect(await journalsPage.isFirstJournalItemDisplayed()).true;
            await journalsPage.clickFirstJournalItemLink();
            await expect(await journalsPage.isExportJournalDropDownDisplayed()).true;
            await journalsPage.clickDeleteCurrentJournalBtn();
            await expect(await devAssetMainPage.isDeleteConfirmationTitleDisplayed()).true;
            await devAssetMainPage.clickDeleteCofirmationOkBtn();
        }
        await expect(await journalsPage.isCurrentlyJournalsDisplayed()).true;
    }

    async deleteAllRegisters() {
        await console.log("Register list size: " + (await dashboardPage.getRegistersListSize()));
        const registersCount = await dashboardPage.getRegistersListSize();
        for (let i = 0; i < registersCount; i++) {
            await dashboardPage.clickDropDownRegisterMenu();
            await dashboardPage.clickArchiveBtn();
            await dashboardPage.clickArchiveConfirmationOkBtn();
            await expect(await dashboardPage.isSuccessArchivedRegisterMessageDisplayed()).true;
        }
        await dashboardPage.clickDemoRegisterBtn()
        await expect(await devAssetMainPage.isCreateFirstRegisterBtnDisplayed()).true;
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true
        await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register')
    }

    async checkingPostedJournalCheckBox() {
        await expect(await journalsPage.isPostedJournalCheckBoxDisplayed()).true;
        await expect(await journalsPage.isChooseTransactionFormDisplayed()).true;
        const currUrl = await browser.getUrl();
        if (await currUrl.includes("https://dev.asset.accountant/")) {
            await journalsPage.clickPostedJournalCheckBox();
        } else {
            await expect(await journalsPage.isPostedJournalCheckBoxDisplayed()).true;
        }
    }

    async checkingExistingRegistersSuperTest() {
        await expect(await devAssetMainPage.isOrganisationSettingsWithRegistersDisplayed()).true;
        const registerLink = await dashboardPage.isRegisterLinkDisplayed();
        switch (await registerLink) {
            case true:
                await console.log("Register list size: " + (await dashboardPage.getRegistersListSize()));
                const registersCount = await dashboardPage.getRegistersListSize();
                for (let i = 0; i < registersCount; i++) {
                    await dashboardPage.clickDropDownRegisterMenu();
                    await dashboardPage.clickArchiveBtn();
                    await dashboardPage.clickArchiveConfirmationOkBtn();
                    await expect(await dashboardPage.isSuccessArchivedRegisterMessageDisplayed()).true;
                    await browser.pause(1000);
                }
                await browser.refresh();
            case false:
                await expect(await devAssetMainPage.isCreateFirstRegisterBtnDisplayed()).true;
                await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true;
                //await expect(await devAssetMainPage.getDemoRegisterText()).contain("Demo Register");
        }
    }

    async checkingExistingRegisters() {
        await expect(await devAssetMainPage.isOrganisationSettingsDisplayed()).true;
        const registerLink = await dashboardPage.isRegisterLinkDisplayed();
        switch (await registerLink) {
            case true:
                await console.log("Register list size: " + (await dashboardPage.getRegistersListSize()));
                const registersCount = await dashboardPage.getRegistersListSize();
                for (let i = 0; i < registersCount; i++) {
                    await dashboardPage.clickDropDownRegisterMenu();
                    await dashboardPage.clickArchiveBtn();
                    await dashboardPage.clickArchiveConfirmationOkBtn();
                    await expect(await dashboardPage.isSuccessArchivedRegisterMessageDisplayed()).true;
                    await browser.pause(1000);
                }
                await browser.refresh();
            case false:
                await expect(await devAssetMainPage.isCreateFirstRegisterBtnDisplayed()).true;
                await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true;
                await expect(await devAssetMainPage.getDemoRegisterText()).contain("Demo Register");
        }
    }

    async checkingExistingGroupsAndAssets() {
        await expect(await devAssetMainPage.isRegisterSettingsDisplayed()).true;
        const GroupBtnTemplateValue = await assetsPage.isGroupTemplateBtnDisplayed();
        switch (await GroupBtnTemplateValue) {
            case true:
                await expect(await assetsPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`);
                break;
            case false:
                await expect(await assetGroups.isEditBtnDisplayed()).true;
                const ContractedGroupDropDownValue = await assetsPage.isContractedGroupDropDownDisplayed();
                if ((await ContractedGroupDropDownValue) === true) {
                    await this.deleteAllAssets();
                    await expect(await assetsPage.isFirstGroupLinkDisplayed()).true;
                    await this.deleteAssetGroup();
                } else {
                    await this.deleteAssetGroup();
                }
                break;
        }
    }

    async checkingExistingJournals() {
        await expect(await journalsPage.isLoadingImageDisplayed()).true;
        const DeleteJournalBtnValue = await journalsPage.isDeleteJournalBtnDisplayed();
        switch (await DeleteJournalBtnValue) {
            case true:
                await this.deleteJournals();
                await devAssetMainPage.clickAssetsLink();
                break;
            case false:
                await devAssetMainPage.clickAssetsLink();
                break;
        }
    }

    async addLinkAttachment() {
        const currentUserProfileName = await devAssetMainPage.getUserProfileNameText();
        const currentTime = getDateTime();
        const randomCodeNumber = Math.floor(Math.random() * 1000);
        const testNameForLink = "testNameForLink" + randomCodeNumber;
        const urlForLink = "https://" + "testURL" + randomCodeNumber + ".com";
        await assetPage.clickAddAttachmentDropDownBtn();
        await assetPage.clickAddLinkBtn();
        await expect(await assetPage.isAddLinkFormDisplayed()).true;
        await assetPage.setLinkNameFieldValue(testNameForLink);
        await assetPage.setUrlFieldValue(urlForLink);
        await assetPage.clickAddBtn();
        await expect(await assetPage.isAddLinkFormExist());
        await expect(await assetPage.isAttachmentsFormDisplayed()).true;
        await expect(await assetPage.getFirstAttachmentText()).contain(`Link added by ${currentUserProfileName}`);
        await expect(await assetPage.getFirstAttachmentText()).contain(`${testNameForLink}`);
    }

    async addFilesAttachment() {
        const currentUserProfileName = await devAssetMainPage.getUserProfileNameText();
        const currentTime = getDateTime();
        const filePath = path.join(__dirname, "../../data/testFileForAttachment.txt");
        const remoteFilePath = await browser.uploadFile(filePath);
        await browser.execute(async () => {
            document.getElementById("import-upload").style.display = "block";
        });
        await assetPage.setAttachmentFileUploadInputValue(remoteFilePath);
        await browser.execute(async () => {
            document.getElementById("import-upload").style.display = "none";
        });
        await expect(await assetPage.isAttachmentsFormDisplayed()).true;
        await expect(await assetPage.getFirstAttachmentText()).contain(`Uploaded by ${currentUserProfileName}`);
    }

    async deleteAllLinkAttachments() {
        await console.log("Attachments list size: " + (await assetPage.getAttachmentsListSize()));
        const attahcmentsCount = await assetPage.getAttachmentsListSize();
        for (let i = 0; i < attahcmentsCount; i++) {
            await assetPage.clickDeleteLinkAttachmentBtn();
            await expect(await devAssetMainPage.isDeleteConfirmationTitleDisplayed()).true;
            await devAssetMainPage.clickDeleteCofirmationOkBtn();
        }
        await expect(await assetPage.isAttachmentsFormExist());
    }
    async deleteAllFilesAttachments() {
        await console.log("Attachments list size: " + (await assetPage.getAttachmentsListSize()));
        const attahcmentsCount = await assetPage.getAttachmentsListSize();
        for (let i = 0; i < attahcmentsCount; i++) {
            await assetPage.clickDeleteFileAttachmentBtn();
            await expect(await devAssetMainPage.isDeleteConfirmationTitleDisplayed()).true;
            await devAssetMainPage.clickDeleteCofirmationOkBtn();
        }
        await expect(await assetPage.isAttachmentsFormExist());
    }

    async pdfValidation(currPath) {
        const readPdf = async (uri = currPath) => {
            const buffer = fs.readFileSync(uri);
            try {
                const data = await pdfParse(buffer);

                // The content
                console.log("Content: ", data.text);

                // Total page
                console.log("Total pages: ", data.numpages);
            } catch (err) {
                throw new Error(err);
            }
        };
        const assetPDF = filePathes.currPath;
        readPdf(assetPDF);
    }

    async csvValidation(currPath) {
        // This function reads data from a given CSV file
        const readCSV = (filePath = currPath) => {
            const readStream = fs.createReadStream(filePath);
            const data = [];
            readStream
                .pipe(csv.parse())
                .on("data", (row) => {
                    data.push(row);
                    console.log("1 row:", row[0]);
                    console.log("2 row:", row[1]);
                    console.log("3 row:", row[2]);
                    console.log("\n");
                })
                .on("end", (rowCount) => {
                    console.log(`${rowCount} rows has been parsed!`);

                    console.log(data);
                })
                .on("error", (error) => console.error(error));
        };
        const assetCsv = filePathes.currPath;
        readCSV(assetCsv);
    }

    async deletePdfFileFromDir() {
        const filePath = filePathes.currentPdfFilePath;
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            //file removed
        });
    }

    async deleteCsvFileFromDir() {
        const filePath = filePathes.currentCsvFilePath;
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            //file removed
        });
    }

    async checkingIfPdfFileIsExist() {
        const fileExists = async (path = filePath) => {
            try {
                await fs.promises.access(path);
                //file exist
                return true;
            } catch (err) {
                //file does not exist
                return false;
            }
        };
        const filePath = filePathes.currentPdfFilePath;
        const exists = await fileExists(filePath);
        if (!exists) {
            throw "PDF File DOES not exist!!";
        }
    }

    async checkingIfCsvFileIsExist() {
        const fileExists = async (path = filePath) => {
            try {
                await fs.promises.access(path);
                //file exist
                return true;
            } catch (err) {
                //file does not exist
                return false;
            }
        };
        const filePath = filePathes.currentCsvFilePath;
        const exists = await fileExists(filePath);
        if (!exists) {
            throw "CSV File DOES not exist!!";
        }
    }

    async waitForFileExists(filePath, timeout) {
        return new Promise(function (resolve, reject) {
            let dir = path.dirname(filePath);
            let basename = path.basename(filePath);
            let watcher = fs.watch(dir, function (eventType, filename) {
                if (eventType === "rename" && filename === basename) {
                    clearTimeout(timer);
                    watcher.close();
                    resolve();
                }
            });

            let timer = setTimeout(function () {
                watcher.close();
                reject(new Error("File did not exists and was not created during the timeout."));
            }, timeout);

            fs.access(filePath, fs.constants.R_OK, function (err) {
                if (!err) {
                    clearTimeout(timer);
                    watcher.close();
                    resolve();
                }
            });
        });
    }

    async fillingOutLeaseForm() {
        const randomCodeNumber = Math.floor(Math.random() * 100);
        await expect(await leasePage.isNewLeaseAssetFormDisplayed()).true;
        await expect(await leasePage.isPaymentLeaseAssetFormDisplayed()).true;
        await expect(await leasePage.isAmountLeaseFormDisplayed()).true;
        await leasePage.setLeaseNameFieldValue(randomLeaseName + randomCodeNumber);
        await leasePage.setLeaseCodeNumberFieldValue(randomCodeNumber);
        await leasePage.setLeaseDescrFieldValue("test descritpion for lease");
        await leasePage.setLeaseGroupSelectValue();
        await leasePage.clickHirePurchaseYesBtn();
        await leasePage.clickHirePurchaseNoBtn();
        await leasePage.setLeaseStartDateValue("10/05/2022");
        await leasePage.setLeaseFirstUseDateValue("25/05/2022");
        await leasePage.setLeaseQuantityFieldValue("1");
        await leasePage.setLeaseQuantityUnitsSelectValue();
    }

    async fillingOutLeasePaymentForm() {
        await leasePage.setPaymentDateFieldValue("20/05/2022");
        await leasePage.setPaymentPrincipalFieldValue(200);
        await leasePage.setPaymentInterestFieldValue(500);
        await leasePage.setPaymentOtherFieldValue(100);
    }

    async generatePaymentSchedule() {
        await expect(await leasePage.isGeneratePaymentScheduleFormDisplayed()).true;
        await expect(await leasePage.getGeneratePaymentScheduleTitleText()).contain("Generate Payment Schedule");
        await leasePage.setAmountFinancedFieldValue(50000);
        await leasePage.setFirstLeasePaymentFieldValue(1500);
        await leasePage.setFirstFrequencyDropDownValue(1);
        await leasePage.clickAddPaymentsBtn();
        await leasePage.setSecondLeasePaymentFieldValue(2500);
        await leasePage.setSecondFrequencyDropDownValue(4);
        await leasePage.setSecondQuantityFieldValue(24);
        await leasePage.clickGenerateScheduleBtn();
        await expect(await leasePage.isPaymentScheduleTableDisplayed()).true;
        await leasePage.clickUseScheduleBtn();
        const amountCapitalisedValue = await leasePage.getAmountCapitalisedFieldValue();
        assert.strictEqual(amountCapitalisedValue, "50000", "Values are not equal!!!!");
    }

    async deleteLease() {
        await assetPage.clickReverseDropDown();
        await assetPage.clickSetQuantityBtn();
        await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
        await expect(await assetPage.isReversalConfirmationTitleDisplayed()).true;
        await devAssetMainPage.clickDeleteCofirmationOkBtn();
        await assetPage.clickReverseDropDown();
        await assetPage.clickFirstUseBtn();
        await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
        await expect(await assetPage.isReversalConfirmationTitleDisplayed()).true;
        await devAssetMainPage.clickDeleteCofirmationOkBtn();
        await expect(await assetPage.isFirstUseAlertMessageDisplayted()).true;
        await assetPage.clickReverseDropDown();
        await assetPage.clickLeaseBtn();
        await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
        await expect(await assetPage.isReversalConfirmationTitleDisplayed()).true;
        await devAssetMainPage.clickDeleteCofirmationOkBtn();
        await assetPage.clickDeleteAssetBtn();
        await expect(await assetPage.isReversalConfirmationFormDisplayed()).true;
        await devAssetMainPage.clickDeleteCofirmationOkBtn();
        await expect(await assetsPage.isTaxViewFormDisplayed()).true;
    }
}

module.exports = new Helper();
