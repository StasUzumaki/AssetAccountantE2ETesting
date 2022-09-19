const authPage = require('../pageobjects/authentication.page')
const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const googleMailPage = require('../pageobjects/googleMail.page')
const dashboardPage = require('../pageobjects/dashboard.page');
const organisationSettingsPage = require('../pageobjects/organisationSettings.page')
const { expect } = require('chai');
const helper = require('../pageobjects/helper');
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');
const assetPage = require('../pageobjects/asset.page');
const assetsPage = require('../pageobjects/assets.page');
const assetGroups = require('../pageobjects/assetGroups.page')
const organisationSettingsUsersPage = require('../pageobjects/organisationSettingsUsers.page');
const registerSettingsUsersPage = require('../pageobjects/registerSettingsUsers.page');
const subscriptionAndPaymentPage = require('../pageobjects/subscriptionAndPayment.page');
const path = require("path");
const importsPage = require("../pageobjects/imports.page");

const mainEmail = 'stasdevasset'
const shortUserName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors],
    length: 1
});
const shortLastName = uniqueNamesGenerator({
    dictionaries: [colors],
    length: 1
});
const randomName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors],
    length: 2
});
const randomAssetName = randomName + '_Asset';
const randomCodeNumber = Math.floor(Math.random() * 100);
const tempGoogleMail = mainEmail + "+" + shortUserName + randomCodeNumber + "@gmail.com";
const tempGoogleMailReg = mainEmail + "+" + shortUserName + "reg" + randomCodeNumber + "@gmail.com";
const passwToAccount = 'devAssetTest'
const randomOrgName = shortUserName + '_org';

