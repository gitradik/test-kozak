const yup = require('yup');

const workerShema = yup.object().shape({
    fullName: yup.string().required(),
    phone: yup.string().required(),
    sex: yup.string().required(),
    salary: yup.string().required(),
    position: yup.string().required(),
});

async function yupWorker(obj) {
    return {isValid: await workerShema.isValid(obj), path: "worker_data"};
}

module.exports = {yupWorker};