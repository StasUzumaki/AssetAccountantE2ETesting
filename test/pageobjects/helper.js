const devAssetMainPage = require('./devAssetMain.page')
const authPage = require('./authentication.page')
const loginData = require('../../data/loginData')
const googleMailPage = require('../pageobjects/googleMail.page')
const googleMailboxData = require('../../data/googleMailboxData')
const fs = require('fs');
const assert = require('assert');
const pdfParse = require('pdf-parse');
const path = require('path');
const csv = require('fast-csv');
const { expect } = require('chai')
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator')

function getDateTime() {
    var now = new Date();
    var year = now.getFullYear();
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    if (hour.toString().length == 1) {
        hour = '0' + hour;
    }
    if (day.toString().length == 1) {
        day = '0' + day;
    }
    if (minute.toString().length == 1) {
        minute = '0' + minute;
    }
    if (hour <= 11) {
        timesOfDay = ' AM';
    } else {
        timesOfDay = ' PM';
    }
    var dateTime = day + ', ' + year //+ ' ' + hour + ':' + minute + timesOfDay;
    return dateTime;
}
const randomCodeNumber = Math.floor(Math.random() * 1000);
const randomName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors],
    length: 2
});
const randomOrgName = randomName + '_org';
const randomAssetName = randomName + '_Asset';
const assetGroupName = randomName + randomCodeNumber + '_TestGroup';
const randomLeaseName = randomName + '_Lease';
const registerNameSettings = randomName + '_TestRegister'
const currentPdfFilePath = '../Downloads/Asset testing - Asset Summary (Tax) 2021-07-01 to 2022-06-30.pdf'
const currentCsvFilePath = '../Downloads/Asset testing - Asset Summary (Tax) 2021-07-01 to 2022-06-30.csv'

class Helper {

    async loginToGoogleMailBox() {
        await googleMailPage.setEmailFieldValue(googleMailboxData.userEmail)
        await googleMailPage.clickNextBtn()
        await googleMailPage.setPasswordFieldValue(googleMailboxData.userPassword)
        await googleMailPage.clickNextBtn()
    }

    async loginToAccount() {
        await authPage.clickSignInBtn()
        await authPage.isUserNameLoginFieldDisplayed()
        await authPage.setUserNameValue(loginData.userEmail)
        await authPage.clickNextBtn()
        await authPage.isPasswordLoginFieldDisplayed()
        await authPage.setPasswordSignInValue(loginData.userPassw)
        await authPage.clickSignInSubmitBtn()
    }

    async loginToAccountAssetGroup() {
        await authPage.clickSignInBtn()
        await authPage.isUserNameLoginFieldDisplayed()
        await authPage.setUserNameValue(loginData.userEmailAssetGrp)
        await authPage.clickNextBtn()
        await authPage.isPasswordLoginFieldDisplayed()
        await authPage.setPasswordSignInValue(loginData.userPasswAssetGrp)
        await authPage.clickSignInSubmitBtn()
    }

    async loginToAccountCreateAsset() {
        await authPage.clickSignInBtn()
        await authPage.isUserNameLoginFieldDisplayed()
        await authPage.setUserNameValue(loginData.userEmailAssetTesting)
        await authPage.clickNextBtn()
        await authPage.isPasswordLoginFieldDisplayed()
        await authPage.setPasswordSignInValue(loginData.userPasswAssetTesting)
        await authPage.clickSignInSubmitBtn()
    }

    async loginToAccountRegister() {
        await authPage.clickSignInBtn()
        await authPage.isUserNameLoginFieldDisplayed()
        await authPage.setUserNameValue(loginData.userEmailRegister)
        await authPage.clickNextBtn()
        await authPage.isPasswordLoginFieldDisplayed()
        await authPage.setPasswordSignInValue(loginData.userPasswRegister)
        await authPage.clickSignInSubmitBtn()
    }

