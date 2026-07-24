import { useNavigate, useParams } from 'react-router-dom';
import { getMovieById, updateMovie } from '../../api/moviesService';
import { MovieForm } from '../../components/MovieForm/MovieForm';
import type { Movie } from '../../types';
import { useEffect, useState } from 'react';

export const UpdateMoviePage = () => {
  const [currentMovieData, setCurrentMovieData] = useState<Movie | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

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
    const updatedMovie = {
      title: movieData.title,
      description: movieData.description,
      releaseDate: movieData.releaseDate,
      voteAverage: movieData.voteAverage,
      posterUrl: movieData.posterUrl,
      trailerUrl: movieData.trailerUrl,
      genre: movieData.genre,
    };
    const res = await updateMovie(id, updatedMovie);
    if (!res) return;

    navigate('/');
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
