import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../../components/AuthForm.tsx/AuthForm';

import { signUp } from '../../api/authService';
import type { AuthData } from '../../types/index';
import { selectSetUser, useAuthStore } from '../../stores/authStore';

export const SignUp = () => {
  const navigate = useNavigate();

  const setUser = useAuthStore(selectSetUser);

  const login = async (authData: AuthData) => {
    const user = await signUp(authData);

    setUser(user);

    navigate('/');
  };

  return (
    <>
      <AuthForm onSubmit={login} />
    </>
  );
};
