import { useEffect, useState } from 'react';
import type { Movie } from '../../types';

export const MoviesPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {}, []);
};
