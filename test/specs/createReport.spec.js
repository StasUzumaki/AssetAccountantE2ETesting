const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const { expect } = require('chai');
const baseUrl = require('../../data/baseURL');
const helper = require('../pageobjects/helper');
const fs = require('fs');

const filePathPdf = '../Downloads/Asset testing - Asset Summary (Tax) 2021-07-01 to 2022-06-30.pdf'
const filePathCsv = '../Downloads/Asset testing - Asset Summary (Tax) 2021-07-01 to 2022-06-30.csv'

describe('create report', () => {
    before('land to dev asset page and login', async () => {
        await browser.url(baseUrl.baseUrlLink)
        await helper.loginToAccountCreateAsset()
        await devAssetMainPage.clickFirstRegisterLink()
        //checking existing assets groups and assets
        await helper.checkingExistingGroupsAndAssets()
        //checking existing journals
        await devAssetMainPage.clickJournalLink()
        await helper.checkingExistingJournals()
        await helper.deletePdfFileFromDir()
        await helper.deleteCsvFileFromDir()
    });
    after('land to assets and delete created asset group (Blank)', async () => {
        //delete pdf report
        await helper.deletePdfFileFromDir()
        //delete csv report
        await helper.deleteCsvFileFromDir()
        //deleting asset
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
        await expect(await devAssetMainPage.isFirstGroupLinkDisplayed()).true
        await devAssetMainPage.clickAssetsAddBtn()
        await helper.createAsset()
    });
    it('should create PDF report', async () => {
        await devAssetMainPage.clickAssetsLink()
        await expect(await devAssetMainPage.isFirstGroupLinkDisplayed()).true
        await devAssetMainPage.clickCalendarBtn()
        await expect(await devAssetMainPage.isPeriodsFormDisplayed()).true
        await devAssetMainPage.clickCurrentFyBtn()
        await devAssetMainPage.clickReportsBtn()
        await expect(await devAssetMainPage.isReportFormDisplayed()).true
        await devAssetMainPage.selectReportTypeDropDownValue()
        await devAssetMainPage.setReportStartDateValue('01/07/2021')
        await devAssetMainPage.setReportEndDateValue('30/06/2022')
        await devAssetMainPage.selectReportFormatDropDown(0)
        await devAssetMainPage.clickGenerateReportBtn()
        await expect(await devAssetMainPage.isGenerateReportBtnClikable()).true
    });
    it('should wait for PDF file to download', async () => {
        await helper.waitForFileExists(filePathPdf, 15000)
        expect(fs.existsSync(filePathPdf)).to.be.true;
    });
    it('should cheking if PDF file exist and validate it', async () => {
        //check if the file is exist
        await helper.checkingIfPdfFileIsExist()
        //pdf validation
        await helper.pdfValidation()
    });
    it('should create CSV report', async () => {
        await expect(await devAssetMainPage.isReportFormDisplayed()).true
        await devAssetMainPage.selectReportTypeDropDownValue()
        await devAssetMainPage.setReportStartDateValue('01/07/2021')
        await devAssetMainPage.setReportEndDateValue('30/06/2022')
        await devAssetMainPage.selectReportFormatDropDown(1)
        await devAssetMainPage.clickGenerateReportBtn()
        await expect(await devAssetMainPage.isGenerateReportBtnClikable()).true
    });
    it('should wait for CSV file to download', async () => {
        await helper.waitForFileExists(filePathCsv, 15000)
        expect(fs.existsSync(filePathCsv)).to.be.true;
    });
    it('should cheking if CSV file exist and validate it', async () => {
        //check if the file is exist
        await helper.checkingIfCsvFileIsExist()
        // cvs file validation
        await helper.csvValidation()
        await devAssetMainPage.clickCloseBtn()
    });
});