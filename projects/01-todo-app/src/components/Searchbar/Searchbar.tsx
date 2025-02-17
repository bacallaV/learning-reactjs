import { ChangeEvent, useContext } from 'react';

import './Searchbar.css'

import { TodoContext } from '../../core/TodoContext';

export default function Searchbar() {
  const { handleSearch } = useContext(TodoContext);

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
