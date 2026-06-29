import { useEffect, type ReactNode } from 'react';
import { getCurrentUser } from '../api/usersServices';
import { selectSetUser, userAuthStore } from '../stores/authStore';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const setUser = userAuthStore(selectSetUser);
  useEffect(() => {
    getCurrentUser().then(user => {
      setUser(user);
    });
  }, []);
  return children;
};
