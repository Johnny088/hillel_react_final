import { selectTotalPages, useMoviesStore } from '../../stores/moviesStore';

interface Props {
  clickPageHandler: (page: number) => void;
}

export const Pagination = ({ clickPageHandler }: Props) => {
  const totalPages = useMoviesStore(selectTotalPages);

  if (totalPages === 1) return null;

  const onClickHandler = (page: number) => {
    clickPageHandler(page);
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <ul className="flex flex-wrap justify-center gap-1.5 md:gap-0 px-10">
      {pages.map(page => (
        <li
          key={page}
          className=" bg-amber-50 text-black border border-solid border-black rounded-b-md "
        >
          <button
            className="w-8 h-8 md:w-10 md:h-10 flex justify-center items-center hover:bg-amber-100"
            onClick={() => onClickHandler(page)}
          >
            {page}
          </button>
        </li>
      ))}
    </ul>
  );
};
