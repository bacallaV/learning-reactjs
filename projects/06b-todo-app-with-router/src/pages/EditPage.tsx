import { useNavigate } from "react-router-dom";

// import useTodo from "@app/hooks/useTodo";
import AddTodoForm from "@app/components/AddTodoForm/AddTodoForm";

export function EditPage() {
  // const { addTodo } = useTodo();
  const navigate = useNavigate();

  function editTodo(): void {
    navigate('/');
  }

  function cancelTodoCreation(): void {
    navigate('/');
  }

  return (
    <>
      <AddTodoForm onSubmit={editTodo} onCancel={cancelTodoCreation} />
    </>
  )
}