    async loginToAccountInvTo() {
        await authPage.clickSignInBtn()
        await authPage.isUserNameLoginFieldDisplayed()
        await authPage.setUserNameValue(loginData.userEmailInviteTo)
        await authPage.clickNextBtn()
        await authPage.isPasswordLoginFieldDisplayed()
        await authPage.setPasswordSignInValue(loginData.userPasswInviteTo)
        await authPage.clickSignInSubmitBtn()
    }

    async logout() {
        await devAssetMainPage.clickUserProfileLink()
        await devAssetMainPage.clickLogoutProfileBtn()
        await expect(await authPage.isSignInBtnDisplayed()).true
    }

    async createRegister() {
        await expect(await devAssetMainPage.isCreateNewRegisterFormDisplayed()).true
        await expect(await devAssetMainPage.isRegisterNameFieldDisplayed()).true
        await devAssetMainPage.setRegisterNameValue(registerNameSettings)
        await expect(await devAssetMainPage.isEntityNameFieldDisplayed()).true
        await devAssetMainPage.setRegisterEntityValue('testRegisterEntity')
        await devAssetMainPage.clickNextRegisterBtn()
        await devAssetMainPage.clickTryForFreeBtn()
        await expect(await devAssetMainPage.isSettingsHeaderDisplayed()).true
        await expect(await devAssetMainPage.getSettingsHeaderText()).contain(`${registerNameSettings} › Settings`)
        await expect(await devAssetMainPage.isRegisterNameFieldDisplayed()).true
        await expect(await devAssetMainPage.isEntityNameFieldDisplayed()).true
    }

    async createRegisterWithExistingRegister() {
        await expect(await devAssetMainPage.isCreateNewRegisterFormDisplayed()).true
        await expect(await devAssetMainPage.isRegisterNameFieldDisplayed()).true
        await devAssetMainPage.setRegisterNameValue(registerNameSettings)
        await expect(await devAssetMainPage.isEntityNameFieldDisplayed()).true
        await devAssetMainPage.setRegisterEntityValue('testRegisterEntity')
        await devAssetMainPage.clickNextRegisterBtn()
        await expect(await devAssetMainPage.isSettingsHeaderDisplayed()).true
        await expect(await devAssetMainPage.isRegisterNameFieldDisplayed()).true
        await expect(await devAssetMainPage.isEntityNameFieldDisplayed()).true
    }

    async createOrganisation() {
        await devAssetMainPage.clickCreateOrganisationSelectionDropDown()
        await devAssetMainPage.clickCreateNewOrganisationLink()
        await expect(await devAssetMainPage.isCreateNewOrganisationFormDisplayed()).true
        await devAssetMainPage.setOrganisationNameField(randomOrgName)
        await devAssetMainPage.setOrganisationDescriptionField('testDescription')
        await devAssetMainPage.setBillingContactNameField(randomOrgName)
        await devAssetMainPage.setBillingContactEmailField(loginData.userEmail)
        await devAssetMainPage.setBillingContactPhoneField('8888888888')
        await devAssetMainPage.clickNewOrganisationSaveBtn()
        await expect(await devAssetMainPage.isSettingsHeaderDisplayed()).true
        await expect(await devAssetMainPage.getSettingsHeaderText()).contain(`${randomOrgName}`)
        await expect(await devAssetMainPage.isDemoRegisterLinkDisplayed()).true
        await expect(await devAssetMainPage.getDemoRegisterText()).contain('Demo Register')
    }

