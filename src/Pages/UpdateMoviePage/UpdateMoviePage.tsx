import { useParams } from 'react-router-dom';
import { getMovieById, updateMovie } from '../../api/moviesService';
import { MovieForm } from '../../components/MovieForm/MovieForm';
import type { Movie } from '../../types';
import { useEffect, useState } from 'react';

export const UpdateMoviePage = () => {
  const [currentMovieData, setCurrentMovieData] = useState<Movie | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    getMovieById(id)
      .then(movie => setCurrentMovieData(movie))
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  const hanleUpdateMovie = async (movieData: Movie) => {
    if (!id) return;
    const result = await updateMovie(id, movieData);

    console.log(result);
  };
  return (
    <>
      <h1 className="text-center mb-8 text-3xl">Add a new movie</h1>
      <MovieForm
        movieAction={hanleUpdateMovie}
        currentMovieData={currentMovieData}
      />
    </>
  );
};
