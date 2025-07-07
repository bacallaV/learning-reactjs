import './HomePage.css'

import AddButton from './../components/AddButton/AddButton'
import Counter from './../components/Counter/Counter'
import Searchbar from './../components/Searchbar/Searchbar'
import TodoItem from './../components/TodoItem/TodoItem'
import TodoSkeleton from './../components/TodoSkeleton/TodoSkeleton'
import Modal from './../components/Modal/Modal'
import AddTodoForm from './../components/AddTodoForm/AddTodoForm'
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
    isModalOpen,
    handleSearch,
    toggleModal,
    addTodo,
    sync,
  } = useTodo();

  return (
    <div className="home">
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
        {(todo) => (
          <TodoItem
            key={todo.id}
            label={todo.label}
            completed={todo.completed}
            onCompleted={handleCompleteTodo(todo.id)}
            onRemove={handleRemoveTodo(todo.id)}
            onEdit={() => console.log('Editing...')}
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
