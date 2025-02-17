import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

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
};
const TodoContext = createContext<TodoContextType>({
  searchValue: '',
  handleSearch: () => {},
  todos: [],
  status: '',
  handleCompleteTodo: () => () => {},
  handleRemoveTodo: () => () => {},
});

interface TodoProviderProps {
  children: React.ReactNode;
}
export default function TodoProvider({ children }: TodoProviderProps) {
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
    <TodoContext.Provider value={{
      searchValue,
      handleSearch,
      todos,
      status,
      handleCompleteTodo,
      handleRemoveTodo,
    }}>
      { children }
    </TodoContext.Provider>
  )
}

export { TodoContext };