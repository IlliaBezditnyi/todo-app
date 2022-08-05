import React, { useState, ChangeEvent } from "react";

import { Todo } from "../types/types";

import "../TodoForm/TodoForm.css";
import "./TodoSubForm.css";

const DEFAULT_TODO = { name: "", description: "" };

type TodoSubFormProps = {
  id: number;
  addTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void;
  showForm: boolean;
  addSubTodo: (id: Todo["id"], name: string, description: string) => void;
  setShowForm: any;
};

export const TodoSubForm: React.FC<TodoSubFormProps> = ({
  id,
  addSubTodo,
  showForm,
  setShowForm
}) => {
  const [todo, setTodo] = useState(DEFAULT_TODO);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onClick = () => {
    addSubTodo(id, todo.name, todo.description);
    setTodo(DEFAULT_TODO);
    setShowForm(false);
  };

  return (
    <div>
      {showForm === true ? (
        <>
          <h1 className="form_title">Add your sub list</h1>
          <div className="form_container">
            <div className="fields_container">
              <div className="field_container">
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

              <div className="field_container">
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
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};
