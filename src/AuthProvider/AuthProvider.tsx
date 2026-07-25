import { useEffect, type ReactNode } from 'react';
// import { getCurrentUser } from '../api/usersServices';
import {
  selectASetIsFetching,
  selectSetUser,
  useAuthStore,
} from '../stores/authStore';
import { resreshSession } from '../api/authService';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const setUser = useAuthStore(selectSetUser);
  const setIsFetching = useAuthStore(selectASetIsFetching);

  useEffect(() => {
    const init = async () => {
      try {
        setIsFetching(true);

        const data = await resreshSession();

        if (data.success) {
          setUser(data.user);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsFetching(false);
      }
      // const user = await getCurrentUser();
    };
    init();
  }, [setUser, setIsFetching]);
  return children;
};
