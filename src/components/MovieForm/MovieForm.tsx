import { Formik } from 'formik';
import * as yup from 'yup';

const movieSchema = yup.object().shape({});

export const MovieForm = () => {
  const handleSubmit = () => {};
  return (
    <Formik>
      <form></form>
    </Formik>
  );
};
