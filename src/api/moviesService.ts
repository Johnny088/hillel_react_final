import type { Movie } from '../types';
import { api } from './api';

interface MoviesResponse {
  movies: Movie[];
}

export const getMovies = async () => {
  const { data } = await api.get<MoviesResponse>('/movies');
  console.log(111, data);
  return data.movies;
};

export const addNewMovie = async () => {
  const { data } = await api.post<Movie>('/movies/');
  return data;
};

export const updateMovie = async (_id: Movie['_id'], movieData: Movie) => {
  const { data } = await api.put<Movie>(`movies/:${_id}`, movieData);
  return data;
};

export const deleteMovie = async (_id: Movie['_id']) => {
  const { data } = await api.delete<Movie>(`/movies/:${_id}`);
  return data;
};
