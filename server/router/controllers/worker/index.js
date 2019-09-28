const {
    createWorker,
    getWorkerById,
    getWorkers,
    updateWorker,
    removeWorker,
} = require('./workerController');

const controllers = {
    createWorker,
    getWorkerById,
    getWorkers,
    updateWorker,
    removeWorker,
};

module.exports = controllers;