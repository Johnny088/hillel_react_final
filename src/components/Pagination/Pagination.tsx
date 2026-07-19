interface Props {
  totalPages: number;
  paginationHandler: () => void;
  clickPageHandler: () => void;
}

export const Pagination = ({
  totalPages,
  paginationHandler,
  clickPageHandler,
}: Props) => {
  if (totalPages === 1) return null;

  const onClickHandler = () => {};

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <ul>
      {pages.map(page => (
        <li key={page}>
          <button onClick={paginationHandler}>page</button>
        </li>
      ))}
    </ul>
  );
};