    async deleteAssetGroup() {
        await devAssetMainPage.clickAssetsLink()
        await console.log("Assets Group list size: " + await devAssetMainPage.getAssetsGroupListSize())
        const assetsGroupCount = await devAssetMainPage.getAssetsGroupListSize()
        for (let i = 0; i < assetsGroupCount; i++) {
            await devAssetMainPage.clickEditGroupBtn()
            await expect(await devAssetMainPage.isNameGroupFieldDisplayed()).true;
            await expect(await devAssetMainPage.isDescriptionGroupFieldDisplayed()).true
            await devAssetMainPage.clickDeleteGroupBtn()
            await expect(await devAssetMainPage.isDeleteConfirmationTitleDisplayed()).true
            await devAssetMainPage.clickDeleteCofirmationOkBtn()
        }
        await expect(await devAssetMainPage.isCreateAssetGroupTemplateBtnDisplayed()).true
        await expect(await devAssetMainPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`)
    }

    async createAssetGroupFromTemplate() {
        await devAssetMainPage.clickCreateAssetGroupTemplateBtn()
        await expect(await devAssetMainPage.isNewAssetGroupFromTemplateTitleDisplayed()).true
        await expect(await devAssetMainPage.getNewAssetGroupFromTemplateTitleText()).contain(`New Asset Group from Template`)
        await expect(await devAssetMainPage.isAssetsGroupFromTemplateFormsDisplayed()).true
        await devAssetMainPage.clickBuidlingsTemtplateCheckBox()
        await devAssetMainPage.clickTemplateSaveBtn()
        await expect(await devAssetMainPage.isSuccessfullySavedAlertMessageDisplayed()).true
        await expect(await devAssetMainPage.getSuccessfullySavedAlertMessageText()).contain(`Saved 1 asset groups successfully`)
    }

    async createAssetGroupBlank() {
        const randomCodeNumber = Math.floor(Math.random() * 100);
        await devAssetMainPage.clickCreateAssetGroupBlankBtn()
        await expect(await devAssetMainPage.isAssetGroupNameFieldDisplayed()).true
        await devAssetMainPage.setAssetGroupNameBlankFieldValue(assetGroupName + randomCodeNumber)
        await expect(await devAssetMainPage.isAssetGroupDescriptionFieldDisplayed()).true
        await devAssetMainPage.setAssetGroupDescriptionBlankFieldValue('TestGroupDescription')
        await devAssetMainPage.clickAssetGroupBlankSaveBtn()
        await expect(await devAssetMainPage.isAssetGroupBlankAlertDisplayed()).true
        await expect(await devAssetMainPage.isAssetCardSectionDisplayed()).true
    }

    async createAsset() {
        const randomCodeNumber = Math.floor(Math.random() * 1000);
        await devAssetMainPage.clickCreateAssetBtn()
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
        // await devAssetMainPage.clickSelfAssessedCheckBox()
        //await devAssetMainPage.setTaxDepreciationNotesFieldValue('test notes test notes')
        await browser.pause(1000)
        await devAssetMainPage.clickNewAssetSaveBtn()
        await expect(await devAssetMainPage.isAssetDescriptionTitleDisplayed()).true
    }

    async deleteAsset() {
        await devAssetMainPage.clickReverseDropDown()
        await devAssetMainPage.clickSetQuantityBtn()
        await expect(await devAssetMainPage.isReversalConfirmationFormDisplayed()).true
        await expect(await devAssetMainPage.isReversalConfirmationTitleDisplayed()).true
        await devAssetMainPage.clickDeleteCofirmationOkBtn()
        await devAssetMainPage.clickReverseDropDown()
        await devAssetMainPage.clickFirstUseBtn()
        await expect(await devAssetMainPage.isReversalConfirmationFormDisplayed()).true
        await expect(await devAssetMainPage.isReversalConfirmationTitleDisplayed()).true
        await devAssetMainPage.clickDeleteCofirmationOkBtn()
        await expect(await devAssetMainPage.isFirstUseAlertMessageDisplayted()).true
        await devAssetMainPage.clickReverseDropDown()
        await devAssetMainPage.clickPurchaseBtn()
        await expect(await devAssetMainPage.isReversalConfirmationFormDisplayed()).true
        await expect(await devAssetMainPage.isReversalConfirmationTitleDisplayed()).true
        await devAssetMainPage.clickDeleteCofirmationOkBtn()
        await devAssetMainPage.clickDeleteAssetBtn()
        await expect(await devAssetMainPage.isReversalConfirmationFormDisplayed()).true
        await devAssetMainPage.clickDeleteCofirmationOkBtn()
        await expect(await devAssetMainPage.isTaxViewFormDisplayed()).true
    }
    async deleteAllAssets() {
        await devAssetMainPage.clickContractedGroupDropDown()
        await devAssetMainPage.isFirstAssetLinkDisplayed()
        await console.log("Assets list size: " + await devAssetMainPage.getAssetsListSize())
        const assetsCount = await devAssetMainPage.getAssetsListSize()
        await devAssetMainPage.clickFirstGroupLink()
        for (let i = 0; i < assetsCount; i++) {
            await devAssetMainPage.clickFirstGroupLink()
            await devAssetMainPage.isFirstAssetLinkDisplayed()
            await devAssetMainPage.clickFirstAssetLink()
            await devAssetMainPage.clickReverseDropDown()
            await devAssetMainPage.clickSetQuantityBtn()
            await expect(await devAssetMainPage.isReversalConfirmationFormDisplayed()).true
            await expect(await devAssetMainPage.isReversalConfirmationTitleDisplayed()).true
            await devAssetMainPage.clickDeleteCofirmationOkBtn()
            await devAssetMainPage.clickReverseDropDown()
            await devAssetMainPage.clickFirstUseBtn()
            await expect(await devAssetMainPage.isReversalConfirmationFormDisplayed()).true
            await expect(await devAssetMainPage.isReversalConfirmationTitleDisplayed()).true
            await devAssetMainPage.clickDeleteCofirmationOkBtn()
            await expect(await devAssetMainPage.isFirstUseAlertMessageDisplayted()).true
            await devAssetMainPage.clickReverseDropDown()
            await devAssetMainPage.clickPurchaseBtn()
            await expect(await devAssetMainPage.isReversalConfirmationFormDisplayed()).true
            await expect(await devAssetMainPage.isReversalConfirmationTitleDisplayed()).true
            await devAssetMainPage.clickDeleteCofirmationOkBtn()
            await devAssetMainPage.clickDeleteAssetBtn()
            await expect(await devAssetMainPage.isReversalConfirmationFormDisplayed()).true
            await devAssetMainPage.clickDeleteCofirmationOkBtn()
            await expect(await devAssetMainPage.isTaxViewFormDisplayed()).true
        }
    }
    async deleteJournals() {
        await console.log("Journals list size: " + await devAssetMainPage.getJournalsListSize())
        const journalsCount = await devAssetMainPage.getJournalsListSize()
        for (let i = 0; i < journalsCount; i++) {
            await expect(await devAssetMainPage.isFirstJournalItemDisplayed()).true
            await devAssetMainPage.clickFirstJournalItemLink()
            await expect(await devAssetMainPage.isExportJournalDropDownDisplayed()).true
            await devAssetMainPage.clickDeleteCurrentJournalBtn()
            await expect(await devAssetMainPage.isDeleteConfirmationTitleDisplayed()).true
            await devAssetMainPage.clickDeleteCofirmationOkBtn()
        }
        await expect(await devAssetMainPage.isCurrentlyJournalsDisplayed()).true
    }

    async checkingExistingGroupsAndAssets() {
        await expect(await devAssetMainPage.isRegisterSettingsDisplayed()).true
        const GroupBtnTemplateValue = await devAssetMainPage.isGroupTemplateBtnDisplayed()
        switch (await GroupBtnTemplateValue) {
            case true:
                await expect(await devAssetMainPage.getFirstThingsFirstAlertMessageText()).contain(`First things first`)
                break;
            case false:
                await expect(await devAssetMainPage.isEditBtnDisplayed()).true
                const ContractedGroupDropDownValue = await devAssetMainPage.isContractedGroupDropDownDisplayed()
                if (await ContractedGroupDropDownValue === true) {
                    // await devAssetMainPage.clickFirstGroupLink()
                    // await devAssetMainPage.clickFirstAssetLink()
                    // await this.deleteAsset()
                    await this.deleteAllAssets()
                    await expect(await devAssetMainPage.isFirstGroupLinkDisplayed()).true
                    await this.deleteAssetGroup()
                } else {
                    await this.deleteAssetGroup()
                }
                break;
        }
    }

    async checkingExistingJournals() {
        await expect(await devAssetMainPage.isLoadingImageDisplayed()).true
        const DeleteJournalBtnValue = await devAssetMainPage.isDeleteJournalBtnDisplayed()
        switch (await DeleteJournalBtnValue) {
            case true:
                await this.deleteJournals()
                await devAssetMainPage.clickAssetsLink()
                break;
            case false:
                await devAssetMainPage.clickAssetsLink()
                break;
        }
    }

    async addLinkAttachment() {
        const currentUserProfileName = await devAssetMainPage.getUserProfileNameText()
        const currentTime = getDateTime()
        const randomCodeNumber = Math.floor(Math.random() * 1000);
        const testNameForLink = "testNameForLink" + randomCodeNumber
        const urlForLink = "https://" + "testURL" + randomCodeNumber + ".com"
        await devAssetMainPage.clickAddAttachmentDropDownBtn()
        await devAssetMainPage.clickAddLinkBtn()
        await expect(await devAssetMainPage.isAddLinkFormDisplayed()).true
        await devAssetMainPage.setLinkNameFieldValue(testNameForLink)
        await devAssetMainPage.setUrlFieldValue(urlForLink)
        await devAssetMainPage.clickAddBtn()
        await expect(await devAssetMainPage.isAddLinkFormExist())
        await expect(await devAssetMainPage.isAttachmentsFormDisplayed()).true
        await expect(await devAssetMainPage.getFirstAttachmentText()).contain(`Link added by ${currentUserProfileName}`)
        await expect(await devAssetMainPage.getFirstAttachmentText()).contain(`${testNameForLink}`)
        await expect(await devAssetMainPage.getFirstAttachmentText()).contain(`${currentTime}`)
    }

    async addFilesAttachment() {
        const currentUserProfileName = await devAssetMainPage.getUserProfileNameText()
        const currentTime = getDateTime()
        const filePath = path.join(__dirname, '../../data/testFileForAttachment.txt')
        const remoteFilePath = await browser.uploadFile(filePath)
        await browser.execute(async () => {
            document.getElementById('import-upload').style.display = 'block';
        })
        await devAssetMainPage.setAttachmentFileUploadInputValue(remoteFilePath)
        await browser.execute(async () => {
            document.getElementById('import-upload').style.display = 'none';
        })
        await expect(await devAssetMainPage.isAttachmentsFormDisplayed()).true
        await expect(await devAssetMainPage.getFirstAttachmentText()).contain(`Uploaded by ${currentUserProfileName}`)
        await expect(await devAssetMainPage.getFirstAttachmentText()).contain(`${currentTime}`)
    }

    async deleteAllLinkAttachments() {
        await console.log("Attachments list size: " + await devAssetMainPage.getAttachmentsListSize())
        const attahcmentsCount = await devAssetMainPage.getAttachmentsListSize()
        for (let i = 0; i < attahcmentsCount; i++) {
            await devAssetMainPage.clickDeleteLinkAttachmentBtn()
            await expect(await devAssetMainPage.isDeleteConfirmationTitleDisplayed()).true
            await devAssetMainPage.clickDeleteCofirmationOkBtn()

        }
        await expect(await devAssetMainPage.isAttachmentsFormExist())
    }
    async deleteAllFilesAttachments() {
        await console.log("Attachments list size: " + await devAssetMainPage.getAttachmentsListSize())
        const attahcmentsCount = await devAssetMainPage.getAttachmentsListSize()
        for (let i = 0; i < attahcmentsCount; i++) {
            await devAssetMainPage.clickDeleteFileAttachmentBtn()
            await expect(await devAssetMainPage.isDeleteConfirmationTitleDisplayed()).true
            await devAssetMainPage.clickDeleteCofirmationOkBtn()

        }
        await expect(await devAssetMainPage.isAttachmentsFormExist())
    }

    async pdfValidation() {
        const readPdf = async (uri = path.resolve(assetPDF)) => {
            const buffer = fs.readFileSync(uri);
            try {
                const data = await pdfParse(buffer);

                // The content
                console.log('Content: ', data.text);
                //console.log('Does it includes: ', data.text.includes(`${randomAssetName}`));

                // Total page
                console.log('Total pages: ', data.numpages);

            } catch (err) {
                throw new Error(err);
            }
        }
        const assetPDF = currentPdfFilePath;
        readPdf(assetPDF)
    }

    async csvValidation() {
        // This function reads data from a given CSV file
        const readCSV = (filePath = path.resolve(currentCsvFilePath)) => {
            const readStream = fs.createReadStream(filePath);
            const data = [];
            readStream
                .pipe(csv.parse())
                .on('data', (row) => {
                    data.push(row);
                    console.log('1 row:', row[0]);
                    console.log('2 row:', row[1]);
                    console.log('3 row:', row[2]);
                    console.log('\n');
                })
                .on('end', (rowCount) => {
                    console.log(`${rowCount} rows has been parsed!`);

                    console.log(data);
                })
                .on('error', (error) => console.error(error));
        };
        const assetCsv = path.resolve(currentCsvFilePath);
        readCSV(assetCsv);
    }

    async deletePdfFileFromDir() {
        const filePath = currentPdfFilePath
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error(err)
                return
            }
            //file removed
        })
    }

    async deleteCsvFileFromDir() {
        const filePath = currentCsvFilePath
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error(err)
                return
            }
            //file removed
        })
    }

    async checkingIfPdfFileIsExist() {
        const fileExists = async (path = path.resolve(filePath)) => {
            try {
                await fs.promises.access(path);
                //file exist
                return true
            } catch (err) {
                //file does not exist
                return false
            }
        }
        const filePath = currentPdfFilePath;
        const exists = await fileExists(filePath)
        if (!exists) {
            throw 'PDF File DOES not exist!!'
        }
    }

    async checkingIfCsvFileIsExist() {
        const fileExists = async (path = path.resolve(filePath)) => {
            try {
                await fs.promises.access(path);
                //file exist
                return true
            } catch (err) {
                //file does not exist
                return false
            }
        }
        const filePath = currentCsvFilePath;
        const exists = await fileExists(filePath)
        if (!exists) {
            throw 'CSV File DOES not exist!!'
        }
    }

    async waitForFileExists(filePath, timeout) {
        return new Promise(function (resolve, reject) {

            let dir = path.dirname(filePath);
            let basename = path.basename(filePath);
            let watcher = fs.watch(dir, function (eventType, filename) {
                if (eventType === 'rename' && filename === basename) {
                    clearTimeout(timer);
                    watcher.close();
                    resolve();
                }
            });

            let timer = setTimeout(function () {
                watcher.close();
                reject(new Error('File did not exists and was not created during the timeout.'));
            }, timeout);

            fs.access(filePath, fs.constants.R_OK, function (err) {
                if (!err) {
                    clearTimeout(timer);
                    watcher.close();
                    resolve();
                }
            });

        });
    }

    async fillingOutLeaseForm() {
        const randomCodeNumber = Math.floor(Math.random() * 100);
        await expect(await devAssetMainPage.isNewLeaseAssetFormDisplayed()).true
        await expect(await devAssetMainPage.isPaymentLeaseAssetFormDisplayed()).true
        await expect(await devAssetMainPage.isAmountLeaseFormDisplayed()).true
        await devAssetMainPage.setLeaseNameFieldValue(randomLeaseName + randomCodeNumber)
        await devAssetMainPage.setLeaseCodeNumberFieldValue(randomCodeNumber)
        await devAssetMainPage.setLeaseDescrFieldValue('test descritpion for lease')
        await devAssetMainPage.setLeaseGroupSelectValue()
        await devAssetMainPage.clickHirePurchaseYesBtn()
        await devAssetMainPage.clickHirePurchaseNoBtn()
        await devAssetMainPage.setLeaseStartDateValue('10/05/2022')
        await devAssetMainPage.setLeaseFirstUseDateValue('25/05/2022')
        await devAssetMainPage.setLeaseQuantityFieldValue('1')
        await devAssetMainPage.setLeaseQuantityUnitsSelectValue()
    }

    async fillingOutLeasePaymentForm() {
        await devAssetMainPage.setPaymentDateFieldValue('20/05/2022')
        await devAssetMainPage.setPaymentPrincipalFieldValue(200)
        await devAssetMainPage.setPaymentInterestFieldValue(500)
        await devAssetMainPage.setPaymentOtherFieldValue(100)
    }

    async generatePaymentSchedule(){
        await expect(await devAssetMainPage.isGeneratePaymentScheduleFormDisplayed()).true
        await expect(await devAssetMainPage.getGeneratePaymentScheduleTitleText()).contain('Generate Payment Schedule')
        await devAssetMainPage.setAmountFinancedFieldValue(50000)
        await devAssetMainPage.setFirstLeasePaymentFieldValue(1500)
        await devAssetMainPage.setFirstFrequencyDropDownValue(1)
        await devAssetMainPage.clickAddPaymentsBtn()
        await devAssetMainPage.setSecondLeasePaymentFieldValue(2500)
        await devAssetMainPage.setSecondFrequencyDropDownValue(4)
        await devAssetMainPage.setSecondQuantityFieldValue(24)
        await devAssetMainPage.clickGenerateScheduleBtn()
        await expect(await devAssetMainPage.isPaymentScheduleTableDisplayed()).true
        await devAssetMainPage.clickUseScheduleBtn()
        const amountCapitalisedValue = await devAssetMainPage.getAmountCapitalisedFieldValue()
        assert.strictEqual(amountCapitalisedValue, '50000', "Values are not equal!!!!")
    }

    async deleteLease(){
        await devAssetMainPage.clickReverseDropDown()
        await devAssetMainPage.clickSetQuantityBtn()
        await expect(await devAssetMainPage.isReversalConfirmationFormDisplayed()).true
        await expect(await devAssetMainPage.isReversalConfirmationTitleDisplayed()).true
        await devAssetMainPage.clickDeleteCofirmationOkBtn()
        await devAssetMainPage.clickReverseDropDown()
        await devAssetMainPage.clickFirstUseBtn()
        await expect(await devAssetMainPage.isReversalConfirmationFormDisplayed()).true
        await expect(await devAssetMainPage.isReversalConfirmationTitleDisplayed()).true
        await devAssetMainPage.clickDeleteCofirmationOkBtn()
        await expect(await devAssetMainPage.isFirstUseAlertMessageDisplayted()).true
        await devAssetMainPage.clickReverseDropDown()
        await devAssetMainPage.clickLeaseBtn()
        await expect(await devAssetMainPage.isReversalConfirmationFormDisplayed()).true
        await expect(await devAssetMainPage.isReversalConfirmationTitleDisplayed()).true
        await devAssetMainPage.clickDeleteCofirmationOkBtn()
        await devAssetMainPage.clickDeleteAssetBtn()
        await expect(await devAssetMainPage.isReversalConfirmationFormDisplayed()).true
        await devAssetMainPage.clickDeleteCofirmationOkBtn()
        await expect(await devAssetMainPage.isTaxViewFormDisplayed()).true
    }

}

module.exports = new Helper();