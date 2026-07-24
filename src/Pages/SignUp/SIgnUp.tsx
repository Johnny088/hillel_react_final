import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../../components/AuthForm/AuthForm';

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
    <div className="px-4">
      <h1 className="text-center text-2xl sm:text-4xl md:text-5xl mb-8">
        Sign Up
      </h1>
      <AuthForm onSubmit={login} />
    </div>
  );
};
