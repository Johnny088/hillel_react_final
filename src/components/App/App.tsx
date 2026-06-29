import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { HomePage } from '../../Pages/HomePage/HomePage';
import { SignIn } from '../SignIn/SignIn';
import { SignUp } from '../SignUp.tsx/SIgnUp';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
};
