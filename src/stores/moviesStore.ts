import { create } from 'zustand';
import type { Genres } from '../types/index';

interface MoviesStore {
  genre: Genres;
  setGenre: (value: Genres) => void;
}

export const useMoviesStore = create<MoviesStore>()(set => ({
  genre: 'All Genres',
  setGenre: value => set({ genre: value }),
}));

export const selectGenre = (state: MoviesStore) => state.genre;

export const selectSetGenre = (state: MoviesStore) => state.setGenre;
