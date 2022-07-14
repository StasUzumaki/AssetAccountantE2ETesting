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

describe('Feature check for a role "Owner"', () => {
    before("land to dev asset page and login", async () => {
        await helper.platformLink();
        await helper.loginToRoleTestingAccount(loginData.userEmailRoleOwner, loginData.userPasswRoleOwner);
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
    it("Update organisation settings is available", async () => {
        await devAssetMainPage.isOrganisationSettingsLinkDisplayed();
        await devAssetMainPage.clickOrganisationSettingsLink();
        await expect(await devAssetMainPage.isOrgDetailsNameDisplayed()).true;
        await expect(await devAssetMainPage.isOrgDetailsNameClickable()).true;
        await expect(await devAssetMainPage.isOrgDetailsDescriptionDisplayed()).true;
        await expect(await devAssetMainPage.isOrgDetailsDescriptionClickable()).true;
        await expect(await devAssetMainPage.isBillingNameDisplayed()).true;
        await expect(await devAssetMainPage.isBillingNameClickable()).true;
        await expect(await devAssetMainPage.isBillingEmailDisplayed()).true;
        await expect(await devAssetMainPage.isBillingEmailClickable()).true;
        await expect(await devAssetMainPage.isBillingPhoneDisplayed()).true;
        await expect(await devAssetMainPage.isBillingPhoneClickable()).true;
    });
    it("Update subscription is available", async () => {
        await expect(await devAssetMainPage.isSubscriptionAndPaymentLinkClickable()).true;
        await devAssetMainPage.clickSubscriptionAndPaymentLink();
        await expect(await devAssetMainPage.isChangePlanBtnDisplayed()).true;
        await expect(await devAssetMainPage.isChangePlanBtnClickable()).true;
        await expect(await devAssetMainPage.isPaymentFormDisplayed()).true;
        await devAssetMainPage.clickOrganisationSettingsUpgradeBtn();
        await expect(await devAssetMainPage.isSubscriptionFormDisplayed()).true;
        await devAssetMainPage.clickCloseBtn();
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
        //await expect(await devAssetMainPage.getInvintationAlertText()).contain(`An invitation has been sent to ${tempGoogleMail}`)
    });
    it("Resend invitation from Organisation is avaliable", async () => {
        await expect(await usersPage.isInvitedUserEmailCellDisplayed()).true;
        await expect(await usersPage.getInvitedUserEmailCellText()).contain(`${tempGoogleMail}`);
        await usersPage.clickUserAccessDropDown();
        await usersPage.clickUserAccessResendBtn();
        await expect(await devAssetMainPage.isInvintationAlertDisplayed()).true;
        await usersPage.clickAlertInvitationCloseBtn();
    });
    it("Revoke invitation from Organisation is avaliable", async () => {
        await expect(await usersPage.isInvitedUserEmailCellDisplayed()).true;
        await expect(await usersPage.getInvitedUserEmailCellText()).contain(`${tempGoogleMail}`);
        await usersPage.clickUserAccessDropDown();
        await usersPage.clickUserAccessOrgRemoveBtn();
        await expect(await devAssetMainPage.isInvintationAlertDisplayed()).true;
        await usersPage.clickAlertInvitationCloseBtn();
        await expect(await usersPage.isInvitedUserEmailCellExist());
    });
    it("List Users is avaliable", async () => {
        await expect(await usersPage.isListUsersDisplayed()).true;
    });
    it("Update user organisation role is avaliable", async () => {
        await expect(await usersPage.isRoleDropDownToggleDisplayed()).true;
        await expect(await usersPage.isRoleDropDownToggleClickable()).true;
        await usersPage.clickRoleDropDownToggle();
    });
    it("Grant user register access is avaliable", async () => {
        await usersPage.clickAdminMenuDropDown();
        await usersPage.clickManageAccessBtn();
        await expect(await usersPage.isRegistersTableDisplayed()).true;
        await devAssetMainPage.clickDropDownRegisterMenu();
        await usersPage.clickGrantAccessBtn();
        await expect(await usersPage.isDemoRegisterRoleDropDownDisplayed()).true;
        await expect(await devAssetMainPage.isInvintationAlertDisplayed()).true;
        await usersPage.clickAlertInvitationCloseBtn();
    });
    it("Update user register role is avaliable", async () => {
        await expect(await usersPage.isDemoRegisterRoleDropDownClickable()).true;
        await usersPage.clickDemoRegisterRoleDropDown();
        await usersPage.clickRegisterManagerRoleBtn();
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
        await devAssetMainPage.clickUserAccessDropDown();
        await devAssetMainPage.clickUserAccessOrgRemoveBtn();
        await expect(await devAssetMainPage.isDeleteConfirmationFormDisplayed()).true;
        await expect(await devAssetMainPage.isDeleteConfirmationTitleDisplayed()).true;
        await devAssetMainPage.clickCloseBtn();
    });
    it("List registers is displayed", async () => {
        await devAssetMainPage.clickRegistersLink();
        await expect(await devAssetMainPage.isRegistersTableDisplayed()).true;
    });
    it("Create register is displayed", async () => {
        await devAssetMainPage.clickCreateRegisterBtn();
        await devAssetMainPage.setRegisterNameValue('Test name for register')
        await expect(await devAssetMainPage.isCreateNewRegisterFormDisplayed()).true;
        await expect(await devAssetMainPage.isRegisterNameFieldDisplayed()).true;
        await expect(await devAssetMainPage.isEntityNameFieldDisplayed()).true;
        await expect(await devAssetMainPage.isSettingsHeaderDisplayed()).true;
        await expect(await devAssetMainPage.isRegisterNameFieldDisplayed()).true;
        await expect(await devAssetMainPage.isEntityNameFieldDisplayed()).true;
        await browser.pause(2000)
        await devAssetMainPage.clickCancelRegisterBtn()
    });
    it("Archivate register is avaliable", async () => {
        await devAssetMainPage.clickDropDownRegisterMenu();
        await devAssetMainPage.clickArchiveBtn();
        await devAssetMainPage.clickCancelArchiveRegisterBtn()
    });
});
