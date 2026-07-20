import type { Movie } from '../types';
import { api } from './api';

interface MoviesResponse {
  movies: Movie[];
  page: number;
  lomit: number;
  totalPages: number;
}

export const getMovies = async (page: number = 1, limit: number = 10) => {
  const { data } = await api.get<MoviesResponse>('/movies', {
    params: {
      page,
      limit,
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
