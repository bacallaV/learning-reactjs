import { useNavigate } from "react-router-dom";

import useTodo from "@app/hooks/useTodo";
import AddTodoForm from "@app/components/AddTodoForm/AddTodoForm";

export function AddPage() {
  const { addTodo } = useTodo();
  const navigate = useNavigate();

  function createTodo(content: string): void {
    addTodo({
      label: content,
      completed: false,
    });

    navigate('/');
  }

  function cancelTodoCreation(): void {
    navigate('/');
  }

  return (
    <>
      <AddTodoForm onSubmit={createTodo} onCancel={cancelTodoCreation} />
    </>
  )
}
