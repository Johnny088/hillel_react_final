import { useParams } from 'react-router-dom';
import { updateMovie } from '../../api/moviesService';
import { MovieForm } from '../../components/MovieForm/MovieForm';
import type { Movie } from '../../types';

export const UpdateMoviePage = () => {
  const { id } = useParams();
  if (!id) return;

  const hanleUpdateMovie = async (movieData: Movie) => {
    const result = await updateMovie(id, movieData);

    console.log(result);
  };
  return (
    <>
      <h1 className="text-center mb-8 text-3xl">Add a new movie</h1>
      <MovieForm movieAction={hanleUpdateMovie} />
    </>
  );
};
