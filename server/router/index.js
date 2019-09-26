const express = require('express');
const router = express.Router();

const accControllers = require('./controllers/account');
const workControllers = require('./controllers/worker');
const middleware = require('../utils/middleware');

// ACCOUNT
router.post("/signUp", middleware.validationUserData, middleware.hashPassword, middleware.setToken, accControllers.createAccount);
router.get("/signIn", middleware.login, middleware.setToken, accControllers.getAccountByLogin);
router.get("/account", accControllers.getAccountByLogin);
router.post('/token', middleware.tokenViability, accControllers.getAccountByLogin);

// WORKER
router.post("/createWorker", middleware.validationWorkerData, workControllers.createWorker);
router.get("/worker/:id", workControllers.getWorkerById);

/*router.get('/account', accControllers.getAllAccounts);

router.post('/login', middleware.login, middleware.getToken, accControllers.getAccount);

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

