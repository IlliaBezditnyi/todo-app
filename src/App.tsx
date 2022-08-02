import { useState } from "react";

import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";
import { Todo } from "./components/types/types";

import "./styles.css";

const DEFAULT_TODO_LIST = [
  { id: 1, name: "task 1", description: "description 1", checked: false },
  { id: 2, name: "task 2", description: "description 2", checked: false },
  {
    id: 3,
    name: "task 3",
    description:
      "so long task description 3 so long task description so long task description so long task description so long task description",
    checked: true
  }
];

export const App = () => {
  const [todos, setTodos] = useState(DEFAULT_TODO_LIST);
  const todosMovedId = [...todos];

  const addTodo = ({ name, description }: Omit<Todo, "id" | "checked">) => {
    setTodos([
      ...todos,
      { id: todos[todos.length - 1].id + 1, description, name, checked: false }
    ]);
  };

  const deleteTodo = (id: Todo["id"]) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // const findIndex = (id: Todo["id"]) => {
  //   for (let i = 0; i < todos.length; i++) {
  //     if (todos[i].id === id) {
  //       return i;
  //     }
  //   }
  // };

  const moveUp = (id: Todo["id"]) => {
    let value = 0;

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        value = i;
      }
    }

    // let indexOfId = findIndex(id);
    todosMovedId[value] = todos[value - 1];
    todosMovedId[value - 1] = todos[value];
    setTodos(todosMovedId);
  };

  const moveDown = (id: Todo["id"]) => {
    let value = 0;

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        value = i;
      }
    }

    todosMovedId[value] = todos[value + 1];
    todosMovedId[value + 1] = todos[value];
    setTodos(todosMovedId);
  };

  const markTodo = (id: Todo["id"]) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }

        return todo;
      })
    );
  };

  return (
    <div className="App">
      <h1 className="title">Todo app</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        markTodo={markTodo}
        deleteTodo={deleteTodo}
        moveUp={moveUp}
        moveDown={moveDown}
      />
    </div>
  );
};
