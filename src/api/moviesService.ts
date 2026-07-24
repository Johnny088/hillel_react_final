import type { Movie } from '../types';
import { api } from './api';

interface MoviesResponse {
  movies: Movie[];
  page: number;
  limit: number;
  totalPages: number;
}
interface GetMovieParams {
  page: number;
  limit: number;
  search: string;
  genre: string;
}

export const getMovies = async ({
  page,
  limit,
  search,
  genre,
}: GetMovieParams) => {
  if (!search) search = '';
  if (genre === 'All Genres') genre = '';
  const { data } = await api.get<MoviesResponse>('/movies', {
    params: {
      page,
      limit,
      ...(search.trim() ? { search: search.trim() } : {}),
      ...(genre.trim() ? { genre: genre.trim() } : {}),
    },
  });
  console.log(111, data);
  return data;
};

export const getMovieById = async (id: Movie['_id']) => {
  const { data } = await api.get<Movie>(`/movies/${id}`);
  return data;
};

export const addNewMovie = async (movieData: Movie) => {
  const { data } = await api.post<Movie>('/movies', movieData);
  return data;
};

export const updateMovie = async (_id: Movie['_id'], movieData: Movie) => {
  const { data } = await api.put<Movie>(`/movies/${_id}`, movieData);
  return data;
};

export const deleteMovie = async (_id: Movie['_id']) => {
  const { data } = await api.delete<Movie>(`/movies/${_id}`);
  return data;
};
