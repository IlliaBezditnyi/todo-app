import React from "react";

import { TodoItem } from "../TodoItem/TodoItem";
import { Todo } from "../types/types";

type TodoListProps = {
  todos: Todo[];
  // addTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void;
  markTodo: (id: Todo["id"]) => void;
  deleteTodo: (id: Todo["id"]) => void;
  moveUp: (id: Todo["id"]) => void;
  moveDown: (id: Todo["id"]) => void;
  showForm: boolean;
  addSubForm: (id: Todo["id"]) => void;
  removeSub: (listId: number, id: number) => void;
  // addSubTodo: (id: Todo["id"]) => void;
};

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  // addTodo,
  markTodo,
  deleteTodo,
  moveUp,
  moveDown,
  showForm,
  addSubForm,
  removeSub
  // addSubTodo
}) => (
  <div>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        todos={todos}
        // addTodo={addTodo}
        markTodo={markTodo}
        deleteTodo={deleteTodo}
        moveUp={moveUp}
        moveDown={moveDown}
        showForm={showForm}
        addSubForm={addSubForm}
        removeSub={removeSub}
        // addSubTodo={addSubTodo}
      />
    ))}
  </div>
);
