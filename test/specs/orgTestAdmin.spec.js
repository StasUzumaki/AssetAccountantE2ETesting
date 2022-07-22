const devAssetMainPage = require("../pageobjects/devAssetMain.page");
const usersPage = require("../pageobjects/users.page");
const { expect, use } = require("chai");
const helper = require("../pageobjects/helper");
const loginData = require("../../data/loginData");
const { uniqueNamesGenerator, adjectives, colors, animals } = require("unique-names-generator");

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
        await devAssetMainPage.clickFirstRegisterLink();
        await expect(await devAssetMainPage.isCreateAssetGroupTemplateBtnDisplayed()).true;
        await expect(await devAssetMainPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`);
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
        await expect(await devAssetMainPage.isOrgDetailsNameDisplayed()).true;
        await expect(await devAssetMainPage.isOrgDetailsNameClickable()).false;
        await expect(await devAssetMainPage.isOrgDetailsDescriptionDisplayed()).true;
        await expect(await devAssetMainPage.isOrgDetailsDescriptionClickable()).false;
        await expect(await devAssetMainPage.isBillingNameDisplayed()).true;
        await expect(await devAssetMainPage.isBillingNameClickable()).false;
        await expect(await devAssetMainPage.isBillingEmailDisplayed()).true;
        await expect(await devAssetMainPage.isBillingEmailClickable()).false;
        await expect(await devAssetMainPage.isBillingPhoneDisplayed()).true;
        await expect(await devAssetMainPage.isBillingPhoneClickable()).false;
    });
    it("Update subscription is unavailable", async () => {
        await expect(await devAssetMainPage.isSubscriptionAndPaymentLinkClickable()).false;
        await browser.pause(2000);
    });
    it("Create invitation is available", async () => {
        await expect(await devAssetMainPage.isUserLinkDisplayed()).true;
        await expect(await devAssetMainPage.isUserLinkClickable()).true;
        await devAssetMainPage.clickUsersLink();
        await expect(await devAssetMainPage.isInviteUserBtnDisplayed()).true;
        await expect(await devAssetMainPage.isInviteUserBtnClickable()).true;
        await devAssetMainPage.clickInviteUserBtn();
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
        await devAssetMainPage.clickDropDownRegisterMenu();
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
        await devAssetMainPage.clickDropDownRegisterMenu();
        await usersPage.clickRemoveAccessBtn();
        await expect(await devAssetMainPage.isInvintationAlertDisplayed()).true;
        await usersPage.clickAlertInvitationCloseBtn();
    });
    it("Remove user from organisation is avaliable", async () => {
        await usersPage.clickOrganisationSettingsBackLink();
        await expect(await devAssetMainPage.isInvitedUserEmailCellDisplayed()).true;
        await usersPage.clickManagerMenuDropDown();
        await usersPage.clickManagerAccessOrgRemoveBtn();
        await expect(await devAssetMainPage.isDeleteConfirmationFormDisplayed()).true;
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
        await expect(await devAssetMainPage.isRegistersTableDisplayed()).true;
    });
    it("Create register is displayed", async () => {
        await devAssetMainPage.clickCreateRegisterBtn();
        await devAssetMainPage.setRegisterNameValue("Test name for register");
        await expect(await devAssetMainPage.isCreateNewRegisterFormDisplayed()).true;
        await expect(await devAssetMainPage.isRegisterNameFieldDisplayed()).true;
        await expect(await devAssetMainPage.isEntityNameFieldDisplayed()).true;
        await expect(await devAssetMainPage.isSettingsHeaderDisplayed()).true;
        await expect(await devAssetMainPage.isRegisterNameFieldDisplayed()).true;
        await expect(await devAssetMainPage.isEntityNameFieldDisplayed()).true;
        await browser.pause(2000);
        await devAssetMainPage.clickCancelRegisterBtn();
    });
    it("Archivate register is avaliable", async () => {
        await usersPage.clickAdminRegisterDropDownToggle();
        await devAssetMainPage.clickArchiveBtn();
        await devAssetMainPage.clickCancelArchiveRegisterBtn();
    });
});
