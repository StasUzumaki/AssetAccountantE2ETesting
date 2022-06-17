const authPage = require('../pageobjects/authentication.page')
const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const googleMailPage = require('../pageobjects/googleMail.page')
const baseUrl = require('../../data/baseURL')
const { expect } = require('chai');
const helper = require('../pageobjects/helper');
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator')

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
        await browser.url(baseUrl.baseUrlLink)
    });
    after('logout', async () => {
        await devAssetMainPage.clickRegisterSelectionDropDown()
        await devAssetMainPage.clickAllRegistersLink()
        await helper.deleteAllRegisters()
        await helper.logout()
    });
    // xit('should create account with valid credentials', async () => {
    //     await helper.createAssetAccount()
    //     await expect(await authPage.isEmailVerificationFormDisplayed()).true;
    //     await authPage.clickOkVerifyBtn()
    //     await expect(await authPage.isSignInBtnDisplayed()).true;
    // });
    // xit('should verify account by email', async () => {
    //     await browser.url('https://mail.google.com/')
    //     await browser.pause(7000)
    //     await helper.loginToGoogleMailBox()
    //     await googleMailPage.clickVerifyMessage()
    //     await expect(await googleMailPage.isVerifyLinkDisplayed()).true;
    //     await googleMailPage.scrollIntoVerifyLink()
    //     await googleMailPage.clickVerifyLink()
    //     await googleMailPage.clickBackBtn()
    //     await googleMailPage.clickSelectVerifyMessageCheckBox()
    //     await googleMailPage.clickDeleteVerifyMessageBtn()
    //     await expect(await googleMailPage.isAlertMessageDisplayed()).true;
    //     await googleMailPage.clickCloseAlertMessageBtn()
    //     await browser.pause(2000)
    // });
    // xit('should create organisation after email validation', async () => {
    //     const handles = await browser.getWindowHandles()
    //     await browser.closeWindow()
    //     await browser.switchToWindow(handles[1])
    //     await expect(await authPage.isOrganizationFieldDisplayed()).true;
    //     await authPage.setOrganizationNameFieldValue(randomOrgName);
    //     await browser.pause(1000)
    //     await authPage.selectCountryDropDownValue(0)
    //     await authPage.clickCreateOrganizationBtn();
    //     await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true;
    //     await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register');
    // });
    // //change sub
    // xit('should create a new register', async () => {
    //     await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true;
    //     await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register');
    //     await devAssetMainPage.clickCreateFirstRegisterBtn()
    //     await helper.createRegister()
    //     await devAssetMainPage.clickAssetsLink()
    //     await expect(await devAssetMainPage.isCreateAssetGroupTemplateBtnDisplayed()).true;
    //     await expect(await devAssetMainPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`);
    // });
    // xit('should change subscription plan', async () => {
    //     await devAssetMainPage.clickOrganisationSettingsLink()
    //     await devAssetMainPage.clickSubscriptionAndPaymentLink()
    //     await expect(await devAssetMainPage.isPaymentFormDisplayed()).true
    //     await devAssetMainPage.clickOrganisationSettingsUpgradeBtn()
    //     await expect(await devAssetMainPage.isSubscriptionFormDisplayed()).true
    //     await devAssetMainPage.clickToggleForAccountingFirms()
    //     await devAssetMainPage.clickStandartChangePlanBtn()
    //     await expect(await devAssetMainPage.isPaymentMethodFormDisplayed()).true
    //     await browser.switchToFrame(5)
    //     await devAssetMainPage.setCardNumberFieldValue('4242 4242 4242 4242')
    //     await browser.switchToParentFrame()
    //     await browser.switchToFrame(6)
    //     await devAssetMainPage.setCardExpiryFieldValue('0324')
    //     await browser.switchToParentFrame()
    //     await browser.switchToFrame(7)
    //     await devAssetMainPage.setCvcFieldValue('777')
    //     await browser.switchToParentFrame()
    //     await devAssetMainPage.clickPaymentUpgradeSubBtn()
    //     await expect(await devAssetMainPage.isCurrentPaymentMethodAlertDisplayed()).true
    //     await expect(await devAssetMainPage.isCurrentAccountPlanDispalyed()).true
    //     await expect(await devAssetMainPage.isChangePlanBtnDisplayed()).true
    //     await helper.logout()
    // });
    //login to existing acc
    it('should login to existing account', async () => {
        await browser.url(baseUrl.baseUrlLink)
        await helper.loginToAccountUserSuperTest()
        await helper.checkingExistingRegisters()
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
        await expect(await devAssetMainPage.isFirstThingsFirstAlertMessageDisplayed()).true
        await expect(await devAssetMainPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`)
        await devAssetMainPage.clickRegisterSelectionDropDown()
        await devAssetMainPage.clickAllRegistersLink()
    });
    //invite user to org
    it('should invite user and give them permissions for the Organisation and Register', async () => {
        await devAssetMainPage.clickFirstRegisterLink()
        await expect(await devAssetMainPage.isCreateAssetGroupTemplateBtnDisplayed()).true
        await expect(await devAssetMainPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`)
        await devAssetMainPage.clickOrganisationSettingsLink()
        await devAssetMainPage.clickUsersLink()
        await devAssetMainPage.clickInviteUserBtn()
        await expect(await devAssetMainPage.isInviteUserFormDisplayed()).true
        await devAssetMainPage.setEmailInviteFieldValue(tempGoogleMail)
        await devAssetMainPage.clickRegisterCheckBoxForInvite()
        await devAssetMainPage.clickRegisterRoleDropDown()
        await devAssetMainPage.clickRegisterUserRoleBtn()
        await devAssetMainPage.clickInviteBtn()
        await expect(await devAssetMainPage.isInvintationAlertDisplayed()).true
        await expect(await devAssetMainPage.isInvitedUserNameCellDisplayed()).true
        await expect(await devAssetMainPage.getInvitedUserNameCellText()).contain(`(Invitation Pending)`)
        await expect(await devAssetMainPage.isInvitedUserEmailCellDisplayed()).true
        await expect(await devAssetMainPage.getInvitedUserEmailCellText()).contain(`${tempGoogleMail}`)
        await helper.logout()
    });
    it('should find and accept email invitation', async () => {
        await browser.url('https://mail.google.com/')
        await browser.pause(2000)
        await helper.loginToGoogleMailBox()
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
        await expect(await devAssetMainPage.isFirstRegisterLinkDisplayed()).true
        //await expect(await devAssetMainPage.getRegisterNameText()).contain('InviteUsers_Register')
        await helper.logout()
    });
    it('should login to master account, remove user from Register', async () => {
        await browser.url(baseUrl.baseUrlLink)
        await helper.loginToAccountUserSuperTest()
        await expect(await devAssetMainPage.isFirstRegisterLinkDisplayed()).true
        await devAssetMainPage.clickDropDownRegisterMenu()
        await devAssetMainPage.clickManageAccessBtn()
        await expect(await devAssetMainPage.isInvitedUserEmailCellDisplayed()).true
        await expect(await devAssetMainPage.getInvitedUserEmailCellText()).contain(`${tempGoogleMail}`)
        await devAssetMainPage.clickUserAccessDropDown()
        await devAssetMainPage.clickUserAccessRegisterRemoveBtn()
        await expect(await devAssetMainPage.isInvintationAlertDisplayed()).true
        await expect(await devAssetMainPage.isInvitedUserRoleCellDisplayed()).true
        await expect(await devAssetMainPage.getInvitedUserRoleCellText()).contain('(No Access)')
    });
    it('should remove user from Organisation', async () => {
        await devAssetMainPage.clickOrganisationSettingsLink()
        await devAssetMainPage.clickUsersLink()
        await expect(await devAssetMainPage.isInvitedUserEmailCellDisplayed()).true
        await expect(await devAssetMainPage.getInvitedUserEmailCellText()).contain(`${tempGoogleMail}`)
        await devAssetMainPage.clickUserAccessDropDown()
        await devAssetMainPage.clickUserAccessOrgRemoveBtn()
        await expect(await devAssetMainPage.isDeleteConfirmationFormDisplayed()).true
        await expect(await devAssetMainPage.isDeleteConfirmationTitleDisplayed()).true
        await devAssetMainPage.clickDeleteCofirmationOkBtn()
        await expect(await devAssetMainPage.isInvintationAlertDisplayed()).true
        await expect(await devAssetMainPage.isInvitedUserEmailCellExist())
        await helper.logout()
    });
    it('should login as removed user and validate that this is unsuccessful(should see "Create New Organisation" title)', async () => {
        await browser.url(baseUrl.baseUrlLink)
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
        await browser.url(baseUrl.baseUrlLink)
        await helper.loginToAccountUserSuperTest()
    });
    //invite user to register
    it('should invite user and give them permissions for the Register', async () => {
        await devAssetMainPage.clickFirstRegisterLink();
        await expect(await devAssetMainPage.isCreateAssetGroupTemplateBtnDisplayed()).true;
        await expect(await devAssetMainPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`);
        await devAssetMainPage.clickRegisterSettingsLink()
        await devAssetMainPage.clickUsersLink()
        await expect(await devAssetMainPage.isRegisterInvitePanelDispalayed()).true;
        await devAssetMainPage.clickInviteUserBtn()
        await expect(await devAssetMainPage.isInviteUserFormDisplayed()).true;
        await devAssetMainPage.setEmailInviteFieldValue(tempGoogleMailReg)
        await devAssetMainPage.clickRegisterSettingsRoleDropDownMenu()
        await devAssetMainPage.clickRegisterSettingsUserRoleBtn()
        await devAssetMainPage.clickInviteBtn()
        await expect(await devAssetMainPage.isInvintationAlertDisplayed()).true;
        await expect(await devAssetMainPage.isInvitedUserNameCellDisplayed()).true
        await expect(await devAssetMainPage.getInvitedUserNameCellText()).contain(`(Invitation Pending)`)
        await expect(await devAssetMainPage.isInvitedUserEmailCellDisplayed()).true
        await expect(await devAssetMainPage.getInvitedUserEmailCellText()).contain(`${tempGoogleMailReg}`)
        await helper.logout()
    });
    it('should find and accept email invitation', async () => {
        await browser.url('https://mail.google.com/')
        await browser.pause(5000)
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
        await expect(await devAssetMainPage.isFirstRegisterLinkDisplayed()).true
        //await expect(await devAssetMainPage.getRegisterNameText()).contain('InviteUsers_Register')
        await helper.logout()
    });
    it('should login to master account, remove user from Register', async () => {
        await browser.url(baseUrl.baseUrlLink)
        await helper.loginToAccountUserSuperTest()
        await expect(await devAssetMainPage.isFirstRegisterLinkDisplayed()).true
        await devAssetMainPage.clickDropDownRegisterMenu()
        await devAssetMainPage.clickManageAccessBtn()
        await expect(await devAssetMainPage.isInvitedUserEmailCellDisplayed()).true
        await expect(await devAssetMainPage.getInvitedUserEmailCellText()).contain(`${tempGoogleMailReg}`)
        await devAssetMainPage.clickUserAccessDropDown()
        await devAssetMainPage.clickUserAccessRegisterRemoveBtn()
        await expect(await devAssetMainPage.isInvintationAlertDisplayed()).true
        await expect(await devAssetMainPage.isInvitedUserRoleCellDisplayed()).true
        await expect(await devAssetMainPage.getInvitedUserRoleCellText()).contain('(No Access)')
        await helper.logout()
    });
    it('should login as removed user and see "You are now part of the organisation "org_name” but do not have access to any registers" alert)', async () => {
        await browser.url(baseUrl.baseUrlLink)
        await authPage.clickSignInBtn()
        await authPage.isUserNameLoginFieldDisplayed()
        await authPage.setUserNameValue(tempGoogleMailReg)
        await authPage.clickNextBtn()
        await authPage.isPasswordLoginFieldDisplayed()
        await authPage.setPasswordSignInValue(passwToAccount)
        await authPage.clickSignInSubmitBtn()
        await expect(await devAssetMainPage.isFirstThingsFirstAlertMessageDisplayed()).true
        await expect(await devAssetMainPage.getFirstThingsFirstAlertMessageText()).contain('You are now part of the organisation ')
        await helper.logout()
    });
    it('should login to master account and remove user from Organisation', async () => {
        await helper.loginToAccountUserSuperTest()
        await devAssetMainPage.clickFirstRegisterLink()
        await devAssetMainPage.clickOrganisationSettingsLink()
        await devAssetMainPage.clickUsersLink()
        await expect(await devAssetMainPage.isInvitedUserEmailCellDisplayed()).true
        await expect(await devAssetMainPage.getInvitedUserEmailCellText()).contain(`${tempGoogleMailReg}`)
        await devAssetMainPage.clickUserAccessDropDown()
        await devAssetMainPage.clickUserAccessOrgRemoveBtn()
        await expect(await devAssetMainPage.isDeleteConfirmationFormDisplayed()).true
        await expect(await devAssetMainPage.isDeleteConfirmationTitleDisplayed()).true
        await devAssetMainPage.clickDeleteCofirmationOkBtn()
        await expect(await devAssetMainPage.isInvintationAlertDisplayed()).true
        await expect(await devAssetMainPage.isInvitedUserEmailCellExist())
    });
    //triggerSubscriptionUpgrade
    it('should create asset group (from template) if no groups have been created', async () => {
        await devAssetMainPage.clickRegistersLink()
        await devAssetMainPage.clickFirstRegisterLink()
        await devAssetMainPage.clickAssetsLink()
        await helper.createAssetGroupFromTemplate()
    });
    it('should create 10 assets', async () => {
        await devAssetMainPage.clickAssetsLink()
        const assetsAmount = 5;
        for (let i = 0; i < assetsAmount; i++) {
            await devAssetMainPage.clickAssetsAddBtn()
            await helper.createAsset()
            await devAssetMainPage.clickAssetsLink()
        }
        await expect(await devAssetMainPage.isFirstGroupLinkDisplayed()).true;
        for (let i = 0; i < assetsAmount; i++) {
            await devAssetMainPage.clickAssetsAddBtn()
            await helper.createAsset()
            await devAssetMainPage.clickAssetsLink()
        }
        await expect(await devAssetMainPage.isFirstGroupLinkDisplayed()).true;
    });
    it('should create and fail 11 asset and change subscription plan', async () => {
        await devAssetMainPage.clickAssetsAddBtn()
        await devAssetMainPage.clickCreateAssetBtn()
        await expect(await devAssetMainPage.isSubscriptionLimitAlertDisplayed()).true
        await expect(await devAssetMainPage.getSubscriptionLimitAlertText()).contain(`Subscription Limit`)
        await devAssetMainPage.clickNewAssetUpgradeBtn()
        await expect(await devAssetMainPage.isSubscriptionFormDisplayed()).true
        await devAssetMainPage.clickToggleForAccountingFirms()
        await devAssetMainPage.clickStandartChangePlanBtn()
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
        await devAssetMainPage.clickPaymentUpgradeSubBtn()
        await expect(await devAssetMainPage.isCurrentPaymentMethodAlertDisplayed()).true
    });
    it('should create 11 asset', async () => {
        const randomCodeNumber = Math.floor(Math.random() * 1000);
        await expect(await devAssetMainPage.isNewAssetTitleDisplayed()).true;
        await devAssetMainPage.setNewAssetNameValue(randomAssetName + randomCodeNumber)
        await devAssetMainPage.setNewAssetCodeNumberValue(randomCodeNumber)
        await devAssetMainPage.setNewAssetDescriptionValue('testDescr')
        await devAssetMainPage.selectNewAssetGroupValue()
        await devAssetMainPage.setNewAssetCostValue('200')
        await devAssetMainPage.setNewAssetPurchaseDateValue('06/05/22')
        await devAssetMainPage.setNewAssetQuantityValue('1')
        await devAssetMainPage.selectNewAssetQuantityUnitsValue()
        await expect(await devAssetMainPage.isDepreciationFormDisplayed()).true
        await expect(await devAssetMainPage.isTaxDepreciationFormDisplayed()).true
        await expect(await devAssetMainPage.isAccountsDepreciationFormDisplayed()).true
        await browser.pause(1000)
        await devAssetMainPage.clickNewAssetSaveBtn()
        await expect(await devAssetMainPage.isAssetDescriptionTitleDisplayed()).true
    });
});

