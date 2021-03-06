import axios from 'axios';
import { baseUrl } from '../baseURL';
import { config } from './config';

// ACCOUNT
export const signUp = (data) => axios.post(baseUrl + "signUp", data);
export const signIn = (data) => axios.post(baseUrl + "signIn", data);
export const removeAccount = () => axios.delete(baseUrl + "removeAccount", config);
export const accountByToken = () => axios.post(baseUrl + "token", null, config);
export const updateAccount = (data) => axios.post(baseUrl + "updateAccount", data, config);

// WORKERS
export const getWorkers = () => axios.get(baseUrl + "workers", config);
export const searchWorkers = (data) => axios.get(baseUrl + "searchWorkers?search=" + data, config);

// WORKER
export const addWorker = (data) => axios.post(baseUrl + "createWorker", data, config);
export const putWorker = (data) => axios.put(baseUrl + "updateWorker", data, config);
export const removeWorker = () => axios.delete(baseUrl + "deleteWorker", config);

/*
export const accByToken = () => axios.post(baseUrl + "token", null, config);
export const postContest = (data) => axios.post(baseUrl + "contest", data, config);
export const getContests = () => axios.get(baseUrl + "contests", config);
export const getContestById = () => axios.get(baseUrl + "contest", config);
export const updateContestById = (data) => axios.post(baseUrl + "contest-update", data, config);

// ЛАЖА
export const updateRequest = (body) => axios.post(baseUrl + "request-update", body, config);

export const acceptedRequest = () => axios.put(baseUrl + "request/accepted", null, config);
export const rejectedRequest = () => axios.put(baseUrl + "request/rejected", null, config);

export const uploadFiles = (data) => axios.post(baseUrl + "upload", data, config);
export const downloadFile = (path) => axios.get(path, config);*/

