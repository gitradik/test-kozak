const {
    createAccount,
    getAccountByLogin,
    removeAccount,
    updateAccount,
} = require('./accountController');

const controllers = {
    createAccount,
    getAccountByLogin,
    removeAccount,
    updateAccount,
};

module.exports = controllers;