import { useEffect, useState } from 'react';
import type { Movie } from '../../types/index';
import { selectIsAuth, useAuthStore } from '../../stores/authStore';
import { getMovies } from '../../api/moviesService';
import { MovieItemPage } from '../MovieItemPage/MovieItemPage';

export const MoviesPage = () => {
  const isAuth = useAuthStore(selectIsAuth);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies().then(movies => setMovies(movies));
  }, []);
  return (
    <>
      {isAuth ? (
        <>
          <ul className="flex flex-row flex-wrap gap-7 justify-center">
            {movies.map(movie => (
              <li
                key={movie._id}
                className="gap-7 hover:scale-150 hover:z-50 duration-400 ease-in-out"
              >
                <MovieItemPage movie={movie} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h1>you aren't autorized</h1>
      )}
    </>
  );
};
