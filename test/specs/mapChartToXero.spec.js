const authPage = require("../pageobjects/authentication.page");
const devAssetMainPage = require("../pageobjects/devAssetMain.page");
const { expect } = require("chai");
const baseUrl = require("../../data/baseURL");
const helper = require("../pageobjects/helper");
const xeroSignUpPage = require("../pageobjects/xeroSignUp.page");
const xeroAccounts = require("../../helper/xeroAccounts");
const xeroMainPage = require("../pageobjects/xeroMain.page");
const xeroLogInPage = require("../pageobjects/xeroLogIn.page");
const googleMailPage = require("../pageobjects/googleMail.page");
const googleMailboxData = require("../../data/googleMailboxData");
const { uniqueNamesGenerator, adjectives, colors, animals } = require("unique-names-generator");

const journalDescr = "Test Description Movements";
const shortLastName = uniqueNamesGenerator({
    dictionaries: [colors, adjectives, animals],
    length: 1,
});
const randomOrgName = shortLastName + "_org";
const xeroPass = "XeroPassword123";

describe("Map Chart of Accounts to Xero and post a Journal", () => {
    before("land to dev asset page and login", async () => {
        await browser.url(baseUrl.baseUrlXeroLink);
    });
    after("delete created registers and logout", async () => {
        await browser.switchWindow("dev.asset.accountant");
        // //deleting journal
        await devAssetMainPage.clickJournalLink();
        await helper.deleteJournals();
        // //deleting asset
        await devAssetMainPage.clickAssetsLink();
        await helper.deleteAllAssets();
        // deleting asset group
        await helper.deleteAssetGroup();
        //logout
        await helper.logout();
    });
    it("should have create and login to Xero account", async () => {
        await xeroSignUpPage.clickXeroMainPageSignUpBtn();
        await browser.closeWindow();
        await browser.switchWindow("Sign up for free trial | Xero");
        await xeroAccounts.createAccountXero();
    });
    it("should verify Xero account by email", async () => {
        await browser.newWindow("https://mail.google.com/");
        await browser.pause(15000);
        await googleMailPage.setEmailFieldValue(googleMailboxData.userEmail);
        await googleMailPage.clickNextBtn();
        await googleMailPage.setPasswordFieldValue(googleMailboxData.userPassword);
        await googleMailPage.clickNextBtn();
        await googleMailPage.clickXeroConfirmMail();
        await googleMailPage.clickXeroVerifyLink();
        await googleMailPage.clickBackBtn();
        await expect(await googleMailPage.isSelectVerifyMessageCheckBoxClickable()).true;
        await browser.pause(1000);
        await googleMailPage.clickSelectVerifyMessageCheckBox();
        await googleMailPage.clickDeleteVerifyMessageBtn();
        await browser.pause(2000);
        await expect(await googleMailPage.isAlertMessageDisplayed()).true;
        await googleMailPage.clickCloseAlertMessageBtn();
        await browser.closeWindow();
    });
    it("should activate Xero account ", async () => {
        //activate Xero account
        await browser.switchWindow("Activate Account | Xero Accounting");
        await xeroSignUpPage.setPasswordValue(xeroPass);
        await xeroSignUpPage.selectLocationDropDownValue();
        await xeroSignUpPage.clickSubmitBtn();
        await expect(await xeroSignUpPage.isAddYourBusinessFormDisplayed()).true;
        //fill out business form
        await xeroAccounts.filloutBusinessForm("DevAssetAcc", "Financial Asset Broking Services");
        await expect(await xeroLogInPage.isLogInBtnDisplayed()).true;
        //login to Xero acc
        await xeroAccounts.logInToXeroAccout();
        await expect(await xeroLogInPage.isSecondLayerOfSecurityDisplayed()).true;
        await expect(await xeroLogInPage.getSecondLayerOfSecurityText()).contain("Add a second layer of security");
        await xeroLogInPage.clickNotNowBtn();
        await expect(await xeroMainPage.isWelcomeBannerImgDisplayed()).true;
        await expect(await xeroMainPage.getWelcomeBannerText()).contain("Hi, let’s get set up");
    });
    it("should have land to dev asset accountant page and choose login with Xero", async () => {
        await browser.newWindow(baseUrl.baseUrlLink);
        await authPage.clickSignInBtn();
        await authPage.clickXeroSignInLink();
        await expect(await xeroLogInPage.isAssetAccountantDevAccessFormDisplayed()).true;
    });
    it("should allow access to AA", async () => {
        await xeroLogInPage.clickAllowAccessBtn();
        await expect(await authPage.isOrganizationFieldDisplayed()).true;
        await authPage.setOrganizationNameFieldValue(randomOrgName);
        await browser.pause(2000);
        await authPage.selectCountryDropDownValue(0);
        await authPage.clickCreateOrganizationBtn();
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true;
        await expect(await devAssetMainPage.getDemoRegisterText()).contain("Demo Register");
    });
    it("should create a new register", async () => {
        await devAssetMainPage.clickCreateFirstRegisterBtn();
        await helper.createRegister();
        await devAssetMainPage.clickAssetsLink();
        await expect(await devAssetMainPage.isFirstThingsFirstAlertMessageDisplayed()).true;
        await expect(await devAssetMainPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`);
    });
    it("should connect to Xero and verify that", async () => {
        await devAssetMainPage.clickRegisterSettingsLink();
        await devAssetMainPage.clickIntegrationsLink();
        await devAssetMainPage.clickXeroDropDown();
        await devAssetMainPage.clickConnectToXeroBtn();
        await expect(await xeroLogInPage.isOrganisationDataFormDisplayed()).true;
        await xeroLogInPage.clickApproveBtn();
    });
    it("should choose Tenant and  organisation", async () => {
        await expect(await devAssetMainPage.isSetUptoUseFormDisplayed()).true;
        await devAssetMainPage.clickSetUpToUseConnectBtn();
    });
    it("should create asset group (Blank)", async () => {
        await devAssetMainPage.clickAssetsLink();
        await helper.createAssetGroupBlankWithGeneralLedger();
    });
    it("should create asset", async () => {
        await devAssetMainPage.clickAssetsLink();
        await expect(await devAssetMainPage.isFirstGroupLinkDisplayed()).true;
        await devAssetMainPage.clickAssetsAddBtn();
        await helper.createAsset();
    });
    it("should create journal", async () => {
        await devAssetMainPage.clickJournalLink();
        await expect(await devAssetMainPage.isCurrentlyJournalsDisplayed()).true;
        await devAssetMainPage.clickCreateBtn();
        await expect(await devAssetMainPage.isCreateJournalFormDisplayed()).true;
        await devAssetMainPage.setJournalDescriptionFieldValue(journalDescr);
        await devAssetMainPage.clickCreateJournalBtn();
        await expect(await devAssetMainPage.isJournalTitleDisplayed()).true;
        await expect(await devAssetMainPage.getJournalTitleText()).contain(`${journalDescr}`);
    });
    it("should post journal to Xero", async () => {
        await devAssetMainPage.clickPostToXeroBtn();
        await expect(await devAssetMainPage.isChooseTransactionFormDisplayed()).true;
        await devAssetMainPage.clickPostBtn();
        await expect(await devAssetMainPage.isSuccessfulllyPostedToXeroAlertDisplayed()).true;
    });
    it("should verify that we can see the journal in Xero", async () => {
        await devAssetMainPage.clickViewJournalInXeroLink();
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[3]);
        await expect(await xeroMainPage.isJournalFromAssetAccountantDisplayed()).true;
    });
    it("should disconnect from from Xero", async () => {
        await browser.switchWindow("dev.asset.accountant");
        await devAssetMainPage.clickRegisterSettingsWithXeroLink();
        await devAssetMainPage.clickIntegrationsLink();
        await devAssetMainPage.clickXeroDisconnectBtn();
        await expect(await devAssetMainPage.isDisconnectConfirmationFormDisplayed()).true;
        await devAssetMainPage.clickDisconnectConfirmationBtn();
        await expect(await devAssetMainPage.isExternalIntegrationFormDisplayed()).true;
    });
    it("should log out from Xero account", async () => {
        await browser.switchWindow("go.xero.com");
        await xeroAccounts.logoutXeroAccout();
        await expect(await xeroLogInPage.isLogInBtnDisplayed()).true;
    });
});