const express = require('express');
const router = express.Router();

const accControllers = require('./controllers/account');
const workControllers = require('./controllers/worker');
const middleware = require('../utils/middleware');

// ACCOUNT
router.post("/signUp", middleware.validationUserData, middleware.hashPassword, middleware.setToken, accControllers.createAccount);
router.post("/signIn", middleware.login, middleware.setToken, accControllers.getAccountByLogin);
router.post('/token', middleware.tokenViability, accControllers.getAccountByLogin);

// WORKERS
router.get("/workers", middleware.tokenViability, workControllers.getWorkers);
// WORKER
router.post("/createWorker", middleware.tokenViability, middleware.validationWorkerData, workControllers.createWorker);
router.put("/updateWorker", middleware.tokenViability, middleware.validationWorkerData, workControllers.updateWorker);
router.delete("/deleteWorker", middleware.tokenViability, workControllers.removeWorker);
router.get("/worker/:id", middleware.tokenViability, workControllers.getWorkerById);

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

