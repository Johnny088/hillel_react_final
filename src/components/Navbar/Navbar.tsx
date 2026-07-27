import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../api/authService';
import {
  selectClearAuth,
  selectIsAuth,
  selectUser,
  useAuthStore,
} from '../../stores/authStore';
import { GenreDropdown } from '../GenreDropdown/GenreDropdown';
import { selectSetGenre, useMoviesStore } from '../../stores/moviesStore';
import type { Genres } from '../../types/index';
import css from './Navbar.module.css';

export const NavBar = () => {
  const navigate = useNavigate();

  const authClear = useAuthStore(selectClearAuth);

  const setGenre = useMoviesStore(selectSetGenre);

  const user = useAuthStore(selectUser);

  const isAuth = useAuthStore(selectIsAuth);

  const genreHandler = (value: Genres) => {
    setGenre(value);
  };

  const logoutHandler = () => {
    logout();
    authClear();
    navigate('/');
  };

  return (
    <nav className="flex flex-col justify-between items-center px-4 sm:flex-row md:px-8 md:text-2xl">
      <ul className="flex gap-4 md:gap-16 items-center">
        <NavLink
          className={({ isActive }) => (isActive ? css.activeLink : css.link)}
          to="/movies"
        >
          <li>Home</li>
        </NavLink>
        {user?.role === 'admin' && (
          <NavLink
            className={({ isActive }) => (isActive ? css.activeLink : css.link)}
            to="/add"
          >
            <li>add movie</li>
          </NavLink>
        )}
        <li>{isAuth && <GenreDropdown genreHandler={genreHandler} />}</li>
      </ul>

      {isAuth && (
        <button onClick={logoutHandler} className="text-base md:text-2xl">
          Logout
        </button>
      )}
    </nav>
  );
};
