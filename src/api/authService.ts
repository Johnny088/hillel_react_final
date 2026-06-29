import type { AuthData } from '../types/index';
import { api } from './api';

export const signUp = async (authData: AuthData) => {
  const { data } = await api.post('/auth/sign-up', authData);
  console.log(data);
};

export const signIn = async (authData: AuthData) => {
  const { data } = await api.post('/auth/sign-in', authData);
  console.log(data);
};

export const resreshSession = () => {
  api.post('/auth/refresh');
};

export const logout = () => {
  api.post('/auth/logout');
};
