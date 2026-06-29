import type { AuthData } from '../../types/auth';

interface AuthProps {
  onSubmit: (authdata: AuthData) => void;
}

export const AuthForm = ({ onSubmit }: AuthProps) => {
  const handleSubmit = (formData: FormData) => {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    onSubmit({ email, password });
  };

  return (
    <>
      <form action={handleSubmit}>
        <input type="text" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button>Submit</button>
      </form>
    </>
  );
};
