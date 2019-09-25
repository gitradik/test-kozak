const ApplicationError = require('../applicationError');

class UniqueEmail extends ApplicationError {
    constructor(message) {
        super(message || 'USER WITH SUCH EMAIL ALREADY EXISTS', 403);
    }
}

module.exports = UniqueEmail;