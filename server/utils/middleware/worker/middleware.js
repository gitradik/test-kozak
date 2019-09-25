const { yupWorker } = require('./validation');

module.exports.validationWorkerData = async (req, res, next) => {
    const yupWork = await yupWorker(req.body);
    if (yupWork.isValid) {
        next();
    } else {
        next(yupWork);
    }
};