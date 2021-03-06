import axios from "axios";

const API_ROOT = process.env.REACT_APP_API_ADDRESS;

const responseData = (res: any) => res.data;

export const get = (url: string) => axios.get(`${API_ROOT}${url}`).then(responseData);

export const post = (url: string, data: any) => axios.post(`${API_ROOT}${url}`, data).then(responseData);

export const put = (url: string, data: any) => axios.put(`${API_ROOT}${url}`, data).then(responseData);

export const del = (url: string) => axios.delete(`${API_ROOT}${url}`).then(responseData);
