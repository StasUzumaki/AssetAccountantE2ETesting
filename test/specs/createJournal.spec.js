const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const { expect } = require('chai');
const baseUrl = require('../../data/baseURL');
const helper = require('../pageobjects/helper');

const journalDescr = 'Test Description'

describe('create journal', () => {
    before('land to dev asset page and login', async () => {
        await browser.url(baseUrl.baseUrlLink)
        await helper.loginToAccountCreateAsset()
        await devAssetMainPage.clickFirstRegisterLink()
        await expect(await devAssetMainPage.isRegisterSettingsDisplayed()).true;
        const GroupBtnTemplateValue = await devAssetMainPage.isGroupTemplateBtnDisplayed()
        switch (await GroupBtnTemplateValue) {
            case true:
                await expect(await devAssetMainPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`);
                break;
            case false:
                await expect(await devAssetMainPage.isEditBtnDisplayed()).true;
                const ContractedGroupDropDownValue = await devAssetMainPage.isContractedGroupDropDownDisplayed()
                if (await ContractedGroupDropDownValue === true) {
                    await devAssetMainPage.clickFirstGroupLink()
                    await devAssetMainPage.clickFirstAssetLink()
                    await helper.deleteAsset()
                    await expect(await devAssetMainPage.isFirstGroupLinkDisplayed()).true;
                    await helper.deleteAssetGroup()
                } else {
                    await helper.deleteAssetGroup()
                }
                break;
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
        await helper.deleteAsset()
        // deleting asset group
        await helper.deleteAssetGroup()
        //logout
        await helper.logout()
    });
    it('should create asset group (from template) if no groups have been created', async () => {
        await helper.createAssetGroupFromTemplate()
    });
    it('should create asset', async () => {
        await devAssetMainPage.clickAssetsLink()
        await expect(await devAssetMainPage.isFirstGroupLinkDisplayed()).true;
        await devAssetMainPage.clickAssetsAddBtn()
        await helper.createAsset()
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