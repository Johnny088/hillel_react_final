import { useEffect, useState } from 'react';
import type { Movie } from '../../types/index';
import { selectIsAuth, useAuthStore } from '../../stores/authStore';
import { getMovies } from '../../api/moviesService';
import { MovieItemPage } from '../MovieItemPage/MovieItemPage';
import { Pagination } from '../../components/Pagination/Pagination';

export const MoviesPage = () => {
  const isAuth = useAuthStore(selectIsAuth);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const clickPageHandler = () => {
    setPage(3);
  };

  useEffect(() => {
    getMovies(page).then(movies => setMovies(movies));
  }, []);
  const paginationHandler = () => {};
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

          <Pagination
            clickPageHandler={clickPageHandler}
            totalPages={totalPages}
            paginationHandler={paginationHandler}
          />
        </>
      ) : (
        <h1>you aren't autorized</h1>
      )}
    </>
  );
};
