import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../../components/AuthForm.tsx/AuthForm';
import type { AuthData } from '../../types/index';
import { signIn } from '../../api/authService';
import { selectSetUser, userAuthStore } from '../../stores/authStore';

export const SignIn = () => {
  const navigate = useNavigate();

  const setUser = userAuthStore(selectSetUser);

  const login = async (authData: AuthData) => {
    const user = await signIn(authData);

    setUser(user);

    navigate('/');
  };

  return (
    <>
      <AuthForm onSubmit={login} />
    </>
  );
};
