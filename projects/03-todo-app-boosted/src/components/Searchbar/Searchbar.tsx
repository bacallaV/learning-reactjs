import { ChangeEvent } from 'react';

import './Searchbar.css'


type SearchbarProps = {
  handleSearch: (searchValue: string) => void;
}
export default function Searchbar({
  handleSearch,
}: SearchbarProps) {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Buscar..."
      onChange={handleSearchChange}
    />
  )
}
