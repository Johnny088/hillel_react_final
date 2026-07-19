export type Genres =
  | 'Action'
  | 'Adventure'
  | 'Animation'
  | 'Comedy'
  | 'Crime'
  | 'Documentary'
  | 'Drama'
  | 'Family'
  | 'Fantasy'
  | 'History'
  | 'Horror'
  | 'Music'
  | 'Mystery'
  | 'Romance'
  | 'Sci-Fi'
  | 'TV Movie'
  | 'Thriller'
  | 'War'
  | 'Western';

export interface User {
  _id: string;
  username: string;
  email: string;
  avatarUrl: string;
  role: 'user' | 'admin';
}

export interface AuthData {
  email: string;
  password: string;
}

export interface Movie {
  // _id: string;
  title: string;
  description: string;
  releaseDate: Date;
  voteAverage: number;
  posterUrl: string;
  trailerUrl: string;
  genre: Genres[];
}

export interface RefreshResponse {
  message: string;
  success: boolean;
}
