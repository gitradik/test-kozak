const { User } = require('../../../models/');

module.exports.createAccount = (req, res, next) => {
    const user = new User(req.body);
    user.save()
        .then(created => {
            const { token } = created;
            res.json({token});
        })
        .catch(() => next({path: "account_data"}));
};

module.exports.getAccountByLogin = (req, res, next) => {
    User.findOne({login: req.body.login}, ['_id', 'login', 'email', 'token'])
        .then(user => {
            if(user) {
                user.token = req.body.token;
                res.send(user);
            } else {
                next({path: "account_not_found"});
            }
        })
        .catch(() => next({path: "account_not_found"}));
};
