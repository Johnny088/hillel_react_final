import { useNavigate } from 'react-router-dom';
import { addNewMovie } from '../../api/moviesService';
import { MovieForm } from '../../components/MovieForm/MovieForm';
import type { Movie } from '../../types';

export const MovieCreatePage = () => {
  const navigate = useNavigate();
  const hanleCreateMovie = async (movieData: Movie) => {
    const newMovie = {
      title: movieData.title,
      description: movieData.description,
      releaseDate: movieData.releaseDate,
      voteAverage: movieData.voteAverage,
      posterUrl: movieData.posterUrl,
      trailerUrl: movieData.trailerUrl,
      genre: movieData.genre,
    };
    const res = await addNewMovie(newMovie);

    if (!res) return;

    navigate('/');
  };
  return (
    <>
      <h1 className="text-center mb-8 text-3xl">Add a new movie</h1>
      <MovieForm movieAction={hanleCreateMovie} currentMovieData={null} />
    </>
  );
};
