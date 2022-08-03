import { useState } from "react";

import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoSubForm } from "./components/TodoSubForm/TodoSubForm";
import { TodoList } from "./components/TodoList/TodoList";
import { Todo } from "./components/types/types";

import "./styles.css";

const DEFAULT_TODO_LIST = [
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
  const [currentId, setcurrentId] = useState<any>();

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
          // return { ...todo, subTodo: [{id: 4, name: name, description: description}] };
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

  const removeSub = (listId: number, id: number) => {
    // console.log(todos[listId - 1].subTodo.filter((todo) => todo.id !== id))
    // setTodos(todos[listId - 1].subTodo.filter((todo) => todo.id !== id))
    // setTodos(todos.filter((todo) => todo.subTodo.id !== id))
    return;
  };

  // const onAddSubNote = () => {
  //   const newNotes: [] = [...JSON.parse(JSON.stringify(todos))];
  //   addSubNotes(newNotes);
  //   setTodos(newNotes);
  // };

  // const addSubTodo = (todos: []) => {
  //   for (let todo of todos) {
  //     if (todo.id === id) {
  //       todo.isShowAddSubButton = false;
  //       todo.todos = [
  //         ...todo.notes,
  //         {
  //           id: todos[todos.length - 1].id + 1,
  //           name: name,
  //           notes: [],
  //           isShowAddSubButton: false,
  //           isShowFuncButton: false
  //         }
  //       ];
  //       // setTitle("");
  //       return;
  //     }
  //     if (note.notes.length > 0) {
  //       addSubNotes(note.notes);
  //     }
  //   }
  // };

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
        showForm={showForm}
        addSubForm={addSubForm}
        removeSub={removeSub}
      />
      <TodoSubForm
        addTodo={addTodo}
        showForm={showForm}
        id={currentId}
        addSubTodo={addSubTodo}
        // name={todos[currentId].name}
        // todos={todos}
        // setTodos={setTodos}
      />
    </div>
  );
};
