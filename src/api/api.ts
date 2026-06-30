import axios from 'axios';
import { resreshSession } from './authService';

export const api = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
});

api.interceptors.response.use(
  res => res,
  error => {
    console.log(error); //---------------------------------------------- temp
    if (!error.response || error.response.status !== 401) {
      return Promise.reject(error);
    }
    const originalRequest = error.config;
    console.log(originalRequest); //---------------------------------------- temp

    if (originalRequest.url.includes('/auth/refresh')) {
      return Promise.reject(error);
    }

    try {
      resreshSession();
      return api(originalRequest);
    } catch (error) {
      window.location.href = '/login';
      return Promise.reject(error);
    }
  },
);
