import type { User } from '../types';
import { api } from './api';

export const getCurrentUser = async () => {
  const { data } = await api.get<User>('/users/current');
  return data;
};
