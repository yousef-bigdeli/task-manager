const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div className="todo-wrapper">
      <div
        onClick={onComplete}
        className={`${todo.isCompleted && "complete"} todo-name`}
      >
        {todo.text}
      </div>
      <div className="todo-buttons">
        <button className="edit-btn" onClick={onEdit}>
          Edit
        </button>
        <button className="delete-btn" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
