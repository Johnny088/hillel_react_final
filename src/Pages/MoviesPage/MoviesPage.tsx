import { useEffect, useState } from 'react';
import type { Movie } from '../../types/index';
import { selectIsAuth, useAuthStore } from '../../stores/authStore';
import { getMovies } from '../../api/moviesService';

export const MoviesPage = () => {
  const isAuth = useAuthStore(selectIsAuth);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies().then(movies => setMovies(movies));
  }, []);
  return (
    <>
      {isAuth ? (
        <ul>
          {movies.map(movie => (
            <li key={movie._id}>{movie.title}</li>
          ))}
        </ul>
      ) : (
        <h1>you aren't autorized</h1>
      )}
    </>
  );
};
