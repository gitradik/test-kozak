const ApplicationError = require('../applicationError');

class AccountNotFound extends ApplicationError {
    constructor(message) {
        super(message || 'ACCOUNT NOT FOUND', 404);
    }
}

module.exports = AccountNotFound;