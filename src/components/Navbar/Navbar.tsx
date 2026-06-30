import { Link, useNavigate } from 'react-router-dom';
import { logout, resreshSession } from '../../api/authService';
import { selectClearAuth, useAuthStore } from '../../stores/authStore';

export const NavBar = () => {
  const navigate = useNavigate();
  const authClear = useAuthStore(selectClearAuth);
  const refreshHandler = async () => {
    const result = await resreshSession();
    return result;
  };
  const logoutHandler = () => {
    logout();
    authClear();
    navigate('/');
  };

  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/movies">
        <button>Movies</button>
      </Link>
      <Link to="/sign-in">
        <button>Sign-in</button>
      </Link>
      <Link to="sign-up">
        <button>Sign-up</button>
      </Link>
      <button onClick={refreshHandler}>Refresh</button>
      <button onClick={logoutHandler}>Logout</button>
    </>
  );
};
