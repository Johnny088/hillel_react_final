import { Outlet } from 'react-router-dom';
import { NavBar } from '../Navbar/Navbar';

export const Layout = () => {
  return (
    <>
      <header className="mt-8 mb-8">
        <NavBar />
      </header>
      <main className="mx-auto ">
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
