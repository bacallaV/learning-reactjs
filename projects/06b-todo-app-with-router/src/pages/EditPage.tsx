import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useTodo from "@app/hooks/useTodo";
import AddTodoForm from "@app/components/AddTodoForm/AddTodoForm";
import type { Todo } from "@app/types/todo.type";

export function EditPage() {
  const { editTodo, searchOne, status } = useTodo();
  const navigate = useNavigate();
  const { id } = useParams();

  const [todo, setTodo] = useState<Todo | undefined>(undefined);

  useEffect(() => {
    if (status === 'initial' || status === 'loading') {
      return;
    }

    if (status === 'failed') {
      return;
    }

    setTodo(searchOne(Number(id)));
  }, [status, id, searchOne]);

  function editCurrentTodo(label: string): void {
    editTodo(Number(id), label);
    navigate('/');
  }

  function cancelTodoCreation(): void {
    navigate('/');
  }

  if (status === 'initial' || status === 'loading') {
    return (
      <p>Cargando...</p>
    );
  }

  if (status === 'failed' || !todo) {
    return (
      <p>Ocurrió un error 🤯</p>
    );
  }

  return (
    <>
      <AddTodoForm onSubmit={editCurrentTodo} onCancel={cancelTodoCreation} content={todo.label} />
    </>
  )
}
