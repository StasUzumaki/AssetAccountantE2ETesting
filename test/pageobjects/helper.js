const devAssetMainPage = require('./devAssetMain.page')
const authPage = require('./authentication.page')
const loginData = require('../../data/loginData')
const googleMailPage = require('../pageobjects/googleMail.page')
const googleMailboxData = require('../../data/googleMailboxData')
const { expect } = require('chai')
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator')

const randomCodeNumber = Math.floor(Math.random() * 1000);
const randomName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors],
    length: 2
});
const randomOrgName = randomName + '_org';
const randomAssetName = randomName + '_Asset';
const assetGroupName = randomName + randomCodeNumber + '_TestGroup';
const registerNameSettings = randomName + '_TestRegister'

class Helper {

    async loginToGoogleMailBox(){
        await googleMailPage.setEmailFieldValue(googleMailboxData.userEmail)
        await googleMailPage.clickNextBtn()
        await googleMailPage.setPasswordFieldValue(googleMailboxData.userPassword)
        await googleMailPage.clickNextBtn()
    }

    async loginToAccount() {
        await authPage.clickSignInBtn()
        await authPage.isUserNameLoginFieldDisplayed()
        await authPage.setUserNameValue(loginData.userEmail)
        await authPage.clickNextBtn()
        await authPage.isPasswordLoginFieldDisplayed()
        await authPage.setPasswordSignInValue(loginData.userPassw)
        await authPage.clickSignInSubmitBtn()
    }

    async loginToAccountAssetGroup() {
        await authPage.clickSignInBtn()
        await authPage.isUserNameLoginFieldDisplayed()
        await authPage.setUserNameValue(loginData.userEmailAssetGrp)
        await authPage.clickNextBtn()
        await authPage.isPasswordLoginFieldDisplayed()
        await authPage.setPasswordSignInValue(loginData.userPasswAssetGrp)
        await authPage.clickSignInSubmitBtn()
    }

    async loginToAccountCreateAsset() {
        await authPage.clickSignInBtn()
        await authPage.isUserNameLoginFieldDisplayed()
        await authPage.setUserNameValue(loginData.userEmailAssetTesting)
        await authPage.clickNextBtn()
        await authPage.isPasswordLoginFieldDisplayed()
        await authPage.setPasswordSignInValue(loginData.userPasswAssetTesting)
        await authPage.clickSignInSubmitBtn()
    }

    async loginToAccountRegister() {
        await authPage.clickSignInBtn()
        await authPage.isUserNameLoginFieldDisplayed()
        await authPage.setUserNameValue(loginData.userEmailRegister)
        await authPage.clickNextBtn()
        await authPage.isPasswordLoginFieldDisplayed()
        await authPage.setPasswordSignInValue(loginData.userPasswRegister)
        await authPage.clickSignInSubmitBtn()
    }

    async loginToAccountInvTo(){
        await authPage.clickSignInBtn()
        await authPage.isUserNameLoginFieldDisplayed()
        await authPage.setUserNameValue(loginData.userEmailInviteTo)
        await authPage.clickNextBtn()
        await authPage.isPasswordLoginFieldDisplayed()
        await authPage.setPasswordSignInValue(loginData.userPasswInviteTo)
        await authPage.clickSignInSubmitBtn()
    }

    async logout() {
        await devAssetMainPage.clickUserProfileLink()
        await devAssetMainPage.clickLogoutProfileBtn()
        await expect(await authPage.isSignInBtnDisplayed()).true
    }

    async createRegister() {
        await expect(await devAssetMainPage.isCreateNewRegisterFormDisplayed()).true
        await expect(await devAssetMainPage.isRegisterNameFieldDisplayed()).true
        await devAssetMainPage.setRegisterNameValue(registerNameSettings)
        await expect(await devAssetMainPage.isEntityNameFieldDisplayed()).true
        await devAssetMainPage.setRegisterEntityValue('testRegisterEntity')
        await devAssetMainPage.clickNextRegisterBtn()
        await devAssetMainPage.clickTryForFreeBtn()
        await expect(await devAssetMainPage.isSettingsHeaderDisplayed()).true
        await expect(await devAssetMainPage.getSettingsHeaderText()).contain(`${registerNameSettings} › Settings`)
        await expect(await devAssetMainPage.isRegisterNameFieldDisplayed()).true
        await expect(await devAssetMainPage.isEntityNameFieldDisplayed()).true
    }

