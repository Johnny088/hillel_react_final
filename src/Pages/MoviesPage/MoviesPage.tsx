import { useState } from 'react';
// import type { Movie } from '../../types/index';
import { selectIsAuth, useAuthStore } from '../../stores/authStore';
import { getMovies } from '../../api/moviesService';
import { MovieItemPage } from '../MovieItemPage/MovieItemPage';
import { Pagination } from '../../components/Pagination/Pagination';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { useQuery } from '@tanstack/react-query';
import {
  selectGenre,
  selectSetTotalPages,
  selectTotalPages,
  useMoviesStore,
} from '../../stores/moviesStore';

export const MoviesPage = () => {
  const setTotalPages = useMoviesStore(selectSetTotalPages);
  const isAuth = useAuthStore(selectIsAuth);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState('');
  const [limit] = useState(10);
  const genre = useMoviesStore(selectGenre);

  const totalPages = useMoviesStore(selectTotalPages);

  const {
    data: movies,
    // error,
    // isLoading,
  } = useQuery({
    queryKey: ['movies', search, page, limit, genre],
    queryFn: () => getMovies({ search, page, limit, genre }),

    retry: 1,
  });

  setTotalPages(movies?.totalPages ?? 1);

  const clickPageHandler = (newPage: number) => {
    setPage(newPage);
    console.log(page);
  };

  const searchHandler = (queryKey: string) => {
    setSearch(queryKey);
    setPage(1);
  };

  // useEffect(() => {
  //   console.log(`useEffect page ${page}`);
  //   getMovies({ search, page, limit, genre }).then(({ movies, totalPages }) => {
  //     setMovies(movies);
  //     setTotalPages(totalPages);
  //   });
  // }, [search, page]);
  return (
    <>
      {isAuth ? (
        <>
          <SearchForm searchQuery={searchHandler} />

          <ul className="flex flex-row flex-wrap gap-7 justify-center mb-16">
            {movies?.movies?.map(movie => (
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
