const { Worker } = require('../../../models/');

module.exports.createWorker = (req, res, next) => {
    const worker = new Worker(req.body);
    worker.save()
        .then(created => res.send(created))
        .catch(() => next({path: "worker_data"}));
};

module.exports.getWorkerById = (req, res, next) => {
    Worker.findById(req.params.id)
        .then(worker => res.send(worker))
        .catch(() => next({path: "worker_not_found"}));
};
