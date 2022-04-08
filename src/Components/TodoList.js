import Todo from "./Todo";

const TodoList = ({ todos, onComplete, onDelete, onEdit }) => {
  return todos.length === 0 ? (
    <p>Add some todos</p>
  ) : (
    <div>
      {todos.map((item) => (
        <Todo
          key={item.id}
          todo={item}
          onComplete={() => onComplete(item.id)}
          onDelete={() => onDelete(item.id)}
          onEdit={() => onEdit(item.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
