const {
    createAccount,
    getAccountByLogin,
    removeAccount,
} = require('./accountController');

const controllers = {
    createAccount,
    getAccountByLogin,
    removeAccount,
};

module.exports = controllers;