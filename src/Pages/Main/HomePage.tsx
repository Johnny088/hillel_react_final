import axios from 'axios';

export const Main = () => {
  const testSignUp: string = 'http://localhost:8000/auth';

  const signUpHandler = (formData: FormData) => {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    axios.post(`${testSignUp}/sign-up`, { email, password });
  };

  return (
    <>
      <form action={signUpHandler}>
        <input type="text" name="email" placeholder="email" />
        <input type="text" name="password" placeholder="password" />
        <button>Sign-up</button>
      </form>
    </>
  );
};
