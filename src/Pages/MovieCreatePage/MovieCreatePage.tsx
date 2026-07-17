import { MovieForm } from '../../components/MovieForm/MovieForm';

export const MovieCreatePage = () => {
  return (
    <>
      <h1 className="text-center mb-8 text-3xl">Add a new movie</h1>
      <MovieForm />
    </>
  );
};
