const express = require('express');
const router = express.Router();

const accControllers = require('./controllers/account');
const middleware = require('../utils/middleware');


router.post('/signUp', middleware.validationUserData, accControllers.createAccount);

/*router.get('/account', accControllers.getAllAccounts);

router.post('/login', middleware.login, middleware.getToken, accControllers.getAccount);

router.post('/token', middleware.tokenViability, accControllers.getAccountByToken);

router.get('/account/:id', middleware.tokenViability, accControllers.getAccountsById);

router.post('/contest', middleware.tokenViability, middleware.yupContest, contestControllers.pushContest);

router.post('/upload', filesController.upload.array('files', 3), filesController.uploadFiles);

router.get('/file/:name', filesController.getFile);

router.get('/contests', middleware.tokenViability, contestControllers.findAllAccountContest);

router.get('/contest', middleware.tokenViability, contestControllers.findContestById);

router.post('/contest-update', middleware.tokenViability, middleware.findAndUpdateContestById, contestControllers.findContestById);

router.post('/request', middleware.tokenViability, middleware.yupRequest, requestControllers.pushRequest);

router.put('/request/accepted', middleware.tokenViability, requestControllers.acceptedRequest);
router.put('/request/rejected', middleware.tokenViability, requestControllers.rejectedRequest);*/

module.exports = router;

