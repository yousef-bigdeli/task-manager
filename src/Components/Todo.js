const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div>
      <div onClick={onComplete}>{todo.text}</div>
      <div>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
