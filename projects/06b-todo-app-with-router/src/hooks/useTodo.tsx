import { useState } from "react";

import useLocalStorage from "@app/hooks/useLocalStorage";

import type { CreateTodoDTO, Todo } from "@app/types/todo.type";

export default function useTodo() {
  const [searchValue, setSearchValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    item: todos,
    setItem: setTodos,
    status,
    sync,
  } = useLocalStorage<Todo[]>('react-todos', []);

  const handleSearch = (searchValue: string) => {
    setSearchValue(searchValue);
  };

  const handleCompleteTodo = (id: number) =>
    () => {
      const newTodos = [...todos];

      const selectedTodo = newTodos.findIndex((todo) => todo.id === id);
      if (selectedTodo === -1) return;

      newTodos[selectedTodo].completed = !newTodos[selectedTodo].completed;
      setTodos(newTodos);
    };

  const handleRemoveTodo = (id: number) =>
    () => {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const addTodo = (todo: CreateTodoDTO) => {
    setTodos([
      ...todos,
      {
        ...todo,
        id: Date.now(),
      },
    ]);
  }

  const editTodo = (id: number, content: string) => {
    const newTodos = [...todos];

    const searchedTodoIndex = newTodos.findIndex((todo) => todo.id === id);
    if (searchedTodoIndex === -1) {
      return;
    }

    newTodos[searchedTodoIndex].label = content;
    setTodos(newTodos);
  }

  const searchOne = (id: number): Todo | undefined => {
    return todos.find((todo) => todo.id === id);
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
    sync,
    searchOne,
    editTodo,
  };
}
