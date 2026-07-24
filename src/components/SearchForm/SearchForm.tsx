import { useDebouncedCallback } from 'use-debounce';

interface Props {
  searchQuery: (queryKey: string) => void;
}

export const SearchForm = ({ searchQuery }: Props) => {
  const debounced = useDebouncedCallback((value: string) => {
    if (value.trim() === '' && value.length > 0) {
      return;
    } else {
      searchQuery(value);
    }
  }, 500);
  return (
    <div className="flex justify-center  mb-16">
      Search:
      <input
        className="bg-amber-50 text-black rounded-b-sm ms-4 px-3"
        type="text"
        name="search"
        defaultValue={''}
        onChange={e => debounced(e.target.value)}
      />
    </div>
  );
};
