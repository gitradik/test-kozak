const {hashPassword, getToken, login, yupAccount, pushAccount, tokenViability} = require('./account/middleware');

const middleware = {
    // ACCOUNT
    hashPassword,
    getToken,
    login,
    yupAccount,
    pushAccount,
    tokenViability,
};

module.exports = middleware;