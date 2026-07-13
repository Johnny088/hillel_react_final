import type { Movie } from '../../types/index';
import 'tailwindcss';

interface Props {
  movie: Movie;
}

export const MovieItemPage = ({ movie }: Props) => {
  return (
    <>
      <h3>{movie.title}</h3>
      <iframe src={movie.trailerUrl} poster={movie.posterUrl} controls />
      <p>{movie.trailerUrl}</p>
    </>
  );
};
