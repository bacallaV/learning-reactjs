import { ChangeEvent } from 'react';

import './Searchbar.css';


type SearchbarProps = {
  handleSearch: (searchValue: string) => void;
  initialValue?: string;
  isLoading?: boolean;
}
export default function Searchbar({
  handleSearch,
  initialValue = '',
  isLoading,
}: SearchbarProps) {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Buscar..."
      value={initialValue}
      onChange={handleSearchChange}
      disabled={isLoading}
    />
  )
}
