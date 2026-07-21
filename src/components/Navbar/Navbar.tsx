import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../api/authService';
import { selectClearAuth, useAuthStore } from '../../stores/authStore';

export const NavBar = () => {
  const navigate = useNavigate();
  const authClear = useAuthStore(selectClearAuth);

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

      <Link to="/add">
        <button>add movie</button>
      </Link>
      <button onClick={logoutHandler}>Logout</button>
    </>
  );
};
