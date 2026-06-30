import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { HomePage } from '../../Pages/HomePage/HomePage';
import { SignIn } from '../../Pages/SignIn/SignIn';
import { SignUp } from '../../Pages/SignUp.tsx/SIgnUp';
import { MoviesPage } from '../../Pages/MoviesPage/MoviesPage';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { PublicRoute } from '../PublicRoute/PublicRoute';
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
        </Route>
      </Routes>
    </>
  );
};
