import { useState } from 'react';

import { selectIsAuth, selectUser, useAuthStore } from '../../stores/authStore';
import { deleteMovie, getMovies } from '../../api/moviesService';
import { MovieItemPage } from '../MovieItemPage/MovieItemPage';
import { Pagination } from '../../components/Pagination/Pagination';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  selectGenre,
  selectSetTotalPages,
  useMoviesStore,
} from '../../stores/moviesStore';
import { toast, ToastContainer } from 'react-toastify';
import type { Movie } from '../../types';

export const MoviesPage = () => {
  const setTotalPages = useMoviesStore(selectSetTotalPages);
  const isAuth = useAuthStore(selectIsAuth);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState('');
  const [limit] = useState(10);
  const genre = useMoviesStore(selectGenre);
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteMovie,
    onSuccess() {
      toast.success('The movie has been removed');
      queryClient.invalidateQueries({ queryKey: ['movies'] });
    },
  });

  const deleteHandler = (id: Movie['_id']) => {
    mutate(id);
  };

  const { data: movies } = useQuery({
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

  return (
    <>
      {isAuth && (
        <>
          <SearchForm searchQuery={searchHandler} />
          <ul className="flex flex-row flex-wrap gap-7 justify-center mb-16 px-10">
            {movies?.movies?.map(movie => (
              <li
                key={movie._id}
                className="gap-7  md:hover:scale-150 hover:z-50 duration-400 ease-in-out"
              >
                <MovieItemPage
                  movie={movie}
                  user={user}
                  deleteHandler={deleteHandler}
                />
              </li>
            ))}
          </ul>
          <Pagination clickPageHandler={clickPageHandler} />
          <ToastContainer />
        </>
      )}
    </>
  );
};
