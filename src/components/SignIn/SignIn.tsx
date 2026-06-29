import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../AuthForm.tsx/AuthForm';
import type { AuthData } from '../../types/index';
import { signIn } from '../../api/authService';

export const SignIn = () => {
  const navigate = useNavigate();

  const login = async (authData: AuthData) => {
    const user = await signIn(authData);
    console.log(user);
    navigate('/');
  };

  return (
    <>
      <AuthForm onSubmit={login} />
    </>
  );
};
