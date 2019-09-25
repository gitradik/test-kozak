const AccountNotFound = require( './account/accountNotFound');
const UniqueEmail = require( './account/uniqueEmail');
const ConflictAccountData = require( './account/conflictAccountData');
const Unregistered = require( './account/unregistered');
const WorkerNotFound = require( './worker/workerNotFound');
const ConflictWorkerData = require( './worker/conflictWorkerData');

const errors = {
    // ACCOUNT
    AccountNotFound,
    UniqueEmail,
    ConflictAccountData,
    Unregistered,

    // WORKER
    WorkerNotFound,
    ConflictWorkerData
};

module.exports = errors;
