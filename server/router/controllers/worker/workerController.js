const { Worker } = require('../../../models/');
const mongoose = require('mongoose');

module.exports.createWorker = (req, res, next) => {
    const worker = new Worker(req.body);
    worker.save()
        .then(created => res.send(created))
        .catch(() => next({ path: "worker_data" }));
};

module.exports.updateWorker = (req, res, next) => {
    const workerId = req.headers.workerid;
    if(mongoose.Types.ObjectId(workerId)) {
        req.body.createAt = new Date();
        Worker.findOneAndUpdate({ _id: workerId }, { $set : req.body },
            { new: true, upsert: false, remove: {}, fields: {} }, (err, updatedWorker) => {
            if(err){
                next({ path: "worker_data" });
            } else {
                res.send(updatedWorker);
            }
        });
    } else {
        next({ path: "worker_data" });
    } 
};

module.exports.getWorkers = async (req, res, next) => {
    const maxCount = await Worker.count();
    Worker.find({}, [], { skip: +req.headers.skip, limit: +req.headers.limit })
        .then(workers => {
            res.send({ workers, maxCount });
        })
        .catch(() => next({ path: "worker_not_found" }));
};

module.exports.getWorkerById = (req, res, next) => {
    Worker.findById(req.params.id)
        .then(worker => res.send(worker))
        .catch(() => next({ path: "worker_not_found" }));
};
