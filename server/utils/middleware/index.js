const { validationUserData } = require('./account/middleware');
const { validationWorkerData } = require('./worker/middleware');

const middleware = {
    // ACCOUNT
    validationUserData,

    // WORKER
    validationWorkerData
};

module.exports = middleware;