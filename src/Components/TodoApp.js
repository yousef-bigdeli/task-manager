import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (input) => {
    const id =
      todos.reduce((max, item) => (max = max > item.id ? max : item.id), 0) + 1;
    setTodos((prevTodos) => {
      return [...prevTodos, { id, text: input, isCompleted: false }];
    });
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

  const editTodo = (id) => {
    console.log(id)
  };

  //todos
  return (
    <div className="container">
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList
        todos={todos}
        onComplete={completeTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </div>
  );
};

export default TodoApp;
