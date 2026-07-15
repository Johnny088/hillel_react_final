import type { Movie } from '../../types/index';
import ReactPlayer from 'react-player';

interface Props {
  movie: Movie;
}

export const MovieItemPage = ({ movie }: Props) => {
  return (
    <>
      <h3 className="text-red-400 mb-5">{movie.title}</h3>
      {/* <video src={movie.trailerUrl} poster={movie.posterUrl} controls /> */}
      <ReactPlayer
        src={movie.trailerUrl}
        playIcon={movie.posterUrl}
        controls
        className=""
      />
    </>
  );
};
