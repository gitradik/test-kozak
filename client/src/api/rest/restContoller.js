import axios from 'axios';
import { baseUrl } from '../baseURL';

export const signUp = (data) => axios.post(baseUrl + "signUp", data);

/*export const login = (data) => axios.post(baseUrl + "login", data);
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

