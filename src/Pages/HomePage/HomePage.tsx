import { api } from '../../api/api';
import { logout, resreshSession } from '../../api/authService';

export const HomePage = () => {
  // const signUpHandler = (formData: FormData) => {
  //   const email = formData.get('email') as string;
  //   const password = formData.get('password') as string;
  //   api.post(`/auth/sign-up`, { email, password });
  // };

  // const logoutHandler = () => logout();

  // const refreshHandler = () => resreshSession();

  return (
    <>
      {/* <form action={signUpHandler}>
        <input type="text" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button>Sign-up</button>
      </form>
      <button onClick={logoutHandler}>Logout</button>
      <button onClick={refreshHandler}>refresh</button> */}
      <h1>Welcome to the main page</h1>
    </>
  );
};
