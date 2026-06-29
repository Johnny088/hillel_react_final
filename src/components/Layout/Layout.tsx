import { Outlet } from 'react-router-dom';
import { NavBar } from '../Navbar/Navbar';

export const Layout = () => {
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
