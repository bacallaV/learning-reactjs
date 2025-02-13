import { useState } from 'react'
import './App.css'

import AddButton from './components/AddButton/AddButton'
import Counter from './components/Counter/Counter'
import Searchbar from './components/Searchbar/Searchbar'
import TodoItem from './components/TodoItem/TodoItem'

import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [searchValue, setSearchValue] = useState('');

  const {
    item: todos,
    setItem: setTodos,
    status,
  } = useLocalStorage<{
    label: string;
    completed: boolean;
  }[]>('react-todos', []);

  const handleSearch = (searchValue: string) => {
    setSearchValue(searchValue);
  };

  const handleCompleteTodo = (index: number) =>
    () => {
      const newTodos = [...todos];
      newTodos[index].completed = !newTodos[index].completed;
      setTodos(newTodos);
    };

  const handleRemoveTodo = (index: number) =>
    () => {
      const newTodos = todos.filter((_, i) => i!== index);
      setTodos(newTodos);
    };

  return (
    <div className='app'>
      <Counter
        total={todos.length}
        completed={todos.filter(todo => todo.completed).length}
      />

      <Searchbar onSearch={handleSearch} />

      {
        status === 'loading' && (
          <p> Cargando tareas ⌛ </p>
        )
      }

      {
        status === 'failed' && (
          <p> Ocurrió un error al cargar las tareas 🤯 </p>
        )
      }

      {
        (status === 'success' && todos.length === 0) && (
          <p> No hay tareas por hacer 🎉 </p>
        )
      }

      <ul className='todoList'>
        {
          status === 'success' &&
          todos
          .filter((todo) => todo.label.toLowerCase().includes(searchValue.toLowerCase()))
          .map((todo, index) => (
            <TodoItem
              key={index}
              label={todo.label}
              completed={todo.completed}
              onCompleted={handleCompleteTodo(index)}
              onRemove={handleRemoveTodo(index)}
            />
          ))
        }
      </ul>

      <AddButton />
    </div>
  )
}

export default App
