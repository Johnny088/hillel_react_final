import { useEffect, useState } from 'react';
// import type { Movie } from '../../types/index';
import {
  selectIsAuth,
  selectIsFetching,
  selectUser,
  useAuthStore,
} from '../../stores/authStore';
import { getMovies } from '../../api/moviesService';
import { MovieItemPage } from '../MovieItemPage/MovieItemPage';
import { Pagination } from '../../components/Pagination/Pagination';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { useQuery } from '@tanstack/react-query';
import {
  selectGenre,
  selectSetTotalPages,
  useMoviesStore,
} from '../../stores/moviesStore';

export const MoviesPage = () => {
  const setTotalPages = useMoviesStore(selectSetTotalPages);
  const isAuth = useAuthStore(selectIsAuth);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState('');
  const [limit] = useState(10);
  const genre = useMoviesStore(selectGenre);
  const isFetching = useAuthStore(selectIsFetching);

  const {
    data: movies,
    // error,
    isLoading,
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
  const user = useAuthStore(selectUser);
  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <>
      {isFetching && isLoading && (
        <h2 className="flex justify-center items-center w-full min-h-screen  text-white">
          Loading...
        </h2>
      )}
      {isAuth && !isFetching && !isLoading ? (
        <>
          <SearchForm searchQuery={searchHandler} />
          <ul className="flex flex-row flex-wrap gap-7 justify-center mb-16 px-4">
            {movies?.movies?.map(movie => (
              <li
                key={movie._id}
                className="gap-7  md:hover:scale-150 hover:z-50 duration-400 ease-in-out"
              >
                <MovieItemPage movie={movie} />
              </li>
            ))}
          </ul>
          <Pagination clickPageHandler={clickPageHandler} />
        </>
      ) : (
        <h1>you aren't autorized</h1>
      )}
    </>
  );
};