    async createRegisterWithExistingRegister() {
        await expect(await devAssetMainPage.isCreateNewRegisterFormDisplayed()).true
        await expect(await devAssetMainPage.isRegisterNameFieldDisplayed()).true
        await devAssetMainPage.setRegisterNameValue(registerNameSettings)
        await expect(await devAssetMainPage.isEntityNameFieldDisplayed()).true
        await devAssetMainPage.setRegisterEntityValue('testRegisterEntity')
        await devAssetMainPage.clickNextRegisterBtn()
        await expect(await devAssetMainPage.isSettingsHeaderDisplayed()).true
        await expect(await devAssetMainPage.isRegisterNameFieldDisplayed()).true
        await expect(await devAssetMainPage.isEntityNameFieldDisplayed()).true
    }

    async createOrganisation() {
        await devAssetMainPage.clickCreateOrganisationSelectionDropDown()
        await devAssetMainPage.clickCreateNewOrganisationLink()
        await expect(await devAssetMainPage.isCreateNewOrganisationFormDisplayed()).true
        await devAssetMainPage.setOrganisationNameField(randomOrgName)
        await devAssetMainPage.setOrganisationDescriptionField('testDescription')
        await devAssetMainPage.setBillingContactNameField(randomOrgName)
        await devAssetMainPage.setBillingContactEmailField(loginData.userEmail)
        await devAssetMainPage.setBillingContactPhoneField('8888888888')
        await devAssetMainPage.clickNewOrganisationSaveBtn()
        await expect(await devAssetMainPage.isSettingsHeaderDisplayed()).true
        await expect(await devAssetMainPage.getSettingsHeaderText()).contain(`${randomOrgName}`)
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true
        await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register')
    }

