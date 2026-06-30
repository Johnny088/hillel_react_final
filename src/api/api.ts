import axios, { type AxiosResponse } from 'axios';
import type { RefreshResponse } from '../types/index';

export const api = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
});

let refreshPromise: null | Promise<AxiosResponse<RefreshResponse>> = null;

api.interceptors.response.use(
  res => res,
  async error => {
    console.log(error); //---------------------------------------------- temp
    if (!error.response || error.response.status !== 401) {
      return Promise.reject(error);
    }
    const originalRequest = error.config;
    console.log(originalRequest); //---------------------------------------- temp

    if (originalRequest.url.includes('/auth/refresh')) {
      return Promise.reject(error);
    }

    if (!refreshPromise) {
      refreshPromise = api
        .post('/auth/refresh')
        .finally(() => (refreshPromise = null));
    }

    try {
      await refreshPromise;
      return api(originalRequest);
    } catch (error) {
      window.location.href = '/login';
      return Promise.reject(error);
    }
  },
);
