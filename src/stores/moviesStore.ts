import { create } from 'zustand';
import type { Genres } from '../types/index';

interface MoviesStore {
  genre: Genres;
  setGenre: (value: Genres) => void;
  totalPages: number;
  setTotalPages: (value: number) => void;
}

export const useMoviesStore = create<MoviesStore>()(set => ({
  genre: 'All Genres',
  totalPages: 1,
  setGenre: value => set({ genre: value }),
  setTotalPages: value => set({ totalPages: value }),
}));

export const selectGenre = (state: MoviesStore) => state.genre;
export const selectSetGenre = (state: MoviesStore) => state.setGenre;

export const selectTotalPages = (state: MoviesStore) => state.totalPages;
export const selectSetTotalPages = (state: MoviesStore) => state.setTotalPages;
