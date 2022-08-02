import React from "react";

import { Todo } from "../types/types";

import "./TodoItem.css";

type TodoItemProps = {
  todo: Todo;
  markTodo: (id: Todo["id"]) => void;
  deleteTodo: (id: Todo["id"]) => void;
  moveUp: (id: Todo["id"]) => void;
  moveDown: (id: Todo["id"]) => void;
};

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  markTodo,
  deleteTodo,
  moveUp,
  moveDown
}) => {
  console.log(todo);

  return (
    <div className="todoItem_container">
      <div>
        <div
          className="todoItem_title"
          style={{
            opacity: todo.checked ? 0.5 : 1,
            textDecoration: todo.checked ? "line-through" : "none"
          }}
          onClick={() => markTodo(todo.id)}
        >
          {todo.name}
        </div>

        <div className="todoItem_description">{todo.description}</div>

        <div className="todoItem_button">
          <button onClick={() => moveUp(todo.id)}>UP</button>
          <button onClick={() => moveDown(todo.id)}>DOWN</button>
          <button onClick={() => deleteTodo(todo.id)}>DELETE</button>
        </div>
      </div>
    </div>
  );
};
