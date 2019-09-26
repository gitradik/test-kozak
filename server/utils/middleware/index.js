const {
    validationUserData,
    hashPassword,
    setToken,
    login,
    tokenViability,
} = require('./account/middleware');

const {
    validationWorkerData,
} = require('./worker/middleware');

const middleware = {
    // ACCOUNT
    validationUserData,
    hashPassword,
    setToken,
    login,
    tokenViability,

    // WORKER
    validationWorkerData,
};

module.exports = middleware;