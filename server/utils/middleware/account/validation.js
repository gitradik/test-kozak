const yup = require('yup');

const accounShema = yup.object().shape({
    login: yup.string().required(),
    password: yup.string().required().min(8),
    email: yup.string().email(),
});

async function yupAccount(obj) {
    return {isValid: await accounShema.isValid(obj), path: "account_data"};
}

module.exports = {yupAccount};