const { Worker } = require('../../../models/');

module.exports.createWorker = (req, res, next) => {
    const worker = new Worker(req.body);
    worker.save()
        .then(created => res.send(created))
        .catch(() => next({ path: "worker_data" }));
};

module.exports.getWorkers = (req, res, next) => {
    Worker.find({})
        .then(users => res.send(users))
        .catch(() => next({ path: "worker_not_found" }));
};

module.exports.getWorkerById = (req, res, next) => {
    Worker.findById(req.params.id)
        .then(worker => res.send(worker))
        .catch(() => next({ path: "worker_not_found" }));
};
