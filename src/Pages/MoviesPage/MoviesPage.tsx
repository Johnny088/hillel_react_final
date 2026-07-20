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

  const clickPageHandler = (newPage: number) => {
    setPage(newPage);
    console.log(page);
  };

  useEffect(() => {
    console.log(`useEffect page ${page}`);
    getMovies(page).then(({ movies, totalPages }) => {
      setMovies(movies);
      setTotalPages(totalPages);
    });
  }, [page]);
  return (
    <>
      {isAuth ? (
        <>
          <ul className="flex flex-row flex-wrap gap-7 justify-center mb-16">
            {movies.map(movie => (
              <li
                key={movie._id}
                className="gap-7  hover:scale-150 hover:z-50 duration-400 ease-in-out"
              >
                <MovieItemPage movie={movie} />
              </li>
            ))}
          </ul>

          <Pagination
            clickPageHandler={clickPageHandler}
            totalPages={totalPages}
          />
        </>
      ) : (
        <h1>you aren't autorized</h1>
      )}
    </>
  );
};
