import { create } from 'zustand';
import type { User } from '../types/index';

interface AuthStore {
  isAuth: boolean;
  user: User | null;
  setUser: (user: User) => void;
  clearAuth: () => void;
}

export const userAuthStore = create<AuthStore>()(set => ({
  isAuth: false,
  user: null,
  setUser: user => set(() => ({ user, isAuth: true })),
  clearAuth: () => set(() => ({ user: null, isAuth: false })),
}));

export const selectSetUser = (state: AuthStore) => state.setUser;

export const selectIsAuth = (state: AuthStore) => state.isAuth;
