import React, { useState, ChangeEvent } from "react";

import { Todo } from "../types/types";

import "./TodoForm.css";

const DEFAULT_TODO = { name: "", description: "" };

type TodoPanelProps = {
  addTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void;
};

export const TodoForm: React.FC<TodoPanelProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState(DEFAULT_TODO);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onClick = () => {
    addTodo({ name: todo.name, description: todo.description });
    setTodo(DEFAULT_TODO);
  };

  return (
    <div className="form_container">
      <div className="fields__container">
        <div className="field__container">
          <label htmlFor="name">
            <div>name</div>
            <input
              type="text"
              id="name"
              name="name"
              value={todo.name}
              onChange={onChange}
            />
          </label>
        </div>

        <div className="field__container">
          <label htmlFor="description">
            <div>description</div>
            <input
              type="text"
              id="description"
              name="description"
              value={todo.description}
              onChange={onChange}
            />
          </label>
        </div>

        <div className="button__container">
          <button onClick={onClick}>Add</button>
        </div>
      </div>
    </div>
  );
};
