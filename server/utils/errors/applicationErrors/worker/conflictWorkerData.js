const ApplicationError = require('../applicationError');

class ConflictWorkerData extends ApplicationError {
    constructor(message) {
        super(message || 'CONFLICT OF WORKER DATA', 409);
    }
}

module.exports = ConflictWorkerData;