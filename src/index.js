const okta = require('@okta/okta-sdk-nodejs');
const axios = require('axios')
require('dotenv').config();

const client = new okta.Client({
    orgUrl: process.env.OKTA_DOMAIN,
    token: process.env.API_TOKEN
});

// Verify client connection
// console.log(client);

// Create new user object and add to Okta org.
/*
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
*/

// Create a group and add to Okta org.
/*
const newGroup = {
    profile: {
        name: 'NBA Players',
        description: 'Professional Association of NBA Players'
    }
};

client.createGroup(newGroup)
.then(group => {
    console.log('Created group', group);
})
.catch(err => console.log(err));
 */

// Add User to Group
// first find user using login or ID
// then add to group using group ID
/*
client.getUser(process.env.USER_ID)
.then(user => {
    user.addToGroup(process.env.GROUP_ID)
    .then(() => console.log('User added to group!'))
    .catch(err => console.log(err));
})
.catch(err => console.log(err));
*/

// Add SMS verification factor for org using axios
// BETA function so using POST call
const newFactor = {
    factorType: "sms",
    provider: "OKTA",
    profile: {
        phoneNumber: process.env.PHONE_NUMBER
    }
};
const axios_headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `SSWS ${process.env.API_TOKEN}`
};
const config = {
    headers: axios_headers
};
let req_url = `${process.env.OKTA_DOMAIN}api/v1/org/factors/okta_sms/lifecycle/activate`;

// activate SMS on organization
/*
axios.post(req_url, null, config)
.then(res => {
    console.log(res);
})
.catch(err => console.log(err.response));
 */

 // enroll user in SMS
 req_url = `${process.env.OKTA_DOMAIN}api/v1/users/${process.env.USER_ID}/factors?activate=true`;
 axios.post(req_url, newFactor, config)
.then(res => {
    console.log(res.res.data);
})
.catch(err => console.log(err.response.data));