const devAssetMainPage = require("../pageobjects/devAssetMain.page");
const usersPage = require("../pageobjects/users.page");
const { expect, use } = require("chai");
const helper = require("../pageobjects/helper");
const loginData = require("../../data/loginData");
const { uniqueNamesGenerator, adjectives, colors, animals } = require("unique-names-generator");
const dashboardPage = require("../pageobjects/dashboard.page");
const organisationSettingsPage = require("../pageobjects/organisationSettings.page");
const organisationSettingsUsersPage = require("../pageobjects/organisationSettingsUsers.page");
const assetsPage = require("../pageobjects/assets.page");
const assetPage = require("../pageobjects/asset.page");

const mainEmail = "stasdevasset";
const shortUserName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors],
    length: 1,
});
const randomCodeNumber = Math.floor(Math.random() * 100);
const tempGoogleMail = mainEmail + "+" + shortUserName + randomCodeNumber + "@gmail.com";

describe('Feature check for a role "Admin"', () => {
    before("land to dev asset page and login", async () => {
        await helper.platformLink();
        await helper.loginToRoleTestingAccount(loginData.userEmailRoleAdmin, loginData.userPasswRoleAdmin);
    });
    after("logout", async () => {
        await helper.logout();
    });
    it("Organisation creation function is available", async () => {
        await dashboardPage.clickFirstRegisterLink();
        await expect(await assetsPage.isCreateAssetGroupTemplateBtnDisplayed()).true;
        await expect(await assetsPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`);
        await devAssetMainPage.clickCreateOrganisationSelectionDropDown();
        await devAssetMainPage.clickCreateNewOrganisationLink();
        await expect(await devAssetMainPage.isCreateNewOrganisationFormDisplayed()).true;
        await devAssetMainPage.clickCloseBtn();
    });
    it("Organisation settings is available", async () => {
        await devAssetMainPage.isOrganisationSettingsLinkDisplayed();
    });
    it("Update organisation settings is unavailable", async () => {
        await devAssetMainPage.isOrganisationSettingsLinkDisplayed();
        await devAssetMainPage.clickOrganisationSettingsLink();
        await expect(await organisationSettingsPage.isOrgDetailsNameDisplayed()).true;
        await expect(await organisationSettingsPage.isOrgDetailsNameClickable()).false;
        await expect(await organisationSettingsPage.isOrgDetailsDescriptionDisplayed()).true;
        await expect(await organisationSettingsPage.isOrgDetailsDescriptionClickable()).false;
        await expect(await organisationSettingsPage.isBillingNameDisplayed()).true;
        await expect(await organisationSettingsPage.isBillingNameClickable()).false;
        await expect(await organisationSettingsPage.isBillingEmailDisplayed()).true;
        await expect(await organisationSettingsPage.isBillingEmailClickable()).false;
        await expect(await organisationSettingsPage.isBillingPhoneDisplayed()).true;
        await expect(await organisationSettingsPage.isBillingPhoneClickable()).false;
    });
    it("Update subscription is unavailable", async () => {
        await expect(await organisationSettingsUsersPage.isSubscriptionAndPaymentLinkClickable()).false;
        await browser.pause(2000);
    });
    it("Create invitation is available", async () => {
        await expect(await organisationSettingsPage.isUserLinkDisplayed()).true;
        await expect(await organisationSettingsPage.isUserLinkClickable()).true;
        await organisationSettingsPage.clickUsersLink();
        await expect(await organisationSettingsUsersPage.isInviteUserBtnDisplayed()).true;
        await expect(await organisationSettingsUsersPage.isInviteUserBtnClickable()).true;
        await organisationSettingsUsersPage.clickInviteUserBtn();
        await expect(await devAssetMainPage.isInviteUserFormDisplayed()).true;
        await devAssetMainPage.setEmailInviteFieldValue(tempGoogleMail);
        await devAssetMainPage.clickInviteBtn();
        await expect(await devAssetMainPage.isInvintationAlertDisplayed()).true;
        await browser.pause(1000)
    });
    it("Resend invitation from Organisation is avaliable", async () => {
        await expect(await usersPage.isInvitedUserEmailCellDisplayed()).true;
        await expect(await usersPage.getInvitedUserEmailCellText()).contain(`${tempGoogleMail}`);
        await usersPage.clickUserAccessDropDown();
        await usersPage.clickUserAccessResendBtn();
        await expect(await devAssetMainPage.isInvintationAlertDisplayed()).true;
        await usersPage.clickAlertInvitationCloseBtn();
        await browser.pause(1000)
    });
    it("Revoke invitation from Organisation is avaliable", async () => {
        await expect(await usersPage.isInvitedUserEmailCellDisplayed()).true;
        await expect(await usersPage.getInvitedUserEmailCellText()).contain(`${tempGoogleMail}`);
        await browser.pause(1000)
        await usersPage.clickUserAccessDropDown();
        await usersPage.clickUserAccessOrgRemoveBtn();
        await usersPage.clickAlertInvitationCloseBtn();
        await expect(await usersPage.isInvitedUserEmailCellExist());
    });
    it("List Users is avaliable", async () => {
        await expect(await usersPage.isListUsersDisplayed()).true;
    });
    it("Update user organisation role is avaliable", async () => {
        await expect(await usersPage.isRoleDropDownToggleManagerDisplayed()).true;
        await expect(await usersPage.isRoleDropDownToggleManagerClickable()).true;
        await usersPage.clickRoleDropDownToggleManager();
        await browser.pause(1000)
    });
    it("Grant user register access is avaliable", async () => {
        await usersPage.clickManagerMenuDropDown();
        await usersPage.clickManageAccessManagerBtn();
        await expect(await usersPage.isRegistersTableDisplayed()).true;
        await dashboardPage.clickDropDownRegisterMenu();
        await usersPage.clickGrantAccessBtn();
        await expect(await usersPage.isDemoRegisterRoleDropDownDisplayed()).true;
        await expect(await devAssetMainPage.isInvintationAlertDisplayed()).true;
        await usersPage.clickAlertInvitationCloseBtn();
        await browser.pause(1000)
    });
    it("Update user register role is avaliable", async () => {
        await expect(await usersPage.isDemoRegisterRoleDropDownClickable()).true;
        await usersPage.clickDemoRegisterRoleDropDown();
        await usersPage.clickRegisterUserRoleBtn();
        await expect(await devAssetMainPage.isInvintationAlertDisplayed()).true;
        await usersPage.clickAlertInvitationCloseBtn();
    });
    it("Remove access for register is avaliable", async () => {
        await dashboardPage.clickDropDownRegisterMenu();
        await usersPage.clickRemoveAccessBtn();
        await expect(await devAssetMainPage.isInvintationAlertDisplayed()).true;
        await usersPage.clickAlertInvitationCloseBtn();
    });
    it("Remove user from organisation is avaliable", async () => {
        await usersPage.clickOrganisationSettingsBackLink();
        await expect(await organisationSettingsUsersPage.isInvitedUserEmailCellDisplayed()).true;
        await usersPage.clickManagerMenuDropDown();
        await usersPage.clickManagerAccessOrgRemoveBtn();
        await expect(await assetPage.isDeleteConfirmationFormDisplayed()).true;
        await expect(await devAssetMainPage.isDeleteConfirmationTitleDisplayed()).true;
        await devAssetMainPage.clickCloseBtn();
    });
    it("Transfer ownership is unavaliable", async () => {
        await browser.pause(2000);
        await expect(await usersPage.isRoleDropDownToggleManagerDisplayed()).true;
        await expect(await usersPage.isRoleDropDownToggleManagerClickable()).true;
        await usersPage.clickRoleDropDownToggleManager();
        await expect(await usersPage.isUserRoleAccountManagerBtnDisplayed()).true;
        await expect(await usersPage.isUserRoleAccountManagerBtnClickable()).false;
    });
    it("List registers is displayed", async () => {
        await devAssetMainPage.clickRegistersLink();
        await expect(await dashboardPage.isRegistersTableDisplayed()).true;
    });
    it("Create register is displayed", async () => {
        await dashboardPage.clickCreateRegisterBtn();
        await devAssetMainPage.setRegisterNameValue("Test name for register");
        await expect(await devAssetMainPage.isCreateNewRegisterFormDisplayed()).true;
        await expect(await devAssetMainPage.isRegisterNameFieldDisplayed()).true;
        await expect(await devAssetMainPage.isEntityNameFieldDisplayed()).true;
        await expect(await devAssetMainPage.isRegisterNameFieldDisplayed()).true;
        await expect(await devAssetMainPage.isEntityNameFieldDisplayed()).true;
        await browser.pause(2000);
        await devAssetMainPage.clickCancelRegisterBtn();
    });
    it("Archivate register is avaliable", async () => {
        await usersPage.clickAdminRegisterDropDownToggle();
        await dashboardPage.clickArchiveBtn();
        await dashboardPage.clickCancelArchiveRegisterBtn();
    });
});
