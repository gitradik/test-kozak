const { User } = require('../../../models');
const bcrypt = require('bcrypt');

async function passwordMatch(login, password) {
    const account = await User.findOne({login: login});
    if (account) {
        return {result: await bcrypt.compare(password, account.password), path: "account_not_found", account}
    }
    return {result: false, path: "account_not_found"};
}

module.exports = {passwordMatch};
