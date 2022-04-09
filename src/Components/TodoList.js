import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({ todos, onComplete, onDelete, editTodo, setTodos }) => {
  const renderTodos = () => {
    return todos.length === 0 ? (
      <p>Add some todos</p>
    ) : (
      <div>
        {todos.map((item) => {
          if (item.isEdit) {
            return (
              <TodoForm
                key={item.id}
                initialValue={item.text}
                edit={item}
                addTodoHandler={editTodo}
              />
            );
          }
          return (
            <Todo
              key={item.id}
              todo={item}
              onComplete={() => onComplete(item.id)}
              onDelete={() => onDelete(item.id)}
              onEdit={() =>
                setTodos((prevTodos) =>
                  prevTodos.map((todo) => {
                    return todo.id === item.id
                      ? { ...todo, isEdit: true }
                      : todo;
                  })
                )
              }
            />
          );
        })}
      </div>
    );
  };

  return renderTodos();
};

export default TodoList;
