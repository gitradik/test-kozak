const yup = require('yup');

const accounShema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email(),
    password: yup.string().required().min(8),
    role: yup.string().required(),
});

async function yupAccount(obj) {
    return {result: await accounShema.isValid(obj), path: "contest_data"};
}

module.exports = {yupAccount};