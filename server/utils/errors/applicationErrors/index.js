const AccountNotFound = require( './account/accountNotFound');
const UniqueEmail = require( './account/uniqueEmail');
const ConflictAccountData = require( './account/conflictAccountData');
const Unregistered = require( './account/unregistered');

const errors = {
    // ACCOUNT
    AccountNotFound,
    UniqueEmail,
    ConflictAccountData,
    Unregistered,
};

module.exports = errors;
