const authPage = require('../pageobjects/authentication.page')
const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const assert = require('assert');
const { expect } = require('chai');
const loginData = require('../../data/loginData')
const baseUrl = require('../../data/baseURL')

const journalDescr = 'Test Description'
const randomCodeNumber = Math.floor(Math.random() * 1000);

describe('create journal', () => {
    before('land to dev asset page and login', async () => {
        await browser.url(baseUrl.baseUrlLink)
        await authPage.clickSignInBtn();
        await authPage.isUserNameLoginFieldDisplayed();
        await authPage.setUserNameValue(loginData.userEmailAssetTesting);
        await authPage.clickNextBtn();
        await authPage.isPasswordLoginFieldDisplayed();
        await authPage.setPasswordSignInValue(loginData.userPasswAssetTesting);
        await authPage.clickSignInSubmitBtn();
        await devAssetMainPage.clickFirstRegisterLink()
        try {
            //deleting existing asset
            await devAssetMainPage.clickFirstGroupLink()
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
        } catch (err) {
            console.log('asset has not been created yet')
        }
        try {
            //delete existing asset group
            await devAssetMainPage.clickEditGroupBtn()
            await expect(await devAssetMainPage.isNameGroupFieldDisplayed()).true;
            await expect(await devAssetMainPage.isDescriptionGroupFieldDisplayed()).true;
            await devAssetMainPage.clickDeleteGroupBtn()
            await expect(await devAssetMainPage.isDeleteConfirmationTitleDisplayed()).true;
            await devAssetMainPage.clickDeleteCofirmationOkBtn()
            await expect(await devAssetMainPage.isCreateAssetGroupTemplateBtnDisplayed()).true;
            await expect(await devAssetMainPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`);

            await devAssetMainPage.clickRegisterSelectionDropDown()
            await devAssetMainPage.clickAllRegistersLink()
            await devAssetMainPage.clickFirstRegisterLink()
        } catch (err) {
            console.log('asset group has not been created yet')
        }
    });
    after('land to assets and delete created asset group (Blank)', async () => {
        // //deleting journal
        await devAssetMainPage.clickJournalLink()
        await devAssetMainPage.clickDeleteJournalBtn()
        await expect(await devAssetMainPage.isDeleteConfirmationTitleDisplayed()).true;
        await devAssetMainPage.clickDeleteCofirmationOkBtn()
        // //deleting asset
        await devAssetMainPage.clickAssetsLink()
        await devAssetMainPage.clickFirstGroupLink()
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
        // deleting asset group
        await devAssetMainPage.clickAssetsLink()
        await devAssetMainPage.clickEditGroupBtn()
        await expect(await devAssetMainPage.isNameGroupFieldDisplayed()).true;
        await expect(await devAssetMainPage.isDescriptionGroupFieldDisplayed()).true;
        await devAssetMainPage.clickDeleteGroupBtn()
        await expect(await devAssetMainPage.isDeleteConfirmationTitleDisplayed()).true;
        await devAssetMainPage.clickDeleteCofirmationOkBtn()
        await expect(await devAssetMainPage.isCreateAssetGroupTemplateBtnDisplayed()).true;
        await expect(await devAssetMainPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`);
        //logout
        await devAssetMainPage.clickUserProfileLink()
        await devAssetMainPage.clickLogoutProfileBtn()
        await expect(await authPage.isSignInBtnDisplayed()).true;
    });
    it('should create asset group (from template) if no groups have been created', async () => {
        await devAssetMainPage.clickCreateAssetGroupTemplateBtn();
        await expect(await devAssetMainPage.isNewAssetGroupFromTemplateTitleDisplayed()).true;
        await expect(await devAssetMainPage.getNewAssetGroupFromTemplateTitleText()).contain(`New Asset Group from Template`);
        await expect(await devAssetMainPage.isAssetsGroupFromTemplateFormsDisplayed()).true;
        await devAssetMainPage.clickBuidlingsTemtplateCheckBox();
        await devAssetMainPage.clickTemplateSaveBtn()
        await expect(await devAssetMainPage.isSuccessfullySavedAlertMessageDisplayed()).true;
        await expect(await devAssetMainPage.getSuccessfullySavedAlertMessageText()).contain(`Saved 1 asset groups successfully`);
    });
    it('should create asset', async () => {
        await devAssetMainPage.clickAssetsLink()
        await expect(await devAssetMainPage.isFirstGroupLinkDisplayed()).true;
        await devAssetMainPage.clickAssetsAddBtn()
        await devAssetMainPage.clickCreateAssetBtn()
        await expect(await devAssetMainPage.isNewAssetTitleDisplayed()).true;
        await devAssetMainPage.setNewAssetNameValue('TestAsset')
        await devAssetMainPage.setNewAssetCodeNumberValue(randomCodeNumber)
        await devAssetMainPage.setNewAssetDescriptionValue('testDescr')
        await devAssetMainPage.selectNewAssetGroupValue()
        await devAssetMainPage.setNewAssetCostValue('200')
        await devAssetMainPage.setNewAssetPurchaseDateValue('10/05/22')
        await devAssetMainPage.setNewAssetQuantityValue('1')
        await devAssetMainPage.selectNewAssetQuantityUnitsValue()
        await expect(await devAssetMainPage.isDepreciationFormDisplayed()).true
        await expect(await devAssetMainPage.isTaxDepreciationFormDisplayed()).true
        await expect(await devAssetMainPage.isAccountsDepreciationFormDisplayed()).true
        await devAssetMainPage.clickSelfAssessedCheckBox()
        await devAssetMainPage.setTaxDepreciationNotesFieldValue('test notes test notes')
        await browser.pause(1000)
        await devAssetMainPage.clickNewAssetSaveBtn()
        await expect(await devAssetMainPage.isAssetDescriptionTitleDisplayed()).true
    });
    it('should create journal', async () => {
        await devAssetMainPage.clickJournalLink()
        await expect(await devAssetMainPage.isCurrentlyJournalsDisplayed()).true
        await devAssetMainPage.clickCreateBtn()
        await expect(await devAssetMainPage.isCreateJournalFormDisplayed()).true
        await devAssetMainPage.setJournalDescriptionFieldValue(journalDescr)
        await devAssetMainPage.clickCreateJournalBtn()
        await expect(await devAssetMainPage.isJournalTitleDisplayed()).true
        await expect(await devAssetMainPage.getJournalTitleText()).contain(`${journalDescr}`);
        await expect(await devAssetMainPage.isAccountTypeCostCellDisplayed()).true
        await expect(await devAssetMainPage.isAccountTypeClearingSuspenseCellDisplayed()).true
    });
});