const jwt = require('jsonwebtoken');
const { SECRET_TOKEN } = require('./secretToken');

async function getToken(login) {
    return await jwt.sign({uid: login, type: 'access'}, SECRET_TOKEN, {expiresIn: '2h'});
}

module.exports = getToken;
