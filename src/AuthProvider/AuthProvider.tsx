import { useEffect, type ReactNode } from 'react';
// import { getCurrentUser } from '../api/usersServices';
import { selectSetUser, useAuthStore } from '../stores/authStore';
import { resreshSession } from '../api/authService';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const setUser = useAuthStore(selectSetUser);

  useEffect(() => {
    const init = async () => {
      const data = await resreshSession();
      if (data.success) {
        // const user = await getCurrentUser();
        setUser(data.user);
      }
    };
    init();
  }, [setUser]);
  return children;
};