describe('Account / User', () => {
    before('land to dev asset page', async () => {
        await helper.platformLink()
    });
    after('logout', async () => {
        await devAssetMainPage.clickRegisterSelectionDropDown()
        await devAssetMainPage.clickAllRegistersLink()
        await helper.deleteAllRegisters()
        await helper.logout()
    });
    it('should create account with valid credentials', async () => {
        await helper.createAssetAccount()
        await expect(await authPage.isEmailVerificationFormDisplayed()).true;
        await authPage.clickOkVerifyBtn()
        await expect(await authPage.isSignInBtnDisplayed()).true;
    });
    it('should verify account by email', async () => {
        await browser.url('https://mail.google.com/')
        await browser.pause(7000)
        await helper.loginToGoogleMailBox()
        await googleMailPage.clickVerifyMessage()
        await expect(await googleMailPage.isVerifyLinkDisplayed()).true;
        await googleMailPage.scrollIntoVerifyLink()
        await googleMailPage.clickVerifyLink()
        await googleMailPage.clickBackBtn()
        await googleMailPage.clickSelectVerifyMessageCheckBox()
        await googleMailPage.clickDeleteVerifyMessageBtn()
        await expect(await googleMailPage.isAlertMessageDisplayed()).true;
        await googleMailPage.clickCloseAlertMessageBtn()
        await browser.pause(2000)
    });
    it('should create organisation after email validation', async () => {
        const handles = await browser.getWindowHandles()
        await browser.closeWindow()
        await browser.switchToWindow(handles[1])
        await expect(await authPage.isOrganizationFieldDisplayed()).true;
        await authPage.setOrganizationNameFieldValue(randomOrgName);
        await browser.pause(1000)
        await authPage.selectCountryDropDownValue(0)
        await authPage.clickCreateOrganizationBtn();
        await expect(await devAssetMainPage.isCreateFirstRegisterBtnDisplayed()).true;
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true;
        await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register');
    });
    //change sub
    it('should create a new register', async () => {
        await expect(await devAssetMainPage.isCreateFirstRegisterBtnDisplayed()).true;
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true;
        await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register');
        await devAssetMainPage.clickCreateFirstRegisterBtn()
        await helper.createRegister()
        await devAssetMainPage.clickAssetsLink()
        await expect(await assetsPage.isCreateAssetGroupTemplateBtnDisplayed()).true;
        await expect(await assetsPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`);
    });
    it('should change subscription plan', async () => {
        await devAssetMainPage.clickOrganisationSettingsLink()
        await organisationSettingsUsersPage.clickSubscriptionAndPaymentLink()
        await expect(await subscriptionAndPaymentPage.isPaymentFormDisplayed()).true
        await subscriptionAndPaymentPage.clickOrganisationSettingsUpgradeBtn()
        await expect(await subscriptionAndPaymentPage.isSubscriptionFormDisplayed()).true
        await subscriptionAndPaymentPage.clickToggleForAccountingFirms()
        await subscriptionAndPaymentPage.clickStandartPlusLeasesChangePlanBtn()
        await expect(await subscriptionAndPaymentPage.isPaymentMethodFormDisplayed()).true
        await expect(await subscriptionAndPaymentPage.isCardNumberInputDisplayed()).true
        await browser.switchToFrame(5)
        await subscriptionAndPaymentPage.setCardNumberFieldValue('4242 4242 4242 4242')
        await browser.switchToParentFrame()
        await browser.switchToFrame(6)
        await subscriptionAndPaymentPage.setCardExpiryFieldValue('0324')
        await browser.switchToParentFrame()
        await browser.switchToFrame(7)
        await subscriptionAndPaymentPage.setCvcFieldValue('777')
        await browser.switchToParentFrame()
        await subscriptionAndPaymentPage.clickPaymentUpgradeSubBtn()
        await expect(await subscriptionAndPaymentPage.isCurrentPaymentMethodAlertDisplayed()).true
        await expect(await subscriptionAndPaymentPage.isCurrentAccountPlanDispalyed()).true
        await expect(await subscriptionAndPaymentPage.isChangePlanBtnDisplayed()).true
        await helper.logout()
    });
    //login to existing acc
    it('should login to existing account', async () => {
        await helper.platformLink()
        await helper.loginToAccountUserSuperTest()
        await helper.checkingExistingRegistersSuperTest()
    });
    //create a new org
    it('should create a new organisation', async () => {
        await helper.createOrganisation()
    });
    //create a new register
    it('should create a new register', async () => {
        await devAssetMainPage.clickCreateFirstRegisterBtn()
        await helper.createRegister()
        await devAssetMainPage.clickAssetsLink()
        await expect(await assetsPage.isFirstThingsFirstAlertMessageDisplayed()).true
        await expect(await assetsPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`)
        await devAssetMainPage.clickRegisterSelectionDropDown()
        await devAssetMainPage.clickAllRegistersLink()
    });
    //invite user to org
    it('should invite user and give them permissions for the Organisation and Register', async () => {
        await dashboardPage.clickFirstRegisterLink()
        await expect(await assetsPage.isCreateAssetGroupTemplateBtnDisplayed()).true
        await expect(await assetsPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`)
        await devAssetMainPage.clickOrganisationSettingsLink()
        await organisationSettingsPage.clickUsersLink()
        await organisationSettingsUsersPage.clickInviteUserBtn()
        await expect(await devAssetMainPage.isInviteUserFormDisplayed()).true
        await devAssetMainPage.setEmailInviteFieldValue(tempGoogleMail)
        await organisationSettingsUsersPage.clickRegisterCheckBoxForInvite()
        await organisationSettingsUsersPage.clickRegisterRoleDropDown()
        await organisationSettingsUsersPage.clickRegisterUserRoleBtn()
        await devAssetMainPage.clickInviteBtn()
        await expect(await devAssetMainPage.isInvintationAlertDisplayed()).true
        await expect(await organisationSettingsUsersPage.isInvitedUserNameCellDisplayed()).true
        await expect(await organisationSettingsUsersPage.getInvitedUserNameCellText()).contain(`(Invitation Pending)`)
        await expect(await organisationSettingsUsersPage.isInvitedUserEmailCellDisplayed()).true
        await expect(await organisationSettingsUsersPage.getInvitedUserEmailCellText()).contain(`${tempGoogleMail}`)
        await helper.logout()
    });
    it('should find and accept email invitation', async () => {
        await browser.url('https://mail.google.com/')
        await browser.pause(7000)
        //await helper.loginToGoogleMailBox()
        await googleMailPage.clickInviteMessage()
        await googleMailPage.clickAcceptInvitationLinkLink()
        await googleMailPage.clickBackBtn()
        await googleMailPage.clickSelectVerifyMessageCheckBox()
        await googleMailPage.clickDeleteVerifyMessageBtn()
        await expect(await googleMailPage.isAlertMessageDisplayed()).true
        await googleMailPage.clickCloseAlertMessageBtn()
        await browser.pause(2000)
        const handles = await browser.getWindowHandles()
        await browser.closeWindow()
        await browser.switchToWindow(handles[1])
    });
    it('should create account with valid credentials', async () => {
        await authPage.clickCreateAccountBtn();
        await authPage.setFisrtNameValue(shortUserName)
        await authPage.setLastNameValue(shortLastName)
        await authPage.setEmailValue(tempGoogleMail)
        await authPage.setPhoneNumberValue('7777777777')
        await authPage.setPasswordCreateAccValue(passwToAccount)
        await authPage.setPasswordCreateAccConfirmValue(passwToAccount)
        await authPage.clickRegisterBtn()
        await expect(await authPage.isEmailVerificationFormDisplayed()).true
        await authPage.clickOkVerifyBtn()
        await browser.pause(7000)
    });
    it('should verify account by email and validate that user can access the Register they have been invited to', async () => {
        await browser.url('https://mail.google.com/')
        await googleMailPage.clickVerifyMessage()
        await expect(await googleMailPage.isVerifyLinkDisplayed()).true
        await googleMailPage.scrollIntoVerifyLink()
        await googleMailPage.clickVerifyLink()
        await googleMailPage.clickBackBtn()
        await googleMailPage.clickSelectVerifyMessageCheckBox()
        await googleMailPage.clickDeleteVerifyMessageBtn()
        await expect(await googleMailPage.isAlertMessageDisplayed()).true
        await googleMailPage.clickCloseAlertMessageBtn()
        await browser.pause(2000)
        const handles = await browser.getWindowHandles()
        await browser.closeWindow()
        await browser.switchToWindow(handles[1])
        await expect(await devAssetMainPage.isInvintationAlertDisplayed()).true
        await expect(await dashboardPage.isFirstRegisterLinkDisplayed()).true
        await helper.logout()
    });
    it('should login to master account, remove user from Register', async () => {
        await helper.platformLink()
        await helper.loginToAccountUserSuperTest()
        await expect(await dashboardPage.isFirstRegisterLinkDisplayed()).true
        await dashboardPage.clickDropDownRegisterMenu()
        await dashboardPage.clickManageAccessBtn()
        await expect(await organisationSettingsUsersPage.isInvitedUserEmailCellDisplayed()).true
        await expect(await organisationSettingsUsersPage.getInvitedUserEmailCellText()).contain(`${tempGoogleMail}`)
        await organisationSettingsUsersPage.clickUserAccessDropDown()
        await organisationSettingsUsersPage.clickUserAccessRegisterRemoveBtn()
        await expect(await devAssetMainPage.isInvintationAlertDisplayed()).true
        await expect(await organisationSettingsUsersPage.isInvitedUserRoleCellDisplayed()).true
        await expect(await organisationSettingsUsersPage.getInvitedUserRoleCellText()).contain('(No Access)')
    });
    it('should remove user from Organisation', async () => {
        await devAssetMainPage.clickOrganisationSettingsLink()
        await organisationSettingsPage.clickUsersLink()
        await expect(await organisationSettingsUsersPage.isInvitedUserEmailCellDisplayed()).true
        await expect(await organisationSettingsUsersPage.getInvitedUserEmailCellText()).contain(`${tempGoogleMail}`)
        await organisationSettingsUsersPage.clickUserAccessDropDown()
        await organisationSettingsUsersPage.clickUserAccessOrgRemoveBtn()
        await expect(await assetPage.isDeleteConfirmationFormDisplayed()).true
        await expect(await devAssetMainPage.isDeleteConfirmationTitleDisplayed()).true
        await devAssetMainPage.clickDeleteCofirmationOkBtn()
        await expect(await devAssetMainPage.isInvintationAlertDisplayed()).true
        await expect(await organisationSettingsUsersPage.isInvitedUserEmailCellExist())
        await helper.logout()
    });
    it('should login as removed user and validate that this is unsuccessful(should see "Create New Organisation" title)', async () => {
        await helper.platformLink()
        await authPage.clickSignInBtn()
        await authPage.isUserNameLoginFieldDisplayed()
        await authPage.setUserNameValue(tempGoogleMail)
        await authPage.clickNextBtn()
        await authPage.isPasswordLoginFieldDisplayed()
        await authPage.setPasswordSignInValue(passwToAccount)
        await authPage.clickSignInSubmitBtn()
        await expect(await authPage.isOrganizationFieldDisplayed()).true
        await helper.logout()
    });

    //invite user to register
    it('should login to existing account', async () => {
        await helper.platformLink()
        await helper.loginToAccountUserSuperTest()
    });
    //invite user to register
    it('should invite user and give them permissions for the Register', async () => {
        await dashboardPage.clickFirstRegisterLink();
        await expect(await assetsPage.isCreateAssetGroupTemplateBtnDisplayed()).true;
        await expect(await assetsPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`);
        await devAssetMainPage.clickRegisterSettingsLink()
        await organisationSettingsPage.clickUsersLink()
        await expect(await registerSettingsUsersPage.isRegisterInvitePanelDispalayed()).true;
        await organisationSettingsUsersPage.clickInviteUserBtn()
        await expect(await devAssetMainPage.isInviteUserFormDisplayed()).true;
        await devAssetMainPage.setEmailInviteFieldValue(tempGoogleMailReg)
        await registerSettingsUsersPage.clickRegisterSettingsRoleDropDownMenu()
        await registerSettingsUsersPage.clickRegisterSettingsUserRoleBtn()
        await devAssetMainPage.clickInviteBtn()
        await expect(await devAssetMainPage.isInvintationAlertDisplayed()).true;
        await expect(await organisationSettingsUsersPage.isInvitedUserNameCellDisplayed()).true
        await expect(await organisationSettingsUsersPage.getInvitedUserNameCellText()).contain(`(Invitation Pending)`)
        await expect(await organisationSettingsUsersPage.isInvitedUserEmailCellDisplayed()).true
        await expect(await organisationSettingsUsersPage.getInvitedUserEmailCellText()).contain(`${tempGoogleMailReg}`)
        await helper.logout()
    });
    it('should find and accept email invitation', async () => {
        await browser.url('https://mail.google.com/')
        await browser.pause(7000)
        //await helper.loginToGoogleMailBox()
        await googleMailPage.clickInviteMessage()
        await googleMailPage.clickAcceptInvitationLinkLink()
        await googleMailPage.clickBackBtn()
        await googleMailPage.clickSelectVerifyMessageCheckBox()
        await googleMailPage.clickDeleteVerifyMessageBtn()
        await expect(await googleMailPage.isAlertMessageDisplayed()).true
        await googleMailPage.clickCloseAlertMessageBtn()
        await browser.pause(2000)
        const handles = await browser.getWindowHandles()
        await browser.closeWindow()
        await browser.switchToWindow(handles[1])
    });
    it('should create account with valid credentials', async () => {
        await authPage.clickCreateAccountBtn();
        await authPage.setFisrtNameValue(shortUserName)
        await authPage.setLastNameValue(shortLastName)
        await authPage.setEmailValue(tempGoogleMailReg)
        await authPage.setPhoneNumberValue('7777777777')
        await authPage.setPasswordCreateAccValue(passwToAccount)
        await authPage.setPasswordCreateAccConfirmValue(passwToAccount)
        await authPage.clickRegisterBtn()
        await expect(await authPage.isEmailVerificationFormDisplayed()).true
        await authPage.clickOkVerifyBtn()
        await browser.pause(7000)
    });
    it('should verify account by email and validate that user can access the Register they have been invited to', async () => {
        await browser.url('https://mail.google.com/')
        await googleMailPage.clickVerifyMessage()
        await expect(await googleMailPage.isVerifyLinkDisplayed()).true
        await googleMailPage.scrollIntoVerifyLink()
        await googleMailPage.clickVerifyLink()
        await googleMailPage.clickBackBtn()
        await googleMailPage.clickSelectVerifyMessageCheckBox()
        await googleMailPage.clickDeleteVerifyMessageBtn()
        await expect(await googleMailPage.isAlertMessageDisplayed()).true
        await googleMailPage.clickCloseAlertMessageBtn()
        await browser.pause(2000)
        const handles = await browser.getWindowHandles()
        await browser.closeWindow()
        await browser.switchToWindow(handles[1])
        await expect(await devAssetMainPage.isInvintationAlertDisplayed()).true
        await expect(await dashboardPage.isFirstRegisterLinkDisplayed()).true
        await helper.logout()
    });
    it('should login to master account, remove user from Register', async () => {
        await helper.platformLink()
        await helper.loginToAccountUserSuperTest()
        await expect(await dashboardPage.isFirstRegisterLinkDisplayed()).true
        await dashboardPage.clickDropDownRegisterMenu()
        await dashboardPage.clickManageAccessBtn()
        await expect(await organisationSettingsUsersPage.isInvitedUserEmailCellDisplayed()).true
        await expect(await organisationSettingsUsersPage.getInvitedUserEmailCellText()).contain(`${tempGoogleMailReg}`)
        await organisationSettingsUsersPage.clickUserAccessDropDown()
        await organisationSettingsUsersPage.clickUserAccessRegisterRemoveBtn()
        await expect(await devAssetMainPage.isInvintationAlertDisplayed()).true
        await expect(await organisationSettingsUsersPage.isInvitedUserRoleCellDisplayed()).true
        await expect(await organisationSettingsUsersPage.getInvitedUserRoleCellText()).contain('(No Access)')
        await helper.logout()
    });
    it('should login as removed user and see "You are now part of the organisation "org_name” but do not have access to any registers" alert)', async () => {
        await helper.platformLink()
        await authPage.clickSignInBtn()
        await authPage.isUserNameLoginFieldDisplayed()
        await authPage.setUserNameValue(tempGoogleMailReg)
        await authPage.clickNextBtn()
        await authPage.isPasswordLoginFieldDisplayed()
        await authPage.setPasswordSignInValue(passwToAccount)
        await authPage.clickSignInSubmitBtn()
        await expect(await assetsPage.isFirstThingsFirstAlertMessageDisplayed()).true
        await expect(await assetsPage.getFirstThingsFirstAlertMessageText()).contain('You are now part of the organisation ')
        await helper.logout()
    });
    it('should login to master account and remove user from Organisation', async () => {
        await helper.loginToAccountUserSuperTest()
        await dashboardPage.clickFirstRegisterLink()
        await devAssetMainPage.clickOrganisationSettingsLink()
        await organisationSettingsPage.clickUsersLink()
        await expect(await organisationSettingsUsersPage.isInvitedUserEmailCellDisplayed()).true
        await expect(await organisationSettingsUsersPage.getInvitedUserEmailCellText()).contain(`${tempGoogleMailReg}`)
        await organisationSettingsUsersPage.clickUserAccessDropDown()
        await organisationSettingsUsersPage.clickUserAccessOrgRemoveBtn()
        await expect(await assetPage.isDeleteConfirmationFormDisplayed()).true
        await expect(await devAssetMainPage.isDeleteConfirmationTitleDisplayed()).true
        await devAssetMainPage.clickDeleteCofirmationOkBtn()
        await expect(await devAssetMainPage.isInvintationAlertDisplayed()).true
        await expect(await organisationSettingsUsersPage.isInvitedUserEmailCellExist())
    });
    //triggerSubscriptionUpgrade
    it('should create asset group (from template) if no groups have been created', async () => {
        await devAssetMainPage.clickRegistersLink()
        await dashboardPage.clickFirstRegisterLink()
        await devAssetMainPage.clickAssetsLink()
        await helper.createAssetGroupFromTemplate()
    });
    //import 10 assets
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
    });
    //
    it('should create and fail 11 asset and change subscription plan', async () => {
        await assetsPage.clickAssetsAddBtn()
        await assetsPage.clickCreateAssetBtn()
        await expect(await assetsPage.isSubscriptionLimitAlertDisplayed()).true
        await expect(await assetsPage.getSubscriptionLimitAlertText()).contain(`Subscription Limit`)
        await assetsPage.clickNewAssetUpgradeBtn()
        await expect(await subscriptionAndPaymentPage.isSubscriptionFormDisplayed()).true
        await subscriptionAndPaymentPage.clickToggleForAccountingFirms()
        await subscriptionAndPaymentPage.clickStandartPlusLeasesChangePlanBtn()
        await expect(await subscriptionAndPaymentPage.isPaymentMethodFormDisplayed()).true
        await expect(await subscriptionAndPaymentPage.isCardNumberInputDisplayed()).true
        await browser.switchToFrame(1)
        await subscriptionAndPaymentPage.setCardNumberFieldValue('4242 4242 4242 4242')
        await browser.switchToParentFrame()
        await expect(await subscriptionAndPaymentPage.isCardExpiryInputDisplayed()).true
        await browser.switchToFrame(2)
        await subscriptionAndPaymentPage.setCardExpiryFieldValue('0324')
        await browser.switchToParentFrame()
        await expect(await subscriptionAndPaymentPage.isCvcInputDisplayed()).true
        await browser.switchToFrame(3)
        await subscriptionAndPaymentPage.setCvcFieldValue('777')
        await browser.switchToParentFrame()
        await subscriptionAndPaymentPage.clickPaymentUpgradeSubBtn()
        await expect(await subscriptionAndPaymentPage.isCurrentPaymentMethodAlertDisplayed()).true
    });
    it('should create 11 asset', async () => {
        const randomCodeNumber = Math.floor(Math.random() * 1000);
        await expect(await assetGroups.isNewAssetTitleDisplayed()).true;
        await assetPage.setNewAssetNameValue(randomAssetName + randomCodeNumber)
        await assetPage.setNewAssetCodeNumberValue(randomCodeNumber)
        await assetPage.setNewAssetDescriptionValue('testDescr')
        await assetPage.selectNewAssetGroupValue()
        await assetPage.setNewAssetCostValue('200')
        await assetPage.setNewAssetPurchaseDateValue('06/05/22')
        await assetPage.setNewAssetQuantityValue('1')
        await assetPage.selectNewAssetQuantityUnitsValue()
        await expect(await assetGroups.isDepreciationFormDisplayed()).true
        await expect(await assetGroups.isTaxDepreciationFormDisplayed()).true
        await expect(await assetGroups.isAccountsDepreciationFormDisplayed()).true
        await browser.pause(1000)
        await assetGroups.clickNewAssetSaveBtn()
        await expect(await assetPage.isAssetDescriptionTitleDisplayed()).true
    });
});

