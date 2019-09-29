const {
    createWorker,
    getWorkerById,
    getWorkers,
    updateWorker,
    removeWorker,
    searchWorkers,
} = require('./workerController');

const controllers = {
    createWorker,
    getWorkerById,
    getWorkers,
    updateWorker,
    removeWorker,
    searchWorkers,
};

module.exports = controllers;