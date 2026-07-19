// import { Formik, Form, Field } from 'formik';
// import * as yup from 'yup';
// import type { Movie, Genres } from '../../types/index';

// const genres: Genres[] = [];

// const movieValues: Movie = {
//   // _id: '',
//   title: '',
//   description: '',
//   release_date: new Date(),
//   vote_average: 0,
//   posterUrl: '',
//   trailerUrl: '',
//   genre: [],
// };

// const movieSchema = yup.object().shape({});

// export const MovieForm = () => {
//   console.log('form component');
//   const handleSubmit = (values: Movie) => {
//     console.log(values);
//   };
//   return (
//     <Formik
//       onSubmit={handleSubmit}
//       // validationSchema={movieSchema}
//       initialValues={movieValues}
//     >
//       <Form className="bg-amber-100 w-3xl text-black flex column">
//         <label>
//           Title: <Field type="text" name="title" />
//         </label>

//         <label>
//           Release_date: <Field type="date" name="release_date" />
//         </label>

//         <label>
//           Vote_average: <Field type="number" name="vote_average" />
//         </label>

//         <label>
//           PosterUrl: <Field type="text" name="posterUrl" />
//         </label>

//         <label>
//           TrailerUrl: <Field type="text" name="trailerUrl" />
//         </label>

//         <fieldset>
//           <legend>Genres</legend>
//           <label>
//             Action: <Field type="checkbox" name="genres" />
//           </label>
//           <label>
//             Adventure: <Field type="checkbox" name="genres" />
//           </label>
//           <label>
//             Animation: <Field type="checkbox" name="genres" />
//           </label>
//           <label>
//             Comedy: <Field type="checkbox" name="genres" />
//           </label>
//           <label>
//             Crime: <Field type="checkbox" name="genres" />
//           </label>
//           <label>
//             Documentary: <Field type="checkbox" name="genres" />
//           </label>
//           <label>
//             Drama: <Field type="checkbox" name="genres" />
//           </label>
//           <label>
//             Family: <Field type="checkbox" name="genres" />
//           </label>
//           <label>
//             Fantasy: <Field type="checkbox" name="genres" />
//           </label>
//           <label>
//             History: <Field type="checkbox" name="genres" />
//           </label>
//           <label>
//             Horror: <Field type="checkbox" name="genres" />
//           </label>
//           <label>
//             Music: <Field type="checkbox" name="genres" />
//           </label>
//           <label>
//             Mystery: <Field type="checkbox" name="genres" />
//           </label>
//           <label>
//             Romance: <Field type="checkbox" name="genres" />
//           </label>
//           <label>
//             Sci-Fi: <Field type="checkbox" name="genres" />
//           </label>
//           <label>
//             TV Movie: <Field type="checkbox" name="genres" />
//           </label>
//           <label>
//             Thriller: <Field type="checkbox" name="genres" />
//           </label>
//           <label>
//             War: <Field type="checkbox" name="genres" />
//           </label>
//           <label>
//             Western: <Field type="checkbox" name="genres" />
//           </label>
//         </fieldset>

//         <label>
//           Description: <Field as="textarea" name="description" />
//         </label>
//         <button>submit</button>
//       </Form>
//     </Formik>
//   );
// };

import { Formik, Form, Field, type FormikHelpers, ErrorMessage } from 'formik';
import * as yup from 'yup';
import type { Movie } from '../../types/index';

const initialValues: Movie = {
  title: '',
  description: '',
  releaseDate: new Date(),
  voteAverage: 0,
  posterUrl: '',
  trailerUrl: '',
  genre: [],
};

const allGenres = [
  'Action',
  'Adventure',
  'Animation',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Family',
  'Fantasy',
  'History',
  'Horror',
  'Music',
  'Mystery',
  'Romance',
  'Sci-Fi',
  'TV Movie',
  'Thriller',
  'War',
  'Western',
];

const movieSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().default(''),
  releaseDate: yup
    .date()
    .min(new Date(1888, 9, 14))
    .required(),
  voteAverage: yup.number().min(0).max(10).default(0),
  posterUrl: yup.string().required(),
  trailerUrl: yup.string().required(),
  genre: yup
    .array()
    .min(1, 'you should choose at least one genre')
    .of(yup.string().oneOf([...allGenres])),
});

interface Props {
  movieAction: (values: Movie) => void;
}

export const MovieForm = ({ movieAction }: Props) => {
  console.log('form component');

  const handleSubmit = (values: Movie, formikHelpers: FormikHelpers<Movie>) => {
    console.log(values);

    movieAction(values);

    formikHelpers.resetForm();
  };

  const inputClass =
    'mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500';
  const labelClass = 'block text-sm  text-slate-700';

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={movieSchema}
    >
      <Form className="max-w-2xl mx-auto p-6 bg-white border border-slate-200 rounded-xl shadow-sm space-y-5 text-slate-800 mb-16">
        <label className={labelClass}>
          Title
          <Field type="text" name="title" className={inputClass} />
          <ErrorMessage
            name="title"
            className="text-red-700 text-sm"
            component="p"
          />
        </label>

        <label className={labelClass}>
          Release Date
          <Field type="date" name="releaseDate" className={inputClass} />
          <ErrorMessage
            name="releaseDate"
            className="text-red-700 text-sm"
            component="p"
          />
        </label>

        <label className={labelClass}>
          Vote Average
          <Field type="number" name="voteAverage" className={inputClass} />
          <ErrorMessage
            name="voteAverage"
            className="text-red-700 text-sm"
            component="p"
          />
        </label>

        <label className={labelClass}>
          Poster URL
          <Field type="text" name="posterUrl" className={inputClass} />
          <ErrorMessage
            name="posterUrl"
            className="text-red-700 text-sm"
            component="p"
          />
        </label>

        <label className={labelClass}>
          Trailer URL
          <Field type="text" name="trailerUrl" className={inputClass} />
          <ErrorMessage
            name="trailerUrl"
            className="text-red-700 text-sm"
            component="p"
          />
        </label>

        <fieldset className="border border-slate-200 rounded-lg p-4">
          <legend className="px-2 text-sm font-semibold text-slate-700">
            Genres
          </legend>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
            {allGenres.map(name => (
              <label
                key={name}
                className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer"
              >
                <Field
                  type="checkbox"
                  name="genre"
                  value={name}
                  className="rounded border-slate-300 text-amber-600  focus:ring-amber-500"
                />
                {name}
              </label>
            ))}
            <ErrorMessage
              name="genre"
              className="text-red-700 text-sm"
              component="p"
            />
          </div>
        </fieldset>

        <label className={labelClass}>
          Description
          <Field
            as="textarea"
            name="description"
            rows="3"
            className={inputClass}
          />
          <ErrorMessage
            name="description"
            className="text-shadow-red-700 text-sm"
            component="p"
          />
        </label>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-red-500 hover:bg-red-700 active:bg-red-800 text-white rounded-md shadow transition-colors focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 duration-300"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};
