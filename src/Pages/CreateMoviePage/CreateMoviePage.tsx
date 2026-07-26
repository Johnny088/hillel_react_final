import { useNavigate } from 'react-router-dom';
import { addNewMovie } from '../../api/moviesService';
import { MovieForm } from '../../components/MovieForm/MovieForm';
import type { CreateMovie, Movie } from '../../types';
import { toast, ToastContainer } from 'react-toastify';

export const MovieCreatePage = () => {
  const navigate = useNavigate();
  const hanleCreateMovie = async (movieData: CreateMovie) => {
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

    if (!res) {
      toast.error('something went wrong');
      setTimeout(() => {
        return;
      }, 1000);
    }

    toast.success('the movie has been added successfuly');
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };
  return (
    <>
      <h1 className="text-center mb-8 text-2xl md:text-3xl">Add a new movie</h1>
      <MovieForm movieAction={hanleCreateMovie} currentMovieData={null} />
      <ToastContainer />
    </>
  );
};
