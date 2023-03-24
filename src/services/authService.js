import * as request from './requester.js'

const baseUrl = `http://localhost:3030/users`;

export const login = (data) => request.post(`${baseUrl}/login`, data);

export const register = (data) => request.post(`${baseUrl}/register`, data);

export const logout = () => request.get(`${baseUrl}/logout`);
