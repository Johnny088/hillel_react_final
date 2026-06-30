import { useEffect, useState } from 'react';
import type { Movie } from '../../types/index';
import { selectIsAuth, useAuthStore } from '../../stores/authStore';

export const MoviesPage = () => {
  const isAuth = useAuthStore(selectIsAuth);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {}, []);
  return <>{isAuth ? <h1>Auth: true</h1> : <h1>you aren't autorized</h1>}</>;
};
