const devAssetMainPage = require("../pageobjects/devAssetMain.page");
const importsPage = require("../pageobjects/imports.page");
const { expect } = require("chai");
const baseUrl = require("../../data/baseURL");
const helper = require("../pageobjects/helper");
const path = require("path");
const fs = require("fs");
const readXlsxFile = require("read-excel-file/node");

const filePathXlsx = "./tempDownloads/AssetImportTemplate.xlsx";

describe("create a new register", () => {
    before("land to dev asset page and login", async () => {
        await browser.url(baseUrl.baseUrlLink);
        await helper.loginToAccountUserSuperTest();
        await helper.checkingExistingRegistersSuperTest();
    });
    after("delete created registers", async () => {
        await helper.logout();
    });
    it("should create a new org", async () => {
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true;
        await expect(await devAssetMainPage.getDemoRegisterText()).contain("Demo Register");
        await helper.createOrganisation();
    });
    it("should create a new register", async () => {
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true;
        await expect(await devAssetMainPage.getDemoRegisterText()).contain("Demo Register");
        await devAssetMainPage.clickCreateFirstRegisterBtn();
        await helper.createRegister();
        await devAssetMainPage.clickAssetsLink();
        await expect(await devAssetMainPage.isCreateAssetGroupTemplateBtnDisplayed()).true;
        await expect(await devAssetMainPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`);
    });
    it("should visit to Bulk Action and upload spreadsheet", async () => {
        const filePath = path.join(__dirname, "../../data/AssetImportTemplate.xlsx");
        const remoteFilePath = await browser.uploadFile(filePath);
        await importsPage.clickBulkActionLink();
        await importsPage.clickNewUploadDropDownBtn();
        await importsPage.clickNewAssetsBtn();
        await expect(await importsPage.isImportFileInputDisplayed()).true;
        await importsPage.setImportFileInputValue(remoteFilePath);
        await importsPage.clickUploadBtn();
        await expect(await importsPage.isImportNameDisplayed()).true;
    });
    it("should have fill import details", async () => {
        await importsPage.selectOpeningBalanceDateValue(5);
        await importsPage.setYearInputValue("2022");
        await importsPage.clickContainsPooledAssetsNoBtn();
        await importsPage.clickContainsRevaluedAssetsNoBtn();
        await importsPage.clickDifferentPurchaseNoBtn();
        await importsPage.clickNextBtn();
    });
    it("should have map Asset fields", async () => {
        await expect(await importsPage.isQuantityUnitsFieldDisplayed()).true;
        await importsPage.clickNextBtn();
    });
    it("should have setup Asset Groups", async () => {
        await expect(await importsPage.isAssetGroupSelectDisplayed()).true;
        await importsPage.clickNextBtn();
    });
    it("should have map purchase date & cost", async () => {
        await expect(await importsPage.isCostSelectDisplayed()).true;
        await importsPage.clickNextBtn();
    });
    it("should have map tax fields", async () => {
        await expect(await importsPage.isMethodSelectDisplayed()).true;
        await importsPage.clickNextBtn();
    });
    it("should have set up Tax Depreciation Methods", async () => {
        await expect(await importsPage.isDepreciationMethodSelectDislpayed()).true;
        await importsPage.clickNextBtn();
    });
    it("should have map your Accounts fields", async () => {
        await expect(await importsPage.isMethodSelectDisplayed()).true;
        await importsPage.clickNextBtn();
    });
    it("should have set up Accounts Depreciation Methods", async () => {
        await expect(await importsPage.isDepreciationMethodSelectDislpayed()).true;
        await importsPage.clickNextBtn();
    });
    it("should have map remaining columns", async () => {
        await expect(await importsPage.isAlertMessageDisplayed()).true;
        await importsPage.clickLocationCheckBox();
        await importsPage.clickSerialNumberCheckBox();
        await importsPage.selectLocationValue(2);
        await importsPage.selectSerialNumberValue(1);
        await importsPage.clickNextBtn();
    });
    it("should have import summary", async () => {
        await expect(await importsPage.isTaxDetailsDisplayed()).true;
        await expect(await importsPage.isAccountDetailsDisplayed()).true;
        await importsPage.clickProcessBtn();
    });
    it("should have verify that assets have been added to the register", async () => {
        await expect(await importsPage.isViewAssetsLinkDisplayed()).true;
        await expect(await importsPage.getImportResultText()).contain(" successfully imported.");
        await importsPage.clickDoneBtn();
        await expect(await importsPage.isAssetImportDisplayed()).true;
        await expect(await importsPage.isImportCompleteStatusDisplayed()).true;
        await expect(await importsPage.getImportCompleteStatusText()).contain("Complete");
        await devAssetMainPage.clickAssetsLink();
        await expect(await devAssetMainPage.isFirstGroupLinkDisplayed()).true;
        await devAssetMainPage.clickFirstGroupLink();
        await devAssetMainPage.clickFirstAssetLink();
        await expect(await devAssetMainPage.isAssetColumnHeaderDisplayed()).true;
    });
    it("should have sure the serial number and location has been added", async () => {
        await devAssetMainPage.clickAssetDetailsLink();
        await expect(await devAssetMainPage.isLocationLabelDisplayed()).true;
        await expect(await devAssetMainPage.getLocationTitleText()).contain("Brisbane");
        await expect(await devAssetMainPage.isSerialNumberLabelDisplayed()).true;
        await expect(await devAssetMainPage.getSerialNumberTitleText()).contain("192348576");
    });
    it("should have try to add new asset (11th)", async () => {
        await devAssetMainPage.clickAssetsLink();
        await expect(await devAssetMainPage.isFirstGroupLinkDisplayed()).true;
        await devAssetMainPage.clickAssetsAddBtn();
        await devAssetMainPage.clickCreateAssetBtn();
        await expect(await devAssetMainPage.isSubscriptionLimitAlertDisplayed()).true;
        await expect(await devAssetMainPage.getSubscriptionLimitAlertText()).contain(`Subscription Limit`);
    });
    it("should have back to Bulk Actions and check that 'download import' works", async () => {
        await importsPage.clickBulkActionLink();
        await importsPage.clickImportDropDownMenu();
        await importsPage.clickDownloadBtn();
        await helper.waitForFileExists(filePathXlsx, 25000);
        expect(fs.existsSync(filePathXlsx)).to.be.true;
        readXlsxFile(filePathXlsx).then((rows) => {
            console.log(rows);
        });
    });
    it("should have rollback and delete import", async () => {
        await importsPage.clickImportDropDownMenu();
        await importsPage.clickRollbackImportBtn();
        await expect(await importsPage.isRollbackConfirmationFormDisplayed()).true;
        await importsPage.setRollbackConfirmationInputValue("ROLLBACK");
        await importsPage.clickRollbackBtn();
        await expect(await importsPage.isImportUnprocessedStatusDisplayed()).true;
        await expect(await importsPage.getImportUnprocessedStatusText()).contain("Unprocessed");
        await importsPage.clickImportDropDownMenu();
        await importsPage.clickDeleteBtn();
        await expect(await importsPage.isAssetImportExisting());
    });
    it("should have add one asset", async () => {
        await devAssetMainPage.clickAssetsLink();
        await expect(await devAssetMainPage.isFirstGroupLinkDisplayed()).true;
        await browser.refresh();
        await devAssetMainPage.clickAssetsAddBtn();
        //create asset
        await devAssetMainPage.clickCreateAssetBtn();
        await expect(await devAssetMainPage.isNewAssetTitleDisplayed()).true;
        await devAssetMainPage.setNewAssetNameValue("Asset 11");
        await devAssetMainPage.setNewAssetCodeNumberValue("FA-000011");
        await devAssetMainPage.setNewAssetDescriptionValue("Description");
        await devAssetMainPage.selectNewAssetGroupValue();
        await devAssetMainPage.setNewAssetCostValue("1100");
        await devAssetMainPage.setNewAssetPurchaseDateValue("11/01/21");
        await devAssetMainPage.setNewAssetQuantityValue("10");
        await devAssetMainPage.selectNewAssetQuantityUnitsValue();
        await devAssetMainPage.selectFirstClassificationDropDownValue(1);
        await expect(await devAssetMainPage.isDepreciationFormDisplayed()).true;
        await expect(await devAssetMainPage.isTaxDepreciationFormDisplayed()).true;
        await expect(await devAssetMainPage.isAccountsDepreciationFormDisplayed()).true;
        await devAssetMainPage.selectTaxDepreciationValue(2)
        await devAssetMainPage.selectAccountsDepreciationValue(1)
        await devAssetMainPage.setTaxEffectiveLifeFieldvalue(11)
        await devAssetMainPage.setAccountsEffectiveLifeFieldValue(11)
        await browser.pause(1000);
        await devAssetMainPage.clickNewAssetSaveBtn();
        await expect(await devAssetMainPage.isAssetDescriptionTitleDisplayed()).true;
        await importsPage.clickBulkActionLink()
        await importsPage.clickNewUploadDropDownBtn()
        await importsPage.clickNewAssetsBtn()
        const filePath = path.join(__dirname, "../../data/AssetImportTemplate.xlsx");
        const remoteFilePath = await browser.uploadFile(filePath);
        await expect(await importsPage.isImportFileInputDisplayed()).true;
        await importsPage.setImportFileInputValue(remoteFilePath);
        await importsPage.clickUploadBtn();
        await expect(await devAssetMainPage.isSubscriptionLimitAlertDisplayed()).true
        await expect(await devAssetMainPage.getSubscriptionLimitAlertText()).contain(`Subscription Limit`)
    })
    it("should have upload the same spreadsheet and update subscription", async ()=>{
        await devAssetMainPage.clickNewAssetUpgradeBtn()
        await devAssetMainPage.clickToggleForAccountingFirms()
        await devAssetMainPage.clickStandartPlusLeasesChangePlanBtn()
        await expect(await devAssetMainPage.isPaymentMethodFormDisplayed()).true
        await expect(await devAssetMainPage.isCardNumberInputDisplayed()).true
        await browser.switchToFrame(1)
        await devAssetMainPage.setCardNumberFieldValue('4242 4242 4242 4242')
        await browser.switchToParentFrame()
        await expect(await devAssetMainPage.isCardExpiryInputDisplayed()).true
        await browser.switchToFrame(2)
        await devAssetMainPage.setCardExpiryFieldValue('0324')
        await browser.switchToParentFrame()
        await expect(await devAssetMainPage.isCvcInputDisplayed()).true
        await browser.switchToFrame(3)
        await devAssetMainPage.setCvcFieldValue('777')
        await browser.switchToParentFrame()
        await importsPage.clickUpgradeSubscriptionBtn()
        await expect(await importsPage.isImportUnprocessedStatusDisplayed()).true;
        await expect(await importsPage.getImportUnprocessedStatusText()).contain("Unprocessed");
    });
});
