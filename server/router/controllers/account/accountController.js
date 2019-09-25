const { User } = require('../../../models/');

module.exports.createAccount = (req, res, next) => {
    const user = new User(req.body);
    user.save()
        .then(created => {
            res.json(created);
        })
        .catch(err => next({path: "account_data"}));
};

/*
import { Accounts } from '../../../models';



module.exports.getAllAccounts = async (req, res, next) => {
    try {
        const accounts = await Accounts.findAll({
            attributes: {exclude: ['password', 'token']}
        });
        res.send(accounts);
    } catch (err) {
        next(err.errors[0]);
    }
};

module.exports.getAccount = async (req, res, next) => {
    if(req.body) {
        req.body.password = null;
        res.send(req.body);
    } else {
        next({path: "account_not_found"})
    }
};

module.exports.getAccountByToken = async (req, res, next) => {
    const account = await Accounts.find({
        where: {token: req.headers.access_token},
        raw: true
    });
    if (account) {
        account.password = null;
        res.send(account);
    } else {
        next({path: "unregistered"})
    }
};

module.exports.getAccountsById = async (req, res, next) => {
    try {
        const result = await Accounts.findAll({
            where: {
                id: req.headers.accountIds
            }
        });
        res.send(result);
    } catch (err) {
        next(err.errors[0]);
    }
};*/
