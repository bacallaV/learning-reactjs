import { useState } from "react";

import useLocalStorage from "@app/hooks/useLocalStorage";

import { Todo } from "@app/types/todo.type";

export default function useTodo() {
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

  return {
    searchValue,
    handleSearch,
    todos,
    status,
    handleCompleteTodo,
    handleRemoveTodo,
    isModalOpen,
    toggleModal,
    addTodo,
  };
}