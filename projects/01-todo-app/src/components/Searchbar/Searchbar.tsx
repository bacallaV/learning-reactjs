import { ChangeEvent } from 'react';
import './Searchbar.css'

interface SearchbarProps {
  onSearch: (searchValue: string) => void;
}
export default function Searchbar({
  onSearch,
}: SearchbarProps) {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Buscar..."
      onChange={handleSearchChange}
    />
  )
}
