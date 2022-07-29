const devAssetMainPage = require("../pageobjects/devAssetMain.page");
const authPage = require("../pageobjects/authentication.page");
const helper = require("../pageobjects/helper");
const xeroSignUpPage = require("../pageobjects/xeroSignUp.page");
const xeroAccounts = require("../../helper/xeroAccounts");
const xeroMainPage = require("../pageobjects/xeroMain.page");
const xeroLogInPage = require("../pageobjects/xeroLogIn.page");
const googleMailPage = require("../pageobjects/googleMail.page");
const googleMailboxData = require("../../data/googleMailboxData");
const { expect } = require("chai");
const baseUrl = require("../../data/baseURL");
const { uniqueNamesGenerator, adjectives, colors, animals } = require("unique-names-generator");

const shortLastName = uniqueNamesGenerator({
    dictionaries: [colors],
    length: 1,
});
const randomOrgName = shortLastName + "_org";
const xeroPass = "XeroPassword123";

describe("Sign in with Xero", () => {
    before("land to Xero developer page", async () => {
        await browser.url(baseUrl.baseUrlXeroLink);
    });
    after("logout", async () => {
        await browser.switchWindow("dev.asset.accountant");
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
    it("should connect to Xero and verify that", async () => {
        await devAssetMainPage.clickRegisterSettingsLink();
        await devAssetMainPage.clickIntegrationsLink();
        await devAssetMainPage.clickXeroDropDown();
        await devAssetMainPage.clickConnectToXeroBtn();
        await expect(await xeroLogInPage.isOrganisationDataFormDisplayed()).true;
        await xeroLogInPage.clickApproveBtn();
    });
    it("should choose Tenant and `create new` organisation", async () => {
        await expect(await devAssetMainPage.isSetUptoUseFormDisplayed()).true;
        await devAssetMainPage.clickSetUpToUseConnectBtn();
    });
    it("should disconnect from from Xero", async () => {
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
