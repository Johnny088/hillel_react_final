import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <>
      <h1>Welcome to the main page</h1>
      <Link to="/sign-in">
        <button>Sign-in</button>
      </Link>
      <Link to="/sign-up">
        <button>Sign-up</button>
      </Link>
    </>
  );
};
