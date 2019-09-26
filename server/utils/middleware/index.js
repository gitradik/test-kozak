const {
    validationUserData,
    hashPassword,
    setToken,
    login,
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

    // WORKER
    validationWorkerData,
};

module.exports = middleware;