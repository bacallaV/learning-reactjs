import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { Todo } from "../types/todo.type";

type TodoContextType = {
  searchValue: string;
  handleSearch: (searchValue: string) => void;
  todos: {
    label: string;
    completed: boolean;
  }[];
  status: string;
  handleCompleteTodo: (index: number) => () => void;
  handleRemoveTodo: (index: number) => () => void;
  isModalOpen: boolean;
  toggleModal: () => void;
  addTodo: (todo: Todo) => void;
};
const TodoContext = createContext<TodoContextType>({
  searchValue: '',
  handleSearch: () => {},
  todos: [],
  status: '',
  handleCompleteTodo: () => () => {},
  handleRemoveTodo: () => () => {},
  isModalOpen: false,
  toggleModal: () => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addTodo: (_: Todo) => {},
});

interface TodoProviderProps {
  children: React.ReactNode;
}
export default function TodoProvider({ children }: TodoProviderProps) {
  const [searchValue, setSearchValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

    const {
      item: todos,
      setItem: setTodos,
      status,
    } = useLocalStorage<Todo[]>('react-todos', []);

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

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };

    const addTodo = (todo: Todo) => {
      setTodos([...todos, todo]);
    }

  return (
    <TodoContext.Provider value={{
      searchValue,
      handleSearch,
      todos,
      status,
      handleCompleteTodo,
      handleRemoveTodo,
      isModalOpen,
      toggleModal,
      addTodo,
    }}>
      { children }
    </TodoContext.Provider>
  )
}

export { TodoContext };