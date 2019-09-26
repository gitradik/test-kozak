const {
    createAccount,
    getAccountByLogin,
    hashPassword,
} = require('./accountController');

const controllers = {
    createAccount,
    getAccountByLogin,
    hashPassword,
};

module.exports = controllers;