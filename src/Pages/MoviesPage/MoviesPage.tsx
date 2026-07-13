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
          <iframe src={`https://www.youtube.com/embed/hverb7siYJ8`} />
          <ul>
            {movies.map(movie => (
              <li key={movie._id}>
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
