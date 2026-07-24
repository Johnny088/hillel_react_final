import { Link } from 'react-router-dom';

export const HomePage = () => {
  const loginBtn =
    'bg-red-600 hover:bg-red-800 transition duration-300 ease-in-out';
  return (
    <div className="flex justify-center items-center w-full min-h-screen flex-col ">
      <h1 className="text-5xl mb-16">Unlimited movies, TV shows, and more</h1>
      <ul className="flex gap-8">
        <li>
          <Link to="/sign-in">
            <button className={loginBtn}>Sign-in</button>
          </Link>
        </li>
        <li>
          <Link to="/sign-up">
            <button className={loginBtn}>Sign-up</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};
