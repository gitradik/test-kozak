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
router.get("/searchWorkers", middleware.tokenViability, workControllers.searchWorkers);

// WORKER
router.post("/createWorker", middleware.tokenViability, middleware.validationWorkerData, workControllers.createWorker);
router.put("/updateWorker", middleware.tokenViability, middleware.validationWorkerData, workControllers.updateWorker);
router.delete("/deleteWorker", middleware.tokenViability, workControllers.removeWorker);
router.get("/worker/:id", middleware.tokenViability, workControllers.getWorkerById);

module.exports = router;

