const authPage = require('../pageobjects/authentication.page')
const devAssetMainPage = require('../pageobjects/devAssetMain.page');
const helper = require('../pageobjects/helper');
const { expect } = require('chai');
const baseUrl = require('../../data/baseURL')
const googleMailPage = require('../pageobjects/googleMail.page')
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');

const mainEmail = 'stasdevasset'
const shortUserName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors],
    length: 1
});
const shortLastName = uniqueNamesGenerator({
    dictionaries: [colors],
    length: 1
});
const randomCodeNumber = Math.floor(Math.random() * 100);
const tempGoogleMail = mainEmail + "+" + shortUserName + randomCodeNumber + "@gmail.com";
const passwToAccount = 'devAssetTest'

describe('invite user to register', () => {
    before('land to dev asset page and login', async () => {
        await browser.url(baseUrl.baseUrlLink)
        await helper.loginToAccountInvTo()
    });
    after('logout', async () => {
        await helper.logout()
        await helper.loginToAccountInvTo()
        //delete created user from org
        await devAssetMainPage.clickFirstRegisterLink()
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
    it('should invite user and give them permissions for the Register', async () => {
        await devAssetMainPage.clickFirstRegisterLink();
        await expect(await devAssetMainPage.isCreateAssetGroupTemplateBtnDisplayed()).true;
        await expect(await devAssetMainPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`);
        await devAssetMainPage.clickRegisterSettingsLink()
        await devAssetMainPage.clickUsersLink()
        await expect(await devAssetMainPage.isRegisterInvitePanelDispalayed()).true; 
        await devAssetMainPage.clickInviteUserBtn()
        await expect(await devAssetMainPage.isInviteUserFormDisplayed()).true;
        await devAssetMainPage.setEmailInviteFieldValue(tempGoogleMail)
        await devAssetMainPage.clickRegisterSettingsRoleDropDownMenu()
        await devAssetMainPage.clickRegisterSettingsUserRoleBtn()
        await devAssetMainPage.clickInviteBtn()
        await expect(await devAssetMainPage.isInvintationAlertDisplayed()).true;
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
        await expect(await devAssetMainPage.getRegisterNameText()).contain('InviteUsers_Register')
        await helper.logout()
    });
    it('should login to master account, remove user from Register', async () => {
        await browser.url(baseUrl.baseUrlLink)
        await helper.loginToAccountInvTo()
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
        await helper.logout()
    });
    it('should login as removed user and see "You are now part of the organisation “Invite Users Testing Acc” but do not have access to any registers" alert)', async () => {
        await browser.url(baseUrl.baseUrlLink)
        await authPage.clickSignInBtn()
        await authPage.isUserNameLoginFieldDisplayed()
        await authPage.setUserNameValue(tempGoogleMail)
        await authPage.clickNextBtn()
        await authPage.isPasswordLoginFieldDisplayed()
        await authPage.setPasswordSignInValue(passwToAccount)
        await authPage.clickSignInSubmitBtn()
        await expect(await devAssetMainPage.isFirstThingsFirstAlertMessageDisplayed()).true
        await expect(await devAssetMainPage.getFirstThingsFirstAlertMessageText()).contain('You are now part of the organisation “Invite Users Testing Acc” but do not have access to any registers')
    });
});