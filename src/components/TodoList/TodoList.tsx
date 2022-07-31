import React from "react";

import { TodoItem } from "../TodoItem/TodoItem";
import { Todo } from "../types/types";

type TodoListProps = {
  todos: Todo[];
  markTodo: (id: Todo["id"]) => void;
  deleteTodo: (id: Todo["id"]) => void;
};

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  markTodo,
  deleteTodo
}) => (
  <div>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markTodo={markTodo}
        deleteTodo={deleteTodo}
      />
    ))}
  </div>
);
