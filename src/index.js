const okta = require('@okta/okta-sdk-nodejs');
require('dotenv').config();

const client = new okta.Client({
    orgUrl: `https://${process.env.OKTA_DOMAIN}/`,
    token: process.env.API_TOKEN // Obtained from Developer Dashboard
});
