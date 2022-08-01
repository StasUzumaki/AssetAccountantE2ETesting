const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const baseUrl = require('../../data/baseURL')
const { expect } = require('chai');
const helper = require('../pageobjects/helper');
const fs = require('fs');
const readXlsxFile = require('read-excel-file/node')
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator')

const randomName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors],
    length: 2
});

const registerNameSettings = randomName + '_TestRegister'
const journalDescr = 'Test Description Movements'
const filePathXlsx = './tempDownloads/2022-08-31 - '+ registerNameSettings +' - Test Description Movements.xlsx'
const filePathPdf = './tempDownloads/'+ registerNameSettings +' - Asset Summary (Tax) 2021-07-01 to 2022-06-30.pdf'
const filePathCsv = './tempDownloads/'+ registerNameSettings +' - Asset Summary (Tax) 2021-07-01 to 2022-06-30.csv'

describe('Asset Super Test', () => {
    before('land to dev asset page', async () => {
        await browser.url(baseUrl.baseUrlLink)
    });
    after('logout', async () => {
        // //deleting journal
        await devAssetMainPage.clickJournalLink()
        await helper.deleteJournals()
        // //deleting asset
        await devAssetMainPage.clickAssetsLink()
        await helper.deleteAllAssets()
        // deleting asset group
        await helper.deleteAssetGroup()
        //deleting register
        await devAssetMainPage.clickRegisterSelectionDropDown()
        await devAssetMainPage.clickAllRegistersLink()
        await helper.deleteAllRegisters()
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
        await expect(await devAssetMainPage.isCreateAssetGroupTemplateBtnDisplayed()).true;
        await expect(await devAssetMainPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`);
    });
    it('should create asset group (from template) if no groups have been created', async () => {
        await helper.createAssetGroupFromTemplate()
    });
    it('should create asset group (Blank) with existing group', async () => {
        await devAssetMainPage.clickAssetsLink()
        await devAssetMainPage.clickAssetsAddBtn()
        await helper.createAssetGroupBlank()
    });
    it('should create classifications', async () => {
        await devAssetMainPage.clickRegisterSettingsLink()
        await devAssetMainPage.clickClassificationLink()
        await helper.addClassification()
        await expect(await devAssetMainPage.isFirstClassificationDisplayed()).true
        await helper.addClassification()
        await expect(await devAssetMainPage.isSecondClassificationDisplayed()).true
    });
    it('should create asset', async () => {
        await devAssetMainPage.clickAssetsLink()
        await expect(await devAssetMainPage.isFirstGroupLinkDisplayed()).true;
        await devAssetMainPage.clickAssetsAddBtn()
        await helper.createAssetClassification()
    });
    it('should add and reverse opening balance', async () => {
        await helper.assetAddOpeningBalance()
        await helper.assetReverseOpeningBalance()
    });
    it('should add sell and reverse sale', async () => {
        await helper.assetSell()
        await helper.assetReverseSale()
    });
    //problem with partial write off
    it('should write off asset and reverse write off', async () => {
        await helper.assetWriteOff()
        await helper.assetReverseWriteOff()
    });
    it('should partial sell asset and reverse partial sale', async () => {
        await helper.assetPartialSell()
        await helper.assetReversePartialSale()
    });
    it('should partial write off asset and reverse partial write off', async () => {
        await helper.assetPartialWriteOff()
        await helper.assetReversePartialWriteOff()
    });
    it('should add and reverse reassessment', async () => {
        await helper.taxAddReassessment()
        await helper.taxReverseReassessment()
    });
    it('should add and reverse transfer to pool', async () => {
        await helper.taxAddTransferToPool()
        await helper.taxReverseTransferToPool()
    });
    it('should add and reverse adjustment', async () => {
        await helper.taxAddAdjustment()
        await helper.taxReverseAdjustment()
    });
    it('should add and reverse reassessment taxable use', async () => {
        await helper.taxAddReassessmentTaxableUse()
        await helper.taxReverseReassessmentTaxableUse()
    });
    it('should link to account tab, add and reverse reassessment', async () => {
        await helper.accountsAddReassessment()
        await helper.accountsReverseReasessment()
    });
    it('should link to account tab, add and reverse revaluation', async () => {
        await helper.accountsAddRevaluation()
        await helper.accountsReverseRevaluation()
    });
    it('should link to account tab, add and reverse impairment', async () => {
        await helper.accountsAddImpairment()
        await helper.accountsReverseImpairment()
    });
    it('should link to account tab, add and reverse adjustment', async () => {
        await helper.accountsAddAdjustment()
        await helper.accountsReverseAdjustment()
        //
        await devAssetMainPage.clickReverseDropDown()
        await devAssetMainPage.clickReverseTransferBtn()
        await expect(await devAssetMainPage.isReversalConfirmationFormDisplayed()).true
        await devAssetMainPage.clickDeleteCofirmationOkBtn()
        await browser.pause(3000)
        await devAssetMainPage.clickReverseDropDown()
        await devAssetMainPage.clickReverseTransferBtn()
        await expect(await devAssetMainPage.isReversalConfirmationFormDisplayed()).true
        await devAssetMainPage.clickDeleteCofirmationOkBtn()
        await browser.pause(3000)
    });
    it('should add link attachment', async () => {
        await devAssetMainPage.clickAssetDetailsLink()
        await helper.addLinkAttachment()
        await helper.deleteAllLinkAttachments()
    });
    it('should add file attachment', async () => {
        await helper.addFilesAttachment()
        await helper.deleteAllFilesAttachments()
        //change delete func
    });
    it('should create HP/Lease', async () => {
        await devAssetMainPage.clickAssetsLink()
        await expect(await devAssetMainPage.isFirstGroupLinkDisplayed()).true
        await devAssetMainPage.clickAssetsAddBtn()
        await devAssetMainPage.clickCreateHpLeaseAssetBtn()
        await helper.fillingOutLeaseForm()
        await devAssetMainPage.clickAlertMessageGenerateScheduleBtn()
        await helper.generatePaymentSchedule()
        //await helper.fillingOutLeasePaymentForm()
        await devAssetMainPage.clickLeaseSaveBtn()
        await expect(await devAssetMainPage.isAssetColumnHeaderDisplayed()).true
        await expect(await devAssetMainPage.isLeaseColumnHeaderDisplayed()).true
    });
    it('should create journal', async () => {
        await devAssetMainPage.clickJournalLink()
        await expect(await devAssetMainPage.isCurrentlyJournalsDisplayed()).true
        await devAssetMainPage.clickCreateBtn()
        await expect(await devAssetMainPage.isCreateJournalFormDisplayed()).true
        await devAssetMainPage.setJournalDescriptionFieldValue(journalDescr)
        await devAssetMainPage.clickCreateJournalBtn()
        await expect(await devAssetMainPage.isJournalTitleDisplayed()).true
        await expect(await devAssetMainPage.getJournalTitleText()).contain(`${journalDescr}`)
    });
    it('should post journal to Spreadsheet', async () => {
        await devAssetMainPage.clickExportDropDownBtn()
        await devAssetMainPage.clickExportAsExcelBtn()
        await expect(await devAssetMainPage.isChooseTransactionFormDisplayed()).true
        //await devAssetMainPage.clickPurchasesCheckBox()
        await devAssetMainPage.clickPostBtn()
        await expect(await devAssetMainPage.isSuccessfulllyPostedToExcelAlertDisplayed()).true
        await expect(await devAssetMainPage.getSuccessfulllyPostedToExcelAlertText()).contain('This journal was successfully posted to Spreadsheet')
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
    //create report 
    it('should create PDF report', async () => {
        await devAssetMainPage.clickAssetsLink()
        await expect(await devAssetMainPage.isFirstGroupLinkDisplayed()).true
        await devAssetMainPage.clickCalendarBtn()
        await expect(await devAssetMainPage.isPeriodsFormDisplayed()).true
        await devAssetMainPage.clickCurrentFyBtn()
        await devAssetMainPage.clickReportsBtn()
        await expect(await devAssetMainPage.isReportFormDisplayed()).true
        await expect(await devAssetMainPage.isReportTypeDropDownClickable()).true
        await browser.pause(2000)
        await devAssetMainPage.selectReportTypeDropDownValue()
        await expect(await devAssetMainPage.isReportStartDateMonthDisplayed()).true
        await devAssetMainPage.selectReportStartDateMonthValue(6)
        await devAssetMainPage.setReportStartDateValue('2021')
        await expect(await devAssetMainPage.isReportEndDateMonthDisplayed()).true
        await devAssetMainPage.selectReportEndDateMonthValue(5)
        await devAssetMainPage.setReportEndDateValue('2022')
        await devAssetMainPage.selectReportFormatDropDown(0)
        await devAssetMainPage.clickGenerateReportBtn()
        await expect(await devAssetMainPage.isGenerateReportBtnClikable()).true
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
        await expect(await devAssetMainPage.isReportFormDisplayed()).true
        await expect(await devAssetMainPage.isReportTypeDropDownClickable()).true
        await devAssetMainPage.selectReportTypeDropDownValue()
        await expect(await devAssetMainPage.isReportStartDateMonthDisplayed()).true
        await devAssetMainPage.selectReportStartDateMonthValue(6)
        await devAssetMainPage.setReportStartDateValue('2021')
        await expect(await devAssetMainPage.isReportEndDateMonthDisplayed()).true
        await devAssetMainPage.selectReportEndDateMonthValue(5)
        await devAssetMainPage.setReportEndDateValue('2022')
        await devAssetMainPage.selectReportFormatDropDown(1)
        await devAssetMainPage.clickGenerateReportBtn()
        await expect(await devAssetMainPage.isGenerateReportBtnClikable()).true
    });
    it('should wait for CSV file to download', async () => {
        await helper.waitForFileExists(filePathCsv, 25000)
        expect(fs.existsSync(filePathCsv)).to.be.true;
    });
    it('should validate CSV file', async () => {
        // cvs file validation
        await helper.csvValidation(filePathCsv)
        await devAssetMainPage.clickCloseBtn()
    });

});