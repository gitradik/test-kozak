/*
import jwt from 'jsonwebtoken';
import { Accounts } from '../../../models';
import typeSecretToken from './secretToken';

async function getToken(id) {
    return await jwt.sign({uid: id, type: 'access'}, typeSecretToken.squadhelp, {expiresIn: '2h'});
}

async function setTokenForUser(email) {
    const account = await Accounts.findOne({
        where: {email: email}
    });
    if (account) {
        await account.update({
            token: await getToken(account.id)
        });
        return account;
    }
}

module.exports = {setTokenForUser};
*/
