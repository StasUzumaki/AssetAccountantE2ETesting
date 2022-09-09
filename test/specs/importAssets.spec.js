const devAssetMainPage = require("../pageobjects/devAssetMain.page");
const importsPage = require("../pageobjects/imports.page");
const { expect } = require("chai");
const baseUrl = require("../../data/baseURL");
const helper = require("../pageobjects/helper");
const path = require("path");
const fs = require("fs");
const readXlsxFile = require("read-excel-file/node");
const exp = require("constants");
const assetPage = require("../pageobjects/asset.page");
const assetsPage = require("../pageobjects/assets.page");
const assetGroups = require('../pageobjects/assetGroups.page');
const subscriptionAndPaymentPage = require("../pageobjects/subscriptionAndPayment.page");

const filePathXlsx = "./tempDownloads/AssetImportTemplate.xlsx";

describe("create a new register", () => {
    before("land to dev asset page and login", async () => {
        await browser.url(baseUrl.baseUrlLink);
        await helper.loginToAccountUserSuperTest();
        await helper.checkingExistingRegistersSuperTest();
    });
    after("delete created registers", async () => {
        await devAssetMainPage.clickRegisterSelectionDropDown();
        await devAssetMainPage.clickAllRegistersLink();
        await helper.deleteAllRegisters();
        await browser.pause(1000);
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
        await expect(await assetsPage.isCreateAssetGroupTemplateBtnDisplayed()).true;
        await expect(await assetsPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`);
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
        await importsPage.selectAssetNameValue(1);
        await importsPage.selectCodeValue(2);
        await importsPage.selectDescriptionValue(3);
        await importsPage.clickNextBtn();
    });
    it("should have setup Asset Groups", async () => {
        await expect(await importsPage.isAssetGroupSelectDisplayed()).true;
        await importsPage.clickNextBtn();
    });
    it("should have map purchase date & cost", async () => {
        await expect(await importsPage.isCostSelectDisplayed()).true;
        await importsPage.selectCostValue(6)
        await importsPage.selectPurchaseDateValue(4)
        await importsPage.selectFirstUseDateValue(5)
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
        await expect(await assetsPage.isFirstGroupLinkDisplayed()).true;
        await assetsPage.clickFirstGroupLink();
        await assetsPage.clickFirstAssetLink();
        await expect(await assetPage.isAssetColumnHeaderDisplayed()).true;
    });
    it("should have sure the serial number and location has been added", async () => {
        await assetPage.clickAssetDetailsLink();
        await expect(await assetPage.isLocationLabelDisplayed()).true;
        await expect(await assetPage.getLocationTitleText()).contain("Brisbane");
        await expect(await assetPage.isSerialNumberLabelDisplayed()).true;
        await expect(await assetPage.getSerialNumberTitleText()).contain("192348576");
    });
    it("should have try to add new asset (11th)", async () => {
        await devAssetMainPage.clickAssetsLink();
        await expect(await assetsPage.isFirstGroupLinkDisplayed()).true;
        await assetsPage.clickAssetsAddBtn();
        await assetsPage.clickCreateAssetBtn();
        await expect(await assetsPage.isSubscriptionLimitAlertDisplayed()).true;
        await expect(await assetsPage.getSubscriptionLimitAlertText()).contain(`Subscription Limit`);
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
        await expect(await assetsPage.isFirstGroupLinkDisplayed()).true;
        await browser.refresh();
        await assetsPage.clickAssetsAddBtn();
        //create asset
        await assetsPage.clickCreateAssetBtn();
        await expect(await assetGroups.isNewAssetTitleDisplayed()).true;
        await assetPage.setNewAssetNameValue("Asset 11");
        await assetPage.setNewAssetCodeNumberValue("FA-000011");
        await assetPage.setNewAssetDescriptionValue("Description");
        await assetPage.selectNewAssetGroupValue();
        await assetPage.setNewAssetCostValue("1100");
        await assetPage.setNewAssetPurchaseDateValue("11/01/21");
        await assetPage.setNewAssetQuantityValue("10");
        await assetPage.selectNewAssetQuantityUnitsValue();
        await assetPage.selectFirstClassificationDropDownValue(1);
        await expect(await assetGroups.isDepreciationFormDisplayed()).true;
        await expect(await assetGroups.isTaxDepreciationFormDisplayed()).true;
        await expect(await assetGroups.isAccountsDepreciationFormDisplayed()).true;
        await assetPage.selectTaxDepreciationValue(2);
        await assetPage.selectAccountsDepreciationValue(1);
        await assetPage.setTaxEffectiveLifeFieldvalue(11);
        await assetPage.setAccountsEffectiveLifeFieldValue(11);
        await browser.pause(1000);
        await assetGroups.clickNewAssetSaveBtn();
        await expect(await assetPage.isAssetDescriptionTitleDisplayed()).true;
        await importsPage.clickBulkActionLink();
        await importsPage.clickNewUploadDropDownBtn();
        await importsPage.clickNewAssetsBtn();
        const filePath = path.join(__dirname, "../../data/AssetImportTemplate.xlsx");
        const remoteFilePath = await browser.uploadFile(filePath);
        await expect(await importsPage.isImportFileInputDisplayed()).true;
        await importsPage.setImportFileInputValue(remoteFilePath);
        await importsPage.clickUploadBtn();
        await expect(await assetsPage.isSubscriptionLimitAlertDisplayed()).true;
        await expect(await assetsPage.getSubscriptionLimitAlertText()).contain(`Subscription Limit`);
    });
    it("should have upload the same spreadsheet and update subscription", async () => {
        await assetsPage.clickNewAssetUpgradeBtn();
        await subscriptionAndPaymentPage.clickToggleForAccountingFirms();
        await subscriptionAndPaymentPage.clickStandartPlusLeasesChangePlanBtn();
        await expect(await subscriptionAndPaymentPage.isPaymentMethodFormDisplayed()).true;
        await expect(await subscriptionAndPaymentPage.isCardNumberInputDisplayed()).true;
        await browser.switchToFrame(1);
        await subscriptionAndPaymentPage.setCardNumberFieldValue("4242 4242 4242 4242");
        await browser.switchToParentFrame();
        await expect(await subscriptionAndPaymentPage.isCardExpiryInputDisplayed()).true;
        await browser.switchToFrame(2);
        await subscriptionAndPaymentPage.setCardExpiryFieldValue("0324");
        await browser.switchToParentFrame();
        await expect(await subscriptionAndPaymentPage.isCvcInputDisplayed()).true;
        await browser.switchToFrame(3);
        await subscriptionAndPaymentPage.setCvcFieldValue("777");
        await browser.switchToParentFrame();
        await importsPage.clickUpgradeSubscriptionBtn();
        await expect(await importsPage.isImportUnprocessedStatusDisplayed()).true;
        await expect(await importsPage.getImportUnprocessedStatusText()).contain("Unprocessed");
    });
    //retry the same import
    it("should have fill import details", async () => {
        await importsPage.clickAssetImportLink();
        await importsPage.selectOpeningBalanceDateValue(5);
        await importsPage.setYearInputValue("2022");
        await importsPage.clickContainsPooledAssetsNoBtn();
        await importsPage.clickContainsRevaluedAssetsNoBtn();
        await importsPage.clickDifferentPurchaseNoBtn();
        await importsPage.clickNextBtn();
    });
    it("should have map Asset fields", async () => {
        await expect(await importsPage.isQuantityUnitsFieldDisplayed()).true;
        await importsPage.selectAssetNameValue(1);
        await importsPage.selectCodeValue(2);
        await importsPage.selectDescriptionValue(3);
        await importsPage.clickNextBtn();
    });
    it("should have setup Asset Groups", async () => {
        await expect(await importsPage.isAssetGroupSelectDisplayed()).true;
        await importsPage.clickNextBtn();
    });
    it("should have map purchase date & cost", async () => {
        await expect(await importsPage.isCostSelectDisplayed()).true;
        await importsPage.selectCostValue(6)
        await importsPage.selectPurchaseDateValue(4)
        await importsPage.selectFirstUseDateValue(5)
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
        await importsPage.clickSerialNumberCheckBox();
        await importsPage.selectSerialNumberValue(1);
        await importsPage.clickNextBtn();
        await expect(await importsPage.isClassificationTitleDisplayed()).true;
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
        await expect(await assetsPage.isFirstGroupLinkDisplayed()).true;
        await expect(await assetsPage.isFirstGroupAssetsQuantityDisplayed()).true;
        await expect(await assetsPage.getFirstGroupAssetsQuantityText()).contain("6");
    });
    it("should have rollback and delete import", async () => {
        await importsPage.clickBulkActionLink();
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
    it("make sure the imported assets were removed", async () => {
        await devAssetMainPage.clickAssetsLink();
        await expect(await assetsPage.isFirstGroupLinkDisplayed()).true;
        await expect(await assetsPage.isFirstGroupAssetsQuantityDisplayed()).true;
        await expect(await assetsPage.getFirstGroupAssetsQuantityText()).contain("1");
    });
});
