import React, { useState, ChangeEvent } from "react";

import { App } from "../../App";

import { Todo } from "../types/types";

const DEFAULT_TODO = { name: "", description: "" };

type TodoSubFormProps = {
  id: number;
  addTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void;
  showForm: boolean;
  addSubTodo: (id: Todo["id"], name: string, description: string) => void;
  // name: string;
};

export const TodoSubForm: React.FC<TodoSubFormProps> = ({
  id,
  addTodo,
  showForm,
  addSubTodo
}) => {
  const [todo, setTodo] = useState(DEFAULT_TODO);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onClick = () => {
    addSubTodo(id, todo.name, todo.description);
    setTodo(DEFAULT_TODO);
  };

  return (
    <div className="form_container">
      {showForm === true ? (
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

          <button className="button" onClick={() => onClick()}>
            Add
          </button>

          {/* <div className="button__container">
          <button onClick={onClick}>Add</button>
        </div> */}
        </div>
      ) : null}
    </div>
  );
};
