import axios, { type AxiosResponse } from 'axios';
import type { RefreshResponse } from '../types/index';
import { useAuthStore } from '../stores/authStore';

export const api = axios.create({
  // baseURL: import.meta.env.BASE_URL,
  baseURL: 'https://hillel-node-final.onrender.com',
  withCredentials: true,
});

let refreshPromise: null | Promise<AxiosResponse<RefreshResponse>> = null;

api.interceptors.response.use(
  res => res,
  async error => {
    if (!error.response || error.response.status !== 401) {
      return Promise.reject(error);
    }
    const originalRequest = error.config;

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
