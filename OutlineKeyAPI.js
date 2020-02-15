const fetch = require('node-fetch'); // if error run: npm install node-fetch --save
const https = require("https");
const agent = new https.Agent({
    rejectUnauthorized: false
});

// Information to reach API
const managementApiUrl = ' '; // Copy and paste Management API URL from Outline Manager Key Settings
const domain = ' '; // set your custom domain if you have one

const url = managementApiUrl + '/access-keys/';
const ip = managementApiUrl.split('/')[2].split(':')[0];

const getKeys = async () => {
    const response = await fetch(url, {agent});
    const myJson = await response.json();
    const keys = myJson.accessKeys;
    for (let i=0; i<keys.length; i++) {
        let key = keys[i];
        //let port = ':' + key['port'];
        let name = key['name'];
        let accessUrl = key['accessUrl'];
        console.log(name + ' - ' + accessUrl.replace(ip, domain));
    }
};
getKeys();
