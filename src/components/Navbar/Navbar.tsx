import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../api/authService';
import {
  selectClearAuth,
  selectUser,
  useAuthStore,
} from '../../stores/authStore';
import { GenreDropdown } from '../GenreDropdown/GenreDropdown';
import { selectSetGenre, useMoviesStore } from '../../stores/moviesStore';
import type { Genres } from '../../types/index';

export const NavBar = () => {
  const navigate = useNavigate();
  const authClear = useAuthStore(selectClearAuth);
  const setGenre = useMoviesStore(selectSetGenre);
  const user = useAuthStore(selectUser);
  const genreHandler = (value: Genres) => {
    setGenre(value);
  };

  const logoutHandler = () => {
    logout();
    authClear();
    navigate('/');
  };

  const showData = () => {
    console.log(user);
  };

  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/add">
        <button>add movie</button>
      </Link>

      <GenreDropdown genreHandler={genreHandler} />
      <button onClick={logoutHandler}>Logout</button>
      <button onClick={() => showData()}>check user's data</button>
    </>
  );
};
