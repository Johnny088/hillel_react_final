interface Props {
  totalPages: number;

  clickPageHandler: (page: number) => void;
}

export const Pagination = ({ totalPages, clickPageHandler }: Props) => {
  if (totalPages === 1) return null;

  const onClickHandler = (page: number) => {
    clickPageHandler(page);
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <ul className="flex justify-center">
      {pages.map(page => (
        <li
          key={page}
          className=" bg-amber-50 text-black border border-solid border-black rounded-b-md"
        >
          <button
            className="w-10 h-10 flex justify-center items-center hover:bg-amber-100"
            onClick={() => onClickHandler(page)}
          >
            {page}
          </button>
        </li>
      ))}
    </ul>
  );
};
