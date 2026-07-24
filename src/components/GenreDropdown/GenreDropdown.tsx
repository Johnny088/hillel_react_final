import { allGenres } from '../../constants';
import type { Genres } from '../../types/index';

interface Props {
  genreHandler: (value: Genres) => void;
}

export const GenreDropdown = ({ genreHandler }: Props) => {
  const onChangeHandler = (genre: Genres) => {
    console.log(genre);
    genreHandler(genre);
  };
  console.log(allGenres);

  return (
    <label>
      Genres:
      <select
        name="Genre"
        className="bg-amber-50 ms-4 text-black"
        onChange={e => onChangeHandler(e.target.value as Genres)}
      >
        {allGenres.map(genre => (
          <option key={genre} value={genre} className="text-black">
            {genre}
          </option>
        ))}
      </select>
    </label>
  );
};
