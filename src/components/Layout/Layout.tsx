import { Outlet } from 'react-router-dom';
import { NavBar } from '../Navbar/Navbar';
import { selectIsAuth, userAuthStore } from '../../stores/authStore';

export const Layout = () => {
  const isAuth = userAuthStore(selectIsAuth);
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
