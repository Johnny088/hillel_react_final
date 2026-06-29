import { Link } from 'react-router-dom';
import { logout, resreshSession } from '../../api/authService';

export const NavBar = () => {
  const refreshTest = () => {
    resreshSession();
  };
  const exit = () => {
    logout();
  };

  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/sign-in">
        <button>Sign-in</button>
      </Link>
      <Link to="sign-up">
        <button>Sign-up</button>
      </Link>
      <button onClick={refreshTest}>Refresh</button>
      <button onClick={exit}>Logout</button>
    </>
  );
};
