import './HomePage.css'

import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import AddButton from './../components/AddButton/AddButton'
import Counter from './../components/Counter/Counter'
import Searchbar from './../components/Searchbar/Searchbar'
import TodoItem from './../components/TodoItem/TodoItem'
import TodoSkeleton from './../components/TodoSkeleton/TodoSkeleton'
import TodoList from './../components/TodoList/TodoList'

import useTodo from './../hooks/useTodo'
import TodoHeader from './../components/TodoHeader/TodoHeader'
import UnsyncedDataAlert from './../components/UnsyncedDataAlert/UnsyncedDataAlert'

export function HomePage() {
  const {
    todos,
    status,
    searchValue,
    handleCompleteTodo,
    handleRemoveTodo,
    handleSearch: search,
    sync,
  } = useTodo();

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.has('search')) {
      return;
    }

    search(searchParams.get('search') || '');
  }, [searchParams, search]);


  function handleAddTodo(): void {
    navigate('/add');
  }

  function handleEditTodo(id: number): void {
    navigate(`/edit/${id}`);
  }

  function handleSearch(searchValue: string): void {
    setSearchParams({ search: searchValue });
    search(searchValue);
  }

  return (
    <div className="home">
      <TodoHeader isLoading={status === 'loading'}>
        <Counter
          completed={todos.filter(todo => todo.completed).length}
          total={todos.length}
        />

        <Searchbar initialValue={searchParams.get('search') ?? ''} handleSearch={handleSearch} />
      </TodoHeader>

      <TodoList
        status={status}
        totalTodos={todos.length}
        searchedTodos={todos.filter(
          (todo) => todo.label.toLowerCase().includes(searchValue.toLowerCase())
        )}
        searchText={searchValue}
        onLoading={() => (
          <>
            <TodoSkeleton />
            <TodoSkeleton />
            <TodoSkeleton />
          </>
        )}
        onFailed={() => (
          <p> Ocurrió un error al cargar las tareas 🤯 </p>
        )}
        onEmpty={() => (
          <p> No hay tareas por hacer 🎉 </p>
        )}
        onEmptySearch={(searchText) => (
          <p> No hay tareas que coincidan con "{searchText}" 😅 </p>
        )}
      >
        {(todo) => (
          <TodoItem
            key={todo.id}
            label={todo.label}
            completed={todo.completed}
            onCompleted={handleCompleteTodo(todo.id)}
            onRemove={handleRemoveTodo(todo.id)}
            onEdit={() => handleEditTodo(todo.id)}
          />
        )}
      </TodoList>

   <UnsyncedDataAlert sync={sync} />

      <AddButton
        onClick={handleAddTodo}
      />
    </div>
  )
}
