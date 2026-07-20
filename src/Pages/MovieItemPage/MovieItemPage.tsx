import { Link } from 'react-router-dom';
import type { Movie } from '../../types/index';
import ReactPlayer from 'react-player';
import editIcon from '../../assets/video-editor.png';
import deleteIcon from '../../assets/delete.png';
import { deleteMovie } from '../../api/moviesService';

interface Props {
  movie: Movie;
}

export const MovieItemPage = ({ movie }: Props) => {
  return (
    <>
      <h3 className="text-amber-50 mb-5 ">{movie.title}</h3>
      <ul className="flex justify-end gap-4 mb-4 flex-wrap ">
        <li>
          <Link to={`/movies/${movie._id}`}>
            <img src={editIcon} alt="edit icon" className="w-10 h-10" />
          </Link>
        </li>
        <li>
          <img
            src={deleteIcon}
            onClick={() => deleteMovie(movie._id)}
            alt="delete icon"
            className="w-10 h-10"
          />
        </li>
      </ul>

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
