import { Outlet } from 'react-router-dom';
import { NavBar } from '../Navbar/Navbar';
import { selectIsAuth, useAuthStore } from '../../stores/authStore';

export const Layout = () => {
  const isAuth = useAuthStore(selectIsAuth);
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
