const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const baseUrl = require('../../data/baseURL')
const { expect } = require('chai');
const helper = require('../pageobjects/helper');
const fs = require('fs');
const readXlsxFile = require('read-excel-file/node')
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');
const assetsPage = require('../pageobjects/assets.page');
const journalsPage = require('../pageobjects/journals.page');
const leasePage = require('../pageobjects/lease.page');
const assetPage = require('../pageobjects/asset.page');

const randomName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors],
    length: 2
});

const registerNameSettings = randomName + '_TestRegister'
const journalDescr = 'Test Description Movements'
const filePathXlsx = './tempDownloads/2022-09-30 - ' + registerNameSettings + ' - Test Description Movements.xlsx'
const filePathPdf = './tempDownloads/' + registerNameSettings + ' - Asset Summary (Tax) 2021-07-01 to 2022-06-30.pdf'
const filePathCsv = './tempDownloads/' + registerNameSettings + ' - Asset Summary (Tax) 2021-07-01 to 2022-06-30.csv'

describe('Pre-Deployment', () => {
    before('land to dev asset page', async () => {
        await helper.platformLink()
    });
    after('logout', async () => {
        // deleting journal
        await devAssetMainPage.clickJournalLink()
        await helper.deleteJournals()
        // deleting asset
        await devAssetMainPage.clickAssetsLink()
        await helper.deleteAllAssets()
        // deleting asset group
        await helper.deleteAssetGroup()
        // deleting register
        await devAssetMainPage.clickRegisterSelectionDropDown()
        await devAssetMainPage.clickAllRegistersLink()
        await helper.deleteAllRegisters()
        await browser.pause(1000)
        await helper.logout()
    });
    //login to existing acc
    it('should login to existing account', async () => {
        await helper.loginToAccountAssetSuperTest()
        await helper.checkingExistingRegistersSuperTest()
        await devAssetMainPage.clickJournalLink()
        await helper.checkingExistingJournals()
    });
    it('should create a new register', async () => {
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true;
        await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register');
        await devAssetMainPage.clickCreateFirstRegisterBtn()
        await helper.createRegisterSuperTest(registerNameSettings)
        await devAssetMainPage.clickAssetsLink()
        await expect(await assetsPage.isCreateAssetGroupTemplateBtnDisplayed()).true;
        await expect(await assetsPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`);
    });
    it('should create asset group (Blank)', async () => {
        await helper.createAssetGroupBlank()
    });
    it('should create asset', async () => {
        await devAssetMainPage.clickAssetsLink()
        await expect(await assetsPage.isFirstGroupLinkDisplayed()).true;
        await assetsPage.clickAssetsAddBtn()
        await helper.createAsset()
    });
    //create lease
    it('should create HP/Lease', async () => {
        await devAssetMainPage.clickAssetsLink()
        await expect(await assetsPage.isFirstGroupLinkDisplayed()).true
        await assetsPage.clickAssetsAddBtn()
        await assetsPage.clickCreateHpLeaseAssetBtn()
        await helper.fillingOutLeaseForm()
        await leasePage.clickAlertMessageGenerateScheduleBtn()
        await helper.generatePaymentSchedule()
        await leasePage.clickLeaseSaveBtn()
        await expect(await assetPage.isAssetColumnHeaderDisplayed()).true
        await expect(await leasePage.isLeaseColumnHeaderDisplayed()).true
    });
    //create journal
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
        await journalsPage.clickPostedJournalCheckBox();
        await journalsPage.clickPostBtn()
        await expect(await journalsPage.isSuccessfulllyPostedToExcelAlertDisplayed()).true
        await expect(await journalsPage.getSuccessfulllyPostedToExcelAlertText()).contain('This journal was successfully posted to Spreadsheet')
    });
    it('should wait for Excel file to download', async () => {
        await helper.waitForFileExists(filePathXlsx, 25000)
        expect(fs.existsSync(filePathXlsx)).to.be.true;
    });
    it('should read Excel file', async () => {
        readXlsxFile(filePathXlsx).then((rows) => {
            console.log(rows)
        })
    });
    //create report 
    it('should create PDF report', async () => {
        await devAssetMainPage.clickAssetsLink()
        await expect(await assetsPage.isFirstGroupLinkDisplayed()).true
        await assetsPage.clickCalendarBtn()
        await expect(await assetsPage.isPeriodsFormDisplayed()).true
        await assetsPage.clickCurrentFyBtn()
        await assetsPage.clickReportsBtn()
        await expect(await assetsPage.isReportFormDisplayed()).true
        await expect(await assetsPage.isReportTypeDropDownClickable()).true
        await browser.pause(2000)
        await assetsPage.selectReportTypeDropDownValue()
        await expect(await assetsPage.isReportStartDateMonthDisplayed()).true
        await assetsPage.selectReportStartDateMonthValue(6)
        await assetsPage.setReportStartDateValue('2021')
        await expect(await assetsPage.isReportEndDateMonthDisplayed()).true
        await assetsPage.selectReportEndDateMonthValue(5)
        await assetsPage.setReportEndDateValue('2022')
        await assetsPage.selectReportFormatDropDown(0)
        await expect(await assetsPage.isGenerateReportBtnClikable()).true
        await assetsPage.clickGenerateReportBtn()
    });
    it('should wait for PDF file to download', async () => {
        await helper.waitForFileExists(filePathPdf, 25000)
        expect(fs.existsSync(filePathPdf)).to.be.true;
    });
    it('should validate PDF file', async () => {
        //pdf validation
        await helper.pdfValidation(filePathPdf)
    });
    it('should create CSV report', async () => {
        await expect(await assetsPage.isReportFormDisplayed()).true
        await expect(await assetsPage.isReportTypeDropDownClickable()).true
        await assetsPage.selectReportTypeDropDownValue()
        await expect(await assetsPage.isReportStartDateMonthDisplayed()).true
        await assetsPage.selectReportStartDateMonthValue(6)
        await assetsPage.setReportStartDateValue('2021')
        await expect(await assetsPage.isReportEndDateMonthDisplayed()).true
        await assetsPage.selectReportEndDateMonthValue(5)
        await assetsPage.setReportEndDateValue('2022')
        await assetsPage.selectReportFormatDropDown(1)
        await expect(await assetsPage.isGenerateReportBtnClikable()).true
        await assetsPage.clickGenerateReportBtn()
    });
    it('should wait for CSV file to download', async () => {
        await helper.waitForFileExists(filePathCsv, 25000)
        expect(fs.existsSync(filePathCsv)).to.be.true;
    });
    it('should validate CSV file', async () => {
        // cvs file validation
        await helper.csvValidation(filePathCsv)
        await devAssetMainPage.clickCloseBtn()
        await devAssetMainPage.clickAssetsLink()
    });
});