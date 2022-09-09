const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const { expect } = require('chai');
const baseUrl = require('../../data/baseURL');
const helper = require('../pageobjects/helper');
const dashboardPage = require('../pageobjects/dashboard.page')
const fs = require('fs');
const assetsPage = require('../pageobjects/assets.page');

const filePathPdf = './tempDownloads/Asset testing - Asset Summary (Tax) 2021-07-01 to 2022-06-30.pdf'
const filePathCsv = './tempDownloads/Asset testing - Asset Summary (Tax) 2021-07-01 to 2022-06-30.csv'

describe('create report', () => {
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
        //deleting asset
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
    it('should create PDF report', async () => {
        await devAssetMainPage.clickAssetsLink()
        await expect(await assetsPage.isFirstGroupLinkDisplayed()).true
        await assetsPage.clickCalendarBtn()
        await expect(await assetsPage.isPeriodsFormDisplayed()).true
        await assetsPage.clickCurrentFyBtn()
        await assetsPage.clickReportsBtn()
        await expect(await assetsPage.isReportFormDisplayed()).true
        await assetsPage.selectReportTypeDropDownValue()
        await assetsPage.setReportStartDateValue('2021')
        await assetsPage.setReportEndDateValue('2022')
        await assetsPage.selectReportFormatDropDown(0)
        await assetsPage.clickGenerateReportBtn()
        await expect(await assetsPage.isGenerateReportBtnClikable()).true
    });
    it('should wait for PDF file to download', async () => {
        await helper.waitForFileExists(filePathPdf, 15000)
        expect(fs.existsSync(filePathPdf)).to.be.true;
    });
    it('should cheking if PDF file exist and validate it', async () => {
        //check if the file is exist
        await helper.checkingIfPdfFileIsExist()
        //pdf validation
        await helper.pdfValidation(filePathPdf)
    });
    it('should create CSV report', async () => {
        await expect(await assetsPage.isReportFormDisplayed()).true
        await assetsPage.selectReportTypeDropDownValue()
        await assetsPage.setReportStartDateValue('2021')
        await assetsPage.setReportEndDateValue('2022')
        await assetsPage.selectReportFormatDropDown(1)
        await assetsPage.clickGenerateReportBtn()
        await expect(await assetsPage.isGenerateReportBtnClikable()).true
    });
    it('should wait for CSV file to download', async () => {
        await helper.waitForFileExists(filePathCsv, 15000)
        expect(fs.existsSync(filePathCsv)).to.be.true;
    });
    it('should cheking if CSV file exist and validate it', async () => {
        //check if the file is exist
        await helper.checkingIfCsvFileIsExist()
        // cvs file validation
        await helper.csvValidation(filePathCsv)
        await devAssetMainPage.clickCloseBtn()
    });
});