import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const [counter, setCounter] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === 0) {
        navigate('/');
      }
      setCounter(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [counter]);

  return (
    <div className="flex justify-center flex-col items-center min-h-screen ">
      <h1 className="text-center items-center h-full mb-8 text-2xl md:text-3xl">
        page isn't found
      </h1>
      <p className="text-center">
        You will return to the main page in {counter}...
      </p>
    </div>
  );
};
