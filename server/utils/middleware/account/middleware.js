const jwt = require('jsonwebtoken');
const { yupAccount } = require('./validation');
const bcrypt = require('bcrypt');
const getToken = require('./token');
const { passwordMatch } = require('./login');
const { SECRET_TOKEN } = require('./secretToken');

module.exports.validationUserData = async (req, res, next) => {
    const yupAcc = await yupAccount(req.body);
    if(yupAcc.isValid) {
       await next();
    } else {
        next(yupAcc);
    }
};

module.exports.hashPassword = async (req, res, next) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));
    await next();
};

module.exports.setToken = async (req, res, next) => {
    const log = req.body.login;
    req.headers.login = log;
    req.headers.token = await getToken(log);
    next();
};

module.exports.login = async (req, res, next) => {
    const result = await passwordMatch(req.body.login, req.body.password);
    req.body = result.account;
    if(result.result) {
        await next();
    } else {
        next(result);
    }
};

module.exports.tokenViability = async (req, res, next) => {
    try {
        const accessToken = await jwt.verify(req.headers.access_token, SECRET_TOKEN);
        req.headers.login = accessToken.uid;
        if (accessToken.exp > Date.now() / 1000) {
            await next();
        } else {
            next({ path: "unregistered" });
        }
    } catch (e) {
        next({ path: "unregistered" });
    }
};