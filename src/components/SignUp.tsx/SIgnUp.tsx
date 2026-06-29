import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../AuthForm.tsx/AuthForm';
import type { AuthData } from '../../types/auth';
import { signUp } from '../../api/authService';

export const SignUp = () => {
  const navigate = useNavigate();

  const login = async (authData: AuthData) => {
    const user = await signUp(authData);
    console.log(user);
    navigate('/');
  };

  return (
    <>
      <AuthForm onSubmit={login} />
    </>
  );
};
