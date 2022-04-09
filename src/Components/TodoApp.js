import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./TodoApp.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (input) => {
    if (input) {
      const id =
        todos.reduce((max, item) => (max = max > item.id ? max : item.id), 0) +
        1;

      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          { id, text: input, isCompleted: false, isEdit: false },
        ];
      });
    } else {
      alert("Please enter a name");
    }
  };

  const completeTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodoHandler = (value, id) => {
    setTodos((prevTodos) =>
      prevTodos.map((item) => {
        return item.id === id ? { ...item, text: value, isEdit: false } : item;
      })
    );
  };

  //todos
  return (
    <div className="container">
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList
        todos={todos}
        onComplete={completeTodo}
        onDelete={deleteTodo}
        editTodo={editTodoHandler}
        setTodos={setTodos}
      />
    </div>
  );
};

export default TodoApp;
