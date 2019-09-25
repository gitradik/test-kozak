const ApplicationError = require('../applicationError');

class WorkerNotFound extends ApplicationError {
    constructor(message) {
        super(message || 'WORKER NOT FOUND', 404);
    }
}

module.exports = WorkerNotFound;