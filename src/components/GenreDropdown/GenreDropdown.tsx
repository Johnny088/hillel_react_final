// import { useState } from 'react';
import { allGenres } from '../../constants';
// import type { Genres } from '../../types';

interface Props {
  genreHandler: (value: string) => void;
}

export const GenreDropdown = ({ genreHandler }: Props) => {
  //   const [isOpen, setIsOpen] = useState(false);
  //   const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  const genres = ['', ...allGenres];
  const onChangeHandler = (genre: string) => {
    console.log(genre);
    genreHandler(genre);
  };
  console.log(genres);

  return (
    <label>
      Genres:
      <select
        name="Genre"
        className="bg-amber-50 ms-4 text-black"
        onChange={e => onChangeHandler(e.target.value)}
      >
        {genres.map(genre => (
          <option key={genre} value={genre} className="text-black">
            {genre === '' ? 'All Genres' : genre}
          </option>
        ))}
      </select>
    </label>
  );
};
