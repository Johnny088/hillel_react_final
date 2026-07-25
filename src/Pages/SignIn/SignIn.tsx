import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../../components/AuthForm/AuthForm';
import type { AuthData } from '../../types/index';
import { signIn } from '../../api/authService';
import { selectSetUser, useAuthStore } from '../../stores/authStore';

export const SignIn = () => {
  const navigate = useNavigate();

  const setUser = useAuthStore(selectSetUser);

  const login = async (authData: AuthData) => {
    const user = await signIn(authData);

    console.log(user);
    setUser(user);
    navigate('/movies');
  };

  return (
    <div className="px-4">
      <h1 className="text-center text-2xl sm:text-4xl md:text-5xl mb-8">
        Sign In
      </h1>
      <AuthForm onSubmit={login} />
    </div>
  );
};
