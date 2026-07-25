import { useEffect, type ReactNode } from 'react';
// import { getCurrentUser } from '../api/usersServices';
import {
  selectASetIsFetching,
  selectIsFetching,
  selectSetUser,
  selectUser,
  useAuthStore,
} from '../stores/authStore';
import { resreshSession } from '../api/authService';
import { getCurrentUser } from '../api/usersServices';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const setUser = useAuthStore(selectSetUser);
  const setIsFetching = useAuthStore(selectASetIsFetching);
  const isFetching = useAuthStore(selectIsFetching);

  useEffect(() => {
    const init = async () => {
      try {
        setIsFetching(true);

        const data = await resreshSession();

        if (data.success) {
          const user = await getCurrentUser();
          setUser(user);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsFetching(false);
      }
    };
    init();
  }, [setIsFetching, setUser]);

  if (isFetching) {
    return <h2>Loading....</h2>;
  }

  return children;
};
