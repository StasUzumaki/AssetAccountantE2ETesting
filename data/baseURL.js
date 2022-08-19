const baseUrl = {
    get baseUrlLink() {
        if (process.env.PLATFORM === 'prod') {
            if (process.env.STAGING === 'ui') {
                return 'https://app-aa-ui-aueast-prod-staging.azurewebsites.net/';
            }
            return 'https://app.asset.accountant';
        } else {
            if (process.env.STAGING === 'ui') {
                return 'https://app-aa-ui-aueast-dev-staging.azurewebsites.net/';
            }
            return 'https://dev.asset.accountant';
        }
    },
    baseUrlIntuitLink: 'https://developer.intuit.com/',
    baseUrlXeroLink: 'https://developer.xero.com/',
};
module.exports = baseUrl;
