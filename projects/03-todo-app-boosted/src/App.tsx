import './App.css'

import AddButton from './components/AddButton/AddButton'
import Counter from './components/Counter/Counter'
import Searchbar from './components/Searchbar/Searchbar'
import TodoItem from './components/TodoItem/TodoItem'
import TodoSkeleton from './components/TodoSkeleton/TodoSkeleton'
import Modal from './components/Modal/Modal'
import AddTodoForm from './components/AddTodoForm/AddTodoForm'
import TodoList from './components/TodoList/TodoList'

import useTodo from './hooks/useTodo'
import TodoHeader from './components/TodoHeader/TodoHeader'
import UnsyncedDataAlert from './components/UnsyncedDataAlert/UnsyncedDataAlert'

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
    sync,
  } = useTodo();

  return (
    <div className="app">
      <TodoHeader isLoading={status === 'loading'}>
        <Counter
          completed={todos.filter(todo => todo.completed).length}
          total={todos.length}
        />

        <Searchbar handleSearch={handleSearch} />
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
        {(todo, index) => (
          <TodoItem
            key={index}
            label={todo.label}
            completed={todo.completed}
            onCompleted={handleCompleteTodo(index)}
            onRemove={handleRemoveTodo(index)}
          />
        )}
      </TodoList>

   <UnsyncedDataAlert sync={sync} />

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
