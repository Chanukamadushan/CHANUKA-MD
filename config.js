const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "aqoThbxZ#vxQkw1Ker-pGWi50KXWxVRWJ4wvQkYV6mZKdHNiOr40",
MONGODB: process.env.MONGODB || "mongodb://mongo:eKkloPwrUKytiEPfYMPZNtWfXHxsLbQu@autorack.proxy.rlwy.net:13482",
}; 
