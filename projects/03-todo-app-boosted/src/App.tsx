import './App.css'

import AddButton from './components/AddButton/AddButton'
import Counter from './components/Counter/Counter'
import Searchbar from './components/Searchbar/Searchbar'
import TodoItem from './components/TodoItem/TodoItem'
import TodoSkeleton from './components/TodoSkeleton/TodoSkeleton'
import Modal from './components/Modal/Modal'
import AddTodoForm from './components/AddTodoForm/AddTodoForm'

import useTodo from './hooks/useTodo'

function App() {
  const {
    todos,
    status,
    searchValue,
    handleCompleteTodo,
    handleRemoveTodo,
    isModalOpen,
    handleSearch,
    toggleModal,
    addTodo,
  } = useTodo();

  return (
    <div className="app">
      <Counter
        completed={todos.filter(todo => todo.completed).length}
        total={todos.length}
      />

      <Searchbar handleSearch={handleSearch} />

      <ul className='todoList'>
        {status === 'loading' && (
          <>
            <TodoSkeleton />
            <TodoSkeleton />
            <TodoSkeleton />
          </>
        )}

        {status === 'failed' && (
          <p> Ocurrió un error al cargar las tareas 🤯 </p>
        )}

        {status === 'success' && todos.length === 0 && (
          <p> No hay tareas por hacer 🎉 </p>
        )}

        {status === 'success' &&
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

      <AddButton
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
      />

      { isModalOpen && (
        <Modal>
          <AddTodoForm
            toggleModal={toggleModal}
            addTodo={addTodo}
          />
        </Modal>
      )}

    </div>
  )
}

export default App
