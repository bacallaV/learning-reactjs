import { ChangeEvent } from 'react';

import './Searchbar.css'


type SearchbarProps = {
  handleSearch: (searchValue: string) => void;
  isLoading?: boolean;
}
export default function Searchbar({
  handleSearch,
  isLoading,
}: SearchbarProps) {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Buscar..."
      onChange={handleSearchChange}
      disabled={isLoading}
    />
  )
}
