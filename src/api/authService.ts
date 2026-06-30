import type { AuthData, RefreshResponse, User } from '../types/index';
import { api } from './api';

export const signUp = async (authData: AuthData) => {
  const { data } = await api.post<User>('/auth/sign-up', authData);
  return data;
};

export const signIn = async (authData: AuthData) => {
  const { data } = await api.post<User>('/auth/sign-in', authData);
  return data;
};

export const resreshSession = async () => {
  const { data } = await api.post<RefreshResponse>('/auth/refresh');
  return data.success;
};

export const logout = () => {
  api.post('/auth/logout');
};
