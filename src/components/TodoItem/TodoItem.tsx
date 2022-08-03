import React from "react";

import { Todo } from "../types/types";

import "./TodoItem.css";

type TodoItemProps = {
  todo: Todo;
  todos: Todo[];
  addTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void;
  markTodo: (id: Todo["id"]) => void;
  deleteTodo: (id: Todo["id"]) => void;
  moveUp: (id: Todo["id"]) => void;
  moveDown: (id: Todo["id"]) => void;
  addSubForm: (id: Todo["id"]) => void;
  removeSub: (listId: number, id: number) => void;
};

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  todos,
  markTodo,
  deleteTodo,
  moveUp,
  moveDown,
  addSubForm,
  removeSub
}) => {
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
          <button onClick={() => addSubForm(todo.id)}>ADD SUB</button>
          {todo !== todos[0] && (
            <button onClick={() => moveUp(todo.id)}>UP</button>
          )}

          {todo !== todos[todos.length - 1] && (
            <button onClick={() => moveDown(todo.id)}>DOWN</button>
          )}

          <button onClick={() => deleteTodo(todo.id)}>DELETE</button>
        </div>

        <div className="subTodo_container">
          {todo.subTodo.map((el) => (
            <div className="subTodo_wrapper">
              <div className="subTodo_title">{el.name}</div>

              <div className="subTodo_description">{el.description}</div>

              <div className="subTodo_button">
                <button onClick={() => removeSub(todo.id, el.id)}>
                  REMOVE SUB
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
