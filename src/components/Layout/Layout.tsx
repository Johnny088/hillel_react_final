import { Outlet } from 'react-router-dom';
import { NavBar } from '../Navbar/Navbar';
import { selectIsAuth, useAuthStore } from '../../stores/authStore';

export const Layout = () => {
  const isAuth = useAuthStore(selectIsAuth);
  return (
    <>
      <header className="mt-8 mb-25">
        <NavBar />
      </header>
      <main className="mx-auto ">
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
