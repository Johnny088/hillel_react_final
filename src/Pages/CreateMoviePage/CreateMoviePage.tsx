import { addNewMovie } from '../../api/moviesService';
import { MovieForm } from '../../components/MovieForm/MovieForm';
import type { Movie } from '../../types';

export const MovieCreatePage = () => {
  const hanleCreateMovie = async (movieData: Movie) => {
    const result = await addNewMovie(movieData);

    console.log(result);
  };
  return (
    <>
      <h1 className="text-center mb-8 text-3xl">Add a new movie</h1>
      <MovieForm movieAction={hanleCreateMovie} currentMovieData={null} />
    </>
  );
};
