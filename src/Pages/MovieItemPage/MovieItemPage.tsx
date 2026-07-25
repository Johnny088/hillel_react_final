import { Link } from 'react-router-dom';
import type { Movie, User } from '../../types/index';
import ReactPlayer from 'react-player';
import editIcon from '../../assets/video-editor.png';
import deleteIcon from '../../assets/delete.png';
import { deleteMovie } from '../../api/moviesService';

interface Props {
  movie: Movie;
  user: User | null;
}

export const MovieItemPage = ({ movie, user }: Props) => {
  return (
    <>
      <h3 className="text-amber-50  mb-5 ">{movie.title}</h3>
      {user?.role === 'admin' && (
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
              className="w-10 h-10 hover:cursor-pointer"
            />
          </li>
        </ul>
      )}

      <ReactPlayer
        src={movie.trailerUrl}
        playIcon={movie.posterUrl}
        controls
        width="100%"
      />
    </>
  );
};
