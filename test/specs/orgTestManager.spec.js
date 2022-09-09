const devAssetMainPage = require("../pageobjects/devAssetMain.page");
const usersPage = require("../pageobjects/users.page");
const { expect } = require("chai");
const helper = require("../pageobjects/helper");
const loginData = require("../../data/loginData");
const dashboardPage = require("../pageobjects/dashboard.page");
const assetsPage = require("../pageobjects/assets.page");

describe('Feature check for a role "Manager"', () => {
    before("land to dev asset page and login", async () => {
        await helper.platformLink();
        await helper.loginToRoleTestingAccount(loginData.userEmailRoleManager, loginData.userPasswRoleManager);
    });
    after("logout", async () => {
        await dashboardPage.clickFirstRegisterLink()
        await devAssetMainPage.clickRegisterSettingsLinkOnly()
        await dashboardPage.clickArchiveBtn()
        await dashboardPage.clickArchiveConfirmationOkBtn()
        await expect(await dashboardPage.isSuccessArchivedRegisterMessageDisplayed()).true
        await expect(await assetsPage.isFirstThingsFirstAlertMessageDisplayed()).true
        await expect(await assetsPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`)
        await helper.logout();
    });
    it("Organisation creation function is available", async () => {
        await expect(await assetsPage.isFirstThingsFirstAlertMessageDisplayed()).true
        await expect(await assetsPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`)
        await devAssetMainPage.clickCreateOrganisationSelectionDropDown();
        await devAssetMainPage.clickCreateNewOrganisationLink();
        await expect(await devAssetMainPage.isCreateNewOrganisationFormDisplayed()).true;
        await devAssetMainPage.clickCloseBtn();
    });
    it("Organisation settings is unavailable", async () => {
        await expect(await devAssetMainPage.isOrganisationSettingsExisting()).false;
        await expect(await devAssetMainPage.isOrganisationSettingsClickable()).false;
    });   
    //If we have access to the organisation settings and can go to them, then most likely the rest of the functions in this tab are also available to us. 
    //For example, updating organization details, updating subscriptions, and others. 
    it("List registers is not displayed", async () => {
        await expect(await dashboardPage.isRegistersTableExisting()).false;
    });
    it("Create register is avaliable", async () => {
        await devAssetMainPage.clickCreateARegisterBtn();
        await devAssetMainPage.setRegisterNameValue("Test name for register");
        await expect(await devAssetMainPage.isCreateNewRegisterFormDisplayed()).true;
        await expect(await devAssetMainPage.isRegisterNameFieldDisplayed()).true;
        await expect(await devAssetMainPage.isEntityNameFieldDisplayed()).true;
        await expect(await devAssetMainPage.isRegisterNameFieldDisplayed()).true;
        await expect(await devAssetMainPage.isEntityNameFieldDisplayed()).true;
        await browser.pause(2000);
        await devAssetMainPage.clickSaveBtn();
    });
    it("Archivate register is unavaliable", async () => {
        await devAssetMainPage.clickRegisterSelectionDropDown();
        await devAssetMainPage.clickAllRegistersLink()
        await usersPage.clickAdminRegisterDropDownToggle();
        await expect(await dashboardPage.isArchiveBtnExisting()).false
    });
});
