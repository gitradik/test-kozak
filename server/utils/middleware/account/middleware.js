const { yupAccount } = require('./validation');

module.exports.validationUserData = async (req, res, next) => {
    const yupAcc = await yupAccount(req.body);
    if(yupAcc.isValid) {
       next();
    } else {
        next(yupAcc);
    }
};