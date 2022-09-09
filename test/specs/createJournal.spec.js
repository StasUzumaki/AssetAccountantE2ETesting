const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const { expect } = require('chai');
const baseUrl = require('../../data/baseURL');
const helper = require('../pageobjects/helper');
const fs = require('fs');
const readXlsxFile = require('read-excel-file/node')
const dashboardPage = require('../pageobjects/dashboard.page');
const assetsPage = require('../pageobjects/assets.page');
const journalsPage = require('../pageobjects/journals.page');
const journalDescr = 'Test Description Movements'
const filePathXlsx = './tempDownloads/2022-09-30 - Asset testing - Test Description Movements.xlsx'

describe('create journal', () => {
    before('land to dev asset page and login', async () => {
        await helper.platformLink()
        await helper.loginToAccountCreateAsset()
        await dashboardPage.clickFirstRegisterLink()
        //checking existing assets groups and assets
        await helper.checkingExistingGroupsAndAssets()
        //checking existing journals
        await devAssetMainPage.clickJournalLink()
        await helper.checkingExistingJournals()
    });
    after('land to assets and delete created asset group (Blank)', async () => {
        // //deleting journal
        await devAssetMainPage.clickJournalLink()
        await helper.deleteJournals()
        // //deleting asset
        await devAssetMainPage.clickAssetsLink()
        await helper.deleteAllAssets()
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
        await expect(await assetsPage.isFirstGroupLinkDisplayed()).true
        await assetsPage.clickAssetsAddBtn()
        await helper.createAsset()
    });
    it('should create journal', async () => {
        await devAssetMainPage.clickJournalLink()
        await expect(await journalsPage.isCurrentlyJournalsDisplayed()).true
        await journalsPage.clickCreateBtn()
        await expect(await journalsPage.isCreateJournalFormDisplayed()).true
        await journalsPage.setJournalDescriptionFieldValue(journalDescr)
        await journalsPage.clickCreateJournalBtn()
        await expect(await journalsPage.isJournalTitleDisplayed()).true
        await expect(await journalsPage.getJournalTitleText()).contain(`${journalDescr}`)
    });
    it('should post journal to Spreadsheet', async () => {
        await journalsPage.clickExportDropDownBtn()
        await journalsPage.clickExportAsExcelBtn()
        await expect(await journalsPage.isChooseTransactionFormDisplayed()).true
        await helper.checkingPostedJournalCheckBox()
        await journalsPage.clickPostBtn()
        await expect(await journalsPage.isSuccessfulllyPostedToExcelAlertDisplayed()).true
        await expect(await journalsPage.getSuccessfulllyPostedToExcelAlertText()).contain('This journal was successfully posted to Spreadsheet')
    });
    it('should wait for Excel file to download', async () => {
        await helper.waitForFileExists(filePathXlsx, 15000)
        expect(fs.existsSync(filePathXlsx)).to.be.true;
    });
    it('should read Excel file', async () => {
        readXlsxFile(filePathXlsx).then((rows) => {
            console.log(rows)
        })
    });
});