    async deleteAssetGroup() {
        await devAssetMainPage.clickAssetsLink()
        await console.log("Assets Group list size: " + await devAssetMainPage.getAssetsGroupListSize())
        const assetsGroupCount = await devAssetMainPage.getAssetsGroupListSize()
        for (let i = 0; i < assetsGroupCount; i++) {
            await devAssetMainPage.clickEditGroupBtn()
            await expect(await devAssetMainPage.isNameGroupFieldDisplayed()).true;
            await expect(await devAssetMainPage.isDescriptionGroupFieldDisplayed()).true
            await devAssetMainPage.clickDeleteGroupBtn()
            await expect(await devAssetMainPage.isDeleteConfirmationTitleDisplayed()).true
            await devAssetMainPage.clickDeleteCofirmationOkBtn()
        }
        await expect(await devAssetMainPage.isCreateAssetGroupTemplateBtnDisplayed()).true
        await expect(await devAssetMainPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`)
    }

    async createAssetGroupFromTemplate() {
        await devAssetMainPage.clickCreateAssetGroupTemplateBtn()
        await expect(await devAssetMainPage.isNewAssetGroupFromTemplateTitleDisplayed()).true
        await expect(await devAssetMainPage.getNewAssetGroupFromTemplateTitleText()).contain(`New Asset Group from Template`)
        await expect(await devAssetMainPage.isAssetsGroupFromTemplateFormsDisplayed()).true
        await devAssetMainPage.clickBuidlingsTemtplateCheckBox()
        await devAssetMainPage.clickTemplateSaveBtn()
        await expect(await devAssetMainPage.isSuccessfullySavedAlertMessageDisplayed()).true
        await expect(await devAssetMainPage.getSuccessfullySavedAlertMessageText()).contain(`Saved 1 asset groups successfully`)
    }

    async createAssetGroupBlank() {
        const randomCodeNumber = Math.floor(Math.random() * 100);
        await devAssetMainPage.clickCreateAssetGroupBlankBtn()
        await expect(await devAssetMainPage.isAssetGroupNameFieldDisplayed()).true
        await devAssetMainPage.setAssetGroupNameBlankFieldValue(assetGroupName + randomCodeNumber)
        await expect(await devAssetMainPage.isAssetGroupDescriptionFieldDisplayed()).true
        await devAssetMainPage.setAssetGroupDescriptionBlankFieldValue('TestGroupDescription')
        await devAssetMainPage.clickAssetGroupBlankSaveBtn()
        await expect(await devAssetMainPage.isAssetGroupBlankAlertDisplayed()).true
        await expect(await devAssetMainPage.isAssetCardSectionDisplayed()).true
    }

    async createAsset() {
        const randomCodeNumber = Math.floor(Math.random() * 1000);
        await devAssetMainPage.clickCreateAssetBtn()
        await expect(await devAssetMainPage.isNewAssetTitleDisplayed()).true;
        await devAssetMainPage.setNewAssetNameValue(randomAssetName + randomCodeNumber)
        await devAssetMainPage.setNewAssetCodeNumberValue(randomCodeNumber)
        await devAssetMainPage.setNewAssetDescriptionValue('testDescr')
        await devAssetMainPage.selectNewAssetGroupValue()
        await devAssetMainPage.setNewAssetCostValue('200')
        await devAssetMainPage.setNewAssetPurchaseDateValue('06/05/22')
        await devAssetMainPage.setNewAssetQuantityValue('1')
        await devAssetMainPage.selectNewAssetQuantityUnitsValue()
        await expect(await devAssetMainPage.isDepreciationFormDisplayed()).true
        await expect(await devAssetMainPage.isTaxDepreciationFormDisplayed()).true
        await expect(await devAssetMainPage.isAccountsDepreciationFormDisplayed()).true
        // await devAssetMainPage.clickSelfAssessedCheckBox()
        // await devAssetMainPage.setTaxDepreciationNotesFieldValue('test notes test notes')
        await browser.pause(1000)
        await devAssetMainPage.clickNewAssetSaveBtn()
        await expect(await devAssetMainPage.isAssetDescriptionTitleDisplayed()).true
    }

    async deleteAsset() {
            await devAssetMainPage.clickReverseDropDown()
            await devAssetMainPage.clickSetQuantityBtn()
            await expect(await devAssetMainPage.isReversalConfirmationFormDisplayed()).true
            await expect(await devAssetMainPage.isReversalConfirmationTitleDisplayed()).true
            await devAssetMainPage.clickDeleteCofirmationOkBtn()
            await devAssetMainPage.clickReverseDropDown()
            await devAssetMainPage.clickFirstUseBtn()
            await expect(await devAssetMainPage.isReversalConfirmationFormDisplayed()).true
            await expect(await devAssetMainPage.isReversalConfirmationTitleDisplayed()).true
            await devAssetMainPage.clickDeleteCofirmationOkBtn()
            await expect(await devAssetMainPage.isFirstUseAlertMessageDisplayted()).true
            await devAssetMainPage.clickReverseDropDown()
            await devAssetMainPage.clickPurchaseBtn()
            await expect(await devAssetMainPage.isReversalConfirmationFormDisplayed()).true
            await expect(await devAssetMainPage.isReversalConfirmationTitleDisplayed()).true
            await devAssetMainPage.clickDeleteCofirmationOkBtn()
            await devAssetMainPage.clickDeleteAssetBtn()
            await expect(await devAssetMainPage.isReversalConfirmationFormDisplayed()).true
            await devAssetMainPage.clickDeleteCofirmationOkBtn()
            await expect(await devAssetMainPage.isTaxViewFormDisplayed()).true
    }
    async deleteAllAssets() {
        await devAssetMainPage.clickContractedGroupDropDown()
        await devAssetMainPage.isFirstAssetLinkDisplayed()
        await console.log("Assets list size: " + await devAssetMainPage.getAssetsListSize())
        const assetsCount = await devAssetMainPage.getAssetsListSize()
        await devAssetMainPage.clickFirstGroupLink()
        for (let i = 0; i < assetsCount; i++) {
            await devAssetMainPage.clickFirstGroupLink()
            await devAssetMainPage.isFirstAssetLinkDisplayed()
            await devAssetMainPage.clickFirstAssetLink()
            await devAssetMainPage.clickReverseDropDown()
            await devAssetMainPage.clickSetQuantityBtn()
            await expect(await devAssetMainPage.isReversalConfirmationFormDisplayed()).true
            await expect(await devAssetMainPage.isReversalConfirmationTitleDisplayed()).true
            await devAssetMainPage.clickDeleteCofirmationOkBtn()
            await devAssetMainPage.clickReverseDropDown()
            await devAssetMainPage.clickFirstUseBtn()
            await expect(await devAssetMainPage.isReversalConfirmationFormDisplayed()).true
            await expect(await devAssetMainPage.isReversalConfirmationTitleDisplayed()).true
            await devAssetMainPage.clickDeleteCofirmationOkBtn()
            await expect(await devAssetMainPage.isFirstUseAlertMessageDisplayted()).true
            await devAssetMainPage.clickReverseDropDown()
            await devAssetMainPage.clickPurchaseBtn()
            await expect(await devAssetMainPage.isReversalConfirmationFormDisplayed()).true
            await expect(await devAssetMainPage.isReversalConfirmationTitleDisplayed()).true
            await devAssetMainPage.clickDeleteCofirmationOkBtn()
            await devAssetMainPage.clickDeleteAssetBtn()
            await expect(await devAssetMainPage.isReversalConfirmationFormDisplayed()).true
            await devAssetMainPage.clickDeleteCofirmationOkBtn()
            await expect(await devAssetMainPage.isTaxViewFormDisplayed()).true
        }
    }
}

module.exports = new Helper();