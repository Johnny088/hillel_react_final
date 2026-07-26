import { useParams } from 'react-router-dom';
import { getMovieById, updateMovie } from '../../api/moviesService';
import { MovieForm } from '../../components/MovieForm/MovieForm';
import type { Movie } from '../../types';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const UpdateMoviePage = () => {
  const [currentMovieData, setCurrentMovieData] = useState<Movie | null>(null);
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updateMovie,
    onSuccess() {
      toast.success('the movie has been updated');
      queryClient.invalidateQueries({ queryKey: ['movies'] });
    },
    onError() {
      toast.error('something went wrong');
    },
  });

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
      releaseDate: movieData.releaseDate,
      voteAverage: movieData.voteAverage,
      posterUrl: movieData.posterUrl,
      trailerUrl: movieData.trailerUrl,
      genre: movieData.genre,
      description: movieData.description,
    };

    mutate({ _id: id, movieData: updatedMovie });
    // const res = await updateMovie(id, updatedMovie);
    // if (!res) {
    //   toast.error('something went wrong');
    //   setTimeout(() => {
    //     return;
    //   }, 1000);
    // }

    // toast.success('the movie has been updated');
    // setTimeout(() => {
    //   navigate('/');
    // }, 1000);
  };

  return (
    <div className="px-4">
      <h1 className="text-center mb-8 text-xl sm:text-2xl md:text-3xl">
        Updating a movie
      </h1>
      <MovieForm
        movieAction={hanleUpdateMovie}
        currentMovieData={currentMovieData}
      />
    </div>
  );
};
