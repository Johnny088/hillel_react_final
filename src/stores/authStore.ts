import { create } from 'zustand';
import type { User } from '../types/index';

interface AuthStore {
  isAuth: boolean;
  isUserFetching: boolean;
  user: User | null;
  setUser: (user: User) => void;
  setIsFetching: (value: boolean) => void;

  clearAuth: () => void;
}

export const useAuthStore = create<AuthStore>()(set => ({
  isAuth: false,
  user: null,
  isUserFetching: true,
  setUser: user => set({ user, isAuth: true }),
  setIsFetching: (value: boolean) => set({ isUserFetching: value }),
  clearAuth: () => set(() => ({ user: null, isAuth: false })),
}));

export const selectSetUser = (state: AuthStore) => state.setUser;

export const selectIsAuth = (state: AuthStore) => state.isAuth;

export const selectUser = (state: AuthStore) => state.user;

export const selectClearAuth = (state: AuthStore) => state.clearAuth;

export const selectIsFetching = (state: AuthStore) => state.isUserFetching;

export const selectASetIsFetching = (state: AuthStore) => state.setIsFetching;
