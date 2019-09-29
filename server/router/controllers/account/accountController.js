const { User } = require('../../../models/');

module.exports.createAccount = (req, res, next) => {
    const user = new User(req.body);
    user.save()
        .then(created => {
            const { token } = req.headers;
            res.json({token});
        })
        .catch((err) => {
            next({path: "account_data"})
        });
};

module.exports.updateAccount = (req, res, next) => {
    try {
        User.findOneAndUpdate({ login: req.headers.login }, { $set: req.body },
            { new: true, upsert: false, remove: {}, fields: {} }, (err, updatedAccount) => {
            if(err) {
                next({path: "account_data"});
            } else {
                updatedAccount.password = "";
                res.send(updatedAccount);
            }
        });
    } catch (err) {
        next({path: "account_data"});
    }
};

module.exports.getAccountByLogin = (req, res, next) => {
    User.findOne({ login: req.headers.login }, ['_id', 'login', 'email', 'token'])
        .then(user => {
            if(user) {
                user.token = req.headers.token;
                res.send(user);
            } else {
                next({path: "account_not_found"});
            }
        })
        .catch(() => next({path: "account_not_found"}));
};

module.exports.removeAccount = (req, res, next) => {
    User.remove({ login: req.headers.login })
        .then(remoteAccount => res.send({ remoteAccount }))
        .catch(() => next({ path: "account_not_found" }));
};
