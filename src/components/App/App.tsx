import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { HomePage } from '../../Pages/HomePage/HomePage';
import { SignIn } from '../../Pages/SignIn/SignIn';
import { SignUp } from '../../Pages/SignUp/SIgnUp';
import { MoviesPage } from '../../Pages/MoviesPage/MoviesPage';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { PublicRoute } from '../PublicRoute/PublicRoute';
import { MovieCreatePage } from '../../Pages/CreateMoviePage/CreateMoviePage';
import { UpdateMoviePage } from '../../Pages/UpdateMoviePage/UpdateMoviePage';
import { NotFoundPage } from '../../Pages/NotFoundPage/NotFoundPage';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute restricted>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="sign-in"
            element={
              <PublicRoute restricted>
                <SignIn />
              </PublicRoute>
            }
          />
          <Route
            path="sign-up"
            element={
              <PublicRoute restricted>
                <SignUp />
              </PublicRoute>
            }
          />
          <Route
            path="movies"
            element={
              <PrivateRoute>
                <MoviesPage />
              </PrivateRoute>
            }
          />
          <Route
            path="add"
            element={
              <PrivateRoute>
                <MovieCreatePage />
              </PrivateRoute>
            }
          />
          <Route
            path="movies/:id"
            element={
              <PrivateRoute>
                <UpdateMoviePage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
