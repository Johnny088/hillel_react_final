import type { AuthData, RefreshResponse, User } from '../types/index';
import { api } from './api';
import { useAuthStore } from '../stores/authStore';
import { getCurrentUser } from './usersServices';

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
  const user = await getCurrentUser();
  console.log(user);
  useAuthStore.getState().setUser(user);
  return data;
};

export const logout = () => {
  api.post('/auth/logout');
};
