/*
import { Accounts } from '../../../models';
import bcrypt from 'bcrypt';

async function login(email, password) {
    const account = await Accounts.findOne({
        where: {email}
    });
    if(account) {
        return {result: await bcrypt.compare(password, account.password), path: "account_not_found", account}
    }
    return {result: false, path: "account_not_found"};
}

module.exports = {login};*/
