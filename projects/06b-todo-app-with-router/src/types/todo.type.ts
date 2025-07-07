export type Todo = {
  id: number;
  label: string;
  completed: boolean;
};

export type CreateTodoDTO = Omit<Todo, 'id'>;
