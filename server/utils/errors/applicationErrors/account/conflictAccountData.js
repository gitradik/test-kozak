const ApplicationError = require('../applicationError');

class ConflictAccountData extends ApplicationError {
    constructor(message) {
        super(message || 'CONFLICT OF ACCOUNT DATA', 409);
    }
}

module.exports = ConflictAccountData;