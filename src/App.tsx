import { useState } from "react";

import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoSubForm } from "./components/TodoSubForm/TodoSubForm";
import { TodoList } from "./components/TodoList/TodoList";
import { Todo } from "./components/types/types";

import "./styles.css";

const DEFAULT_TODO_LIST: Todo[] = [
  {
    id: 1,
    name: "task 1",
    description: "description 1",
    checked: false,
    subTodo: []
  },
  {
    id: 2,
    name: "task 2",
    description: "description 2",
    checked: false,
    subTodo: []
  },
  {
    id: 3,
    name: "task 3",
    description:
      "so long task description 3 so long task description so long task description so long task description so long task description",
    checked: true,
    subTodo: []
  }
];

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>(DEFAULT_TODO_LIST);
  const todosMovedId = [...todos];
  const [showForm, setShowForm] = useState(false);
  const [currentId, setcurrentId] = useState<number>(1);

  const addTodo = ({
    name,
    description
  }: Omit<Todo, "id" | "checked" | "subTodo">) => {
    setTodos([
      ...todos,
      {
        id: todos[todos.length - 1].id + 1,
        name,
        description,
        checked: false,
        subTodo: []
      }
    ]);
  };

  const deleteTodo = (id: Todo["id"]) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const findIndex = (id: Todo["id"]) => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        return i;
      }
    }
  };

  const moveUp = (id: Todo["id"]) => {
    let indexOfId: any = findIndex(id);
    todosMovedId[indexOfId] = todos[indexOfId - 1];
    todosMovedId[indexOfId - 1] = todos[indexOfId];
    setTodos(todosMovedId);
  };

  const moveDown = (id: Todo["id"]) => {
    let indexOfId: any = findIndex(id);
    todosMovedId[indexOfId] = todos[indexOfId + 1];
    todosMovedId[indexOfId + 1] = todos[indexOfId];
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

  const addSubForm = (id: Todo["id"]) => {
    todos.map((todo) => {
      if (todo.id === id) {
        setShowForm(true);
      }
    });

    setcurrentId(id);
  };

  const addSubTodo = (id: Todo["id"], name: string, description: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          console.log(todo.id);
          todo.subTodo.push({
            id: id * Math.random(),
            name: name,
            description: description
          });
        }

        return todo;
      })
    );

    console.log(todos);
  };

  const removeSub = (listId: any, id: Todo["id"]) => {
    setTodos(todos[listId - 1].subTodo.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1 className="title">Todo app</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        addTodo={addTodo}
        markTodo={markTodo}
        deleteTodo={deleteTodo}
        moveUp={moveUp}
        moveDown={moveDown}
        addSubForm={addSubForm}
        removeSub={removeSub}
      />
      <TodoSubForm
        id={currentId}
        addTodo={addTodo}
        showForm={showForm}
        addSubTodo={addSubTodo}
        setShowForm={setShowForm}
      />
    </div>
  );
};
