import axios from 'axios';
import { baseUrl } from '../baseURL';
import { config } from './config';

export const signUp = (data) => axios.post(baseUrl + "signUp", data);
export const signIn = (data) => axios.post(baseUrl + "signIn", data);
export const accountByToken = () => axios.post(baseUrl + "token", null, config);
export const getWorkers = () => axios.get(baseUrl + "workers", config);
export const addWorker = (data) => axios.post(baseUrl + "createWorker", data, config);

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

