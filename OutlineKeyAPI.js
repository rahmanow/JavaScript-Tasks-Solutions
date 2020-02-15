const fetch = require('node-fetch'); // if error run: npm install node-fetch --save
const https = require("https");
const agent = new https.Agent({
    rejectUnauthorized: false
});

// Information to reach API
const url = 'https://79.143.31.246:61629/x7Dt9XsaNHsUMxIubXPjqg/access-keys/';
const ip = '79.143.31.246' + ':443/?outline=1';
const domain = 'zapchas.tk' + ':443';

const getKeys = async () => {
    const response = await fetch(url, {agent});
    const myJson = await response.json();
    const keys = myJson.accessKeys;
    for (let i=0; i<keys.length; i++) {
        console.log(keys[i]['name'] + ' - ' + keys[i]['accessUrl'].replace(ip, domain));
    }
};
getKeys();