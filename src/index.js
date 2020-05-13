const okta = require('@okta/okta-sdk-nodejs');
require('dotenv').config();

const client = new okta.Client({
    orgUrl: process.env.OKTA_DOMAIN,
    token: process.env.API_TOKEN
});

// Verify client connection
// console.log(client);

// Create new user object and add to Okta org.
const newUser = {
    profile: {
        firstName: 'Michael',
        lastName: 'Jordan',
        email: 'thelastdance@netflix.com',
        login: 'thelastdance@netflix.com',
    },
    credentials: {
        password: {
            value: '6rings4CHI'
        }
    }
};

client.createUser(newUser)
    .then(user => {
        console.log('Created user', user);
    })
    .catch(err => console.log(err));